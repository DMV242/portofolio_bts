"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Calendar, ArrowLeft, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { FadeIn, PageTransition, TextReveal } from "@/components/animations"
import { motion } from "framer-motion"
import { projects } from "@/app/data/projet"

// Définir un type pour les projets professionnels
type ProfessionalProject = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  date: string;
  duration: string;
  category: string;
  company: string;
  github?: string;
  demo?: string;
  images: string[];
  team: string[];
}

// Définir un type pour les projets scolaires et personnels
type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  date: string;
  duration: string;
  category: string;
  github: string;
  demo: string;
  images: string[];
  team: string[];
}

// Type union pour tous les types de projets
type AnyProject = Project | ProfessionalProject;

export default function ProjectDetailPage() {
  const { id } = useParams()
  const projectId = Array.isArray(id) ? id[0] : id

  // Trouver le projet correspondant à l'ID
  const project = projects.scolaires.find((p) => p.id === projectId) ||
                  projects.personnels.find((p) => p.id === projectId) ||
                  projects.professionnels.find((p) => p.id === projectId) as AnyProject | undefined

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center mt-16">
        <h1 className="text-2xl font-bold">Projet non trouvé</h1>
        <p className="mt-4">Le projet que vous recherchez n'existe pas.</p>
        <Button className="mt-6" asChild>
          <Link href="/projets">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">


          {/* Header */}
          <div className="space-y-4">
            <TextReveal text={project.title} className="text-3xl font-bold" />
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {project.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {project.duration}
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                {project.category === "scolaire"
                  ? "Projet Scolaire"
                  : project.category === "personnel"
                    ? "Projet Personnel"
                    : "Projet Professionnel"}
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
            {project.images.length > 1 && (
              <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-24 h-16 rounded overflow-hidden flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <Tabs defaultValue="description" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
              <TabsTrigger value="team">Équipe & Défis</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <FadeIn>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-slate-600 whitespace-pre-line">{project.longDescription}</p>
                    {'github' in project && 'demo' in project && (project.github || project.demo) && (
                      <div className="flex gap-2 pt-4">
                        {'github' in project && project.github && (
                          <Button variant="outline" asChild>
                            <Link href={project.github}>
                              <Github className="h-4 w-4 mr-2" />
                              Code source
                            </Link>
                          </Button>
                        )}
                        {'demo' in project && project.demo && (
                          <Button asChild>
                            <Link href={project.demo}>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Voir la démo
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="features">
              <FadeIn>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Fonctionnalités principales</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-slate-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="team">
              <FadeIn>
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Équipe</h3>
                      <ul className="space-y-2">
                        {project.team.map((member, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            <span className="text-slate-600">{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Défis rencontrés</h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span className="text-slate-600">{challenge}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>
          </Tabs>

          {/* Navigation */}
          <div className="flex justify-between pt-8">
            <Button variant="outline" asChild>
              <Link href="/projets">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tous les projets
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

