import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function CodeLine({
  n,
  children,
  indent = 0,
  runHref,
  runLabel = "Run",
}: {
  n: number;
  children: ReactNode;
  indent?: number;
  /** VS Code-style run action — whole line + play icon open this href */
  runHref?: string;
  runLabel?: string;
}) {
  const inner = (
    <>
      {runHref ? (
        <span className="flex w-7 shrink-0 items-center justify-center pr-1">
          <Play
            className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400 opacity-90 group-hover:opacity-100"
            aria-hidden
          />
        </span>
      ) : null}
      <span className="w-10 shrink-0 select-none pr-3 text-right text-syntax-comment/60">
        {n}
      </span>
      <span className="flex-1 whitespace-pre-wrap" style={{ paddingLeft: indent * 16 }}>
        {children}
      </span>
    </>
  );

  const rowClass =
    "group flex font-mono text-[13px] leading-6 hover:bg-foreground/[0.04] transition-colors";

  if (runHref) {
    return (
      <motion.a
        href={runHref}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: "easeOut", delay: Math.min(n * 0.015, 0.35) }}
        className={`${rowClass} cursor-pointer no-underline`}
        aria-label={`${runLabel} — open email`}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: "easeOut", delay: Math.min(n * 0.015, 0.35) }}
      className={rowClass}
    >
      {inner}
    </motion.div>
  );
}

export function K({ children }: { children: ReactNode }) {
  return <span className="text-syntax-keyword">{children}</span>;
}
/** Dart single-quoted string literal */
export function S({ children }: { children: ReactNode }) {
  return <span className="text-syntax-string">&apos;{children}&apos;</span>;
}
export function Fn({ children }: { children: ReactNode }) {
  return <span className="text-syntax-function">{children}</span>;
}
export function T({ children }: { children: ReactNode }) {
  return <span className="text-syntax-type">{children}</span>;
}
export function V({ children }: { children: ReactNode }) {
  return <span className="text-syntax-variable">{children}</span>;
}
export function C({ children }: { children: ReactNode }) {
  return <span className="text-syntax-comment">{children}</span>;
}
export function N({ children }: { children: ReactNode }) {
  return <span className="text-syntax-number">{children}</span>;
}
export function P({ children }: { children: ReactNode }) {
  return <span className="text-syntax-punct">{children}</span>;
}