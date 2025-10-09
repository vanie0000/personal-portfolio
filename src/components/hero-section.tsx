import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
    return (
      <>
        <HeroHeader />
        <main className="overflow-x-hidden">
          <section>
            <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
              <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                  <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                    shraavani jha
                  </h1>
                  <p className="mt-8 max-w-2xl text-balance text-lg">
                    developer | creator | optimizer
                  </p>

                  <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
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
              <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="size-full object-cover"
                  src="https://www.pexels.com/download/video/5473797/"
                ></video>

                {/* subtle fade overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] dark:bg-black/40"></div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}
