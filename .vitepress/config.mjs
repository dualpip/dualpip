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
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dualpip/dualpip' }
    ]
  }
})