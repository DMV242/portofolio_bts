"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import { FadeIn, FadeInStagger, PageTransition, TextReveal } from "@/components/animations"
import { projects } from "@/app/data/projet"

export default function ProjectsPage() {


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
                              <Link href={`/projets/${project.id}`}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Voir détails
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
                              <Link href={`/projets/${project.id}`}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Voir détails
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
                          <div className="flex items-center justify-between mt-4">
                            <div className="text-sm text-slate-600">{project.company}</div>
                            <Button size="sm" asChild>
                              <Link href={`/projets/${project.id}`}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Voir détails
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
          </Tabs>
        </div>
      </div>
    </PageTransition>
  )
}

