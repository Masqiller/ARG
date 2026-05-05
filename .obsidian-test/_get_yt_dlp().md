---
source_file: "vendor/graphify/graphify/transcribe.py"
type: "code"
community: "Community None"
degree: 2
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _get_yt_dlp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_get_yt_dlp[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_transcribe_py["transcribe.py"]
    center -->|"calls"| N_graphify_transcribe_download_audio["download_audio[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[download_audio()]] - `calls` [EXTRACTED]
- [[transcribe.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_get_yt_dlp()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None