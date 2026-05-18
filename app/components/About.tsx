import Image from "next/image";

const AboutSection = () => {
  const stats = [
    { label: "Project Completed", value: "90+" },
    { label: "Years Of Experience", value: "02+" },
    { label: "Client Satisfaction", value: "97%" },
  ];

  return (
    <section id="about" className="section-padding bg-[#12141D]">
      <div className="container-main">
        <div className="mb-12 grid grid-cols-1 items-end gap-10 sm:mb-16 sm:gap-12 md:grid-cols-12 lg:mb-20">
          <div className="space-y-6 sm:space-y-8 md:col-span-8">
            <h2 className="heading-display text-4xl text-[#4A90E2] sm:text-5xl lg:text-6xl">
              About Me
            </h2>
            <p className="max-w-4xl text-xl font-medium leading-snug text-[#F8FAFC] sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[1.3]">
              I&apos;m A Designer Who Blends Creativity With Functionality To
              Craft Visuals That Tell Stories And Solve Any Problems. Design For
              Me Is More Than A Skill.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[280px] rounded-xl shadow-lg sm:max-w-[320px] md:col-span-4 md:ml-auto md:max-w-[350px]">
            <div className="group absolute inset-0 overflow-hidden rounded-xl">
              <Image
                src="/image-2.png"
                alt="About Me"
                fill
                className="scale-110 object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                sizes="(max-width: 768px) 280px, 350px"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-0 sm:pt-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-4 py-6 sm:items-start sm:p-8 ${
                index !== 2 ? "sm:border-r sm:border-white/5" : ""
              } ${
                index !== stats.length - 1
                  ? "border-b border-white/5 sm:border-b-0"
                  : ""
              }`}
            >
              <span className="mb-3 text-xs font-medium uppercase tracking-widest text-[#94A3B8] sm:mb-4 sm:text-sm">
                {stat.label}
              </span>
              <span className="heading-display text-5xl text-[#4A90E2] sm:text-6xl lg:text-7xl">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;