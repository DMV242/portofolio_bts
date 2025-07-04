export const projects = {
    scolaires: [
      {
        id: "gestion-projets-mobile-mairie",
        title: "Application Mobile de Gestion de Projets - Mairie de Paris",
        description: "Développement d'une application mobile pour la gestion des projets de la Mairie de Paris",
        longDescription:
          "Cette application mobile a été développée avec React Native pour permettre à la Mairie de Paris de gérer ses projets via une interface mobile. Elle inclut des fonctionnalités telles que l'authentification sécurisée, la consultation des projets et de leurs tâches associées, ainsi qu'un profil utilisateur. L'application est optimisée pour Android et se connecte à une API Django REST Framework pour la gestion des données.",
        technologies: ["React Native", "Expo", "React Navigation", "React Native Paper", "Axios", "AsyncStorage"],
        features: [
          "Authentification sécurisée",
          "Consultation des projets",
          "Visualisation des détails d'un projet",
          "Affichage des tâches associées à un projet",
          "Gestion du profil utilisateur",
        ],
        challenges: [
          "Intégration avec l'API Django REST Framework",
          "Optimisation de l'application pour Android",
          "Création d'une interface utilisateur mobile fluide et intuitive",
          "Gestion des sessions et des données persistantes avec AsyncStorage",
        ],
        date: "Mai 2025",
        duration: "2 mois",
        category: "scolaire",
        github: "https://github.com/DMV242/mairie_paris_lourd", // Remplace par l'URL de ton repo GitHub
        demo: "https://github.com/DMV242/mairie_paris_lourd",   // Remplace par le lien de démo si disponible
        images: [
          "/gestion_projets_mobile_mairie.jpg", // Remplace ou ajoute d'autres screenshots si disponibles
        ],
        team: ["David MVOULA"],
      }
,
      {
        id: "gestion-projets-mairie",
        title: "Application de Gestion de Projet - Mairie de Paris",
        description: "Développement d'une application web de gestion de projets pour la Mairie de Paris",
        longDescription:
          "Cette application a été développée pour la gestion de projets de la Mairie de Paris. Elle permet de gérer les utilisateurs, les projets, les tâches, les équipes ainsi que les commentaires associés. Un tableau de bord centralise les informations clés. Ce projet est conçu avec Django en backend, MySQL pour la base de données, et une interface légère en HTML/CSS avec TailwindCSS.",
        technologies: ["Django", "MySQL", "HTML", "CSS", "TailwindCSS", "JavaScript"],
        features: [
          "Gestion des utilisateurs (création, modification, suppression)",
          "Gestion des projets avec suivi des statuts",
          "Gestion des tâches (création, modification, attribution, suivi)",
          "Gestion des équipes (création, attribution des membres)",
          "Commentaires sur les projets et les tâches",
          "Tableau de bord avec vue synthétique des informations",
        ],
        challenges: [
          "Création d’un modèle de données relationnel robuste",
          "Mise en place d’un système d’authentification basé sur les sessions",
          "Construction d’une interface claire et fonctionnelle avec HTML et Tailwind",
          "Configuration et sécurisation d’une base MySQL",
        ],
        date: "Avril 2025",
        duration: "2 mois",
        category: "scolaire",
        github: "https://github.com/DMV242/mairie_paris_leger",
        demo: "https://github.com/DMV242/mairie_paris_leger",
        images: [
          "/gestion_projets_mairie_leger.png", // Remplace ou ajoute d'autres screenshots si disponibles
        ],
        team: ["David MVOULA"],
      },
      {
        id: "projet-meteo",
        title: "Projet Météo",
        description: "Développement d'une application web pour la gestion de stock d'une entreprise fictiv",
        longDescription: "Ce projet météo a été développé dans le cadre de mon BTS SIO. Il permet de consulter les prévisions météorologiques pour différentes villes, avec des informations détaillées sur la température, l'humidité, la vitesse du vent, etc.",
        technologies: ["React.js", "Next.js","TailwindCSS", "TypeScript"],
        features: [
          "Recherche de villes",
          "Affichage des prévisions sur 5 jours",
          "Graphiques de température",
          "Mode sombre/clair",
          "Géolocalisation",
        ],
        challenges: [
          "Intégration avec l'API météo",
          "Optimisation des performances",
          "Gestion des erreurs de l'API",
        ],
        date: "2025",
        duration: "1 mois",
        category: "scolaire",
        github: "https://github.com/DMV242/Projet-Meteo",
        demo: "https://projet-meteo-dmv242.vercel.app/",
        images: [
          "/projet_meteo_detail.png",

        ],
        team: ["David MVOULA"],
      },
      {
        id: "inventaire-stock",
        title: "Application de Gestion de Stock",
        description: "Développement d'une application web pour la gestion de stock d'une entreprise fictive",
        longDescription:
          "Cette application de gestion de stock a été développée dans le cadre de mon BTS SIO. Elle permet de gérer l'inventaire d'une entreprise, de suivre les entrées et sorties de produits, et de générer des rapports statistiques. L'application dispose d'une interface utilisateur intuitive et responsive, permettant une utilisation sur différents appareils.",
        technologies: ["React", "Prisma", "TypeScript", "React"],
        features: [
          "Gestion des produits (ajout, modification, suppression)",
          "Suivi des stocks en temps réel",
          "Gestion des fournisseurs",
          "Interface responsive et intuitive",
        ],
        challenges: [
          "Conception d'une base de données optimisée",
          "Développement d'une interface utilisateur intuitive",
        ],
        date: "Mars 2024",
        duration: "3 mois",
        category: "scolaire",
        github: "#",
        demo: "#",
        images: [
          "/gestion_stock.png",

        ],
        team: ["David MVOULA"],
      }
    ],
    personnels: [
      {
        id: "blog-ai",
        title: "Blog AI",
        description: "BLOG AI Ce projet implémente un blog avec toutes ses fonctionnalités miminales tels que la création d'article , l'édition d'article et la suppression d'article, L'authentifaction via des token JWT, en y rajoutant la possibité de créer un article grâce à l'IA alimenté par une api de TextCortex.",
        longDescription: "Ce projet de blog intègre l'intelligence artificielle pour faciliter la création de contenu. Il offre toutes les fonctionnalités essentielles d'un blog moderne, avec une interface utilisateur intuitive et des performances optimisées. L'authentification sécurisée via JWT garantit la protection des données utilisateur.",
        technologies: [ "Express.js", "Node.js", "React.js", "MongoDB", "JWT", "TextCortex API"],
        features: [
          "Création, édition et suppression d'articles",
          "Génération de contenu par IA",
          "Authentification sécurisée (JWT)",
          "Interface utilisateur responsive",
          "Recherche et filtrage d'articles",
        ],
        challenges: [
          "Intégration de l'API TextCortex",
          "Mise en place d'un système d'authentification robuste",
          "Optimisation des performances de l'application",
        ],
        date: "2024",
        duration: "2 mois",
        category: "personnel",
        github: "https://github.com/DMV242/Blog",
        demo: "https://github.com/DMV242/Blog",
        images: [
          "/blog_ai.png",

        ],
        team: ["David MVOULA"],
      },
      {
        id: "netflix-clone",
        title: "Netflix Clone",
        description: "J'ai développé un clone de Netflix en mai 2024 en utilisant Django, JQuery, TailwindCSS, HTML et Node.js. Le projet inclut l'authentification des utilisateurs, un serveur de streaming pour la diffusion de contenus vidéo, la gestion des saisons, séries, épisodes et films, ainsi qu'une liste de favoris. Il propose également une fonctionnalité de recherche, une classification par genre et un panneau d'administration Django pour les opérations CRUD. L'objectif était de créer une expérience utilisateur similaire à celle de Netflix, avec une gestion efficace du contenu et une interface conviviale.",
        longDescription: "Ce clone de Netflix reproduit les principales fonctionnalités de la plateforme de streaming originale. Il permet aux utilisateurs de parcourir un catalogue de films et séries, de gérer leurs favoris, et de profiter d'une expérience de visionnage fluide. Le projet a été développé avec Django pour le backend et utilise jQuery pour les interactions côté client.",
        technologies: ["Express.js", "Node.js",  "HTML","CSS", "Jquery","Django"],
        features: [
          "Authentification des utilisateurs",
          "Serveur de streaming vidéo",
          "Gestion des séries, saisons et épisodes",
          "Liste de favoris personnalisée",
          "Recherche et filtrage par genre",
          "Panneau d'administration pour la gestion du contenu",
        ],
        challenges: [
          "Mise en place d'un serveur de streaming performant",
          "Gestion des relations complexes entre les contenus",
          "Création d'une interface utilisateur intuitive",
        ],
        date: "2024",
        duration: "3 mois",
        category: "personnel",
        github: "https://github.com/DMV242/Netflix_clone",
        demo: "https://github.com/DMV242/Netflix_clone",
        images: [
          "/netflix_clone.png",

        ],
        team: ["David MVOULA"],
      },
      {
        id: "serveur-http",
        title: "Serveur HTTP from scratch",
        description: "j'ai développé un serveur HTTP from scratch en Python, capable de servir des fichiers, gérer des connexions simultanées, traiter les requêtes POST et GET, et compresser des données. Ce projet m'a permis d'approfondir mes compétences en Python et en développement backend, tout en renforçant ma compréhension des serveurs HTTP et ma capacité à construire des solutions robustes et performantes.",
        longDescription: "Ce serveur HTTP développé entièrement en Python sans utiliser de frameworks existants implémente les fonctionnalités essentielles du protocole HTTP. Il gère efficacement les requêtes GET et POST, sert des fichiers statiques, et supporte la compression de données pour optimiser les performances.",
        technologies: ["Python"],
        features: [
          "Traitement des requêtes GET et POST",
          "Gestion des connexions simultanées",
          "Compression des données",
          "Serveur de fichiers statiques",
          "Journalisation des requêtes",
        ],
        challenges: [
          "Implémentation du protocole HTTP sans bibliothèques externes",
          "Gestion efficace des connexions concurrentes",
          "Optimisation des performances",
        ],
        date: "2024",
        duration: "1 mois",
        category: "personnel",
        github: "https://github.com/DMV242/http-code-crafters",
        demo: "https://github.com/DMV242/http-code-crafters",
        images: [
          "/http_server.png",
        ],
        team: ["David MVOULA"],
      },
      {
        id: "chat-app",
        title: "Chat App",
        description: "J'ai développé une application de chat en temps réel avec Django, Django Channels et JavaScript, offrant une expérience fluide et réactive. Les utilisateurs peuvent envoyer des photos, se connecter via Google ou un système d'authentification classique, et bénéficier d'une gestion des droits sécurisée. Les photos sont stockées sur AWS S3, assurant un stockage sécurisé et évolutif. Ce projet m'a permis d'explorer les possibilités de la communication en temps réel avec Django.",
        longDescription: "Cette application de chat en temps réel permet aux utilisateurs de communiquer instantanément et d'échanger des photos. Développée avec Django et Django Channels, elle utilise WebSockets pour assurer une communication bidirectionnelle en temps réel. L'intégration avec AWS S3 garantit un stockage sécurisé et évolutif des médias partagés.",
        technologies: ["Django","Django Channels",  "HTML","CSS", "Redis"],
        features: [
          "Communication en temps réel via WebSockets",
          "Partage de photos et médias",
          "Authentification via Google ou système classique",
          "Stockage sécurisé sur AWS S3",
          "Gestion des droits utilisateurs",
          "Historique des conversations",
        ],
        challenges: [
          "Implémentation des WebSockets avec Django Channels",
          "Intégration avec AWS S3 pour le stockage des médias",
          "Gestion de l'authentification multi-méthodes",
        ],
        date: "2024",
        duration: "2 mois",
        category: "personnel",
        github: "https://github.com/DMV242/Django-chat",
        demo: "https://github.com/DMV242/Django-chat",
        images: [
          "/chat_app.png",
        ],
        team: ["David MVOULA"],
      }
    ],
    professionnels: [
      {
        id: "deplano",
        title: "Deplano",
        description: "Alternance - Développement d'un Backoffice pour la gestion de la plateforme Deplano",
        longDescription: "Lors de mon alternane chez Deplano , j'ai développé un backend qui permet de gérer les données des entreprises et les utilisateurs (les paiements , le moteur de recherche , les notifications , les alertes , les réservations , les factures , les rapports , les paramètres , etc.)",
        technologies: ["Python", "Django", "Django Rest Framework", "PostgreSQL", "Docker", "Gunicorn", "AWS", "CI/CD"],
        features: [
            "Gestion des entreprises et les utilisateurs",
            "Gestion des paiements",
            "Gestion des réservations",
            "Gestion des factures",
            "Intégration Stripe pour les paiements",
            "Intégration SendGrid pour les notifications",
            "Intégration AWS S3 pour le stockage des médias",
            "Intégration AWS SES pour les emails",

        ],
        challenges: [
            "Intégration avec les systèmes existants",
            "Gestion des données des entreprises et les utilisateurs",
            "Gestion des paiements",
            "Gestion des réservations",
            "Gestion des factures",
            "Intégration Stripe pour les paiements",
            "Intégration AWS S3 pour le stockage des médias",
            "Intégration AWS SES pour les emails",
        ],
        date: "2024-2025",
        duration: "12 mois",
        category: "professionnel",
        company: "Entreprise DePlano",
        github: "#",
        demo: "https://deplano.fr",
        images: [
          "/placeholder.svg?height=400&width=800",
        ],
        team: ["David MVOULA", "Maître d'apprentissage", "Équipe technique"],
      },
      {
        id: "Ministère de l'intérieur",
        title: "Ministère de l'intérieur",
        description: "Stage - D'un tableau de bord et d'automatisation des tâches pour différentes entités du ministère de l'intérieur ",
        longDescription: "Lors de mon Stage au ministère de l'intérieur , j'ai développé des dashboard pour visualiser les données des différentes entités du ministère de l'intérieur et automatiser les tâches répétitives pour les agents du ministère de l'intérieur",
        technologies: ["Python", "SQL", "Pandas","Excel", "SuperSet"],
        features: [
          "Développement d'un tableau de bord pour visualiser les données des différentes entités du ministère de l'intérieur",
          "Automatisation des tâches répétitives pour les agents du ministère de l'intérieur",
          "Intégration avec les systèmes existants",
        ],
        challenges: [
           "Intégration avec les systèmes existants",
           "Automatisation des tâches répétitives pour les agents du ministère de l'intérieur",
           "Développement d'un tableau de bord pour visualiser les données des différentes entités du ministère de l'intérieur",
        ],
        date: "2023-2024",
        duration: "2 mois",
        category: "professionnel",
        company: "Ministère de l'intérieur",
        github: "#",
        demo: "https://www.interieur.gouv.fr/",
        images: [
          "/placeholder.svg?height=400&width=800",
          "/placeholder.svg?height=400&width=800",
        ],
        team: ["David MVOULA", "Maître de stage", "Équipe technique"],
      },
    ],
  }