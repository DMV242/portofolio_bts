"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import { FadeIn, FadeInStagger, PageTransition, TextReveal } from "@/components/animations"

export default function ProjectsPage() {
  const projects = {
    scolaires: [
      {
        title: "Application de Gestion de Stock",
        description: "Développement d'une application web pour la gestion de stock d'une entreprise fictive",
        technologies: ["React", "Node.js", "MySQL"],
        date: "2024",
        github: "#",
        demo: "#",
        image: "/placeholder.svg?height=200&width=400",
      },
      // {
      //   title: "Site E-commerce",
      //   description: "Création d'un site e-commerce avec système de panier et paiement",
      //   technologies: ["Next.js", "Stripe", "PostgreSQL"],
      //   date: "2023",
      //   github: "#",
      //   demo: "#",
      //   image: "/placeholder.svg?height=200&width=400",
      // },
    ],
    personnels: [
      {
        title: "Blog AI",
        description: "BLOG AI Ce projet implémente un blog avec toutes ses fonctionnalités miminales tels que la création d’article , l’édition d’article et la suppression d’article, L’authentifaction via des token JWT, en y rajoutant la possibité de créer un article grâce à l’IA alimenté par une api de TextCortex.",
        technologies: [ "Express.js", "Node.js", "React.js", "MongoDB", "JWT", "TextCortex API"],
        date: "2024",
        github: "https://github.com/DMV242/Blog",
        demo: "https://github.com/DMV242/Blog",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Netflix Clone",
        description: "J'ai développé un clone de Netflix en mai 2024 en utilisant Django, JQuery, TailwindCSS, HTML et Node.js. Le projet inclut l'authentification des utilisateurs, un serveur de streaming pour la diffusion de contenus vidéo, la gestion des saisons, séries, épisodes et films, ainsi qu'une liste de favoris. Il propose également une fonctionnalité de recherche, une classification par genre et un panneau d'administration Django pour les opérations CRUD. L'objectif était de créer une expérience utilisateur similaire à celle de Netflix, avec une gestion efficace du contenu et une interface conviviale.",
        technologies: ["Express.js", "Node.js",  "HTML","CSS", "Jquery","Django"],
        date: "2024",
        github: "https://github.com/DMV242/Netflix_clone",
        demo: "https://github.com/DMV242/Netflix_clone",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Serveur HTTP from scratch",
        description: "j'ai développé un serveur HTTP from scratch en Python, capable de servir des fichiers, gérer des connexions simultanées, traiter les requêtes POST et GET, et compresser des données. Ce projet m'a permis d'approfondir mes compétences en Python et en développement backend, tout en renforçant ma compréhension des serveurs HTTP et ma capacité à construire des solutions robustes et performantes.",
        technologies: ["python"],
        date: "2024",
        github: "https://github.com/DMV242/http-code-crafters",
        demo: "https://github.com/DMV242/http-code-crafters",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Chat App",
        description: "J'ai développé une application de chat en temps réel avec Django, Django Channels et JavaScript, offrant une expérience fluide et réactive. Les utilisateurs peuvent envoyer des photos, se connecter via Google ou un système d'authentification classique, et bénéficier d'une gestion des droits sécurisée. Les photos sont stockées sur AWS S3, assurant un stockage sécurisé et évolutif. Ce projet m'a permis d'explorer les possibilités de la communication en temps réel avec Django.",
        technologies: ["Django","Django Channels",  "HTML","CSS", "Redis"],
        date: "2024",
        github: "https://github.com/DMV242/Django-chat",
        demo: "https://github.com/DMV242/Django-chat",
        image: "/placeholder.svg?height=200&width=400",
      }

    ],
    professionnels: [
      {
        title: "Dashboard Analytics",
        description: "Stage - Développement d'un dashboard pour visualiser les données clients",
        technologies: ["React", "D3.js", "Node.js"],
        date: "2024",
        company: "Entreprise XYZ",
        image: "/placeholder.svg?height=200&width=400",
      },
      // {
      //   title: "API REST",
      //   description: "Stage - Création d'une API REST pour une application mobile",
      //   technologies: ["Express", "MongoDB", "Docker"],
      //   date: "2023",
      //   company: "Entreprise ABC",
      //   image: "/placeholder.svg?height=200&width=400",
      // },
    ],
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <TextReveal text="Mes Projets" className="text-3xl font-bold mt-8" />
            <p className="text-slate-600">
              Découvrez mes différentes réalisations à travers mes projets scolaires, personnels et professionnels.
            </p>
          </div>

          <Tabs defaultValue="scolaires" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="scolaires">Projets Scolaires</TabsTrigger>
              <TabsTrigger value="personnels">Projets Personnels</TabsTrigger>
              <TabsTrigger value="professionnels">Projets Professionnels</TabsTrigger>
            </TabsList>

            <TabsContent value="scolaires">
              <FadeInStagger>
                <div className="grid gap-6">
                  {projects.scolaires.map((project, index) => (
                    <FadeIn key={index}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        {/* <div className="aspect-video relative">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                        </div> */}
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              {project.date}
                            </div>
                          </div>
                          <p className="text-slate-600">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={project.github}>
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                              </Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={project.demo}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Démo
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </FadeInStagger>
            </TabsContent>

            <TabsContent value="personnels">
              <FadeInStagger>
                <div className="grid gap-6">
                  {projects.personnels.map((project, index) => (
                    <FadeIn key={index}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        {/* <div className="aspect-video relative">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                        </div> */}
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              {project.date}
                            </div>
                          </div>
                          <p className="text-slate-600">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={project.github}>
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                              </Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={project.demo}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Démo
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </FadeInStagger>
            </TabsContent>

            <TabsContent value="professionnels">
              <FadeInStagger>
                <div className="grid gap-6">
                  {projects.professionnels.map((project, index) => (
                    <FadeIn key={index}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        {/* <div className="aspect-video relative">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                        </div> */}
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              {project.date}
                            </div>
                          </div>
                          <p className="text-slate-600">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-slate-600">{project.company}</div>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </FadeInStagger>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageTransition>
  )
}

