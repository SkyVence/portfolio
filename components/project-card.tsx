import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/cardProject"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  bannerGradient: string
  bannerText: string
  technologies: string[]
  codeLink?: string
  demoLink?: string
}

export function ProjectCard({
  title,
  subtitle,
  description,
  bannerGradient,
  bannerText,
  technologies,
  codeLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={`h-48 ${bannerGradient} flex items-center justify-center`}>
        <span className="text-white text-xl font-bold">{bannerText}</span>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {codeLink && (
          <Button variant="ghost" size="sm" asChild>
            <Link href={codeLink}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {demoLink && (
          <Button variant="ghost" size="sm" asChild>
            <Link href={demoLink}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

