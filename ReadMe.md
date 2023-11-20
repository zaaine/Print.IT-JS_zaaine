# Print-It WebSite v.1
Étape 1 : Mettez à jour le code HTML

Afin de pouvoir avoir un carrousel dynamique, vous allez commencer par ajouter les flèches en mode statique. Elles vous permettront de gérer la navigation entre les images du carrousel.

Analysez le code HTML et CSS à la recherche des éléments déjà présents sur le site.  
Ajoutez les images des flèches pour pouvoir naviguer dans le carrousel. 
Recommandations 
Dans les images du site il y a deux fichiers, `arrow_left.png` et `arrow_right.png`, à ajouter. Le CSS vous aidera à voir où vous devrez intégrer les images. 

Ressources utiles pour mener à bien cette étape :

Le chapitre “Abordez d’autres techniques de mise en page” du cours “Créez votre site web avec HTML5 et CSS3".
Étape 2 : Ajoutez des Event Listeners sur les flèches 



Vous avez les flèches présentes dans la bannière ? C’est un bon début ! Rendez vos flèches interactives afin de pouvoir gérer le changement des images de notre carrousel. 

Mettre un event listener sur chacune des flèches. 
Ajouter un console.log ou une alert() pour tester le fonctionnement des event listeners.
S’assurer qu’on peut différencier le clic sur le bouton gauche du clic sur le bouton droit. 
Ressources utiles pour mener à bien cette étape :

Les chapitres "Récupérez un élément d’une page web” et "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec JavaScript".
La documentation "Introduction aux évènements".
Étape 3 : Ajoutez des bullet points au slider



 

Maintenant que nous écoutons le clic sur les flèches, passons à un autre élément de l’interface : les bullets points. Ils permettront à l’utilisateur de savoir sur quelle slide il se trouve.

Ajouter les bullet points sur la partie basse du slider. Il nous faut un point par image contenue dans le slider. 
Une fois les points affichés, différencier le point qui signale la diapositive en cours de visionnage : ce sera la première. Dans le CSS, le point en cours a une classe spécifique.
Recommandations : 

Pour savoir combien de points mettre, on peut compter, via JavaScript, le nombre d’éléments présents dans le tableau “slides” du fichier `script.js` , et afficher un point par image. 
Pour comprendre comment ajouter les points, vous pouvez vous référer au fichier CSS du site, il vous donnera les informations nécessaires sur les classes à utiliser pour les différents types de points. 
Ressources utiles pour mener à bien cette étape :

La documentation MDN sur les tableaux vous aidera à voir comment compter le nombre d’éléments d’un tableau en JavaScript.
Le chapitre "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec JavaScript".
Étape 4 : Modifiez le slide au clic sur le bouton



 

Vous avez maintenant tous les éléments nécessaires à la navigation dans notre carrousel, félicitations. Il est grand temps d’ajouter nos images !

Au clic sur la flèche droite : 
on change le bullet point actif au suivant ;
on change l’image ;
on change le texte correspondant à l’image.
Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents. 
Recommandations : 

Pour changer l’image, pensez à bien construire le chemin de la nouvelle image.
Pour intégrer le texte, utilisez la propriété innerHTML et insérez la tagLine de la slide.
Travaillez avec les index du tableau. 
À ce stade, le carrousel est maintenant fonctionnel, mais il ne se comporte pas comme attendu. Si vous êtes à la première image et que vous cliquez sur la flèche de gauche, vous aurez une erreur dans la console. Il se produira la même chose avec la flèche de droite sur la dernière image. Nous allons régler cela dans notre dernière étape !

Ressources utiles pour mener à bien cette étape :

Le chapitre "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec Javascript".
La documentation “Introduction aux évènements”
Étape 5 : Mettez en place le défilement infini sur le carrousel  



 

À ce stade, les images du carrousel défilent, nous sommes presque arrivés au bout ! Il est temps maintenant de corriger nos derniers bugs, et de faire en sorte que notre carrousel tourne en boucle indéfiniment. Nous allons donc ajouter des conditions. 

Si on est à la dernière image et que l’on clique à droite : 
on affiche la première image ;
le point sélectionné est le premier.
Si on est à la première image et qu’on clique à gauche : 
on affiche la dernière image ;
le point sélectionné est le dernier. 
Dans tous les cas, le texte change en accord avec l’image montrée.
Ressources utiles pour mener à bien cette étape :

Le chapitre “Contrôlez du code grâce aux conditions” du cours "Apprenez à programmer avec Javascript".
Félicitations ! Votre carrousel est maintenant terminé !

 

Livrables


Un lien au format TXT ou PDF vers le repo GitHub de votre code.
Un lien au format TXT ou PDF vers la page GitHub Pages du site Print It pour visualiser le résultat. 
Pour faciliter votre passage devant le jury, déposez sur la plateforme, dans un dossier ZIP nommé Titre_du_projet_nom_prénom, tous les livrables du projet comme suit : Nom_Prénom_n° du livrable_nom du livrable__date de démarrage du projet. Cela donnera :

Nom_Prénom_1_repo_github_code_mmaaaa
Nom_Prénom_2_page_github_site_mmaaaa
Par exemple, le premier livrable peut être nommé comme suit : Dupont_Jean_1_lien_github_022022.


Soutenance


Durant la présentation orale, vous présenterez le travail que vous avez effectué pour Lucien à votre mentor. 

La soutenance est structurée de la manière suivante :

Présentation des livrables (10 minutes) 
le contexte de la mission ;
les étapes par lesquelles vous êtes passé pour mener à bien votre mission : 
comment vous avez ajouté les flèches dans le HTML,
comment fonctionnent les event listeners pour le changement des images,
comment vous avez mis en place les conditions pour avoir un défilement infini.
Vous lui présenterez les grands axes de votre travail :
Débriefing (15 minutes) 
les étapes qui vous ont paru compliquées ;
les étapes que vous avez appréciées et qui vous ont paru plus faciles ;
les questions qui vous restent en tête.
Vous évoquerez :
Conseils (5 minutes) 
Votre mentor vous donnera quelques conseils pour bien démarrer le prochain projet.