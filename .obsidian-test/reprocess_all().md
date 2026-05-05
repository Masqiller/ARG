---
source_file: "vendor/graphify/worked/example/raw/processor.py"
type: "code"
community: "Community None"
degree: 4
location: "L64"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# reprocess_all()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["reprocess_all[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_processor_py["processor.py"]
    center -->|"calls"| N_raw_processor_process_and_save["process_and_save[]"]
    center -->|"rationale_for"| N_raw_processor_rationale_65["Re-enrich all records in the index. Returns count of records updated."]
    center -->|"calls"| N_raw_storage_load_index["load_index[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Re-enrich all records in the index. Returns count of records updated.]] - `rationale_for` [EXTRACTED]
- [[load_index()]] - `calls` [INFERRED]
- [[process_and_save()]] - `calls` [EXTRACTED]
- [[processor.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[reprocess_all()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None