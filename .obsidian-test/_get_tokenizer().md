---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 2
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _get_tokenizer()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_get_tokenizer[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"rationale_for"| N_graphify_llm_rationale_27["Return a tiktoken encoder for accurate token counts, or None if tiktoken     is"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return a tiktoken encoder for accurate token counts, or None if tiktoken     is]] - `rationale_for` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_get_tokenizer()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None