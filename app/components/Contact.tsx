import { HiArrowUpRight } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Phone",
    title: "Mobile",
    value: "+91 95995 34752",
    href: "tel:+919599534752",
    description: "Call or WhatsApp anytime",
    icon: Phone,
    accent: "text-[#4A90E2]",
    bg: "bg-[#4A90E2]/10",
  },
  {
    label: "Email",
    title: "Gmail",
    value: "alfaraaz805230@gmail.com",
    href: "mailto:alfaraaz805230@gmail.com",
    description: "For projects & collaborations",
    icon: Mail,
    accent: "text-[#00D4FF]",
    bg: "bg-[#00D4FF]/10",
  },
  {
    label: "Instagram",
    title: "Instagram",
    value: "@al_faraaz_0786",
    href: "https://instagram.com/al_faraaz_0786",
    description: "DM me for quick replies",
    icon: FaInstagram,
    accent: "text-[#E1306C]",
    bg: "bg-[#E1306C]/10",
    external: true,
  },
];

function MotionGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-[#4A90E2]/5 blur-[120px] ${className}`}
      aria-hidden
    />
  );
}

function ContactScroller({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...contactDetails, ...contactDetails];

  return (
    <div className="marquee-row">
      <div
        className={`marquee-track flex w-max items-center gap-4 sm:gap-5 ${
          reverse ? "marquee-track-reverse" : ""
        }`}
      >
        {doubled.map((item, index) => {
          const Icon = item.icon;
          const isReactIcon = item.label === "Instagram";

          return (
            <div
              key={`${item.label}-${index}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-[#1E212B]/80 px-5 py-3 backdrop-blur-sm sm:px-6 sm:py-3.5"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${item.bg} ${item.accent}`}
              >
                {isReactIcon ? (
                  <Icon size={16} />
                ) : (
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                )}
              </span>
              <span className="label-caps text-[10px] text-[#94A3B8] sm:text-xs">
                {item.label}
              </span>
              <span className="heading-display whitespace-nowrap text-sm text-[#F8FAFC] sm:text-base">
                {item.value}
              </span>
              <span className="text-xs text-[#00D4FF]/60">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Contact = () => {
  return (
    <section
      id="contact-us"
      className="section-padding relative overflow-hidden border-t border-white/5 bg-[#12141D]"
    >
      <MotionGlow />
      <MotionGlow className="right-0 left-auto bg-[#00D4FF]/5" />
      <MotionGlow className="bottom-0 top-auto left-1/2 -translate-x-1/2 bg-[#4A90E2]/5" />

      <div className="container-main relative z-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#00D4FF]" />
              <span className="label-caps text-[#00D4FF]">Get In Touch</span>
            </div>

            <h2 className="heading-display text-4xl text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Contact <span className="text-[#4A90E2]">Us.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#94A3B8] sm:text-base">
              Have a project in mind or want to collaborate? Reach out through
              any channel below — I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <a
            href="mailto:alfaraaz805230@gmail.com"
            className="group hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A90E2] transition-colors hover:text-[#00D4FF] md:flex"
          >
            Send a message
            <HiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="relative -mx-5 mb-10 sm:-mx-8 sm:mb-12 lg:-mx-12 xl:-mx-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#12141D] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#12141D] to-transparent sm:w-20" />
          <ContactScroller />
          <div className="mt-4">
            <ContactScroller reverse />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            const isReactIcon = item.label === "Instagram";

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-sm border border-white/5 bg-[#1E212B] p-6 transition-all duration-300 hover:border-[#4A90E2]/30 hover:bg-[#1E212B]/90 sm:p-8"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#4A90E2]/5 blur-[40px] transition-all group-hover:bg-[#4A90E2]/15" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${item.bg} ${item.accent}`}
                    >
                      {isReactIcon ? (
                        <Icon size={22} />
                      ) : (
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      )}
                    </div>
                    <HiArrowUpRight
                      size={20}
                      className="text-[#94A3B8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#4A90E2]"
                    />
                  </div>

                  <span className="label-caps mb-2 block text-[10px] sm:text-xs">
                    {item.label}
                  </span>
                  <h3 className="heading-display mb-2 text-xl text-[#F8FAFC] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mb-3 break-all text-base font-medium text-[#4A90E2] transition-colors group-hover:text-[#00D4FF] sm:text-lg">
                    {item.value}
                  </p>
                  <p className="text-sm text-[#94A3B8]">{item.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 md:hidden">
          <a
            href="mailto:alfaraaz805230@gmail.com"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#4A90E2] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F8FAFC] transition-colors hover:bg-[#00D4FF] sm:text-sm"
          >
            Send a message ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
