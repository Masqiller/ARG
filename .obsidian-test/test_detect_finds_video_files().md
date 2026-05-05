---
source_file: "vendor/graphify/tests/test_detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L241"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_detect_finds_video_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_detect_finds_video_files[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_detect_py["test_detect.py"]
    center -->|"rationale_for"| N_tests_test_detect_rationale_242["detect[] correctly counts video files and does not add them to word count."]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detect()]] - `calls` [INFERRED]
- [[detect() correctly counts video files and does not add them to word count.]] - `rationale_for` [EXTRACTED]
- [[test_detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_detect_finds_video_files()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None