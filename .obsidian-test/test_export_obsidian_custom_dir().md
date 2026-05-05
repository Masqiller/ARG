---
source_file: "vendor/graphify/tests/test_cli_export.py"
type: "code"
community: "Community None"
degree: 5
location: "L96"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_export_obsidian_custom_dir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_export_obsidian_custom_dir[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cli_export_py["test_cli_export.py"]
    center -->|"calls"| N_tests_test_cli_export_run["_run[]"]
    center -->|"calls"| N_tests_test_cli_export_make_graph["_make_graph[]"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[_make_graph()_3]] - `calls` [EXTRACTED]
- [[_run()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_cli_export.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_export_obsidian_custom_dir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None