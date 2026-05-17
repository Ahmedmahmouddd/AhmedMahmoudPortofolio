import { useEffect, useMemo, useState } from "react";
import {
  Files,
  Search,
  GitBranch,
  Settings,
  User,
  Github,
  Linkedin,
  Mail,
  X,
  ChevronRight,
  ChevronDown,
  FileCode2,
  Circle,
} from "lucide-react";
import { SECTIONS, type SectionId, PROFILE, TERMINAL_USER } from "./data";
import { SECTION_RENDERERS } from "./sections";
import { AnimatePresence, motion } from "framer-motion";

const ORDER: SectionId[] = SECTIONS.map((s) => s.id) as SectionId[];
const DEFAULT_OPEN_TABS: SectionId[] = ORDER;

export function Workspace() {
  const [openTabs, setOpenTabs] = useState<SectionId[]>(DEFAULT_OPEN_TABS);
  const [active, setActive] = useState<SectionId>("about");
  const [activityItem, setActivityItem] = useState<"files" | "search" | "git" | "user">("files");
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    tick();
    const i = setInterval(tick, 30_000);
    return () => clearInterval(i);
  }, []);

  const openFile = (id: SectionId) => {
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActive(id);
  };

  const closeTab = (id: SectionId) => {
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== id);
      if (active === id && next.length) setActive(next[next.length - 1]);
      return next;
    });
  };

  const Renderer = openTabs.includes(active) ? SECTION_RENDERERS[active] : null;

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background font-mono text-foreground">
      {/* Title bar */}
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-border bg-activitybar px-3 text-[12px]">
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 text-muted-foreground">
            ahmed-mahmoud — portfolio
          </span>
        </div>
        <div className="hidden items-center gap-3 text-muted-foreground sm:flex">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            <Github className="h-3.5 w-3.5" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-foreground">
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Body: activity bar + sidebar + editor */}
      <div className="flex min-h-0 flex-1">
        {/* Activity bar */}
        <div className="flex w-11 shrink-0 flex-col items-center border-r border-border bg-activitybar py-2 text-muted-foreground sm:w-12">
          {[
            {
              Icon: Files,
              key: "files" as const,
              label: "Explorer",
              onClick: () => setActivityItem("files"),
            },
            {
              Icon: Search,
              key: "search" as const,
              label: "Open skills.dart",
              onClick: () => {
                setActivityItem("search");
                openFile("skills");
              },
            },
            {
              Icon: GitBranch,
              key: "git" as const,
              label: "Source control",
              onClick: () => setActivityItem("git"),
            },
            {
              Icon: User,
              key: "user" as const,
              label: "Open contact.dart",
              onClick: () => {
                setActivityItem("user");
                openFile("contact");
              },
            },
          ].map(({ Icon, key, label, onClick }) => {
            const isActive = activityItem === key;
            return (
              <button
                key={key}
                type="button"
                onClick={onClick}
                aria-label={label}
                className={`relative my-0.5 flex h-10 w-10 items-center justify-center hover:text-foreground ${isActive ? "text-foreground" : ""
                  }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-[2px] bg-foreground" />
                )}
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
          <div className="mt-auto">
            <button className="flex h-10 w-10 items-center justify-center hover:text-foreground">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Sidebar / Explorer — always open */}
        <aside className="flex w-44 shrink-0 flex-col border-r border-border bg-sidebar-bg sm:w-56 md:w-64">
          <div className="flex h-8 items-center px-3 text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>Explorer</span>
          </div>

          <div className="flex-1 overflow-auto px-2 text-[13px]">
            <FolderRow label="AHMED-MAHMOUD" alwaysOpen>
              <FolderRow label="lib" alwaysOpen>
                {SECTIONS.map((s) => (
                  <FileRow
                    key={s.id}
                    label={s.file}
                    active={active === s.id && openTabs.includes(s.id)}
                    onClick={() => {
                      setActivityItem("files");
                      openFile(s.id);
                    }}
                  />
                ))}
              </FolderRow>
              <FileRow label="README.md" muted />
              <FileRow label="pubspec.yaml" muted />
              <FileRow label="analysis_options.yaml" muted />
            </FolderRow>
          </div>

          <div className="mt-auto border-t border-border px-3 py-3 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400" />
              <span>Available for opportunities</span>
            </div>
            <div className="mt-1 truncate">{PROFILE.location}</div>
          </div>
        </aside>

        {/* Editor area */}
        <main className="flex min-w-0 flex-1 flex-col">
          {/* Tabs */}
          <div className="flex h-9 shrink-0 items-center overflow-x-auto border-b border-border bg-activitybar/60">
            {openTabs.map((id) => {
              const meta = SECTIONS.find((s) => s.id === id)!;
              const isActive = id === active;
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`group relative flex h-full shrink-0 items-center gap-2 border-r border-border px-3 text-[12px] ${isActive
                    ? "bg-tab-active text-foreground"
                    : "bg-tab-inactive text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute left-0 right-0 top-0 h-[1px] bg-primary"
                    />
                  )}
                  <button
                    onClick={() => setActive(id)}
                    className="flex items-center gap-2"
                  >
                    <FileCode2 className="h-3.5 w-3.5 text-syntax-keyword" />
                    {meta.file}
                  </button>
                  <button
                    onClick={() => closeTab(id)}
                    className="opacity-60 hover:opacity-100"
                    aria-label={`Close ${meta.file}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Breadcrumb */}
          <div className="hidden h-7 shrink-0 items-center gap-1 border-b border-border px-4 text-[11px] text-muted-foreground sm:flex">
            <span>lib</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">
              {openTabs.includes(active)
                ? SECTIONS.find((s) => s.id === active)?.file
                : "—"}
            </span>
          </div>

          {/* Editor + terminal */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <div className="px-2 sm:px-4">
                    {Renderer ? (
                      <Renderer />
                    ) : (
                      <p className="py-8 text-center text-sm text-muted-foreground">
                        Open a file from the explorer
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Terminal */}
            <TerminalPanel open={terminalOpen} onToggle={() => setTerminalOpen((v) => !v)} />
          </div>
        </main>
      </div>

      {/* Status bar */}
      <div className="flex h-6 shrink-0 items-center justify-between bg-statusbar px-3 text-[11px] text-white">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <GitBranch className="h-3 w-3" /> main
          </span>
          <span>0 ⚠ · 0 ⛔</span>
          <span className="hidden sm:inline">Dart · Flutter</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">LF</span>
          <span>Ln {ORDER.indexOf(active) + 1}, Col 1</span>
          <span>{clock}</span>
        </div>
      </div>
    </div>
  );
}

function FolderRow({
  label,
  defaultOpen,
  alwaysOpen,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  alwaysOpen?: boolean;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(!!defaultOpen || !!alwaysOpen);
  const isOpen = alwaysOpen || open;
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          if (!alwaysOpen) setOpen((v) => !v);
        }}
        className={`flex w-full items-center gap-1 rounded-sm px-1 py-0.5 text-left text-foreground/90 ${
          alwaysOpen ? "cursor-default" : "hover:bg-sidebar-accent"
        }`}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
        )}
        <span className="text-syntax-variable">{label}</span>
      </button>
      {isOpen && <div className="ml-3 border-l border-border pl-2">{children}</div>}
    </div>
  );
}

function FileRow({
  label,
  active,
  muted,
  onClick,
}: {
  label: string;
  active?: boolean;
  muted?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 rounded-sm px-2 py-0.5 text-left hover:bg-sidebar-accent ${active ? "bg-sidebar-accent text-foreground" : muted ? "text-muted-foreground" : "text-foreground/85"
        }`}
    >
      <FileCode2 className={`h-3.5 w-3.5 ${muted ? "text-muted-foreground" : "text-syntax-keyword"}`} />
      <span>{label}</span>
    </button>
  );
}

type TerminalLine =
  | { type: "cmd"; text: string }
  | { type: "out"; text: string }
  | { type: "ok"; text: string };

function TerminalPanel({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const logs = useMemo<TerminalLine[]>(
    () => [
      { type: "cmd", text: "flutter run" },
      { type: "out", text: "Launching lib/main.dart on Chrome in debug mode..." },
      { type: "ok", text: "Built build/web (0.4s)" },
      { type: "out", text: "Flutter run key commands." },
    ],
    [],
  );

  return (
    <div className="shrink-0 border-t border-border bg-terminal">
      <div className="flex h-8 items-center justify-between border-b border-border px-3 text-[11px] uppercase tracking-wider text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="text-foreground">Terminal</span>
          <span>Problems</span>
          <span>Output</span>
        </div>
        <button onClick={onToggle} className="hover:text-foreground" aria-label="Toggle terminal">
          {open ? <X className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
        </button>
      </div>
      {open && (
        <div className="max-h-[5.5rem] overflow-hidden px-3 py-1.5 font-mono text-[11px] leading-[1.35rem]">
          {logs.map((l, i) => (
            <div key={i} className="truncate">
              {l.type === "cmd" ? (
                <>
                  <span className="text-syntax-function">{TERMINAL_USER}</span>
                  <span className="text-foreground/60">:</span>
                  <span className="text-syntax-keyword">~</span>
                  <span className="text-foreground/60">$ </span>
                  <span className="text-foreground">{l.text}</span>
                </>
              ) : l.type === "ok" ? (
                <span className="text-emerald-400/90">
                  <span className="text-emerald-400">✓</span> {l.text}
                </span>
              ) : (
                <span className="text-muted-foreground">{l.text}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}