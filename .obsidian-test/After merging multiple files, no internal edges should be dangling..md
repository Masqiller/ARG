---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L100"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# After merging multiple files, no internal edges should be dangling.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["After merging multiple files, no internal edges should be dangling."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_no_dangling_edges_on_extract["test_no_dangling_edges_on_extract[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_no_dangling_edges_on_extract()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[After merging multiple files, no internal edges should be dangling.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None