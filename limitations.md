# Extension Limitations

## Browser Compatibility

Currently supported browsers:

- **Chrome** (version 116 and above for basic features, 138+ for AI translation)
- **Edge** (version 116 and above)

Reference: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## Technical Limitations

### Full Screen Support

Document Picture-in-Picture windows have maximum size limitations and cannot support full screen playback.

Reference: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### Title Bar Removal

The top title bar cannot be removed from Picture-in-Picture windows.

Reference: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## Video Quality Issues

### Initial Video Blurriness

When videos are in iframes, they dynamically adjust bitrate, resolution, and frame rate based on network conditions. Initially, lower bitrates are used for quick connection establishment and network adaptation. Video quality will gradually improve as network conditions stabilize.

## Subtitle Translation Limitations

Different subtitle types affect translation capabilities:

| Subtitle Type                 | Description                         | Translation Support                                           |
| ----------------------------- | ----------------------------------- | ------------------------------------------------------------- |
| Hard Subtitles (Embedded)     | Rendered directly into video frames | Cannot translate                                              |
| Soft Subtitles (Internal)     | Packaged within video container     | Supports line-by-line translation, may be slow due to network |
| External Subtitles (SRT, VTT) | Independent subtitle files          | Supports batch pre-translation, faster speed                  |

## DRM-Protected Content

DualPiP cannot bypass Digital Rights Management protection on videos.

## Cross-Origin Restrictions

Some embedded videos from different domains may have limited functionality.

---

todo
