---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 3
location: "L869"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# to_canvas()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["to_canvas[]"]:::centerNode
    center -->|"calls"| N_tests_test_export_test_to_canvas_file_paths_relative_to_vault["test_to_canvas_file_paths_relative_to_vault[]"]
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"rationale_for"| N_graphify_export_rationale_876["Export graph as an Obsidian Canvas file - communities as groups, nodes as cards."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Export graph as an Obsidian Canvas file - communities as groups, nodes as cards.]] - `rationale_for` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[test_to_canvas_file_paths_relative_to_vault()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_canvas()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None