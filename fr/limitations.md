# Limitations de l'extension

## Compatibilité des navigateurs

Navigateurs actuellement pris en charge :

- **Chrome** (version 116 et plus pour les fonctionnalités de base, 138+ pour la traduction IA)
- **Edge** (version 116 et plus)

Référence : [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Limitations techniques

### Prise en charge plein écran

Les fenêtres Document Picture-in-Picture ont des limitations de taille maximale et ne peuvent pas prendre en charge la lecture plein écran.

Référence : [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Suppression de la barre de titre

La barre de titre supérieure ne peut pas être supprimée des fenêtres Picture-in-Picture.

Référence : [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Problèmes de qualité vidéo

### Flou vidéo initial

Lorsque les vidéos sont dans des iframes, le débit binaire, la résolution et la fréquence d'images sont ajustés dynamiquement en fonction des conditions réseau. Initialement, de faibles débits binaires sont utilisés pour un établissement de connexion rapide et une adaptation réseau. La qualité vidéo s'améliore progressivement à mesure que les conditions réseau se stabilisent.

## Limitations de traduction des sous-titres

Différents types de sous-titres affectent les capacités de traduction :

| Type de sous-titre              | Description                              | Prise en charge de la traduction                                        |
| ------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| Sous-titres durs (intégrés)     | Rendus directement dans les images vidéo | Ne peut pas être traduit                                                |
| Sous-titres souples (internes)  | Packagés dans le conteneur vidéo         | Prend en charge la traduction ligne par ligne, peut être lent en réseau |
| Sous-titres externes (SRT, VTT) | Fichiers de sous-titres indépendants     | Prend en charge la pré-traduction par lots, vitesse plus rapide         |

## Contenu protégé DRM

DualPiP ne peut pas contourner la protection de gestion des droits numériques sur les vidéos.

## Restrictions d'origine croisée

Certaines vidéos intégrées de différents domaines peuvent avoir une fonctionnalité limitée.

---
