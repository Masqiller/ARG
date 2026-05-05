---
source_file: "vendor/claude-mem/src/sdk/prompts.ts"
type: "code"
community: "Community None"
degree: 7
location: "L115"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildSummaryPrompt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["buildSummaryPrompt[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_sdk_prompts_ts["prompts.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_createmessagegenerator[".createMessageGenerator[]"]
    center -->|"calls"| N_worker_openrouterprovider_openrouterprovider_processsummarymessage[".processSummaryMessage[]"]
    center -->|"calls"| N_worker_geminiprovider_geminiprovider_processsummarymessage[".processSummaryMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.createMessageGenerator()]] - `calls` [INFERRED]
- [[.processSummaryMessage()]] - `calls` [INFERRED]
- [[.processSummaryMessage()_1]] - `calls` [INFERRED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[prompts.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildSummaryPrompt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None