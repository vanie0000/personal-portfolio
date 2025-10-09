"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "personal portfolio",
      description:
        "my personal portfolio website built using next.js, typeScript, and tailwind css. showcasing my projects, skills, and contact info.",
      image: "/images/image.png",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      github: "https://github.com/vanie0000/personal-portfolio",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-xl border border-gray-300 dark:border-gray-700"
              />
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
