import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DualPiP",
  description: "Watch videos in Picture-in-Picture mode with playback controls, bilingual subtitles, thumbnail previews, danmaku, and more.",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'DualPiP',
      description: 'Watch videos in Picture-in-Picture mode with playback controls, bilingual subtitles, thumbnail previews, danmaku, and more.',
      themeConfig: {
        nav: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Installation', link: '/installation' },
              { text: 'Quick Start', link: '/quick-start' }
            ]
          },
          {
            text: 'Player Settings',
            items: [
              { text: 'Subtitle Settings', link: '/player-settings/subtitle-settings' },
              { text: 'Danmaku Settings', link: '/player-settings/danmaku-settings' },
              { text: 'Translation Settings', link: '/player-settings/translation-settings' },
              { text: 'Video Settings', link: '/player-settings/video-settings' },
              { text: 'Advanced Settings', link: '/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Extension Limitations', link: '/limitations' },
              { text: 'About Premium', link: '/premium' }
            ]
          },
          {
            text: 'Reference',
            items: [
              { text: 'Video Platform Support', link: '/video-platforms-support' },
              { text: 'Changelog', link: '/changelog' }
            ]
          }
        ]
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      title: 'DualPiP',
      description: 'Videos im Bild-in-Bild-Modus mit Wiedergabesteuerung, zweisprachigen Untertiteln, Miniaturvorschau, Danmaku und mehr ansehen.',
      themeConfig: {
        nav: [
          { text: 'Einführung', link: '/de/introduction' },
          { text: 'Installation', link: '/de/installation' },
          { text: 'Schnellstart', link: '/de/quick-start' }
        ],
        sidebar: [
          {
            text: 'Erste Schritte',
            items: [
              { text: 'Einführung', link: '/de/introduction' },
              { text: 'Installation', link: '/de/installation' },
              { text: 'Schnellstart', link: '/de/quick-start' }
            ]
          },
          {
            text: 'Player-Einstellungen',
            items: [
              { text: 'Untertitel-Einstellungen', link: '/de/player-settings/subtitle-settings' },
              { text: 'Danmaku-Einstellungen', link: '/de/player-settings/danmaku-settings' },
              { text: 'Übersetzungs-Einstellungen', link: '/de/player-settings/translation-settings' },
              { text: 'Video-Einstellungen', link: '/de/player-settings/video-settings' },
              { text: 'Erweiterte Einstellungen', link: '/de/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Erweitert',
            items: [
              { text: 'Erweiterungs-Limitierungen', link: '/de/limitations' },
              { text: 'Über Premium', link: '/de/premium' }
            ]
          },
          {
            text: 'Referenz',
            items: [
              { text: 'Video-Plattform-Unterstützung', link: '/de/video-platforms-support' },
              { text: 'Änderungsprotokoll', link: '/de/changelog' }
            ]
          }
        ]
      }
    },
    zh_CN: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'DualPiP',
      description: '在画中画模式下观看视频，支持播放控制、双语字幕、缩略图预览、弹幕等功能。',
      themeConfig: {
        nav: [
          { text: '介绍', link: '/zh_CN/introduction' },
          { text: '安装', link: '/zh_CN/installation' },
          { text: '快速开始', link: '/zh_CN/quick-start' }
        ],
        sidebar: [
          {
            text: '开始使用',
            items: [
              { text: '介绍', link: '/zh_CN/introduction' },
              { text: '安装', link: '/zh_CN/installation' },
              { text: '快速开始', link: '/zh_CN/quick-start' }
            ]
          },
          {
            text: '播放器设置',
            items: [
              { text: '字幕设置', link: '/zh_CN/player-settings/subtitle-settings' },
              { text: '弹幕设置', link: '/zh_CN/player-settings/danmaku-settings' },
              { text: '翻译设置', link: '/zh_CN/player-settings/translation-settings' },
              { text: '视频设置', link: '/zh_CN/player-settings/video-settings' },
              { text: '更多设置', link: '/zh_CN/player-settings/advanced-settings' }
            ]
          },
          {
            text: '高级功能',
            items: [
              { text: '扩展限制', link: '/zh_CN/limitations' },
              { text: '关于高级版', link: '/zh_CN/premium' }
            ]
          },
          {
            text: '参考资料',
            items: [
              { text: '视频平台功能支持列表', link: '/zh_CN/video-platforms-support' },
              { text: '更新日志', link: '/zh_CN/changelog' }
            ]
          }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'DualPiP',
      description: 'ピクチャーインピクチャーモードで再生コントロール、二言語字幕、サムネイルプレビュー、弾幕などを使用してビデオを視聴できます。',
      themeConfig: {
        nav: [
          { text: 'はじめに', link: '/ja/introduction' },
          { text: 'インストール', link: '/ja/installation' },
          { text: 'クイックスタート', link: '/ja/quick-start' }
        ],
        sidebar: [
          {
            text: 'スタートガイド',
            items: [
              { text: 'はじめに', link: '/ja/introduction' },
              { text: 'インストール', link: '/ja/installation' },
              { text: 'クイックスタート', link: '/ja/quick-start' }
            ]
          },
          {
            text: 'プレーヤー設定',
            items: [
              { text: '字幕設定', link: '/ja/player-settings/subtitle-settings' },
              { text: '弾幕設定', link: '/ja/player-settings/danmaku-settings' },
              { text: '翻訳設定', link: '/ja/player-settings/translation-settings' },
              { text: 'ビデオ設定', link: '/ja/player-settings/video-settings' },
              { text: '詳細設定', link: '/ja/player-settings/advanced-settings' }
            ]
          },
          {
            text: '上級者向け',
            items: [
              { text: '拡張機能の制限', link: '/ja/limitations' },
              { text: 'プレミアムについて', link: '/ja/premium' }
            ]
          },
          {
            text: 'リファレンス',
            items: [
              { text: 'ビデオプラットフォーム対応', link: '/ja/video-platforms-support' },
              { text: '更新履歴', link: '/ja/changelog' }
            ]
          }
        ]
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      title: 'DualPiP',
      description: '재생 제어, 이중 언어 자막, 썸네일 미리보기, 댓글 등이 포함된 Picture-in-Picture 모드로 비디오를 시청하세요.',
      themeConfig: {
        nav: [
          { text: '소개', link: '/ko/introduction' },
          { text: '설치', link: '/ko/installation' },
          { text: '빠른 시작', link: '/ko/quick-start' }
        ],
        sidebar: [
          {
            text: '시작하기',
            items: [
              { text: '소개', link: '/ko/introduction' },
              { text: '설치', link: '/ko/installation' },
              { text: '빠른 시작', link: '/ko/quick-start' }
            ]
          },
          {
            text: '플레이어 설정',
            items: [
              { text: '자막 설정', link: '/ko/player-settings/subtitle-settings' },
              { text: '댓글 설정', link: '/ko/player-settings/danmaku-settings' },
              { text: '번역 설정', link: '/ko/player-settings/translation-settings' },
              { text: '비디오 설정', link: '/ko/player-settings/video-settings' },
              { text: '고급 설정', link: '/ko/player-settings/advanced-settings' }
            ]
          },
          {
            text: '고급',
            items: [
              { text: '확장 기능 제한사항', link: '/ko/limitations' },
              { text: '프리미엄 정보', link: '/ko/premium' }
            ]
          },
          {
            text: '참고자료',
            items: [
              { text: '비디오 플랫폼 지원', link: '/ko/video-platforms-support' },
              { text: '변경 로그', link: '/ko/changelog' }
            ]
          }
        ]
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      title: 'DualPiP',
      description: 'Mira videos en modo Picture-in-Picture con controles de reproducción, subtítulos bilingües, vista previa en miniatura, danmaku y más.',
      themeConfig: {
        nav: [
          { text: 'Introducción', link: '/es/introduction' },
          { text: 'Instalación', link: '/es/installation' },
          { text: 'Inicio Rápido', link: '/es/quick-start' }
        ],
        sidebar: [
          {
            text: 'Comenzando',
            items: [
              { text: 'Introducción', link: '/es/introduction' },
              { text: 'Instalación', link: '/es/installation' },
              { text: 'Inicio Rápido', link: '/es/quick-start' }
            ]
          },
          {
            text: 'Configuración del Reproductor',
            items: [
              { text: 'Configuración de Subtítulos', link: '/es/player-settings/subtitle-settings' },
              { text: 'Configuración de Danmaku', link: '/es/player-settings/danmaku-settings' },
              { text: 'Configuración de Traducción', link: '/es/player-settings/translation-settings' },
              { text: 'Configuración de Video', link: '/es/player-settings/video-settings' },
              { text: 'Configuración Avanzada', link: '/es/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Avanzado',
            items: [
              { text: 'Limitaciones de Extensión', link: '/es/limitations' },
              { text: 'Acerca de Premium', link: '/es/premium' }
            ]
          },
          {
            text: 'Referencia',
            items: [
              { text: 'Soporte de Plataformas de Video', link: '/es/video-platforms-support' },
              { text: 'Registro de Cambios', link: '/es/changelog' }
            ]
          }
        ]
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      title: 'DualPiP',
      description: 'Regardez des vidéos en mode Picture-in-Picture avec contrôles de lecture, sous-titres bilingues, aperçu en miniature, danmaku et plus.',
      themeConfig: {
        nav: [
          { text: 'Introduction', link: '/fr/introduction' },
          { text: 'Installation', link: '/fr/installation' },
          { text: 'Démarrage Rapide', link: '/fr/quick-start' }
        ],
        sidebar: [
          {
            text: 'Commencer',
            items: [
              { text: 'Introduction', link: '/fr/introduction' },
              { text: 'Installation', link: '/fr/installation' },
              { text: 'Démarrage Rapide', link: '/fr/quick-start' }
            ]
          },
          {
            text: 'Paramètres du Lecteur',
            items: [
              { text: 'Paramètres de Sous-titres', link: '/fr/player-settings/subtitle-settings' },
              { text: 'Paramètres Danmaku', link: '/fr/player-settings/danmaku-settings' },
              { text: 'Paramètres de Traduction', link: '/fr/player-settings/translation-settings' },
              { text: 'Paramètres Vidéo', link: '/fr/player-settings/video-settings' },
              { text: 'Paramètres Avancés', link: '/fr/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Avancé',
            items: [
              { text: 'Limitations d\'Extension', link: '/fr/limitations' },
              { text: 'À Propos de Premium', link: '/fr/premium' }
            ]
          },
          {
            text: 'Référence',
            items: [
              { text: 'Support des Plateformes Vidéo', link: '/fr/video-platforms-support' },
              { text: 'Journal des Modifications', link: '/fr/changelog' }
            ]
          }
        ]
      }
    },
    it: {
      label: 'Italiano',
      lang: 'it',
      title: 'DualPiP',
      description: 'Guarda video in modalità Picture-in-Picture con controlli di riproduzione, sottotitoli bilingue, anteprima miniature, danmaku e altro.',
      themeConfig: {
        nav: [
          { text: 'Introduzione', link: '/it/introduction' },
          { text: 'Installazione', link: '/it/installation' },
          { text: 'Avvio Rapido', link: '/it/quick-start' }
        ],
        sidebar: [
          {
            text: 'Iniziare',
            items: [
              { text: 'Introduzione', link: '/it/introduction' },
              { text: 'Installazione', link: '/it/installation' },
              { text: 'Avvio Rapido', link: '/it/quick-start' }
            ]
          },
          {
            text: 'Impostazioni del Lettore',
            items: [
              { text: 'Impostazioni Sottotitoli', link: '/it/player-settings/subtitle-settings' },
              { text: 'Impostazioni Danmaku', link: '/it/player-settings/danmaku-settings' },
              { text: 'Impostazioni Traduzione', link: '/it/player-settings/translation-settings' },
              { text: 'Impostazioni Video', link: '/it/player-settings/video-settings' },
              { text: 'Impostazioni Avanzate', link: '/it/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Avanzato',
            items: [
              { text: 'Limitazioni Estensione', link: '/it/limitations' },
              { text: 'Informazioni su Premium', link: '/it/premium' }
            ]
          },
          {
            text: 'Riferimento',
            items: [
              { text: 'Supporto Piattaforme Video', link: '/it/video-platforms-support' },
              { text: 'Registro delle Modifiche', link: '/it/changelog' }
            ]
          }
        ]
      }
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl',
      title: 'DualPiP',
      description: 'Bekijk video\'s in Picture-in-Picture modus met afspeelbesturing, tweetalige ondertitels, miniatuurvoorbeelden, danmaku en meer.',
      themeConfig: {
        nav: [
          { text: 'Introductie', link: '/nl/introduction' },
          { text: 'Installatie', link: '/nl/installation' },
          { text: 'Snelle Start', link: '/nl/quick-start' }
        ],
        sidebar: [
          {
            text: 'Aan de Slag',
            items: [
              { text: 'Introductie', link: '/nl/introduction' },
              { text: 'Installatie', link: '/nl/installation' },
              { text: 'Snelle Start', link: '/nl/quick-start' }
            ]
          },
          {
            text: 'Speler Instellingen',
            items: [
              { text: 'Ondertitel Instellingen', link: '/nl/player-settings/subtitle-settings' },
              { text: 'Danmaku Instellingen', link: '/nl/player-settings/danmaku-settings' },
              { text: 'Vertaling Instellingen', link: '/nl/player-settings/translation-settings' },
              { text: 'Video Instellingen', link: '/nl/player-settings/video-settings' },
              { text: 'Geavanceerde Instellingen', link: '/nl/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Geavanceerd',
            items: [
              { text: 'Uitbreiding Beperkingen', link: '/nl/limitations' },
              { text: 'Over Premium', link: '/nl/premium' }
            ]
          },
          {
            text: 'Referentie',
            items: [
              { text: 'Video Platform Ondersteuning', link: '/nl/video-platforms-support' },
              { text: 'Wijzigingslog', link: '/nl/changelog' }
            ]
          }
        ]
      }
    },
    pt: {
      label: 'Português',
      lang: 'pt',
      title: 'DualPiP',
      description: 'Assista vídeos em modo Picture-in-Picture com controles de reprodução, legendas bilíngues, visualização de miniaturas, danmaku e mais.',
      themeConfig: {
        nav: [
          { text: 'Introdução', link: '/pt/introduction' },
          { text: 'Instalação', link: '/pt/installation' },
          { text: 'Início Rápido', link: '/pt/quick-start' }
        ],
        sidebar: [
          {
            text: 'Começando',
            items: [
              { text: 'Introdução', link: '/pt/introduction' },
              { text: 'Instalação', link: '/pt/installation' },
              { text: 'Início Rápido', link: '/pt/quick-start' }
            ]
          },
          {
            text: 'Configurações do Player',
            items: [
              { text: 'Configurações de Legendas', link: '/pt/player-settings/subtitle-settings' },
              { text: 'Configurações Danmaku', link: '/pt/player-settings/danmaku-settings' },
              { text: 'Configurações de Tradução', link: '/pt/player-settings/translation-settings' },
              { text: 'Configurações de Vídeo', link: '/pt/player-settings/video-settings' },
              { text: 'Configurações Avançadas', link: '/pt/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Avançado',
            items: [
              { text: 'Limitações da Extensão', link: '/pt/limitations' },
              { text: 'Sobre Premium', link: '/pt/premium' }
            ]
          },
          {
            text: 'Referência',
            items: [
              { text: 'Suporte de Plataformas de Vídeo', link: '/pt/video-platforms-support' },
              { text: 'Registro de Alterações', link: '/pt/changelog' }
            ]
          }
        ]
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      title: 'DualPiP',
      description: 'Смотрите видео в режиме "картинка в картинке" с элементами управления воспроизведением, двуязычными субтитрами, превью миниатюр, данмаку и многим другим.',
      themeConfig: {
        nav: [
          { text: 'Введение', link: '/ru/introduction' },
          { text: 'Установка', link: '/ru/installation' },
          { text: 'Быстрый Старт', link: '/ru/quick-start' }
        ],
        sidebar: [
          {
            text: 'Начало Работы',
            items: [
              { text: 'Введение', link: '/ru/introduction' },
              { text: 'Установка', link: '/ru/installation' },
              { text: 'Быстрый Старт', link: '/ru/quick-start' }
            ]
          },
          {
            text: 'Настройки Плеера',
            items: [
              { text: 'Настройки Субтитров', link: '/ru/player-settings/subtitle-settings' },
              { text: 'Настройки Данмаку', link: '/ru/player-settings/danmaku-settings' },
              { text: 'Настройки Перевода', link: '/ru/player-settings/translation-settings' },
              { text: 'Настройки Видео', link: '/ru/player-settings/video-settings' },
              { text: 'Расширенные Настройки', link: '/ru/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Расширенные',
            items: [
              { text: 'Ограничения Расширения', link: '/ru/limitations' },
              { text: 'О Premium', link: '/ru/premium' }
            ]
          },
          {
            text: 'Справочник',
            items: [
              { text: 'Поддержка Видеоплатформ', link: '/ru/video-platforms-support' },
              { text: 'Журнал Изменений', link: '/ru/changelog' }
            ]
          }
        ]
      }
    },
    sv: {
      label: 'Svenska',
      lang: 'sv',
      title: 'DualPiP',
      description: 'Titta på videor i Picture-in-Picture-läge med uppspelningskontroller, tvåspråkiga undertexter, miniatyrförhandsvisningar, danmaku och mer.',
      themeConfig: {
        nav: [
          { text: 'Introduktion', link: '/sv/introduction' },
          { text: 'Installation', link: '/sv/installation' },
          { text: 'Snabbstart', link: '/sv/quick-start' }
        ],
        sidebar: [
          {
            text: 'Komma Igång',
            items: [
              { text: 'Introduktion', link: '/sv/introduction' },
              { text: 'Installation', link: '/sv/installation' },
              { text: 'Snabbstart', link: '/sv/quick-start' }
            ]
          },
          {
            text: 'Spelarinställningar',
            items: [
              { text: 'Undertextinställningar', link: '/sv/player-settings/subtitle-settings' },
              { text: 'Danmaku-inställningar', link: '/sv/player-settings/danmaku-settings' },
              { text: 'Översättningsinställningar', link: '/sv/player-settings/translation-settings' },
              { text: 'Videoinställningar', link: '/sv/player-settings/video-settings' },
              { text: 'Avancerade Inställningar', link: '/sv/player-settings/advanced-settings' }
            ]
          },
          {
            text: 'Avancerat',
            items: [
              { text: 'Tilläggs Begränsningar', link: '/sv/limitations' },
              { text: 'Om Premium', link: '/sv/premium' }
            ]
          },
          {
            text: 'Referens',
            items: [
              { text: 'Videoplattforms Support', link: '/sv/video-platforms-support' },
              { text: 'Ändringslogg', link: '/sv/changelog' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dualpip/dualpip' }
    ]
  },
  sitemap: {
    hostname: 'https://www.dualpip.cc'
  }
})