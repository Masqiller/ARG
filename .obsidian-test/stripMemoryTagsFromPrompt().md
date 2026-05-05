---
source_file: "vendor/claude-mem/src/utils/tag-stripping.ts"
type: "code"
community: "Community None"
degree: 5
location: "L52"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stripMemoryTagsFromPrompt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["stripMemoryTagsFromPrompt[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_tag_stripping_test_ts["tag-stripping.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_tag_stripping_ts["tag-stripping.ts"]
    center -->|"calls"| N_utils_tag_stripping_striptags["stripTags[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[stripTags()]] - `calls` [EXTRACTED]
- [[summarize.ts]] - `imports` [EXTRACTED]
- [[tag-stripping.test.ts]] - `imports` [EXTRACTED]
- [[tag-stripping.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stripMemoryTagsFromPrompt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None