# Tilläggsbegränsningar

## Webbläsarkompatibilitet

För närvarande stödda webbläsare:

- **Chrome** (version 116 och högre för grundfunktioner, 138+ för AI-översättning)
- **Edge** (version 116 och högre)

Referens: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Tekniska begränsningar

### Fullskärmsstöd

Document Picture-in-Picture fönster har maximala storleksbegränsningar och kan inte stödja fullskärmsuppspelning.

Referens: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Borttagning av titelrad

Den övre titelraden kan inte tas bort från Picture-in-Picture fönster.

Referens: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Videokvalitetsproblem

### Initial videooskärpa

När videor är i iframes justeras bitrate, upplösning och bildfrekvens dynamiskt baserat på nätverksförhållanden. Initialt används låga bitrater för snabb anslutningsetablering och nätverksanpassning. Videokvaliteten förbättras gradvis när nätverksförhållandena stabiliseras.

## Begränsningar för undertextöversättning

Olika typer av undertexter påverkar översättningskapaciteter:

| Undertexttyp                   | Beskrivning                     | Översättningsstöd                                              |
| ------------------------------ | ------------------------------- | -------------------------------------------------------------- |
| Hårda undertexter (inbäddade)  | Renderade direkt i videoramar   | Kan inte översättas                                            |
| Mjuka undertexter (interna)    | Paketerade inom videobehållaren | Stöder rad-för-rad översättning, kan vara långsam över nätverk |
| Externa undertexter (SRT, VTT) | Oberoende undertextfiler        | Stöder batch-föröversättning, snabbare hastighet               |

## DRM-skyddat innehåll

DualPiP kan inte kringgå Digital Rights Management skydd på videor.

## Cross-origin begränsningar

Vissa inbäddade videor från olika domäner kan ha begränsad funktionalitet.

---
