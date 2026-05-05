---
source_file: "vendor/graphify/graphify/transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L169"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Transcribe a list of video/audio files or URLs, return paths to transcript .txt

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Transcribe a list of video/audio files or URLs, return paths to transcript .txt"]:::centerNode
    center -->|"rationale_for"| N_graphify_transcribe_transcribe_all["transcribe_all[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[transcribe_all()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Transcribe a list of videoaudio files or URLs, return paths to transcript .txt]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None