---
source_file: "vendor/graphify/tests/test_detect.py"
type: "code"
community: "Community None"
degree: 2
location: "L35"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_count_words_sample_md()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_count_words_sample_md[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_detect_py["test_detect.py"]
    center -->|"calls"| N_graphify_detect_count_words["count_words[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[count_words()]] - `calls` [INFERRED]
- [[test_detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_count_words_sample_md()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None