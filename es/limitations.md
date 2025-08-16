# Limitaciones de la Extensión

## Compatibilidad del Navegador

Navegadores actualmente soportados:

- **Chrome** (versión 116 y superior para funciones básicas, 138+ para traducción IA)
- **Edge** (versión 116 y superior)

Referencia: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Limitaciones Técnicas

### Soporte de Pantalla Completa

Las ventanas Document Picture-in-Picture tienen limitaciones de tamaño máximo y no pueden soportar reproducción en pantalla completa.

Referencia: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Eliminación de Barra de Título

La barra de título superior no puede ser removida de las ventanas Picture-in-Picture.

Referencia: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Problemas de Calidad de Video

### Desenfoque de Video Inicial

Cuando los videos están en iframes, la tasa de bits, resolución y tasa de fotogramas se ajustan dinámicamente basándose en las condiciones de red. Inicialmente, se usan tasas de bits bajas para establecimiento rápido de conexión y adaptación de red. La calidad del video mejora gradualmente a medida que las condiciones de red se estabilizan.

## Limitaciones de Traducción de Subtítulos

Diferentes tipos de subtítulos afectan las capacidades de traducción:

| Tipo de Subtítulo              | Descripción                                  | Soporte de Traducción                                          |
| ------------------------------ | -------------------------------------------- | -------------------------------------------------------------- |
| Subtítulos Duros (Incrustados) | Renderizados directamente en frames de video | No puede ser traducido                                         |
| Subtítulos Suaves (Internos)   | Empaquetados dentro del contenedor de video  | Soporta traducción línea por línea, puede ser lento por la red |
| Subtítulos Externos (SRT, VTT) | Archivos de subtítulos independientes        | Soporta pre-traducción por lotes, velocidad más rápida         |

## Contenido Protegido por DRM

DualPiP no puede eludir la protección de Gestión de Derechos Digitales en videos.

## Restricciones de Origen Cruzado

Algunos videos incrustados de diferentes dominios pueden tener funcionalidad limitada.

---
