import { ExperienceCard } from "./experience-card"

export function Experience() {
  const experiences = [
    {
      title: "CDD - Equipier polyvalent",
      company: "Leclerc, Talence",
      year: "Fevrier - 2025",
      description:
        "Mise en rayon, réception marchandise",
      technologies: [],
    },
    {
      title: "CDD - Equipier commercial",
      company: "Metro, Bordeaux",
      year: "Aout - 2024",
      description:
        "Mise en rayon des fruits et légumes",
      technologies: [],
    },
    {
      title: "Stage - Service informatique",
      company: "Europa Organisation, Paris",
      year: "Novembre/Decembre - 2024",
      description:
        "Installation de borne Wifi, câblage d'switch de chaque étage dans le nouveau bâtiment de l'entreprise, création de documentation, réponse ticket Jira, gestion des utilisateurs sur Active Directory.",
      technologies: ["Active Directory", "Bash"],
    },
    {
      title: "Stage - Service informatique",
      company: "Conciergerie Solidaire, Bordeaux",
      year: "Juin/Juillet - 2023",
      description:
        "Recherche de solution pour une réponse à un appel d'offres, configuration de station de travail, réponse ticket, automatisation recuperation/envoie fiche de temps.",
      technologies: ["Python", "Bash"],
    },
  ]

  return (
    <section id="experience" className="container py-16 space-y-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expériences</h2>
        <p className="text-muted-foreground mx-auto max-w-[700px]">Mon parcours professionnel et mes stages.</p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            year={experience.year}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </section>
  )
}

