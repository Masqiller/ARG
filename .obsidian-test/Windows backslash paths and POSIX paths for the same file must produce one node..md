---
source_file: "vendor/graphify/tests/test_build.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L54"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Windows backslash paths and POSIX paths for the same file must produce one node.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Windows backslash paths and POSIX paths for the same file must produce one node."]:::centerNode
    center -->|"rationale_for"| N_tests_test_build_test_source_file_backslash_normalized["test_source_file_backslash_normalized[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_source_file_backslash_normalized()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Windows backslash paths and POSIX paths for the same file must produce one node.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None