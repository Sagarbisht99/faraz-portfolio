import { HiArrowUpRight } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Phone",
    title: "Mobile",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    description: "Call or WhatsApp anytime",
    icon: Phone,
    accent: "text-[#4A90E2]",
    bg: "bg-[#4A90E2]/10",
  },
  {
    label: "Email",
    title: "Gmail",
    value: "hello@faraazdesign.com",
    href: "mailto:hello@faraazdesign.com",
    description: "For projects & collaborations",
    icon: Mail,
    accent: "text-[#00D4FF]",
    bg: "bg-[#00D4FF]/10",
  },
  {
    label: "Instagram",
    title: "Instagram",
    value: "@faraaz.design",
    href: "https://instagram.com/faraaz.design",
    description: "DM me for quick replies",
    icon: FaInstagram,
    accent: "text-[#E1306C]",
    bg: "bg-[#E1306C]/10",
    external: true,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden border-t border-white/5 bg-[#12141D]"
    >
      <motionGlow />

      <motionGlow className="right-0 left-auto bg-[#00D4FF]/5" />

      <motionGlow className="bottom-0 top-auto left-1/2 -translate-x-1/2 bg-[#4A90E2]/5" />

      <div className="container-main relative z-10">
        <motionGlow />

        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:mb-20 md:flex-row md:items-end">
          <motionGlow />

          <div className="max-w-xl space-y-3 sm:space-y-4">
            <motionGlow />

            <motionGlow />

            <div className="flex items-center gap-3">
              <motionGlow />

              <div className="h-px w-8 bg-[#00D4FF]" />
              <span className="label-caps text-[#00D4FF]">Get In Touch</span>
            </motionGlow>

            <h2 className="heading-display text-4xl text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Contact <span className="text-[#4A90E2]">Us.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#94A3B8] sm:text-base">
              Have a project in mind or want to collaborate? Reach out through
              any channel below — I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <a
            href="mailto:hello@faraazdesign.com"
            className="group hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A90E2] transition-colors hover:text-[#00D4FF] md:flex"
          >
            Send a message
            <HiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
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
                  </motionGlow>

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
            href="mailto:hello@faraazdesign.com"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#4A90E2] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F8FAFC] transition-colors hover:bg-[#00D4FF] sm:text-sm"
          >
            Send a message ↗
          </a>
        </div>
      </div>
    </section>
  );
};

function motionGlow({ className = "" }: { className?: string }) {
  return (
    <motionGlow />
  );
}

export default Contact;
