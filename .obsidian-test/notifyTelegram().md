---
source_file: "vendor/claude-mem/src/services/integrations/TelegramNotifier.ts"
type: "code"
community: "Community None"
degree: 6
location: "L66"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# notifyTelegram()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["notifyTelegram[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_processagentresponse["processAgentResponse[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_telegramnotifier_ts["TelegramNotifier.ts"]
    center -->|"calls"| N_integrations_telegramnotifier_splitcsv["splitCsv[]"]
    center -->|"calls"| N_integrations_telegramnotifier_formatmessage["formatMessage[]"]
    center -->|"calls"| N_integrations_telegramnotifier_postone["postOne[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[TelegramNotifier.ts]] - `contains` [EXTRACTED]
- [[formatMessage()_1]] - `calls` [EXTRACTED]
- [[postOne()]] - `calls` [EXTRACTED]
- [[processAgentResponse()]] - `calls` [INFERRED]
- [[splitCsv()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[notifyTelegram()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None