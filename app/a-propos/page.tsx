import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, GraduationCap, Briefcase, Award } from "lucide-react"
import Link from "next/link"

export default function About() {
  const experiences = [
    {
      title: "Développeur Back-end",
      company: "DePlano",
      period: "Août - Aujourd'hui",
      description: "J’ai mené la migration du back-end de Django 2.2.5 vers Django 5.1, intégrant Django Rest Framework pour renforcer la sécurité et améliorer les performances. En parallèle, j’ai optimisé le pipeline CI/CD, réduisant le temps de build de 10 minutes à seulement 3 minutes, ce qui a accéléré le déploiement et amélioré l’efficacité des développements. Afin d’assurer une meilleure fiabilité du code, j’ai écrit des tests unitaires et d’intégration, faisant passer la couverture de 0 à 80 %. Enfin, j’ai intégré l’outil de monitoring Sentry, ce qui a permis d’améliorer la vitesse de traitement des bugs de 30 %, optimisant ainsi la stabilité et la maintenance de l’application.",
    },
    {
      title: "Développeur Front-end & Data Analyst",
      company: "Ministère de l'intérieur",
      period: "Mai - Juillet 2024",
      description: "J’ai développé un site web interne en HTML et CSS, accompagné de la configuration d’un serveur NGINX pour son hébergement, garantissant ainsi une accessibilité optimisée. Afin d’automatiser des tâches répétitives, j’ai mis en place un script Python permettant de traiter des données Excel, réduisant le temps de traitement de 2 jours à seulement 5 minutes. De plus, j’ai conçu des tableaux de bord interactifs en utilisant Superset, SQL et CSS, facilitant la visualisation et l’analyse des métriques clés pour quatre offices, améliorant ainsi la prise de décision basée sur les données.",
    },
  ]

  const certifications = [
    {
      title: "Udemy - Dévéloppeur Python",
      date: "2023",
      score: "Score: 100",
    },
    {
      title: "Udemy - Dévéloppeur JavaScript",
      date: "2023",
      score: "Score: 100",
    },
    {
      title: "Udemy - Dévéloppeur React",
      date: "2024",
      score: "Score: 100",
    },
    {
      title: "FreecodeCamp Développement API",
      date: "2024",
      score: "Score : 100",
    },
    {
      title: "Coding-Game - Développeur JavaScript",
      date: "2024",
      score: "Score : 100",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mt-8">À Propos de Moi</h1>

        {/* Profil */}
        <Card className="bg-gradient-to-br from-primary-50 to-white">
          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 ring-4 ring-primary/20">
                <img
                  src="/me.jpg"
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-semibold">David Mvoula</h2>
                <p className="text-slate-600">
                  Étudiant(e) passionné(e) en BTS SIO, je me spécialise dans le développement d'applications et la
                  gestion de systèmes d'information. Mon objectif est de devenir un(e) professionnel(le) polyvalent(e)
                  dans le domaine de l'informatique.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    Télécharger CV
                  </Button>
                  <Button asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Me contacter
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formation */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Formation</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/20 pl-4">
                <h4 className="font-semibold">BTS SIO - Option SLAM</h4>
                <p className="text-sm text-slate-600">2023 - 2025</p>
                <p className="mt-2 text-slate-600">
                  Formation approfondie en développement d'applications, gestion de projets et administration de
                  systèmes d'information.
                </p>
              </div>
              <div className="border-l-2 border-primary/20 pl-4">
                <h4 className="font-semibold">Baccalauréat</h4>
                <p className="text-sm text-slate-600">2021</p>
                <p className="mt-2 text-slate-600">
                  Baccalauréat général, spécialités Mathématiques et Sciences physiques.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expériences */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Expériences</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold">{exp.title}</h4>
                  <p className="text-sm text-slate-600">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="mt-2 text-slate-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="text-sm text-slate-600">{cert.date}</p>
                  <p className="mt-2 text-slate-600">{cert.score}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

