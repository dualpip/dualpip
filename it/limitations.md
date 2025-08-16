# Limitazioni dell'Estensione

## Compatibilità Browser

Browser attualmente supportati:

- **Chrome** (versione 116 e superiore per funzioni base, 138+ per traduzione IA)
- **Edge** (versione 116 e superiore)

Riferimento: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Limitazioni Tecniche

### Supporto Schermo Intero

Le finestre Document Picture-in-Picture hanno limitazioni di dimensione massima e non possono supportare la riproduzione a schermo intero.

Riferimento: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Rimozione Barra del Titolo

La barra del titolo superiore non può essere rimossa dalle finestre Picture-in-Picture.

Riferimento: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Problemi di Qualità Video

### Sfocatura Video Iniziale

Quando i video sono in iframe, bitrate, risoluzione e frame rate vengono regolati dinamicamente in base alle condizioni di rete. Inizialmente, vengono utilizzati bitrate bassi per uno stabilimento rapido della connessione e adattamento di rete. La qualità video migliora gradualmente man mano che le condizioni di rete si stabilizzano.

## Limitazioni Traduzione Sottotitoli

Diversi tipi di sottotitoli influenzano le capacità di traduzione:

| Tipo di Sottotitolo            | Descrizione                               | Supporto Traduzione                                             |
| ------------------------------ | ----------------------------------------- | --------------------------------------------------------------- |
| Sottotitoli Duri (Incorporati) | Renderizzati direttamente nei frame video | Non può essere tradotto                                         |
| Sottotitoli Morbidi (Interni)  | Impacchettati nel contenitore video       | Supporta traduzione riga per riga, può essere lento con la rete |
| Sottotitoli Esterni (SRT, VTT) | File di sottotitoli indipendenti          | Supporta pre-traduzione batch, velocità più rapida              |

## Contenuto Protetto DRM

DualPiP non può aggirare la protezione Digital Rights Management sui video.

## Restrizioni Cross-Origin

Alcuni video incorporati da domini diversi potrebbero avere funzionalità limitata.

---
