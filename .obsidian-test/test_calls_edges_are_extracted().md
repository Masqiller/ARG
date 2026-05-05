---
source_file: "vendor/graphify/tests/test_extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L118"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_calls_edges_are_extracted()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_calls_edges_are_extracted[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_extract_py["test_extract.py"]
    center -->|"rationale_for"| N_tests_test_extract_rationale_119["AST-resolved call edges are deterministic and should be EXTRACTED/1.0."]
    center -->|"calls"| N_graphify_extract_extract_python["extract_python[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AST-resolved call edges are deterministic and should be EXTRACTED1.0.]] - `rationale_for` [EXTRACTED]
- [[extract_python()]] - `calls` [INFERRED]
- [[test_extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_calls_edges_are_extracted()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None