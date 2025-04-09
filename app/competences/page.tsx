import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Database,
  Globe,
  Shield,
  Server,
  Terminal,
  Laptop,
  GitGraphIcon as Git,
  Languages,
  Users,
  Brain,
  PenToolIcon as Tool,
  CheckCircle,
} from "lucide-react"

export default function Skills() {
  const technicalSkills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Développement Web",
      description: "Création d'applications web modernes et responsives",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "React/Next.js", level: 80 },
        { name: "Java", level: 70 },
        { name: "Django/Django Rest Framework", level: 95 },
        { name: "PHP(MVC)", level: 90 },
        { name: "Python", level: 90 },
        { name: "React Native", level: 70 },
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Bases de données",
      description: "Conception et gestion de bases de données",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Réseaux",
      description: "Configuration et maintenance des réseaux",
      skills: [
        { name: "TCP/IP", level: 80 },
        { name: "DNS/DHCP", level: 75 },
        { name: "VPN", level: 70 },
      ],
    },
  ]

  const additionalSkills = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersécurité",
      items: ["Sécurité des applications", "Cryptographie", "Audit de sécurité"],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Systèmes",
      items: ["Windows Server", "Linux", "Active Directory"],
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "DevOps",
      items: ["Git", "Docker", "CI/CD","AWS"],
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Environnements de développement",
      items: ["VS Code", "IntelJ", "Eclipse","NetBeans"],
    },
    {
      icon: <Git className="h-6 w-6" />,
      title: "Gestion de versions",
      items: ["Git", "GitHub", "GitLab"],
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Langues",
      items: ["Français (Natif)", "Anglais (B2)"],
    },
  ]

  const softSkills = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Travail d'équipe",
      description: "Collaboration efficace et communication claire",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Résolution de problèmes",
      description: "Approche analytique et solutions créatives",
    },
    {
      icon: <Tool className="h-6 w-6" />,
      title: "Adaptabilité",
      description: "Apprentissage rapide des nouvelles technologies",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold mt-11">Mes Compétences</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Un aperçu détaillé de mes compétences techniques et professionnelles, développées à travers ma formation en
            BTS SIO et mes expériences pratiques.
          </p>
        </div>

        {/* Compétences techniques avec niveaux */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Compétences Techniques</h2>
          <div className="grid gap-6">
            {technicalSkills.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-primary">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-sm text-slate-600">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compétences additionnelles */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Compétences Additionnelles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalSkills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-primary">{skill.icon}</div>
                    <h3 className="font-semibold">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Soft Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="text-primary">{skill.icon}</div>
                    <h3 className="font-semibold">{skill.title}</h3>
                    <p className="text-sm text-slate-600">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

