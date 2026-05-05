---
source_file: "vendor/graphify/tests/test_export.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L142"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Node file paths in canvas must be vault-root-relative (just fname.md), not hardc

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Node file paths in canvas must be vault-root-relative [just fname.md], not hardc"]:::centerNode
    center -->|"rationale_for"| N_tests_test_export_test_to_canvas_file_paths_relative_to_vault["test_to_canvas_file_paths_relative_to_vault[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_to_canvas_file_paths_relative_to_vault()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Node file paths in canvas must be vault-root-relative (just fname.md), not hardc]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None