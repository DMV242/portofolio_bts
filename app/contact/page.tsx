import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold mt-8">Contact</h1>
          <p className="text-slate-600">
            N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.
          </p>
        </div>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Informations de contact</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link href="mailto:david.mvoula@outlook.fr" className="hover:text-primary transition-colors">
                  david.mvoula@outlook.fr
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <Link href="tel:+33667851047" className="hover:text-primary transition-colors">
                  +33 6 67 85 10 47
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>île de France</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

