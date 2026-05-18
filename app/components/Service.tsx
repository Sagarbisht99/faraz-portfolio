import {
  Layout,
  PenTool,
  Monitor,
  Megaphone,
  Layers,
  Smartphone,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "User-centric interfaces that are not only beautiful but highly functional. Focusing on seamless navigation and engagement.",
      icon: <Layout className="h-7 w-7 sm:h-8 sm:w-8" />,
      tags: ["Figma", "Prototyping", "Wireframing"],
    },
    {
      title: "Visual Branding",
      desc: "Creating unique visual identities including logos, color palettes, and typography that make your brand stand out.",
      icon: <Layers className="h-7 w-7 sm:h-8 sm:w-8" />,
      tags: ["Identity", "Logo Design", "Styleguide"],
    },
    {
      title: "Video Editing",
      desc: "Bringing static designs to life through cinematic motion, perfect for ads, social media, and web interactions.",
      icon: <Monitor className="h-7 w-7 sm:h-8 sm:w-8" />,
      tags: ["After Effects", "Lottie", "2D Animation"],
    },
    {
      title: "Digital Illustration",
      desc: "Custom illustrations and vector art tailored to your project's story and visual tone.",
      icon: <PenTool className="h-7 w-7 sm:h-8 sm:w-8" />,
      tags: ["Vector", "Characters", "Icons"],
    },
    {
      title: "Logo Design",
      desc: "Turning dry data and complex pitches into high-impact visual stories that win clients and investors.",
      icon: <Megaphone className="h-7 w-7 sm:h-8 sm:w-8" />,
      tags: ["Pitch Decks", "PowerPoint", "Keynote"],
    },
    {
      title: "Social Media Management",
      desc: "Mobile-first design systems that ensure your app looks great and works perfectly across all devices.",
      icon: <Smartphone className="h-7 w-7 sm:h-8 sm:w-8" />,
      tags: ["iOS", "Android", "Design Systems"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#12141D] text-[#F8FAFC]">
      <div className="container-main">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#00D4FF]" />
              <span className="label-caps text-[#00D4FF]">What I Offer</span>
            </div>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl">
              My Expert <span className="text-[#4A90E2]">Services.</span>
            </h2>
          </div>
          <p className="max-w-xs border-l border-[#1E212B] pl-5 text-sm leading-relaxed text-[#94A3B8] sm:pl-6">
            Helping brands scale with high-end visual systems and strategic
            design thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-sm border border-white/5 bg-[#1E212B] p-6 transition-all duration-300 hover:border-[#4A90E2]/30 sm:p-8 lg:p-10"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-[#4A90E2]/5 blur-[50px] transition-all group-hover:bg-[#4A90E2]/20" />

              <div className="mb-6 text-[#4A90E2] transition-transform duration-300 group-hover:scale-110 sm:mb-8">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-[#00D4FF] sm:mb-4 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-[#94A3B8] sm:mb-8">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ServicesPage;
