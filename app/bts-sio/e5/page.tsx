"use client";

import React from "react";
import { Card, CardContent } from "../../../components/ui/card"
import {Button} from "../../../components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react";




export default function E5Page() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const competences = [
    {
      title: "Gestion du patrimoine informatique",
      details: [
        "Recensement et identification des ressources numériques",
        "Exploitation des référentiels, normes et standards",
        "Mise en place d'outils de surveillance",
        "Gestion des sauvegardes",
      ],
    },

    {
      title: "Développement de la présence en ligne",
      details: [
        "Participation à la valorisation de l'image de l'organisation sur les médias numériques",
        "Référencement des services en ligne",
        "Participation à l'évolution d'un site Web exploitant les données de l'organisation",
      ],
    },
    {
      title: "Travail en mode projet",
      details: [
        "Analyse des objectifs et des modalités d'organisation d'un projet",
        "Planification des activités",
        "Évaluation des indicateurs de suivi d'un projet",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">



      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold mt-6">Épreuve E5</h1>
          <p className="text-xl text-slate-600">Tableau de synthèse</p>
          <Button asChild className="mx-auto items-center justify-center ">
                    <a href="/epreuve_e4_David_mvoula.pdf" download={true}>
                      Télecharger le tableau de synthèse
                      <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
        </Button>
        </div>





        <embed  src="/epreuve_e5_david_mvoula.pdf" width="100%" height="600px"/>


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
  )
}

