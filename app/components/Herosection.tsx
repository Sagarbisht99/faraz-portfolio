import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#12141D] text-[#F8FAFC]">
      <div className="pointer-events-none absolute top-0 right-0 h-full w-[60%] bg-gradient-to-l from-[#4A90E2]/10 to-transparent" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#4A90E2]/5 blur-[120px] sm:h-96 sm:w-96" />

      <div className="container-main relative z-10 grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-10 pb-12 pt-6 sm:gap-12 sm:pb-16 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-10">
        {/* Left: Content */}
        <div className="order-2 flex flex-col justify-center space-y-6 sm:space-y-8 lg:order-1">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-px w-8 bg-[#4A90E2] sm:w-12" />
            <span className="label-caps text-[10px] sm:text-xs">
              Hey! I&apos;m Moha, Your Design Partner
            </span>
          </div>

          <div>
            <h1 className="heading-display text-[clamp(3rem,12vw,7.5rem)] leading-[0.95] text-[#4A90E2]">
              Graphic
            </h1>
            <div className="mt-1 flex items-center gap-3 sm:mt-2 sm:gap-5">
              <span className="text-2xl text-[#4A90E2] sm:text-4xl lg:text-5xl">
                ✦
              </span>
              <h2 className="heading-display text-[clamp(3rem,12vw,7.5rem)] leading-[0.95] italic text-[#F8FAFC]">
                Designer
              </h2>
            </div>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#94A3B8] sm:text-base">
            A graphic designer specialized in Photoshop, Illustrator, and visual
            storytelling. I turn complex ideas into production-ready visual
            systems.
          </p>
    <Link href="/#contact-us" className="block w-fit">
          <button className="rounded-sm bg-[#4A90E2] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F8FAFC] transition-transform hover:scale-105 sm:px-10 sm:py-4 sm:text-sm">
            Let&apos;s Talk ↗
          </button>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="relative order-1 mx-auto aspect-[4/5] w-full rounded-xl shadow-lg max-w-sm sm:max-w-md lg:order-2 lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-[480px]">
          <div className="absolute inset-0 z-10 overflow-hidden rounded-xl lg:inset-0">
            <Image
              src="/image.png"
              alt="Moha Faraaz"
              fill
              className="object-contain object-bottom lg:scale-110"
              priority
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#12141D] via-transparent to-transparent opacity-60" />
          <div className="absolute top-1/2 left-1/2 z-0 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4A90E2]/20 to-transparent blur-[60px] sm:blur-[80px]" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
