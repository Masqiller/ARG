---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L104"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# ImportError propagates when faster_whisper is not installed.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["ImportError propagates when faster_whisper is not installed."]:::centerNode
    center -->|"rationale_for"| N_tests_test_transcribe_test_transcribe_missing_faster_whisper["test_transcribe_missing_faster_whisper[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_transcribe_missing_faster_whisper()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ImportError propagates when faster_whisper is not installed.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None