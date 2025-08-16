# Extensiebeperkingen

## Browsercompatibiliteit

Momenteel ondersteunde browsers:

- **Chrome** (versie 116 en hoger voor basisfuncties, 138+ voor AI-vertaling)
- **Edge** (versie 116 en hoger)

Referentie: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Technische beperkingen

### Volledig scherm ondersteuning

Document Picture-in-Picture vensters hebben maximale groottebeperkingen en kunnen geen volledig scherm afspelen ondersteunen.

Referentie: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Titelbalk verwijdering

De bovenste titelbalk kan niet worden verwijderd uit Picture-in-Picture vensters.

Referentie: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Videokwaliteitsproblemen

### Initiële videowaas

Wanneer video's in iframes zijn, worden bitrate, resolutie en framerate dynamisch aangepast op basis van netwerkomstandigheden. Aanvankelijk worden lage bitrates gebruikt voor snelle verbinding en netwerkaanpassing. Videokwaliteit verbetert geleidelijk naarmate de netwerkomstandigheden stabiliseren.

## Ondertitelvertaling beperkingen

Verschillende soorten ondertitels beïnvloeden vertaalcapaciteiten:

| Ondertiteltype                 | Beschrijving                       | Vertaalondersteuning                                                |
| ------------------------------ | ---------------------------------- | ------------------------------------------------------------------- |
| Harde ondertitels (ingebed)    | Direct weergegeven in videoframes  | Kan niet worden vertaald                                            |
| Zachte ondertitels (intern)    | Verpakt binnen de videocontainer   | Ondersteunt regel-voor-regel vertaling, kan traag zijn over netwerk |
| Externe ondertitels (SRT, VTT) | Onafhankelijke ondertitelbestanden | Ondersteunt batch voorvertaling, snellere snelheid                  |

## DRM-beschermde inhoud

DualPiP kan Digital Rights Management bescherming op video's niet omzeilen.

## Cross-origin beperkingen

Sommige ingesloten video's van verschillende domeinen kunnen beperkte functionaliteit hebben.

---
