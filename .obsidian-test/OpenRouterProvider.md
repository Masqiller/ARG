---
source_file: "vendor/claude-mem/src/services/worker/OpenRouterProvider.ts"
type: "code"
community: "Community None"
degree: 16
location: "L138"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# OpenRouterProvider

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["OpenRouterProvider"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_constructor[".constructor[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_startsession[".startSession[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_preparemessagemetadata[".prepareMessageMetadata[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_handleinitresponse[".handleInitResponse[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_processonemessage[".processOneMessage[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_processobservationmessage[".processObservationMessage[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_processsummarymessage[".processSummaryMessage[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_handlesessionerror[".handleSessionError[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_estimatetokens[".estimateTokens[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_truncatehistory[".truncateHistory[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_conversationtoopenaimessages[".conversationToOpenAIMessages[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_queryopenroutermultiturn[".queryOpenRouterMultiTurn[]"]
    center -->|"method"| N_worker_openrouterprovider_openrouterprovider_getopenrouterconfig[".getOpenRouterConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_10]] - `method` [EXTRACTED]
- [[.conversationToOpenAIMessages()]] - `method` [EXTRACTED]
- [[.estimateTokens()]] - `method` [EXTRACTED]
- [[.getOpenRouterConfig()]] - `method` [EXTRACTED]
- [[.handleInitResponse()]] - `method` [EXTRACTED]
- [[.handleSessionError()]] - `method` [EXTRACTED]
- [[.prepareMessageMetadata()]] - `method` [EXTRACTED]
- [[.processObservationMessage()]] - `method` [EXTRACTED]
- [[.processOneMessage()]] - `method` [EXTRACTED]
- [[.processSummaryMessage()]] - `method` [EXTRACTED]
- [[.queryOpenRouterMultiTurn()]] - `method` [EXTRACTED]
- [[.startSession()_1]] - `method` [EXTRACTED]
- [[.truncateHistory()]] - `method` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[OpenRouterProvider]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None