---
source_file: "vendor/claude-mem/src/utils/tag-stripping.ts"
type: "code"
community: "Community None"
degree: 4
location: "L64"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isInternalProtocolPayload()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["isInternalProtocolPayload[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_tag_stripping_test_ts["tag-stripping.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_tag_stripping_ts["tag-stripping.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[session-init.ts]] - `imports` [EXTRACTED]
- [[tag-stripping.test.ts]] - `imports` [EXTRACTED]
- [[tag-stripping.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isInternalProtocolPayload()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None