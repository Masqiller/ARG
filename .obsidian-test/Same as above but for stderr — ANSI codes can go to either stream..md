---
source_file: "vendor/graphify/tests/test_cluster.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L70"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Same as above but for stderr — ANSI codes can go to either stream.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Same as above but for stderr — ANSI codes can go to either stream."]:::centerNode
    center -->|"rationale_for"| N_tests_test_cluster_test_cluster_does_not_write_to_stderr["test_cluster_does_not_write_to_stderr[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_cluster_does_not_write_to_stderr()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Same as above but for stderr — ANSI codes can go to either stream.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None