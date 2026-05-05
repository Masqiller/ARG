---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L119"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# AST-resolved call edges are deterministic and should be EXTRACTED/1.0.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["AST-resolved call edges are deterministic and should be EXTRACTED/1.0."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_calls_edges_are_extracted["test_calls_edges_are_extracted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_calls_edges_are_extracted()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AST-resolved call edges are deterministic and should be EXTRACTED1.0.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None