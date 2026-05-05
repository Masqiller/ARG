---
source_file: "vendor/graphify/tests/test_build.py"
type: "code"
community: "Community None"
degree: 2
location: "L53"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_source_file_backslash_normalized()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_source_file_backslash_normalized[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_build_py["test_build.py"]
    center -->|"rationale_for"| N_tests_test_build_rationale_54["Windows backslash paths and POSIX paths for the same file must produce one node."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Windows backslash paths and POSIX paths for the same file must produce one node.]] - `rationale_for` [EXTRACTED]
- [[test_build.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_source_file_backslash_normalized()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None