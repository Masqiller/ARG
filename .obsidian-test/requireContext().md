---
source_file: "vendor/claude-mem/src/services/worker/http/shared.ts"
type: "code"
community: "Community None"
degree: 5
location: "L73"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# requireContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["requireContext[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"calls"| N_http_shared_attachingestgeneratorstarter["attachIngestGeneratorStarter[]"]
    center -->|"calls"| N_http_shared_ingestobservation["ingestObservation[]"]
    center -->|"calls"| N_http_shared_ingestprompt["ingestPrompt[]"]
    center -->|"calls"| N_http_shared_ingestsummary["ingestSummary[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[attachIngestGeneratorStarter()]] - `calls` [EXTRACTED]
- [[ingestObservation()]] - `calls` [EXTRACTED]
- [[ingestPrompt()]] - `calls` [EXTRACTED]
- [[ingestSummary()]] - `calls` [EXTRACTED]
- [[shared.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[requireContext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None