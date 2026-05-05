---
source_file: "vendor/graphify/worked/example/raw/processor.py"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# processor.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["processor.py"]:::centerNode
    center -->|"contains"| N_raw_processor_normalize_text["normalize_text[]"]
    center -->|"contains"| N_raw_processor_extract_keywords["extract_keywords[]"]
    center -->|"contains"| N_raw_processor_enrich_document["enrich_document[]"]
    center -->|"contains"| N_raw_processor_find_cross_references["find_cross_references[]"]
    center -->|"contains"| N_raw_processor_process_and_save["process_and_save[]"]
    center -->|"contains"| N_raw_processor_reprocess_all["reprocess_all[]"]
    center -->|"rationale_for"| N_raw_processor_rationale_1["Processor module - transforms validated documents into enriched records ready fo"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Processor module - transforms validated documents into enriched records ready fo]] - `rationale_for` [EXTRACTED]
- [[enrich_document()]] - `contains` [EXTRACTED]
- [[extract_keywords()]] - `contains` [EXTRACTED]
- [[find_cross_references()]] - `contains` [EXTRACTED]
- [[normalize_text()]] - `contains` [EXTRACTED]
- [[process_and_save()]] - `contains` [EXTRACTED]
- [[reprocess_all()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[processor.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None