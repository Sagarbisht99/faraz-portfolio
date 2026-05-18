"use client";

import Image from "next/image";
import { useState } from "react";

const WorkSection = () => {
  const categories = [
    "All",
    "Logo Design",
    "Branding",
    "UI/UX",
    "Illustration",
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Nexus Fintech Logo",
      category: "Logo Design",
      thumbnail: "/image.png",
      year: "2026",
    },
    {
      title: "Cyberpunk Illustration",
      category: "Illustration",
      thumbnail: "/image-2.png",
      year: "2025",
    },
    {
      title: "RytClick Brand Identity",
      category: "Branding",
      thumbnail: "/image-2.png",
      year: "2026",
    },
    {
      title: "Modern UI System",
      category: "UI/UX",
      thumbnail: "/image.png",
      year: "2026",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="section-padding border-t border-white/5 bg-[#12141D]">
      <div className="container-main">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-12 sm:gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="space-y-3 sm:space-y-4">
            <span className="label-caps text-[#00D4FF]">Featured Works</span>
            <h2 className="heading-display text-4xl text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Selected <span className="text-[#4A90E2]">Projects.</span>
            </h2>
          </div>

          <div className="flex w-full flex-wrap gap-2 sm:gap-3 md:w-auto md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all sm:px-5 sm:text-xs ${
                  activeFilter === cat
                    ? "border-[#4A90E2] bg-[#4A90E2] text-white"
                    : "border-white/10 text-[#94A3B8] hover:border-[#4A90E2]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-sm bg-[#1E212B] sm:mb-6">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#12141D]/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-14 w-14 scale-50 items-center justify-center rounded-full bg-[#4A90E2] transition-transform duration-500 group-hover:scale-100 sm:h-16 sm:w-16">
                    <span className="text-xl text-white sm:text-2xl">↗</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] transition-colors group-hover:text-[#4A90E2] sm:text-xl lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#94A3B8] sm:text-sm">
                    {project.category}
                  </p>
                </div>
                <span className="heading-display text-2xl text-[#1E212B] transition-colors group-hover:text-[#4A90E2]/10 sm:text-3xl lg:text-4xl">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16 md:mt-20">
          <button
            type="button"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F8FAFC] transition-colors hover:text-[#00D4FF] sm:gap-4 sm:text-sm"
          >
            View All Projects
            <span className="h-px w-10 bg-[#4A90E2] transition-all group-hover:w-16 sm:w-12" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
