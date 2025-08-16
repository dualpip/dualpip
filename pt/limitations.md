# Limitações da Extensão

## Compatibilidade do Navegador

Navegadores atualmente suportados:

- **Chrome** (versão 116 e superior para funcionalidades básicas, 138+ para tradução IA)
- **Edge** (versão 116 e superior)

Referência: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Limitações Técnicas

### Suporte Tela Cheia

Janelas Document Picture-in-Picture têm limitações de tamanho máximo e não podem suportar reprodução em tela cheia.

Referência: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Remoção da Barra de Título

A barra de título superior não pode ser removida das janelas Picture-in-Picture.

Referência: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Problemas de Qualidade de Vídeo

### Desfoque Inicial do Vídeo

Quando vídeos estão em iframes, taxa de bits, resolução e taxa de quadros são ajustados dinamicamente com base nas condições da rede. Inicialmente, são utilizadas taxas de bits baixas para estabelecimento rápido de conexão e adaptação de rede. A qualidade do vídeo melhora gradualmente à medida que as condições de rede se estabilizam.

## Limitações de Tradução de Legendas

Diferentes tipos de legendas afetam as capacidades de tradução:

| Tipo de Legenda                 | Descrição                                     | Suporte à Tradução                                        |
| ------------------------------- | --------------------------------------------- | --------------------------------------------------------- |
| Legendas Rígidas (Incorporadas) | Renderizadas diretamente nos quadros de vídeo | Não pode ser traduzido                                    |
| Legendas Macias (Internas)      | Empacotadas dentro do contêiner de vídeo      | Suporta tradução linha por linha, pode ser lento por rede |
| Legendas Externas (SRT, VTT)    | Arquivos de legendas independentes            | Suporta pré-tradução em lote, velocidade mais rápida      |

## Conteúdo Protegido por DRM

DualPiP não pode contornar a proteção de Gerenciamento de Direitos Digitais em vídeos.

## Restrições Cross-Origin

Alguns vídeos incorporados de domínios diferentes podem ter funcionalidade limitada.

---
