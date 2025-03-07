import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="container py-24 md:py-32 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Antoine Mathié</h1>
            <p className="text-xl text-muted-foreground">Étudiant en informatique en recherche d'alternance</p>
          </div>
          <p className="text-muted-foreground max-w-[600px]">
            Passionné par la programmation et le développement web, je suis actuellement en recherche d'une alternance pour intégrer un BTS SIO en option SLAM. 
            Je suis curieux et j'aime trouver une solution aux problèmes que je rencontre.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Me contacter</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">Voir mes projets</Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/SkyVence" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/antoine-mathie" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:antoine.mathie100@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden rounded-full border-4 border-background shadow-xl">
            <Image
              src="/pfp.JPG"
              alt="Antoine Mathie"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Formation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Bordeaux, France</span>
            </div>
            <p className="font-medium mt-2">Lycée Gustave Eiffel</p>
            <p className="text-sm text-muted-foreground">En préparation d'un BTS SIO Option SLAM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Spécialités</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>SQL</Badge>
              <Badge>MongoDB</Badge>
              <Badge>JWT</Badge>
              <Badge>ExpressJS</Badge>
              <Badge>Docker</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Langues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Français</span>
              <span>Natif</span>
            </div>
            <div className="flex justify-between">
              <span>Anglais</span>
              <span>Courant (C1)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

