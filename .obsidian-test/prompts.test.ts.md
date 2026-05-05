---
source_file: "vendor/claude-mem/tests/sdk/prompts.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# prompts.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["prompts.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_prompts_ts["prompts.ts"]
    center -->|"imports"| N_sdk_prompts_buildobservationprompt["buildObservationPrompt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildObservationPrompt()]] - `imports` [EXTRACTED]
- [[prompts.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[prompts.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None