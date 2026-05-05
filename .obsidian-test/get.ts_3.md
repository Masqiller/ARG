---
source_file: "vendor/claude-mem/src/services/sqlite/prompts/get.ts"
type: "code"
community: "Community None"
degree: 11
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# get.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["get.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_types_database_ts["database.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_prompts_types_ts["types.ts"]
    center -->|"contains"| N_prompts_get_getuserprompt["getUserPrompt[]"]
    center -->|"contains"| N_prompts_get_getpromptnumberfromuserprompts["getPromptNumberFromUserPrompts[]"]
    center -->|"contains"| N_prompts_get_getlatestuserprompt["getLatestUserPrompt[]"]
    center -->|"contains"| N_prompts_get_getallrecentuserprompts["getAllRecentUserPrompts[]"]
    center -->|"contains"| N_prompts_get_getpromptbyid["getPromptById[]"]
    center -->|"contains"| N_prompts_get_getpromptsbyids["getPromptsByIds[]"]
    center -->|"contains"| N_prompts_get_getuserpromptsbyids["getUserPromptsByIds[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[database.ts]] - `imports_from` [EXTRACTED]
- [[getAllRecentUserPrompts()]] - `contains` [EXTRACTED]
- [[getLatestUserPrompt()]] - `contains` [EXTRACTED]
- [[getPromptById()]] - `contains` [EXTRACTED]
- [[getPromptNumberFromUserPrompts()]] - `contains` [EXTRACTED]
- [[getPromptsByIds()]] - `contains` [EXTRACTED]
- [[getUserPrompt()]] - `contains` [EXTRACTED]
- [[getUserPromptsByIds()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_10]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[get.ts_3]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None