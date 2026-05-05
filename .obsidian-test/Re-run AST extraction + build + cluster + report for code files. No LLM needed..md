---
source_file: "vendor/graphify/graphify/watch.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L50"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Re-run AST extraction + build + cluster + report for code files. No LLM needed.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Re-run AST extraction + build + cluster + report for code files. No LLM needed."]:::centerNode
    center -->|"rationale_for"| N_graphify_watch_rebuild_code["_rebuild_code[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_rebuild_code()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Re-run AST extraction + build + cluster + report for code files. No LLM needed.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None