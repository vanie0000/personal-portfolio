import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="w-full overflow-x-hidden">
        <section className="relative px-6">
          <div className="mx-auto max-w-5xl py-24 md:py-32 lg:pt-48 lg:pb-40">
            <div className="text-center lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                shraavani jha
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-lg opacity-80">
                developer | creator | optimizer
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-5 pr-3 text-base"
                >
                  <Link href="#projects">
                    <span className="text-nowrap">view my work</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-4 inset-y-2 -z-10 overflow-hidden rounded-3xl border border-black/10 dark:border-white/5">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="size-full object-cover"
              src="https://www.pexels.com/download/video/5473797/"
            ></video>

            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] dark:bg-black/40"></div>
          </div>
        </section>
      </main>
    </>
  );
}
