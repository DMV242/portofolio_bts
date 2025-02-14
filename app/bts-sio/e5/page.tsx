import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function E5Page() {
  const competences = [
    {
      title: "Conception et développement d'applications",
      details: [
        "Analyse et formalisation des processus métiers",
        "Conception d'applications",
        "Développement, tests et déploiement",
        "Maintenance corrective et évolutive",
      ],
    },
    {
      title: "Gestion des données",
      details: [
        "Conception et adaptation d'une base de données",
        "Développement de composants d'accès aux données",
        "Développement de la qualité des applications",
        "Déploiement d'un service applicatif",
      ],
    },
    {
      title: "Cybersécurité des services informatiques",
      details: [
        "Protection des données à caractère personnel",
        "Préservation de l'identité numérique",
        "Sécurisation des équipements et des usages des utilisateurs",
        "Garantie de la disponibilité, de l'intégrité et de la confidentialité des services",
      ],
    },
    {
      title: "Documentation et formation",
      details: [
        "Rédaction d'une documentation technique",
        "Rédaction d'une documentation utilisateur",
        "Formation des utilisateurs",
        "Accompagnement de la transformation numérique",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold mt-6">Épreuve E5</h1>
          <p className="text-xl text-slate-600">Administration des systèmes et des réseaux</p>
        </div>
        <div className="grid gap-6">
          {competences.map((competence, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{competence.title}</h2>
                <ul className="space-y-3">
                  {competence.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-slate-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

