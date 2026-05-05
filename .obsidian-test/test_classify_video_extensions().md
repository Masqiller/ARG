---
source_file: "vendor/graphify/tests/test_detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L223"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_classify_video_extensions()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_classify_video_extensions[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_detect_py["test_detect.py"]
    center -->|"rationale_for"| N_tests_test_detect_rationale_224["Video and audio file extensions should classify as VIDEO."]
    center -->|"calls"| N_graphify_detect_classify_file["classify_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Video and audio file extensions should classify as VIDEO.]] - `rationale_for` [EXTRACTED]
- [[classify_file()]] - `calls` [INFERRED]
- [[test_detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_classify_video_extensions()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None