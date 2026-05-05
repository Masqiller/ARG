---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 4
location: "L96"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _parse_llm_json()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_parse_llm_json[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_call_openai_compat["_call_openai_compat[]"]
    center -->|"calls"| N_graphify_llm_call_claude["_call_claude[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_97["Strip optional markdown fences and parse JSON. Returns empty fragment on failure"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Strip optional markdown fences and parse JSON. Returns empty fragment on failure]] - `rationale_for` [EXTRACTED]
- [[_call_claude()]] - `calls` [EXTRACTED]
- [[_call_openai_compat()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_parse_llm_json()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None