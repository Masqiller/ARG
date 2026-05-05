---
source_file: "vendor/graphify/worked/example/raw/processor.py"
type: "code"
community: "Community None"
degree: 4
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_keywords()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["extract_keywords[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_processor_py["processor.py"]
    center -->|"calls"| N_raw_processor_normalize_text["normalize_text[]"]
    center -->|"calls"| N_raw_processor_enrich_document["enrich_document[]"]
    center -->|"rationale_for"| N_raw_processor_rationale_21["Pull non-stopword tokens from text, deduplicated."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Pull non-stopword tokens from text, deduplicated.]] - `rationale_for` [EXTRACTED]
- [[enrich_document()]] - `calls` [EXTRACTED]
- [[normalize_text()]] - `calls` [EXTRACTED]
- [[processor.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_keywords()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None