import {
  PenTool,
  Layers,
  MonitorPlay,
  Palette,
  Sparkles,
  Layout,
  ImageIcon,
  Wand2,
  Type,
  Brush,
  Shapes,
} from "lucide-react";

const skills = [
  { label: "UI/UX Design", icon: Layout },
  { label: "Visual Design", icon: Palette },
  { label: "Motion Graphics", icon: MonitorPlay },
  { label: "Identity Design", icon: Layers },
  { label: "Illustration", icon: PenTool },
  { label: "Presentation Design", icon: Sparkles },
  { label: "Brand Strategy", icon: Wand2 },
  { label: "Figma", icon: Shapes },
  { label: "Photoshop", icon: ImageIcon },
  { label: "Illustrator", icon: Brush },
  { label: "Typography", icon: Type },
];

function SkillTrack({
  reverse = false,
  items,
}: {
  reverse?: boolean;
  items: typeof skills;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-row">
      <div
        className={`marquee-track flex w-max items-center gap-4 sm:gap-5 ${
          reverse ? "marquee-track-reverse" : ""
        }`}
      >
        {doubled.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.label}-${index}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-[#1E212B]/80 px-5 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-[#4A90E2]/40 hover:bg-[#1E212B] sm:px-6 sm:py-3.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A90E2]/10 text-[#4A90E2]">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="heading-display whitespace-nowrap text-sm text-[#F8FAFC] sm:text-base">
                {skill.label}
              </span>
              <span className="text-[#00D4FF]/60 text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const SkillsSlider = () => {
  const rowTwo = [...skills.slice(5), ...skills.slice(0, 5)];

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative overflow-hidden border-y border-white/5 bg-[#12141D] py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#12141D] to-transparent sm:w-24 lg:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#12141D] to-transparent sm:w-24 lg:w-32" />

      <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
        <div className="h-px w-8 bg-[#4A90E2]/50 sm:w-12" />
        <span className="label-caps text-[#00D4FF]">Core Skills</span>
        <div className="h-px w-8 bg-[#4A90E2]/50 sm:w-12" />
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        <SkillTrack items={skills} />
        <SkillTrack items={rowTwo} reverse />
      </div>
    </section>
  );
};

export default SkillsSlider;
