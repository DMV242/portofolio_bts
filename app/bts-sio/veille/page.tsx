import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Newspaper, GitBranch, Bookmark, ExternalLink, Calendar, Tag } from "lucide-react"
import Link from "next/link"

export default function VeillePage() {
  const articles = [
    {
      title: "L'impact de ChatGPT sur le développement logiciel",
      date: "15 janvier 2024",
      source: "Medium",
      tags: ["IA", "Développement", "ChatGPT"],
      summary:
        "Analyse de l'utilisation de ChatGPT dans le développement logiciel et son impact sur la productivité des développeurs.",
      link: "#",
    },
    {
      title: "Les avancées de l'IA générative en 2024",
      date: "28 janvier 2024",
      source: "TechCrunch",
      tags: ["IA Générative", "Innovation"],
      summary: "Découverte des dernières innovations en matière d'IA générative et leurs applications pratiques.",
      link: "#",
    },
    {
      title: "Intelligence Artificielle et Cybersécurité",
      date: "5 février 2024",
      source: "Security Weekly",
      tags: ["IA", "Cybersécurité"],
      summary: "Comment l'IA révolutionne la détection des menaces et la protection des systèmes d'information.",
      link: "#",
    },
  ]

  const tools = [
    {
      name: "Feedly",
      description: "Agrégateur de flux RSS pour suivre les actualités tech",
      icon: <Newspaper className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      description: "Suivi des projets open source en IA",
      icon: <GitBranch className="h-6 w-6" />,
    },
    {
      name: "Pocket",
      description: "Sauvegarde d'articles pour lecture ultérieure",
      icon: <Bookmark className="h-6 w-6" />,
    },
  ]

  const aiProjects = [
    {
      title: "Assistant Virtuel en Python",
      description: "Développement d'un assistant virtuel utilisant l'API OpenAI",
      technologies: ["Python", "OpenAI API", "Speech Recognition"],
      status: "En cours",
    },
    {
      title: "Système de Recommandation",
      description: "Implémentation d'un système de recommandation basé sur l'IA",
      technologies: ["Python", "TensorFlow", "scikit-learn"],
      status: "Terminé",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold mt-8">Veille Technologique</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Suivi régulier des innovations en Intelligence Artificielle et leurs applications dans le développement
            informatique.
          </p>
        </div>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles">Articles et Ressources</TabsTrigger>
            <TabsTrigger value="tools">Outils de Veille</TabsTrigger>
            <TabsTrigger value="projects">Projets IA</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{article.title}</h3>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={article.link}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Newspaper className="h-4 w-4" />
                        {article.source}
                      </div>
                    </div>
                    <p className="text-slate-600">{article.summary}</p>
                    <div className="flex gap-2">
                      {article.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tools" className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="text-primary">{tool.icon}</div>
                    <h3 className="font-semibold">{tool.name}</h3>
                    <p className="text-sm text-slate-600">{tool.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            {aiProjects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Status:</span>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Méthodologie de veille */}
        <Card>
          <CardHeader>
            <CardTitle>Ma Méthodologie de Veille</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Sources d'Information</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>• Blogs techniques spécialisés</li>
                  <li>• Articles scientifiques</li>
                  <li>• Newsletters IA</li>
                  <li>• Conférences en ligne</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Fréquence et Organisation</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>• Veille quotidienne sur l'actualité IA</li>
                  <li>• Revue hebdomadaire des innovations</li>
                  <li>• Synthèse mensuelle</li>
                  <li>• Partage via un blog personnel</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact sur le BTS SIO */}
        <Card className="bg-gradient-to-br from-primary-50 to-white">
          <CardHeader>
            <CardTitle>Impact sur mon Parcours BTS SIO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">La veille technologique sur l'IA m'aide à :</p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <Brain className="h-5 w-5 text-primary mt-1" />
                Comprendre les dernières innovations et leurs applications pratiques
              </li>
              <li className="flex items-start gap-2">
                <Brain className="h-5 w-5 text-primary mt-1" />
                Anticiper les évolutions du métier de développeur
              </li>
              <li className="flex items-start gap-2">
                <Brain className="h-5 w-5 text-primary mt-1" />
                Enrichir mes projets avec des fonctionnalités innovantes
              </li>
              <li className="flex items-start gap-2">
                <Brain className="h-5 w-5 text-primary mt-1" />
                Me préparer aux enjeux futurs du développement logiciel
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

