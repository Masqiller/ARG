---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L153"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Call Anthropic Claude directly (not via OpenAI compat layer).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Call Anthropic Claude directly [not via OpenAI compat layer]."]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_call_claude["_call_claude[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_call_claude()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Call Anthropic Claude directly (not via OpenAI compat layer).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None