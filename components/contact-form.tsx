"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"
import { sendEmail } from "@/hooks/use-contact"

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendEmail(values)

      if (result.success) {
        setIsSuccess(true)
        reset()
      } else {
        setError(result.error || "Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (err) {
      setError("Une erreur inattendue est survenue. Veuillez réessayer plus tard.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-medium mb-2">Message Envoyé!</h3>
            <p className="text-muted-foreground mb-6">Merci pour votre message. Je vous répondrai dès que possible.</p>
            <Button onClick={() => setIsSuccess(false)}>Envoyer un autre message</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envoyez-moi un message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nom
              </label>
              <input
                id="name"
                placeholder="Votre nom"
                className={`w-full rounded-md border ${errors.name ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                {...register("name")}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Votre email"
                className={`w-full rounded-md border ${errors.email ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet
            </label>
            <input
              id="subject"
              placeholder="Sujet de votre message"
              className={`w-full rounded-md border ${errors.subject ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              {...register("subject")}
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Votre message"
              rows={4}
              className={`w-full rounded-md border ${errors.message ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              {...register("message")}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

