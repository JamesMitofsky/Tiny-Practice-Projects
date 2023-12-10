const james = [
  {
    id: 20,
    description:
      "Un super-administrateur peut créer un compte modérateur / administrateur / super-administrateur.",
    priority: 1,
  },
  {
    id: 21,
    description: "Un administrateur peut exporter les statistiques.",
    priority: 2,
  },
  {
    id: 22,
    description:
      "Un administrateur peut filtrer les statistiques (périodes, catégories, types de relations, ressources, zones géographiques, etc.).",
    priority: 3,
  },
  {
    id: 23,
    description:
      "Un administrateur peut afficher le tableau de bord statistique (consultation, recherche, exploitations, créations).",
    priority: 4,
  },
  {
    id: 24,
    description:
      "Un administrateur peut désactiver / réactiver un compte citoyen.",
    priority: 5,
  },
  {
    id: 25,
    description:
      "Un administrateur peut supprimer une catégorie de ressources.",
    priority: 6,
  },
  {
    id: 26,
    description:
      "Un administrateur peut ajouter / éditer une catégorie de ressources.",
    priority: 7,
  },
  {
    id: 27,
    description: "Un administrateur peut supprimer / suspendre une ressource.",
    priority: 8,
  },
  {
    id: 28,
    description: "Un administrateur peut ajouter / éditer une ressource.",
    priority: 9,
  },
  {
    id: 29,
    description:
      "Un administrateur peut lister / filtrer les ressources en Back Office.",
    priority: 10,
  },
  {
    id: 17,
    description: "Un modérateur peut répondre à un commentaire.",
    priority: 11,
  },
  {
    id: 18,
    description: "Un modérateur peut modérer des commentaires.",
    priority: 12,
  },
  {
    id: 19,
    description: "Un modérateur peut valider une ressource pour publication.",
    priority: 13,
  },
  {
    id: 14,
    description:
      "Un citoyen connecté peut démarrer une ressource de type activité ou jeu.",
    priority: 14,
  },
  {
    id: 15,
    description: "Un citoyen connecté peut inviter d'autres participants.",
    priority: 15,
  },
  {
    id: 16,
    description:
      "Un citoyen connecté peut échanger des messages dans le cadre de la ressource avec les autres participants.",
    priority: 16,
  },
  {
    id: 13,
    description:
      "Un citoyen connecté peut afficher un tableau de bord de progression.",
    priority: 17,
  },
  {
    id: 11,
    description:
      "Un citoyen connecté peut indiquer une ressource comme exploitée ou non exploitée.",
    priority: 18,
  },
  {
    id: 12,
    description:
      "Un citoyen connecté peut mettre de côté une ressource ou l'annuler.",
    priority: 19,
  },
  {
    id: 10,
    description:
      "Un citoyen connecté peut ajouter et retirer une ressource de ses favoris.",
    priority: 20,
  },
  {
    id: 9,
    description:
      "Un citoyen connecté peut ajouter des commentaires sur une ressource.",
    priority: 21,
  },
  {
    id: 8,
    description: "Un citoyen connecté peut partager des publications.",
    priority: 22,
  },
  {
    id: 7,
    description: "Un citoyen connecté peut créer et éditer des ressources.",
    priority: 23,
  },
  {
    id: 6,
    description: "Un citoyen peut répondre à un commentaire.",
    priority: 24,
  },
  {
    id: 5,
    description: "Un citoyen peut créer un compte citoyen.",
    priority: 25,
  },
  {
    id: 4,
    description: "Un citoyen peut afficher le contenu d'une ressource.",
    priority: 26,
  },
  {
    id: 3,
    description: "Un citoyen peut filtrer et trier les ressources.",
    priority: 27,
  },
  {
    id: 2,
    description: "Un citoyen peut lister les ressources.",
    priority: 28,
  },
  {
    id: 1,
    description: "Un citoyen peut lister les ressources restreintes.",
    priority: 29,
  },
];

const arthur = [
  {
    id: 1,
    description: "En tant que citoyen je peux lister les ressources",
    priority: 4,
  },
  {
    id: 2,
    description:
      "En tant que citoyen je peux lister les ressources restreintes",
    priority: 6,
  },
  {
    id: 3,
    description: "En tant que citoyen je peux filtrer et trier les ressources",
    priority: 5,
  },
  {
    id: 4,
    description: "En tant que citoyen je peux créer un compte citoyen",
    priority: 1,
  },
  {
    id: 5,
    description:
      "En tant que citoyen je peux afficher le contenu d'une ressource",
    priority: 3,
  },
  {
    id: 6,
    description: "En tant que citoyen je peux répondre à un commentaire",
    priority: 8,
  },
  {
    id: 7,
    description:
      "En tant que citoyen connecté je peux créer et éditer des ressources",
    priority: 2,
  },
  {
    id: 8,
    description:
      "En tant que citoyen connecté je peux partager des publications",
    priority: 10,
  },
  {
    id: 9,
    description:
      "En tant que citoyen connecté je peux ajouter des commentaires sur une ressource",
    priority: 7,
  },
  {
    id: 10,
    description:
      "En tant que citoyen connecté je peux ajouter et retirer une ressource de ses favoris",
    priority: 11,
  },
  {
    id: 11,
    description:
      "En tant que citoyen connecté je peux indiquer une ressource comme exploitée ou non exploitée",
    priority: 15,
  },
  {
    id: 12,
    description:
      "En tant que citoyen connecté je peux mettre de côté une resource ou l'annuler",
    priority: 12,
  },
  {
    id: 13,
    description:
      "En tant que citoyen connecté je peux afficher un tableau de bord de progression",
    priority: 16,
  },
  {
    id: 14,
    description:
      "En tant que citoyen connecté je peux démarrer une ressource de type activité ou jeu",
    priority: 13,
  },
  {
    id: 15,
    description:
      "En tant que citoyen connecté je peux inviter d'autres participants",
    priority: 14,
  },
  {
    id: 16,
    description:
      "En tant que citoyen connecté je peux échanger des messages dans le cadre de la ressource avec les autres participants",
    priority: 9,
  },
  {
    id: 17,
    description: "En tant qu'un modérateur je peux répondre à un commentaire",
    priority: 8,
  },
  {
    id: 18,
    description: "En tant qu'un modérateur je peux modérer des commentaires",
    priority: 19,
  },
  {
    id: 19,
    description:
      "En tant qu'un modérateur je peux valider d’une ressource pour publication",
    priority: 18,
  },
  {
    id: 20,
    description:
      "En tant qu'un super-administrateur je peux créer d’un compte modérateur / administrateur / super-administrateur",
    priority: 28,
  },
  {
    id: 21,
    description:
      "En tant qu'un administrateur je peux exporter les statistiques",
    priority: 27,
  },
  {
    id: 22,
    description:
      "En tant qu'un administrateur je peux filtrer les statistiques (périodes, catégories, types de relations, de ressources, zones géographiques, etc.)",
    priority: 26,
  },
  {
    id: 23,
    description:
      "En tant qu'un administrateur je peux afficher le tableau de bord statistiques (consultation, recherche, exploitations, créations)",
    priority: 20,
  },
  {
    id: 24,
    description:
      "En tant qu'un administrateur je peux désactiver / réactiver d’un compte citoyen",
    priority: 25,
  },
  {
    id: 25,
    description:
      "En tant qu'un administrateur je peux supprimer une catégorie de ressources",
    priority: 21,
  },
  {
    id: 26,
    description:
      "En tant qu'un administrateur je peux ajouter / éditer une catégorie de ressources",
    priority: 22,
  },
  {
    id: 27,
    description:
      "En tant qu'un administrateur je peux supprimer / suspendre une ressource",
    priority: 23,
  },
  {
    id: 28,
    description:
      "En tant qu'un administrateur je peux ajouter / éditer une ressource",
    priority: 24,
  },
  {
    id: 29,
    description:
      "En tant qu'un administrateur je peux lister / filtrer les ressources en Back Office",
    priority: 17,
  },
];

const darko = [
  {
    id: 1,
    description: "En tant que citoyen je peux lister les ressources",
    priority: 13,
  },
  {
    id: 2,
    description:
      "En tant que citoyen je peux lister les ressources restreintes",
    priority: 15,
  },
  {
    id: 3,
    description: "En tant que citoyen je peux filtrer et trier les ressources",
    priority: 16,
  },
  {
    id: 4,
    description:
      "En tant que citoyen je peux afficher le contenu d'une ressource",
    priority: 14,
  },
  {
    id: 5,
    description: "En tant que citoyen je peux créer un compte citoyen",
    priority: 10,
  },
  {
    id: 6,
    description: "En tant que citoyen je peux répondre à un commentaire",
    priority: 29,
  },
  {
    id: 7,
    description:
      "En tant que citoyen connecté je peux créer et éditer des ressources",
    priority: 11,
  },
  {
    id: 8,
    description:
      "En tant que citoyen connecté je peux partager des publications",
    priority: 12,
  },
  {
    id: 9,
    description:
      "En tant que citoyen connecté je peux ajouter des commentaires sur une ressource",
    priority: 17,
  },
  {
    id: 10,
    description:
      "En tant que citoyen connecté je peux ajouter et retirer une ressource de ses favoris",
    priority: 18,
  },
  {
    id: 11,
    description:
      "En tant que citoyen connecté je peux indiquer une ressource comme exploitée ou non exploitée",
    priority: 28,
  },
  {
    id: 12,
    description:
      "En tant que citoyen connecté je peux mettre de côté une ressource ou l'annuler",
    priority: 27,
  },
  {
    id: 13,
    description:
      "En tant que citoyen connecté je peux afficher un tableau de bord de progression",
    priority: 26,
  },
  {
    id: 14,
    description:
      "En tant que citoyen connecté je peux démarrer une ressource de type activité ou jeu",
    priority: 9,
  },
  {
    id: 15,
    description:
      "En tant que citoyen connecté je peux inviter d'autres participants",
    priority: 25,
  },
  {
    id: 16,
    description:
      "En tant que citoyen connecté je peux échanger des messages dans le cadre de la ressource avec les autres participants",
    priority: 8,
  },
  {
    id: 17,
    description: "En tant qu'un modérateur je peux répondre à un commentaire",
    priority: 24,
  },
  {
    id: 18,
    description: "En tant qu'un modérateur je peux modérer des commentaires",
    priority: 23,
  },
  {
    id: 19,
    description:
      "En tant qu'un modérateur je peux valider une ressource pour publication",
    priority: 7,
  },
  {
    id: 20,
    description:
      "En tant qu'un super-administrateur je peux créer d’un compte modérateur / administrateur / super-administrateur",
    priority: 1,
  },
  {
    id: 21,
    description:
      "En tant qu'un administrateur je peux exporter les statistiques",
    priority: 22,
  },
  {
    id: 22,
    description:
      "En tant qu'un administrateur je peux filtrer les statistiques (périodes, catégories, types de relations, de ressources, zones géographiques, etc.)",
    priority: 21,
  },
  {
    id: 23,
    description:
      "En tant qu'un administrateur je peux afficher le tableau de bord statistiques (consultation, recherche, exploitations, créations)",
    priority: 20,
  },
  {
    id: 24,
    description:
      "En tant qu'un administrateur je peux désactiver / réactiver d’un compte citoyen",
    priority: 2,
  },
  {
    id: 25,
    description:
      "En tant qu'un administrateur je peux supprimer une catégorie de ressources",
    priority: 19,
  },
  {
    id: 26,
    description:
      "En tant qu'un administrateur je peux ajouter / éditer une catégorie de ressources",
    priority: 3,
  },
  {
    id: 27,
    description:
      "En tant qu'un administrateur je peux supprimer / suspendre une ressource",
    priority: 6,
  },
  {
    id: 28,
    description:
      "En tant qu'un administrateur je peux ajouter / éditer une ressource",
    priority: 4,
  },
  {
    id: 29,
    description:
      "En tant qu'un administrateur je peux lister / filtrer les ressources en Back Office",
    priority: 5,
  },
];

const lyza = [
  {
    id: 1,
    description: "Le citoyen peut lister & accéder les ressources disponibles.",
    priority: 1,
  },
  {
    id: 2,
    description:
      "Le citoyen peut lister les ressources qui lui sont restreintes en tant que citoyen non connecté.",
    priority: 2,
  },
  {
    id: 3,
    description:
      "Le citoyen peut appliquer des filtres et des critères de tri pour trouver des ressources spécifiques.",
    priority: 3,
  },
  {
    id: 4,
    description:
      "Le citoyen peut visualiser le contenu détaillé d'une ressource.",
    priority: 4,
  },
  {
    id: 7,
    description:
      "L'administrateur peut lister et filtrer les ressources dans le Back Office.",
    priority: 5,
  },
  {
    id: 28,
    description:
      "L'administrateur peut ajouter ou éditer une ressource dans le catalogue.",
    priority: 6,
  },
  {
    id: 27,
    description:
      "L'administrateur peut supprimer ou suspendre une ressource du catalogue.",
    priority: 7,
  },
  {
    id: 26,
    description:
      "L'administrateur peut ajouter ou éditer une catégorie de ressources.",
    priority: 8,
  },
  {
    id: 25,
    description: "L'administrateur peut supprimer une catégorie de ressources.",
    priority: 9,
  },
  {
    id: 5,
    description: "Le citoyen peut créer un compte utilisateur.",
    priority: 10,
  },
  {
    id: 24,
    description:
      "L'administrateur peut désactiver ou réactiver un compte citoyen.",
    priority: 11,
  },
  {
    id: 20,
    description:
      "Le super-administrateur peut créer différents types de comptes.",
    priority: 12,
  },
  {
    id: 7,
    description: "Le citoyen connecté peut créer ou éditer une ressource.",
    priority: 13,
  },
  {
    id: 19,
    description:
      "Le modérateur peut valider ou rejeter une ressource pour publication.",
    priority: 14,
  },
  {
    id: 8,
    description:
      "Le citoyen connecté peut partager une ressource avec d'autres utilisateurs.",
    priority: 15,
  },
  {
    id: 9,
    description:
      "Le citoyen connecté peut ajouter un commentaire à une ressource.",
    priority: 16,
  },
  {
    id: 18,
    description:
      "Le modérateur peut modérer les commentaires sur les ressources publiques.",
    priority: 17,
  },
  {
    id: 6,
    description: "Le citoyen peut répondre à un commentaire existant.",
    priority: 18,
  },
  {
    id: 10,
    description:
      "Le citoyen connecté peut ajouter ou retirer une ressource de ses favoris.",
    priority: 19,
  },
  {
    id: 17,
    description: "Le modérateur peut répondre à un commentaire existant.",
    priority: 20,
  },
  {
    id: 11,
    description:
      "Le citoyen connecté peut indiquer si une ressource a été exploitée ou non.",
    priority: 21,
  },
  {
    id: 12,
    description:
      "Le citoyen connecté peut mettre de côté une ressource ou annuler cette action.",
    priority: 22,
  },
  {
    id: 13,
    description:
      "Le citoyen connecté peut afficher un tableau de bord de sa progression.",
    priority: 23,
  },
  {
    id: 14,
    description:
      "Le citoyen connecté peut démarrer une ressource de type Activité/Jeu.",
    priority: 24,
  },
  {
    id: 15,
    description:
      "Le citoyen connecté peut inviter d'autres participants à une ressource.",
    priority: 25,
  },
  {
    id: 16,
    description:
      "Le citoyen connecté peut échanger des messages avec d'autres participants dans le cadre d'une ressource.",
    priority: 26,
  },
  {
    id: 23,
    description:
      "L'administrateur peut afficher un tableau de bord statistique avec des informations sur la consultation, la recherche, et la création de ressources.",
    priority: 27,
  },
  {
    id: 22,
    description:
      "L'administrateur peut filtrer les statistiques par périodes, catégories, types de relations, de ressources, zones géographiques, etc.",
    priority: 28,
  },
  {
    id: 21,
    description:
      "L'administrateur peut exporter les statistiques pour une utilisation externe.",
    priority: 29,
  },
];

const values = [james, arthur, darko, lyza];

export default values;
