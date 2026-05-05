---
source_file: "vendor/claude-mem/src/services/worker/http/shared.ts"
type: "code"
community: "Community None"
degree: 10
location: "L97"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# ingestObservation()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["ingestObservation[]"]:::centerNode
    center -->|"calls"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"calls"| N_http_shared_requirecontext["requireContext[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"calls"| N_utils_project_name_getprojectcontext["getProjectContext[]"]
    center -->|"calls"| N_utils_project_filter_isprojectexcluded["isProjectExcluded[]"]
    center -->|"calls"| N_utils_tag_stripping_stripmemorytagsfromjson["stripMemoryTagsFromJson[]"]
    center -->|"calls"| N_routes_sessionroutes_sessionroutes_ensuregeneratorrunning[".ensureGeneratorRunning[]"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_sendobservation[".sendObservation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.ensureGeneratorRunning()]] - `calls` [INFERRED]
- [[.sendObservation()]] - `calls` [INFERRED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[getProjectContext()]] - `calls` [INFERRED]
- [[isProjectExcluded()]] - `calls` [INFERRED]
- [[normalizePlatformSource()]] - `calls` [INFERRED]
- [[processor.ts]] - `imports` [EXTRACTED]
- [[requireContext()]] - `calls` [EXTRACTED]
- [[shared.ts]] - `contains` [EXTRACTED]
- [[stripMemoryTagsFromJson()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ingestObservation()]]
```

#graphify/code #graphify/INFERRED #community/Community_None