---
source_file: "vendor/claude-mem/tests/utils/tag-stripping.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# tag-stripping.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["tag-stripping.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_tag_stripping_ts["tag-stripping.ts"]
    center -->|"imports"| N_utils_tag_stripping_stripmemorytagsfromprompt["stripMemoryTagsFromPrompt[]"]
    center -->|"imports"| N_utils_tag_stripping_stripmemorytagsfromjson["stripMemoryTagsFromJson[]"]
    center -->|"imports"| N_utils_tag_stripping_isinternalprotocolpayload["isInternalProtocolPayload[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[isInternalProtocolPayload()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[stripMemoryTagsFromJson()]] - `imports` [EXTRACTED]
- [[stripMemoryTagsFromPrompt()]] - `imports` [EXTRACTED]
- [[tag-stripping.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[tag-stripping.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None