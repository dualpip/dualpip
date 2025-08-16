# Erweiterungs-Einschränkungen

## Browser-Kompatibilität

Aktuell unterstützte Browser:

- **Chrome** (Version 116 und höher für Grundfunktionen, 138+ für KI-Übersetzung)
- **Edge** (Version 116 und höher)

Referenz: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Technische Einschränkungen

### Vollbild-Unterstützung

Document Picture-in-Picture-Fenster haben maximale Größenbeschränkungen und können keine Vollbild-Wiedergabe unterstützen.

Referenz: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Titelleisten-Entfernung

Die obere Titelleiste kann nicht aus Picture-in-Picture-Fenstern entfernt werden.

Referenz: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Video-Qualitätsprobleme

### Anfängliche Video-Unschärfe

Wenn Videos in iframes sind, werden Bitrate, Auflösung und Framerate basierend auf Netzwerkbedingungen dynamisch angepasst. Anfangs werden niedrige Bitraten für schnelle Verbindungsherstellung und Netzwerkanpassung verwendet. Die Videoqualität verbessert sich allmählich, wenn sich die Netzwerkbedingungen stabilisieren.

## Untertitel-Übersetzungs-Einschränkungen

Verschiedene Untertiteltypen beeinflussen die Übersetzungsfähigkeiten:

| Untertiteltyp                  | Beschreibung                    | Übersetzungsunterstützung                                             |
| ------------------------------ | ------------------------------- | --------------------------------------------------------------------- |
| Harte Untertitel (Eingebettet) | Direkt in Videoframes gerendert | Kann nicht übersetzt werden                                           |
| Weiche Untertitel (Intern)     | In Videocontainer verpackt      | Unterstützt zeilenweise Übersetzung, kann durch Netzwerk langsam sein |
| Externe Untertitel (SRT, VTT)  | Unabhängige Untertiteldateien   | Unterstützt Batch-Vorübersetzung, schnellere Geschwindigkeit          |

## DRM-geschützte Inhalte

DualPiP kann den Digital Rights Management-Schutz von Videos nicht umgehen.

## Cross-Origin-Beschränkungen

Einige eingebettete Videos von verschiedenen Domains können eingeschränkte Funktionalität haben.

---
