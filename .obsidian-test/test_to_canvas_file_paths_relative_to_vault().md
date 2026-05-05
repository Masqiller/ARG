---
source_file: "vendor/graphify/tests/test_export.py"
type: "code"
community: "Community None"
degree: 5
location: "L141"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_to_canvas_file_paths_relative_to_vault()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_to_canvas_file_paths_relative_to_vault[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_export_py["test_export.py"]
    center -->|"calls"| N_tests_test_export_make_graph["make_graph[]"]
    center -->|"rationale_for"| N_tests_test_export_rationale_142["Node file paths in canvas must be vault-root-relative [just fname.md], not hardc"]
    center -->|"calls"| N_graphify_export_to_canvas["to_canvas[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Node file paths in canvas must be vault-root-relative (just fname.md), not hardc]] - `rationale_for` [EXTRACTED]
- [[make_graph()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_export.py]] - `contains` [EXTRACTED]
- [[to_canvas()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_to_canvas_file_paths_relative_to_vault()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None