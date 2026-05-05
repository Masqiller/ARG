---
source_file: "vendor/claude-mem/src/services/context/ObservationCompiler.ts"
type: "code"
community: "Community None"
degree: 2
location: "L181"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseAssistantTextFromLine()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["parseAssistantTextFromLine[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_observationcompiler_ts["ObservationCompiler.ts"]
    center -->|"calls"| N_context_observationcompiler_findlastassistantmessage["findLastAssistantMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ObservationCompiler.ts]] - `contains` [EXTRACTED]
- [[findLastAssistantMessage()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseAssistantTextFromLine()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None