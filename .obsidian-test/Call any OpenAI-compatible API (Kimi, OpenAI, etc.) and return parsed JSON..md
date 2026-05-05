---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L117"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Call any OpenAI-compatible API (Kimi, OpenAI, etc.) and return parsed JSON.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Call any OpenAI-compatible API [Kimi, OpenAI, etc.] and return parsed JSON."]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_call_openai_compat["_call_openai_compat[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_call_openai_compat()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Call any OpenAI-compatible API (Kimi, OpenAI, etc.) and return parsed JSON.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None