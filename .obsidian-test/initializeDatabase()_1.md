---
source_file: "vendor/claude-mem/src/services/context/ContextBuilder.ts"
type: "code"
community: "Community None"
degree: 2
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# initializeDatabase()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["initializeDatabase[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_generatecontext["generateContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `contains` [EXTRACTED]
- [[generateContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[initializeDatabase()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None