import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#work" },
    { label: "Contact", href: "/#contact-us" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#12141D] pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12">
      <div className="container-main">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:mb-16 sm:gap-12 md:grid-cols-2 md:gap-16 lg:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <div className="heading-display text-3xl text-[#F8FAFC] sm:text-4xl">
              Faraaz<span className="text-[#4A90E2]">.</span>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-[#94A3B8] sm:text-lg">
              Crafting digital experiences that blend aesthetic excellence with
              functional precision.
            </p>
      
          </div>

          <div className="flex flex-col justify-center md:items-end">
            <div className="space-y-3 sm:space-y-4 md:text-right">
              <span className="label-caps text-[#00D4FF]">
                Have a project?
              </span>
              <a
                href="mailto:alfaraaz805230@gmail.com"
                className="group block cursor-pointer"
              >
                <span className="heading-display flex items-center gap-3 text-3xl tracking-tight text-[#F8FAFC] transition-all duration-300 group-hover:text-[#4A90E2] sm:gap-4 sm:text-4xl md:justify-end lg:text-5xl xl:text-6xl">
                  Let&apos;s Talk
                  <HiArrowUpRight
                    size={36}
                    className="shrink-0 text-[#4A90E2] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-10 lg:size-12"
                  />
                </span>
              </a>
              <p className="font-medium text-[#94A3B8]">
                alfaraaz805230@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-white/5 py-8 sm:gap-x-12 sm:py-10">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-[10px] font-bold uppercase tracking-[0.25em] text-[#94A3B8] transition-colors hover:text-[#F8FAFC] sm:text-xs"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#4A90E2] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:pt-10 md:flex-row md:gap-6 md:text-left">
          <p className="text-[10px] uppercase tracking-widest text-[#94A3B8]">
            © {currentYear} Faraaz Portfolio — All Rights Reserved
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-[#94A3B8] sm:gap-8">
            <a href="#" className="transition-colors hover:text-[#F8FAFC]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#F8FAFC]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
