---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L253"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Video files do not contribute to total_words.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Video files do not contribute to total_words."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_detect_video_not_in_words["test_detect_video_not_in_words[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_detect_video_not_in_words()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Video files do not contribute to total_words.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None