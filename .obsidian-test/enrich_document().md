---
source_file: "vendor/graphify/worked/example/raw/processor.py"
type: "code"
community: "Community None"
degree: 5
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# enrich_document()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["enrich_document[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_processor_py["processor.py"]
    center -->|"calls"| N_raw_processor_extract_keywords["extract_keywords[]"]
    center -->|"calls"| N_raw_processor_find_cross_references["find_cross_references[]"]
    center -->|"calls"| N_raw_processor_process_and_save["process_and_save[]"]
    center -->|"rationale_for"| N_raw_processor_rationale_33["Add keyword index and cross-references to a validated document."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Add keyword index and cross-references to a validated document.]] - `rationale_for` [EXTRACTED]
- [[extract_keywords()]] - `calls` [EXTRACTED]
- [[find_cross_references()]] - `calls` [EXTRACTED]
- [[process_and_save()]] - `calls` [EXTRACTED]
- [[processor.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[enrich_document()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None