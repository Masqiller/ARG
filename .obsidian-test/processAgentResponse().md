---
source_file: "vendor/claude-mem/src/services/worker/agents/ResponseProcessor.ts"
type: "code"
community: "Community None"
degree: 15
location: "L17"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# processAgentResponse()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["processAgentResponse[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_agents_response_processor_test_ts["response-processor.test.ts"]
    center -->|"calls"| N_sdk_parser_parseagentxml["parseAgentXml[]"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    center -->|"calls"| N_worker_openrouterprovider_openrouterprovider_handleinitresponse[".handleInitResponse[]"]
    center -->|"calls"| N_worker_openrouterprovider_openrouterprovider_processobservationmessage[".processObservationMessage[]"]
    center -->|"calls"| N_worker_openrouterprovider_openrouterprovider_processsummarymessage[".processSummaryMessage[]"]
    center -->|"calls"| N_worker_geminiprovider_geminiprovider_startsession[".startSession[]"]
    center -->|"calls"| N_worker_geminiprovider_geminiprovider_processobservationmessage[".processObservationMessage[]"]
    center -->|"calls"| N_worker_geminiprovider_geminiprovider_processsummarymessage[".processSummaryMessage[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_normalizesummaryforstorage["normalizeSummaryForStorage[]"]
    center -->|"calls"| N_agents_responseprocessor_syncandbroadcastobservations["syncAndBroadcastObservations[]"]
    center -->|"calls"| N_agents_responseprocessor_syncandbroadcastsummary["syncAndBroadcastSummary[]"]
    center -->|"calls"| N_http_shared_ingestsummary["ingestSummary[]"]
    center -->|"calls"| N_integrations_telegramnotifier_notifytelegram["notifyTelegram[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.handleInitResponse()]] - `calls` [INFERRED]
- [[.processObservationMessage()]] - `calls` [INFERRED]
- [[.processObservationMessage()_1]] - `calls` [INFERRED]
- [[.processSummaryMessage()]] - `calls` [INFERRED]
- [[.processSummaryMessage()_1]] - `calls` [INFERRED]
- [[.startSession()]] - `calls` [INFERRED]
- [[.startSession()_2]] - `calls` [INFERRED]
- [[ResponseProcessor.ts]] - `contains` [EXTRACTED]
- [[ingestSummary()]] - `calls` [INFERRED]
- [[normalizeSummaryForStorage()]] - `calls` [EXTRACTED]
- [[notifyTelegram()]] - `calls` [INFERRED]
- [[parseAgentXml()]] - `calls` [INFERRED]
- [[response-processor.test.ts]] - `imports` [EXTRACTED]
- [[syncAndBroadcastObservations()]] - `calls` [EXTRACTED]
- [[syncAndBroadcastSummary()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[processAgentResponse()]]
```

#graphify/code #graphify/INFERRED #community/Community_None