"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

interface AccordionItemProps {
  pregunta: string;
  respuesta: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ pregunta, respuesta, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-outline-variant last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:text-primary"
      >
        <span className="text-body-lg font-semibold text-on-surface">{pregunta}</span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-on-surface-variant transition-transform duration-300",
            isOpen && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      <div
        className={cn(
          "transition-all duration-300",
          isOpen ? "max-h-[600px] pb-6 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <p className="px-6 text-body-md text-on-surface-variant">{respuesta}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: FAQ[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const base = allowMultiple ? new Set(prev) : new Set<number>();
      if (prev.has(index)) {
        base.delete(index);
      } else {
        base.add(index);
      }
      return base;
    });
  };

  return (
    <div
      className={cn(
        "rounded-[16px] border border-outline-variant bg-white",
        className,
      )}
    >
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          pregunta={item.pregunta}
          respuesta={item.respuesta}
          isOpen={openIndexes.has(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
