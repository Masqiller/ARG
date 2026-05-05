---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 5
location: "L624"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# to_obsidian()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["to_obsidian[]"]:::centerNode
    center -->|"calls"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_obsidian_tag["_obsidian_tag[]"]
    center -->|"rationale_for"| N_graphify_export_rationale_631["Export graph as an Obsidian vault - one .md file per node with [[wikilinks]],"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[Export graph as an Obsidian vault - one .md file per node with wikilinks,]] - `rationale_for` [EXTRACTED]
- [[_obsidian_tag()]] - `calls` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[run_pipeline()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_obsidian()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None