import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ProjectCard } from "./project-card"

export function Projects() {
  const projects = [
    {
      title: "Application de gestion d'inventaire",
      subtitle: "Gestion d'inventaire spécialisée sur le matériel audio-visuel",
      description:
        "Conception et développement d'une application de gestion d'inventaire pour du matériel audio-visuel destinée à un service opérationnel.",
      bannerGradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      bannerText: "Gestion d'inventaire",
      technologies: ["React", "NextJS", "SQL", "JwT"],
      codeLink: "#",
      demoLink: "#",
    },
    {
      title: "Plateforme de lecture de scan de manga",
      subtitle: "Site de lecture de scan de manga avec contenu généré par utilisateur",
      description:
        "Création d'une application FullStack destinée à la lecture de scans de mangas, manhwas et comics. Backend dédié utilisant ExpressJS, avec authentification et upload de contenu (images, PDF, etc.) vers S3. Frontend créé avec NextJS, ShadCN et TailwindCSS pour le style.",
      bannerGradient: "bg-gradient-to-br from-orange-500 to-red-600",
      bannerText: "Manga Scan",
      technologies: ["React", "Node.js", "MongoDB", "JwT", "ExpressJS", "NextJS", "Docker"],
      codeLink: "https://github.com/SkyVence/openmediascan",
      demoLink: "#",
    },

  ]

  return (
    <section id="projects" className="bg-muted/40 py-16">
      <div className="container space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes Projets</h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Découvrez une sélection de mes projets personnels et académiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              bannerGradient={project.bannerGradient}
              bannerText={project.bannerText}
              technologies={project.technologies}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="#">
              Voir tous les projets
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

