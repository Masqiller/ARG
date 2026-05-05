---
source_file: "vendor/claude-mem/src/services/context/ObservationCompiler.ts"
type: "code"
community: "Community None"
degree: 5
location: "L232"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getPriorSessionMessages()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["getPriorSessionMessages[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_context_observationcompiler_ts["ObservationCompiler.ts"]
    center -->|"calls"| N_context_observationcompiler_cwdtodashed["cwdToDashed[]"]
    center -->|"calls"| N_context_observationcompiler_extractpriormessages["extractPriorMessages[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_buildcontextoutput["buildContextOutput[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports` [EXTRACTED]
- [[ObservationCompiler.ts]] - `contains` [EXTRACTED]
- [[buildContextOutput()]] - `calls` [INFERRED]
- [[cwdToDashed()]] - `calls` [EXTRACTED]
- [[extractPriorMessages()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getPriorSessionMessages()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None