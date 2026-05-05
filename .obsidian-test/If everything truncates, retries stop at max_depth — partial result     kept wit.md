---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L371"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# If everything truncates, retries stop at max_depth — partial result     kept wit

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["If everything truncates, retries stop at max_depth — partial result     kept wit"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_adaptive_retry_caps_at_max_depth["test_adaptive_retry_caps_at_max_depth[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_adaptive_retry_caps_at_max_depth()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[If everything truncates, retries stop at max_depth — partial result     kept wit]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None