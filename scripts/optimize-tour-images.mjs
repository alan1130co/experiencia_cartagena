#!/usr/bin/env node
// Prepara fotos de un tour nuevo para /public/images/tours/.
// Uso: node scripts/optimize-tour-images.mjs --slug volcan-del-totumo --input ./raw-fotos
//
// Lee todas las imágenes de --input, ordenadas alfabéticamente por nombre de
// archivo. La primera se exporta como "{slug}-main.webp" y el resto como
// "{slug}-1.webp", "{slug}-2.webp", etc. Nombrá tus archivos de entrada para
// que el orden alfabético sea el orden que querés (ej: 0-main.jpg, 1.jpg,
// 2.jpg...). Cada imagen se recorta a 4:3 y se redimensiona a 1600x1200.

import { readdir, mkdir } from "node:fs/promises";
import { extname, join, basename } from "node:path";
import sharp from "sharp";

const VALID_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const OUTPUT_WIDTH = 1600;
const OUTPUT_HEIGHT = 1200; // 4:3
const OUTPUT_DIR = "public/images/tours";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, "");
    args[key] = argv[i + 1];
  }
  return args;
}

async function main() {
  const { slug, input, output = OUTPUT_DIR } = parseArgs(process.argv.slice(2));

  if (!slug || !input) {
    console.error(
      "Uso: node scripts/optimize-tour-images.mjs --slug <slug-del-tour> --input <carpeta-con-fotos>",
    );
    process.exit(1);
  }

  const entries = await readdir(input, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && VALID_EXT.has(extname(e.name).toLowerCase()))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, "en"));

  if (files.length === 0) {
    console.error(`No se encontraron imágenes (.jpg/.jpeg/.png/.webp) en ${input}`);
    process.exit(1);
  }

  await mkdir(output, { recursive: true });

  console.log(`Procesando ${files.length} foto(s) para "${slug}":\n`);

  for (let i = 0; i < files.length; i++) {
    const srcPath = join(input, files[i]);
    const outName = i === 0 ? `${slug}-main.webp` : `${slug}-${i}.webp`;
    const outPath = join(output, outName);

    await sharp(srcPath)
      .resize(OUTPUT_WIDTH, OUTPUT_HEIGHT, { fit: "cover", position: "attention" })
      .webp({ quality: 82 })
      .toFile(outPath);

    console.log(`  ${basename(srcPath)}  ->  ${outPath}`);
  }

  console.log(`\nListo. ${files.length} imagen(es) en ${output}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
