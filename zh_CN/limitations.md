# 扩展限制

## 浏览器兼容性

目前支持的浏览器：

- **Chrome**（基础功能需要 116 及以上版本，AI 翻译需要 138+ 版本）
- **Edge**（版本 116 及以上）

参考：[Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## 技术限制

### 全屏播放支持

文档画中画窗口的最大尺寸有限制，无法支持全屏播放。

参考：[Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### 移除顶部标题栏

无法从画中画窗口中移除顶部标题栏。

参考：[Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## 视频质量问题

### 启动时视频模糊

当视频位于 iframe 中时，会根据网络状况动态调整码率、分辨率和帧率。刚开始连接时，通常初始码率较低，以便快速建立连接并适应当前网络环境。随着网络条件稳定，画面质量会逐渐提升。

## 字幕翻译限制

不同字幕类型会影响翻译效果和速度：

| 字幕类型                | 说明                 | 翻译支持                         |
| ----------------------- | -------------------- | -------------------------------- |
| 硬字幕（内嵌字幕）      | 直接渲染在视频画面中 | 无法翻译                         |
| 软字幕（内封字幕）      | 封装在视频容器内     | 支持逐条翻译，受网络影响可能较慢 |
| 外挂字幕（如 SRT、VTT） | 独立的字幕文件       | 支持批量预翻译，翻译速度快       |

## DRM 保护内容

DualPiP 无法绕过视频的数字版权管理保护。

## 跨域限制

来自不同域的某些嵌入视频可能功能有限。

---
