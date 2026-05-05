---
source_file: "vendor/graphify/worked/example/raw/processor.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L65"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Re-enrich all records in the index. Returns count of records updated.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Re-enrich all records in the index. Returns count of records updated."]:::centerNode
    center -->|"rationale_for"| N_raw_processor_reprocess_all["reprocess_all[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[reprocess_all()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Re-enrich all records in the index. Returns count of records updated.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None