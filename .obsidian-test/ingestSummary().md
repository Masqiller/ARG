---
source_file: "vendor/claude-mem/src/services/worker/http/shared.ts"
type: "code"
community: "Community None"
degree: 7
location: "L232"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# ingestSummary()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["ingestSummary[]"]:::centerNode
    center -->|"calls"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_processagentresponse["processAgentResponse[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"calls"| N_http_shared_requirecontext["requireContext[]"]
    center -->|"calls"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    center -->|"calls"| N_routes_sessionroutes_sessionroutes_ensuregeneratorrunning[".ensureGeneratorRunning[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.ensureGeneratorRunning()]] - `calls` [INFERRED]
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[getProjectContext()]] - `calls` [INFERRED]
- [[normalizePlatformSource()]] - `calls` [INFERRED]
- [[processAgentResponse()]] - `calls` [INFERRED]
- [[requireContext()]] - `calls` [EXTRACTED]
- [[shared.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ingestSummary()]]
```

#graphify/code #graphify/INFERRED #community/Community_None