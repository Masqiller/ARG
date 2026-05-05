---
source_file: "vendor/claude-mem/src/utils/tag-stripping.ts"
type: "code"
community: "Community None"
degree: 3
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stripTags()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["stripTags[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_utils_tag_stripping_ts["tag-stripping.ts"]
    center -->|"calls"| N_utils_tag_stripping_stripmemorytagsfromjson["stripMemoryTagsFromJson[]"]
    center -->|"calls"| N_utils_tag_stripping_stripmemorytagsfromprompt["stripMemoryTagsFromPrompt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[stripMemoryTagsFromJson()]] - `calls` [EXTRACTED]
- [[stripMemoryTagsFromPrompt()]] - `calls` [EXTRACTED]
- [[tag-stripping.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stripTags()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None