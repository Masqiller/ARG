---
source_file: "vendor/graphify/graphify/transcribe.py"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# transcribe.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["transcribe.py"]:::centerNode
    center -->|"contains"| N_graphify_transcribe_model_name["_model_name[]"]
    center -->|"contains"| N_graphify_transcribe_get_whisper["_get_whisper[]"]
    center -->|"contains"| N_graphify_transcribe_get_yt_dlp["_get_yt_dlp[]"]
    center -->|"contains"| N_graphify_transcribe_is_url["is_url[]"]
    center -->|"contains"| N_graphify_transcribe_download_audio["download_audio[]"]
    center -->|"contains"| N_graphify_transcribe_build_whisper_prompt["build_whisper_prompt[]"]
    center -->|"contains"| N_graphify_transcribe_transcribe["transcribe[]"]
    center -->|"contains"| N_graphify_transcribe_transcribe_all["transcribe_all[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_get_whisper()]] - `contains` [EXTRACTED]
- [[_get_yt_dlp()]] - `contains` [EXTRACTED]
- [[_model_name()]] - `contains` [EXTRACTED]
- [[build_whisper_prompt()]] - `contains` [EXTRACTED]
- [[download_audio()]] - `contains` [EXTRACTED]
- [[is_url()]] - `contains` [EXTRACTED]
- [[transcribe()]] - `contains` [EXTRACTED]
- [[transcribe_all()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transcribe.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None