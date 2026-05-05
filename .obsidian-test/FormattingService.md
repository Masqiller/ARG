---
source_file: "vendor/claude-mem/src/services/worker/FormattingService.ts"
type: "code"
community: "Community None"
degree: 15
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# FormattingService

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["FormattingService"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_searchmanager_timeline_anchor_test_ts["SearchManager.timeline-anchor.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_formattingservice_ts["FormattingService.ts"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatsearchtips[".formatSearchTips[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formattime[".formatTime[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_estimatereadtokens[".estimateReadTokens[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatobservationindex[".formatObservationIndex[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatsessionindex[".formatSessionIndex[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatuserpromptindex[".formatUserPromptIndex[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formattableheader[".formatTableHeader[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatsearchtableheader[".formatSearchTableHeader[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatobservationsearchrow[".formatObservationSearchRow[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatsessionsearchrow[".formatSessionSearchRow[]"]
    center -->|"method"| N_worker_formattingservice_formattingservice_formatuserpromptsearchrow[".formatUserPromptSearchRow[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.estimateReadTokens()]] - `method` [EXTRACTED]
- [[.formatObservationIndex()]] - `method` [EXTRACTED]
- [[.formatObservationSearchRow()]] - `method` [EXTRACTED]
- [[.formatSearchTableHeader()]] - `method` [EXTRACTED]
- [[.formatSearchTips()]] - `method` [EXTRACTED]
- [[.formatSessionIndex()]] - `method` [EXTRACTED]
- [[.formatSessionSearchRow()]] - `method` [EXTRACTED]
- [[.formatTableHeader()]] - `method` [EXTRACTED]
- [[.formatTime()]] - `method` [EXTRACTED]
- [[.formatUserPromptIndex()]] - `method` [EXTRACTED]
- [[.formatUserPromptSearchRow()]] - `method` [EXTRACTED]
- [[FormattingService.ts]] - `contains` [EXTRACTED]
- [[SearchManager.timeline-anchor.test.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[FormattingService]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None