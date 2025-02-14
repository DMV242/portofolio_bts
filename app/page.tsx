"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, GraduationCap, Target } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn, FadeInStagger, TextReveal, PageTransition, Magnetic } from "@/components/animations"

export default function Home() {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Développement",
      description: "Passionné par le développement web et les nouvelles technologies",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Formation",
      description: "BTS SIO option SLAM en cours",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Objectif",
      description: "Devenir un développeur full-stack confirmé",
    },
  ]

  const skills = ["React", "Next.js", "TypeScript", "Node.js","Python", "Django/Django REST Framework", ]

  return (
    <PageTransition>
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20"
              >
                <img
                  src="/me.jpg"
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="space-y-4">
                <TextReveal text="David MVOULA" className="text-4xl font-bold text-slate-900" />
                <TextReveal text="Étudiant en BTS SIO SLAM" className="text-xl text-slate-600" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-2"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-lg text-slate-600 max-w-2xl"
              >
                Passionné par le développement web et les nouvelles technologies, je suis actuellement en formation pour
                devenir développeur full-stack.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex gap-4"
              >
                <Magnetic>
                  <Button asChild>
                    <Link href="/a-propos">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Me contacter</Link>
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="container mx-auto px-4">
          <FadeInStagger>
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <FadeIn key={index}>
                  <Card className="bg-gradient-to-br from-primary-50 to-white">
                    <CardContent className="p-6">
                      <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center gap-4">
                        <div className="text-primary">{item.icon}</div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 pb-12">
          <FadeIn>
            <Card className="bg-gradient-to-r from-primary-50 via-primary-100/50 to-primary-50 overflow-hidden">
              <CardContent className="p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="max-w-2xl mx-auto text-center space-y-6"
                >
                  <TextReveal text="Prêt à collaborer ?" className="text-2xl font-bold" />
                  <p className="text-slate-600">
                    Je suis toujours à la recherche de nouvelles opportunités pour développer mes compétences et
                    contribuer à des projets innovants.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Magnetic>
                      <Button asChild>
                        <Link href="/contact">Me contacter</Link>
                      </Button>
                    </Magnetic>
                    <Magnetic>
                      <Button variant="outline" asChild>
                        <Link href="/competences">Voir mes compétences</Link>
                      </Button>
                    </Magnetic>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </FadeIn>
        </section>
      </div>
    </PageTransition>
  )
}

