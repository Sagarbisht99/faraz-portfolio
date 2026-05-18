"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { HiArrowUpRight, HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type ProjectCategory =
  | "Logo Design"
  | "Thumbnails"
  | "Abroad Posts"
  | "Social Media"
  | "Typography";

type Project = {
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  year: string;
};

const categoryTheme: Record<
  ProjectCategory,
  {
    hoverBorder: string;
    hoverTitle: string;
    glow: string;
    badge: string;
    badgeLabel: string;
    sectionAccent: string;
    sectionText: string;
  }
> = {
  "Logo Design": {
    hoverBorder: "hover:border-[#4A90E2]/30",
    hoverTitle: "group-hover:text-[#4A90E2]",
    glow: "bg-[#4A90E2]/5 group-hover:bg-[#4A90E2]/15",
    badge: "text-[#4A90E2]",
    badgeLabel: "Logo",
    sectionAccent: "bg-[#4A90E2]",
    sectionText: "text-[#4A90E2]",
  },
  Thumbnails: {
    hoverBorder: "hover:border-[#00D4FF]/30",
    hoverTitle: "group-hover:text-[#00D4FF]",
    glow: "bg-[#00D4FF]/5 group-hover:bg-[#00D4FF]/15",
    badge: "text-[#00D4FF]",
    badgeLabel: "Thumbnail",
    sectionAccent: "bg-[#00D4FF]",
    sectionText: "text-[#00D4FF]",
  },
  "Abroad Posts": {
    hoverBorder: "hover:border-[#A78BFA]/30",
    hoverTitle: "group-hover:text-[#A78BFA]",
    glow: "bg-[#A78BFA]/5 group-hover:bg-[#A78BFA]/15",
    badge: "text-[#A78BFA]",
    badgeLabel: "Abroad Post",
    sectionAccent: "bg-[#A78BFA]",
    sectionText: "text-[#A78BFA]",
  },
  "Social Media": {
    hoverBorder: "hover:border-[#E1306C]/30",
    hoverTitle: "group-hover:text-[#E1306C]",
    glow: "bg-[#E1306C]/5 group-hover:bg-[#E1306C]/15",
    badge: "text-[#E1306C]",
    badgeLabel: "Social Post",
    sectionAccent: "bg-[#E1306C]",
    sectionText: "text-[#E1306C]",
  },
  Typography: {
    hoverBorder: "hover:border-[#00D4FF]/30",
    hoverTitle: "group-hover:text-[#00D4FF]",
    glow: "bg-[#00D4FF]/5 group-hover:bg-[#00D4FF]/15",
    badge: "text-[#00D4FF]",
    badgeLabel: "Typography",
    sectionAccent: "bg-[#00D4FF]",
    sectionText: "text-[#00D4FF]",
  },
};

const logoProjects: Project[] = [
  { title: "Logo Design 01", category: "Logo Design", thumbnail: "/logo/logo-1.jpg", year: "2026" },
  { title: "Logo Design 02", category: "Logo Design", thumbnail: "/logo/logo-2.png", year: "2026" },
  { title: "Logo Design 03", category: "Logo Design", thumbnail: "/logo/logo-3.png", year: "2026" },
  { title: "Logo Design 04", category: "Logo Design", thumbnail: "/logo/logo-4.png", year: "2026" },
  { title: "Logo Design 05", category: "Logo Design", thumbnail: "/logo/logo-5.png", year: "2026" },
  { title: "Logo Design 06", category: "Logo Design", thumbnail: "/logo/logo-6.png", year: "2026" },
  { title: "Logo Design 07", category: "Logo Design", thumbnail: "/logo/logo-7.png", year: "2026" },
  { title: "Logo Design 08", category: "Logo Design", thumbnail: "/logo/logo-8.png", year: "2026" },
];

const thumbnailProjects: Project[] = [
  { title: "Thumbnail 01", category: "Thumbnails", thumbnail: "/thumbnail/thumbnail-1.png", year: "2026" },
  { title: "Thumbnail 02", category: "Thumbnails", thumbnail: "/thumbnail/thumbnail-2.jpg", year: "2026" },
  { title: "Thumbnail 03", category: "Thumbnails", thumbnail: "/thumbnail/thumbnail-3.jpg", year: "2026" },
  { title: "Thumbnail 04", category: "Thumbnails", thumbnail: "/thumbnail/thumbnail-4.png", year: "2026" },
  { title: "Thumbnail 05", category: "Thumbnails", thumbnail: "/thumbnail/thumbnail-5.png", year: "2026" },
  { title: "Thumbnail 06", category: "Thumbnails", thumbnail: "/thumbnail/thumbnail-6.jpg", year: "2026" },
];

const abroadPostProjects: Project[] = Array.from({ length: 9 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    title: `Abroad Post ${num}`,
    category: "Abroad Posts" as const,
    thumbnail: `/abroadpost/post${num}.jpg`,
    year: "2026",
  };
});

const socialMediaProjects: Project[] = Array.from({ length: 11 }, (_, i) => ({
  title: `Social Post ${String(i + 1).padStart(2, "0")}`,
  category: "Social Media" as const,
  thumbnail: `/socialmedia/post-${i + 1}.jpg`,
  year: "2026",
}));

const typographyProjects: Project[] = Array.from({ length: 5 }, (_, i) => ({
  title: `Typography ${String(i + 1).padStart(2, "0")}`,
  category: "Typography" as const,
  thumbnail: `/typography/typography-${i + 1}.jpg`,
  year: "2026",
}));

// Flatten array to create a master list for filtering references
const allProjects = [
  ...logoProjects,
  ...thumbnailProjects,
  ...abroadPostProjects,
  ...socialMediaProjects,
  ...typographyProjects,
];

const categories = [
  "All",
  "Logo Design",
  "Thumbnails",
  "Abroad Posts",
  "Social Media",
  "Typography",
] as const;

const MEDIA_HEIGHT = "h-[220px] sm:h-[240px]";
const IMAGE_FRAME = "h-[160px] w-[160px] sm:h-[176px] sm:w-[176px]";
const GRID_CLASS =
  "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6";

function SectionLabel({
  label,
  accentClass,
  textClass,
}: {
  label: string;
  accentClass: string;
  textClass: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 sm:mb-8">
      <div className={`h-px w-8 ${accentClass}`} />
      <span className={`label-caps ${textClass}`}>{label}</span>
    </div>
  );
}

function WorkCard({
  project,
  onOpenPreview,
}: {
  project: Project;
  onOpenPreview: (project: Project) => void;
}) {
  const theme = categoryTheme[project.category];

  return (
    <article
      onClick={() => onOpenPreview(project)}
      className={`group relative overflow-hidden rounded-sm border border-white/5 bg-[#1E212B] transition-all duration-300 cursor-pointer ${theme.hoverBorder}`}
    >
      <div
        className={`absolute -top-10 -right-10 h-28 w-28 rounded-full blur-[40px] transition-all ${theme.glow}`}
      />

      <div
        className={`relative flex ${MEDIA_HEIGHT} items-center justify-center border-b border-white/5 bg-[#161922]`}
      >
        <div className={`relative ${IMAGE_FRAME} shrink-0 overflow-hidden rounded-sm bg-[#12141D]`}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 sm:p-3"
            sizes="(max-width: 640px) 160px, 176px"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-[#12141D]/50 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A90E2] text-white transition-transform group-hover:scale-105">
            <HiArrowUpRight size={18} />
          </span>
        </div>

        <span
          className={`label-caps absolute top-3 left-3 rounded-sm border border-white/10 bg-[#12141D]/90 px-2.5 py-1 text-[10px] backdrop-blur-sm ${theme.badge}`}
        >
          {theme.badgeLabel}
        </span>
      </div>

      <div className="relative z-10 p-4 sm:p-5">
        <h3
          className={`text-sm font-bold text-[#F8FAFC] transition-colors sm:text-base ${theme.hoverTitle}`}
        >
          {project.title}
        </h3>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] sm:text-xs">
          {project.category}
        </p>
      </div>
    </article>
  );
}

type WorkSectionBlockProps = {
  label: string;
  projects: Project[];
  showHeading: boolean;
  className?: string;
  onOpenPreview: (project: Project) => void;
};

function WorkSectionBlock({
  label,
  projects,
  showHeading,
  className = "",
  onOpenPreview,
}: WorkSectionBlockProps) {
  const theme = categoryTheme[projects[0]?.category ?? "Logo Design"];

  return (
    <div className={className}>
      {showHeading && (
        <SectionLabel
          label={label}
          accentClass={theme.sectionAccent}
          textClass={theme.sectionText}
        />
      )}
      <div className={GRID_CLASS}>
        {projects.map((project) => (
          <WorkCard key={project.title} project={project} onOpenPreview={onOpenPreview} />
        ))}
      </div>
    </div>
  );
}

const WorkSection = () => {
  const [activeFilter, setActiveFilter] =
    useState<(typeof categories)[number]>("All");
  
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const isAll = activeFilter === "All";
  const sectionGap = "mb-14 sm:mb-16 md:mb-20";

  // Compute active item lists relative to currently selected filter
  const filteredProjects = allProjects.filter(
    (p) => isAll || p.category === activeFilter
  );

  // Next and Previous navigation handlers
  const handleNext = useCallback(() => {
    if (!previewProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.title === previewProject.title);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setPreviewProject(filteredProjects[nextIndex]);
  }, [previewProject, filteredProjects]);

  const handlePrev = useCallback(() => {
    if (!previewProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.title === previewProject.title);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setPreviewProject(filteredProjects[prevIndex]);
  }, [previewProject, filteredProjects]);

  // Keyboard accessibility listeners (Left/Right arrow keys & Escape)
  useEffect(() => {
    if (!previewProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setPreviewProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewProject, handleNext, handlePrev]);

  return (
    <section
      id="work"
      className="section-padding relative overflow-hidden border-t border-white/5 bg-[#12141D]"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#4A90E2]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#00D4FF]/5 blur-[100px]" />

      <div className="container-main relative z-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#00D4FF]" />
              <span className="label-caps text-[#00D4FF]">Featured Works</span>
            </div>
            <h2 className="heading-display text-4xl text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Selected <span className="text-[#4A90E2]">Projects.</span>
            </h2>
          </div>

          <p className="max-w-xs border-l border-[#1E212B] pl-5 text-sm leading-relaxed text-[#94A3B8] sm:pl-6">
            Logos, thumbnails, abroad posts, and social media — one consistent
            showcase.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2 sm:mb-12 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveFilter(cat);
                setPreviewProject(null); // Clear preview when switching tabs to reset baseline sequence
              }}
              className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all sm:px-5 sm:text-xs ${
                activeFilter === cat
                  ? "border-[#4A90E2] bg-[#4A90E2] text-white shadow-[0_0_20px_rgba(74,144,226,0.25)]"
                  : "border-white/10 bg-[#1E212B] text-[#94A3B8] hover:border-[#4A90E2]/50 hover:text-[#F8FAFC]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {(isAll || activeFilter === "Logo Design") && (
          <WorkSectionBlock
            label="Logo Design"
            projects={logoProjects}
            showHeading={isAll}
            className={isAll ? sectionGap : ""}
            onOpenPreview={setPreviewProject}
          />
        )}

        {(isAll || activeFilter === "Thumbnails") && (
          <WorkSectionBlock
            label="Thumbnails"
            projects={thumbnailProjects}
            showHeading={isAll}
            className={isAll ? sectionGap : ""}
            onOpenPreview={setPreviewProject}
          />
        )}

        {(isAll || activeFilter === "Abroad Posts") && (
          <WorkSectionBlock
            label="Abroad Posts"
            projects={abroadPostProjects}
            showHeading={isAll}
            className={isAll ? sectionGap : ""}
            onOpenPreview={setPreviewProject}
          />
        )}

        {(isAll || activeFilter === "Social Media") && (
          <WorkSectionBlock
            label="Social Media"
            projects={socialMediaProjects}
            showHeading={isAll}
            className={isAll ? sectionGap : ""}
            onOpenPreview={setPreviewProject}
          />
        )}

        {(isAll || activeFilter === "Typography") && (
          <WorkSectionBlock
            label="Typography"
            projects={typographyProjects}
            showHeading={isAll}
            className=""
            onOpenPreview={setPreviewProject}
          />
        )}
      </div>

      {/* --- Image Popup Modal with Controls --- */}
      {previewProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#090A0F]/85 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setPreviewProject(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-4xl overflow-hidden rounded-md border border-white/10 bg-[#161922] p-2 shadow-2xl sm:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setPreviewProject(null)}
              className="absolute top-4 right-4 z-20 rounded-full bg-[#12141D]/80 p-2 text-[#94A3B8] border border-white/5 hover:text-[#F8FAFC] hover:bg-[#1E212B] transition-colors"
              aria-label="Close Preview"
            >
              <HiXMark size={22} />
            </button>

            {/* Media Area & Navigation Triggers */}
            <div className="relative flex min-h-[280px] sm:min-h-[450px] max-h-[70vh] w-full items-center justify-between bg-[#12141D]/50 rounded-sm overflow-hidden group/modal">
              
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-[#12141D]/70 text-[#94A3B8] opacity-100 sm:opacity-0 group-hover/modal:opacity-100 hover:text-[#F8FAFC] hover:bg-[#1E212B] transition-all"
                aria-label="Previous Project"
              >
                <HiChevronLeft size={24} />
              </button>

              {/* Main Active Image Viewport */}
              <div className="flex h-full w-full items-center justify-center p-4">
                <img
                  src={previewProject.thumbnail}
                  alt={previewProject.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-sm select-none"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-[#12141D]/70 text-[#94A3B8] opacity-100 sm:opacity-0 group-hover/modal:opacity-100 hover:text-[#F8FAFC] hover:bg-[#1E212B] transition-all"
                aria-label="Next Project"
              >
                <HiChevronRight size={24} />
              </button>
            </div>

            {/* Modal Metadata Footer */}
            <div className="flex items-center justify-between px-3 py-3 sm:px-4">
              <div>
                <h4 className="text-base font-bold text-[#F8FAFC]">{previewProject.title}</h4>
                <p className="text-xs font-medium uppercase tracking-wider text-[#94A3B8] mt-0.5">
                  {previewProject.category}
                </p>
              </div>
              <span className="text-xs font-mono bg-white/5 border border-white/10 px-2.5 py-1 text-[#94A3B8] rounded-sm">
                {previewProject.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;