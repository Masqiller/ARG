---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L242"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# detect() correctly counts video files and does not add them to word count.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["detect[] correctly counts video files and does not add them to word count."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_detect_finds_video_files["test_detect_finds_video_files[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_detect_finds_video_files()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect() correctly counts video files and does not add them to word count.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None