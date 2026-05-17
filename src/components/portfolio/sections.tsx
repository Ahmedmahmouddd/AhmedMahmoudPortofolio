import { CodeLine, K, S, Fn, T, V, C, P } from "./CodeBlock";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS, EDUCATION } from "./data";

function dartClassName(company: string, project?: string) {
  const raw = company + (project ?? "");
  return raw.replace(/[^a-zA-Z0-9]/g, "") || "Experience";
}

/* ----------------------------- about.dart ----------------------------- */
export function AboutSection() {
  let n = 0;
  const L = () => ++n;
  return (
    <div className="py-4">
      {PROFILE.aboutLines.map((line) => (
        <CodeLine key={line} n={L()}>
          <C>/// {line}</C>
        </CodeLine>
      ))}
      <CodeLine n={L()}>{" "}</CodeLine>
      <CodeLine n={L()}>
        <K>final</K> <V>ahmed</V> <P>=</P> <P>{"<"}</P>
        <T>String</T>
        <P>,</P> <T>dynamic</T>
        <P>{">"}</P> <P>{"{"}</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>name</S>
        <P>:</P> <S>{PROFILE.name}</S>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>role</S>
        <P>:</P> <S>{PROFILE.role}</S>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>roleDescription</S>
        <P>:</P> <S>{PROFILE.roleLine}</S>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>location</S>
        <P>:</P> <S>{PROFILE.location}</S>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>focus</S>
        <P>:</P> <P>[</P>
        {PROFILE.focus.map((f, i) => (
          <span key={f}>
            <S>{f}</S>
            {i < PROFILE.focus.length - 1 ? <P>,</P> : null}
          </span>
        ))}
        <P>],</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>status</S>
        <P>:</P> <S>Available for opportunities</S>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>available</S>
        <P>:</P> <K>true</K>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()}>
        <P>{"};"}</P>
      </CodeLine>
    </div>
  );
}

/* ----------------------------- skills.dart ----------------------------- */
export function SkillsSection() {
  let n = 0;
  const L = () => ++n;
  const groups = Object.entries(SKILLS) as [keyof typeof SKILLS, readonly string[]][];
  return (
    <div className="py-4">
      <CodeLine n={L()}>
        <K>final</K> <V>skills</V> <P>=</P> <P>{"<"}</P>
        <T>String</T>
        <P>,</P> <T>List</T>
        <P>{"<"}</P>
        <T>String</T>
        <P>{">"}</P>
        <P>{">"}</P> <P>{"{"}</P>
      </CodeLine>
      {groups.map(([group, list], gi) => (
        <div key={group}>
          <CodeLine n={L()} indent={1}>
            <S>{group}</S>
            <P>:</P> <P>[</P>
          </CodeLine>
          {list.map((s, i) => (
            <CodeLine key={s} n={L()} indent={2}>
              <S>{s}</S>
              {i < list.length - 1 ? <P>,</P> : null}
            </CodeLine>
          ))}
          <CodeLine n={L()} indent={1}>
            <P>]</P>
            {gi < groups.length - 1 ? <P>,</P> : null}
          </CodeLine>
        </div>
      ))}
      <CodeLine n={L()}>
        <P>{"};"}</P>
      </CodeLine>
    </div>
  );
}

/* --------------------------- experience.dart -------------------------- */
export function ExperienceSection() {
  let n = 0;
  const L = () => ++n;
  return (
    <div className="py-4">
      {EXPERIENCE.map((e, idx) => {
        const cls = dartClassName(e.company, e.project);
        return (
          <div key={cls} className={idx > 0 ? "mt-3" : ""}>
            <CodeLine n={L()}>
              <C>// {e.period}</C>
            </CodeLine>
            <CodeLine n={L()}>
              <K>class</K> <T>{cls}</T> <P>{"{"}</P>
            </CodeLine>
            <CodeLine n={L()} indent={1}>
              <K>final</K> <T>String</T> <V>company</V> <P>=</P> <S>{e.company}</S>
              <P>;</P>
            </CodeLine>
            <CodeLine n={L()} indent={1}>
              <K>final</K> <T>String</T> <V>role</V> <P>=</P> <S>{e.role}</S>
              <P>;</P>
            </CodeLine>
            {e.project ? (
              <CodeLine n={L()} indent={1}>
                <K>final</K> <T>String</T> <V>project</V> <P>=</P> <S>{e.project}</S>
                <P>;</P>
              </CodeLine>
            ) : null}
            {e.location ? (
              <CodeLine n={L()} indent={1}>
                <K>final</K> <T>String</T> <V>location</V> <P>=</P> <S>{e.location}</S>
                <P>;</P>
              </CodeLine>
            ) : null}
            <CodeLine n={L()} indent={1}>
              <K>final</K> <T>List</T>
              <P>{"<"}</P>
              <T>String</T>
              <P>{">"}</P> <V>impact</V> <P>=</P> <P>[</P>
            </CodeLine>
            {e.impact.map((it, i) => (
              <CodeLine key={it} n={L()} indent={2}>
                <S>{it}</S>
                {i < e.impact.length - 1 ? <P>,</P> : null}
              </CodeLine>
            ))}
            <CodeLine n={L()} indent={1}>
              <P>];</P>
            </CodeLine>
            <CodeLine n={L()}>
              <P>{"}"}</P>
            </CodeLine>
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------- projects.dart -------------------------- */
export function ProjectsSection() {
  let n = 0;
  const L = () => ++n;
  return (
    <div className="py-4">
      <CodeLine n={L()}>
        <K>final</K> <T>List</T>
        <P>{"<"}</P>
        <T>Map</T>
        <P>{"<"}</P>
        <T>String</T>
        <P>,</P> <T>dynamic</T>
        <P>{">"}</P>
        <P>{">"}</P> <V>projects</V> <P>=</P> <P>[</P>
      </CodeLine>
      {PROJECTS.map((p, idx) => {
        const featured = "featured" in p && p.featured;
        return (
        <div key={p.path} className={idx > 0 ? "mt-3" : ""}>
          {featured ? (
            <CodeLine n={L()} indent={1}>
              <C>// flagship · real-time · production-scale</C>
            </CodeLine>
          ) : null}
          <CodeLine n={L()} indent={1}>
            <P>{"{"}</P>
          </CodeLine>
          <CodeLine n={L()} indent={2}>
            <S>path</S>
            <P>:</P> <S>{p.path}</S>
            <P>,</P>
          </CodeLine>
          {"summary" in p && p.summary ? (
            <CodeLine n={L()} indent={2}>
              <S>summary</S>
              <P>:</P> <S>{p.summary}</S>
              <P>,</P>
            </CodeLine>
          ) : null}
          {"architecture" in p && p.architecture ? (
            <CodeLine n={L()} indent={2}>
              <S>architecture</S>
              <P>:</P> <S>{p.architecture}</S>
              <P>,</P>
            </CodeLine>
          ) : null}
          <CodeLine n={L()} indent={2}>
            <S>stack</S>
            <P>:</P> <P>[</P>
          </CodeLine>
          {p.stack.map((s, i) => (
            <CodeLine key={s} n={L()} indent={3}>
              <S>{s}</S>
              {i < p.stack.length - 1 ? <P>,</P> : null}
            </CodeLine>
          ))}
          <CodeLine n={L()} indent={2}>
            <P>],</P>
          </CodeLine>
          <CodeLine n={L()} indent={2}>
            <S>highlights</S>
            <P>:</P> <P>[</P>
          </CodeLine>
          {p.items.map((it, i) => (
            <CodeLine key={it} n={L()} indent={3}>
              <S>{it}</S>
              {i < p.items.length - 1 ? <P>,</P> : null}
            </CodeLine>
          ))}
          <CodeLine n={L()} indent={2}>
            <P>],</P>
          </CodeLine>
          <CodeLine n={L()} indent={1}>
            <P>{"},"}</P>
          </CodeLine>
        </div>
        );
      })}
      <CodeLine n={L()}>
        <P>];</P>
      </CodeLine>
    </div>
  );
}

/* --------------------------- education.dart --------------------------- */
export function EducationSection() {
  let n = 0;
  const L = () => ++n;
  return (
    <div className="py-4">
      <CodeLine n={L()}>
        <K>final</K> <T>List</T>
        <P>{"<"}</P>
        <T>String</T>
        <P>{">"}</P> <V>educationLog</V> <P>=</P> <P>[</P>
      </CodeLine>
      {EDUCATION.map((e, i) => (
        <CodeLine key={e.from + e.to} n={L()} indent={1}>
          <S>
            {e.from} → {e.to}
          </S>
          {i < EDUCATION.length - 1 ? <P>,</P> : null}
        </CodeLine>
      ))}
      <CodeLine n={L()}>
        <P>];</P>
      </CodeLine>
    </div>
  );
}

/* ----------------------------- contact.dart --------------------------- */
export function ContactSection() {
  let n = 0;
  const L = () => ++n;
  return (
    <div className="py-4">
      <CodeLine n={L()}>
        <K>final</K> <V>contact</V> <P>=</P> <P>{"<"}</P>
        <T>String</T>
        <P>,</P> <T>String</T>
        <P>{">"}</P> <P>{"{"}</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>email</S>
        <P>:</P>{" "}
        <a
          className="text-syntax-string underline-offset-2 hover:underline"
          href={`mailto:${PROFILE.email}`}
        >
          &apos;{PROFILE.email}&apos;
        </a>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>phone</S>
        <P>:</P>{" "}
        <a
          className="text-syntax-string underline-offset-2 hover:underline"
          href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
        >
          &apos;{PROFILE.phone}&apos;
        </a>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>github</S>
        <P>:</P>{" "}
        <a
          className="text-syntax-string underline-offset-2 hover:underline"
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
        >
          &apos;{PROFILE.github}&apos;
        </a>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>linkedin</S>
        <P>:</P>{" "}
        <a
          className="text-syntax-string underline-offset-2 hover:underline"
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          &apos;{PROFILE.linkedin}&apos;
        </a>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()} indent={1}>
        <S>location</S>
        <P>:</P> <S>{PROFILE.location}</S>
        <P>,</P>
      </CodeLine>
      <CodeLine n={L()}>
        <P>{"};"}</P>
      </CodeLine>
      <CodeLine n={L()}>{" "}</CodeLine>
      <CodeLine n={L()}>
        <K>void</K> <Fn>main</Fn>
        <P>()</P> <P>{"{"}</P>
      </CodeLine>
      <CodeLine
        n={L()}
        indent={1}
        runHref={`mailto:${PROFILE.email}`}
        runLabel="Run sendEmail"
      >
        <Fn>sendEmail</Fn>
        <P>(</P>
        <V>contact</V>
        <P>[</P>
        <S>email</S>
        <P>]!</P>
        <P>);</P> <C>// let&apos;s build something</C>
      </CodeLine>
      <CodeLine n={L()}>
        <P>{"}"}</P>
      </CodeLine>
    </div>
  );
}

export const SECTION_RENDERERS = {
  about: AboutSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  education: EducationSection,
  contact: ContactSection,
} as const;
