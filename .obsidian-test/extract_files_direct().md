---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 6
location: "L180"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_files_direct()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["extract_files_direct[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_read_files["_read_files[]"]
    center -->|"calls"| N_graphify_llm_call_openai_compat["_call_openai_compat[]"]
    center -->|"calls"| N_graphify_llm_call_claude["_call_claude[]"]
    center -->|"calls"| N_graphify_llm_extract_with_adaptive_retry["_extract_with_adaptive_retry[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_187["Extract semantic nodes/edges from a list of files using the given backend."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract semantic nodesedges from a list of files using the given backend.]] - `rationale_for` [EXTRACTED]
- [[_call_claude()]] - `calls` [EXTRACTED]
- [[_call_openai_compat()]] - `calls` [EXTRACTED]
- [[_extract_with_adaptive_retry()]] - `calls` [EXTRACTED]
- [[_read_files()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_files_direct()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None