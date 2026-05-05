---
source_file: "vendor/claude-mem/src/services/worker/GeminiProvider.ts"
type: "code"
community: "Community None"
degree: 14
location: "L181"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# GeminiProvider

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["GeminiProvider"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_gemini_provider_test_ts["gemini_provider.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_constructor[".constructor[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_startsession[".startSession[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_processmessageloop[".processMessageLoop[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_processobservationmessage[".processObservationMessage[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_processsummarymessage[".processSummaryMessage[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_handlegeminierror[".handleGeminiError[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_truncatehistory[".truncateHistory[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_conversationtogeminicontents[".conversationToGeminiContents[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_querygeminimultiturn[".queryGeminiMultiTurn[]"]
    center -->|"method"| N_worker_geminiprovider_geminiprovider_getgeminiconfig[".getGeminiConfig[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_11]] - `method` [EXTRACTED]
- [[.conversationToGeminiContents()]] - `method` [EXTRACTED]
- [[.getGeminiConfig()]] - `method` [EXTRACTED]
- [[.handleGeminiError()]] - `method` [EXTRACTED]
- [[.processMessageLoop()]] - `method` [EXTRACTED]
- [[.processObservationMessage()_1]] - `method` [EXTRACTED]
- [[.processSummaryMessage()_1]] - `method` [EXTRACTED]
- [[.queryGeminiMultiTurn()]] - `method` [EXTRACTED]
- [[.startSession()_2]] - `method` [EXTRACTED]
- [[.truncateHistory()_1]] - `method` [EXTRACTED]
- [[GeminiProvider.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[gemini_provider.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GeminiProvider]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None