"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { ArrowRight, Code2, Server, BookOpen, Network, Shield, Database } from "lucide-react"
import Link from "next/link"
import { FadeIn, FadeInStagger, PageTransition, TextReveal } from "../../components/animations"

export default function BTSSIOPage() {
  const options = [
    {
      title: "SLAM",
      fullTitle: "Solutions Logicielles et Applications Métiers",
      description: "Spécialisation dans le développement d'applications et la programmation",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        "Développement d'applications",
        "Programmation orientée objet",
        "Développement web",
        "Bases de données",
        "Cybersécurité",
      ],
      careers: ["Développeur d'applications", "Développeur web", "Analyste programmeur", "Développeur full-stack"],
    },
    {
      title: "SISR",
      fullTitle: "Solutions d'Infrastructure, Systèmes et Réseaux",
      description: "Spécialisation dans l'administration des réseaux et systèmes",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Administration systèmes",
        "Configuration réseaux",
        "Sécurité informatique",
        "Virtualisation",
        "Services cloud",
      ],
      careers: ["Administrateur systèmes", "Technicien réseaux", "Responsable infrastructure", "Administrateur cloud"],
    },
  ]

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Formation",
      description: "Formation sur 2 ans avec alternance possible",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Stages",
      description: "10 à 12 semaines de stage en entreprise",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certification",
      description: "Diplôme d'État de niveau Bac+2",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Projets",
      description: "Projets pratiques et études de cas réels",
    },
  ]

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <TextReveal text="BTS SIO" className="text-3xl font-bold mt-8" />
            <TextReveal text="Services Informatiques aux Organisations" className="text-xl text-slate-600" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Le BTS SIO forme des professionnels capables de répondre aux besoins informatiques des organisations en
              développant des solutions logicielles ou en administrant des systèmes et réseaux.
            </p>
          </div>

          {/* Caractéristiques */}
          <FadeInStagger className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index}>
                <Card className="bg-gradient-to-br from-primary-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="text-primary">{feature.icon}</div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </FadeInStagger>

          {/* Options */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Les Options du BTS SIO</h2>
            <FadeInStagger className="grid md:grid-cols-2 gap-6">
              {options.map((option, index) => (
                <FadeIn key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="text-primary">{option.icon}</div>
                        <div>
                          <div>{option.title}</div>
                          <div className="text-sm font-normal text-slate-600">{option.fullTitle}</div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-slate-600">{option.description}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Compétences clés :</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {option.skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Débouchés :</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {option.careers.map((career, idx) => (
                            <li key={idx}>{career}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>

          {/* Call to Action */}
          <FadeIn>
            <Card className="bg-gradient-to-r from-primary-50 via-primary-100/50 to-primary-50">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">Envie d'en savoir plus ?</h3>
                  <p className="text-slate-600">Découvrez mes projets et réalisations dans le cadre du BTS SIO</p>
                  <Button asChild>
                    <Link href="/projets">
                      Voir mes projets
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}

