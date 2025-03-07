import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Calendar, Github, Linkedin } from "lucide-react"
import ContactForm from "./contact-form"

export function Contact() {
  return (
    <section id="contact" className="bg-muted/40 py-16">
      <div className="container space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p>antoine.mathie100@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <p>Bordeaux, France</p>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <p>Disponible dès maintenant pour un CDD et à la rentrée 2025 pour une alternance</p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/SkyVence">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/antoine-mathie">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:antoine.mathie100@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

