---
source_file: "vendor/claude-mem/src/utils/tag-stripping.ts"
type: "code"
community: "Community None"
degree: 5
location: "L48"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stripMemoryTagsFromJson()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["stripMemoryTagsFromJson[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_utils_tag_stripping_test_ts["tag-stripping.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"calls"| N_http_shared_ingestobservation["ingestObservation[]"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_tag_stripping_ts["tag-stripping.ts"]
    center -->|"calls"| N_utils_tag_stripping_striptags["stripTags[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ingestObservation()]] - `calls` [INFERRED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[stripTags()]] - `calls` [EXTRACTED]
- [[tag-stripping.test.ts]] - `imports` [EXTRACTED]
- [[tag-stripping.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stripMemoryTagsFromJson()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None