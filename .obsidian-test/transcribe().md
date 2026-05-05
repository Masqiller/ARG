---
source_file: "vendor/graphify/graphify/transcribe.py"
type: "code"
community: "Community None"
degree: 11
location: "L116"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# transcribe()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["transcribe[]"]:::centerNode
    center -->|"calls"| N_tests_test_transcribe_test_transcribe_uses_cache["test_transcribe_uses_cache[]"]
    center -->|"calls"| N_tests_test_transcribe_test_transcribe_force_reruns["test_transcribe_force_reruns[]"]
    center -->|"calls"| N_tests_test_transcribe_test_transcribe_missing_faster_whisper["test_transcribe_missing_faster_whisper[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_transcribe_py["transcribe.py"]
    center -->|"calls"| N_graphify_transcribe_model_name["_model_name[]"]
    center -->|"calls"| N_graphify_transcribe_get_whisper["_get_whisper[]"]
    center -->|"calls"| N_graphify_transcribe_is_url["is_url[]"]
    center -->|"calls"| N_graphify_transcribe_download_audio["download_audio[]"]
    center -->|"calls"| N_graphify_transcribe_transcribe_all["transcribe_all[]"]
    center -->|"rationale_for"| N_graphify_transcribe_rationale_122["Transcribe a video/audio file or URL to a .txt transcript.      If video_path is"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Transcribe a videoaudio file or URL to a .txt transcript.      If video_path is]] - `rationale_for` [EXTRACTED]
- [[_get_whisper()]] - `calls` [EXTRACTED]
- [[_model_name()]] - `calls` [EXTRACTED]
- [[download_audio()]] - `calls` [EXTRACTED]
- [[is_url()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_transcribe_force_reruns()]] - `calls` [INFERRED]
- [[test_transcribe_missing_faster_whisper()]] - `calls` [INFERRED]
- [[test_transcribe_uses_cache()]] - `calls` [INFERRED]
- [[transcribe.py]] - `contains` [EXTRACTED]
- [[transcribe_all()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transcribe()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None