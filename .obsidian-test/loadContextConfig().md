---
source_file: "vendor/claude-mem/src/services/context/ContextConfigLoader.ts"
type: "code"
community: "Community None"
degree: 3
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadContextConfig()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["loadContextConfig[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_contextconfigloader_ts["ContextConfigLoader.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_generatecontext["generateContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports` [EXTRACTED]
- [[ContextConfigLoader.ts]] - `contains` [EXTRACTED]
- [[generateContext()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadContextConfig()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None