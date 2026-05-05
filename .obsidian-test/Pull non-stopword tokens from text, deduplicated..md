---
source_file: "vendor/graphify/worked/example/raw/processor.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L21"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Pull non-stopword tokens from text, deduplicated.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Pull non-stopword tokens from text, deduplicated."]:::centerNode
    center -->|"rationale_for"| N_raw_processor_extract_keywords["extract_keywords[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_keywords()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Pull non-stopword tokens from text, deduplicated.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None