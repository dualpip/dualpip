# 확장 프로그램 제한사항

## 브라우저 호환성

현재 지원되는 브라우저:

- **Chrome** (기본 기능에는 버전 116 이상, AI 번역에는 138+ 필요)
- **Edge** (버전 116 이상)

참고: [Can I use DocumentPictureInPicture API](https://caniuse.com/?search=DocumentPictureInPicture)

## 기술적 제한

### 전체 화면 지원

Document Picture-in-Picture 창에는 최대 크기 제한이 있어 전체 화면 재생을 지원할 수 없습니다.

참고: [Document Picture-in-Picture maximum size](https://wicg.github.io/document-picture-in-picture/#maximum-size)

### 제목 표시줄 제거

화면 속 화면 창에서 상단 제목 표시줄을 제거할 수 없습니다.

참고: [Origin Visibility](https://wicg.github.io/document-picture-in-picture/#origin-visibility)

## 비디오 품질 문제

### 초기 비디오 흐림

비디오가 iframe 내에 있을 때 네트워크 조건에 따라 비트레이트, 해상도, 프레임 레이트가 동적으로 조정됩니다. 초기에는 빠른 연결 설정과 네트워크 적응을 위해 낮은 비트레이트가 사용됩니다. 네트워크 조건이 안정되면 비디오 품질이 점진적으로 향상됩니다.

## 자막 번역 제한

다양한 자막 유형이 번역 기능에 영향을 미칩니다:

| 자막 유형            | 설명                        | 번역 지원                                 |
| -------------------- | --------------------------- | ----------------------------------------- |
| 하드 자막 (내장)     | 비디오 프레임에 직접 렌더링 | 번역 불가                                 |
| 소프트 자막 (내부)   | 비디오 컨테이너 내 패키지화 | 줄별 번역 지원, 네트워크로 인한 지연 가능 |
| 외부 자막 (SRT, VTT) | 독립적인 자막 파일          | 일괄 사전 번역 지원, 빠른 속도            |

## DRM 보호 콘텐츠

DualPiP는 비디오의 디지털 저작권 관리 보호를 우회할 수 없습니다.

## 크로스 오리진 제한

다른 도메인의 일부 임베디드 비디오는 기능이 제한될 수 있습니다.

---
