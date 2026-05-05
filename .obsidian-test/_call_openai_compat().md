---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 4
location: "L110"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _call_openai_compat()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_call_openai_compat[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_parse_llm_json["_parse_llm_json[]"]
    center -->|"calls"| N_graphify_llm_extract_files_direct["extract_files_direct[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_117["Call any OpenAI-compatible API [Kimi, OpenAI, etc.] and return parsed JSON."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Call any OpenAI-compatible API (Kimi, OpenAI, etc.) and return parsed JSON.]] - `rationale_for` [EXTRACTED]
- [[_parse_llm_json()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_call_openai_compat()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None