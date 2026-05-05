---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L224"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Video and audio file extensions should classify as VIDEO.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Video and audio file extensions should classify as VIDEO."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_classify_video_extensions["test_classify_video_extensions[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_classify_video_extensions()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Video and audio file extensions should classify as VIDEO.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None