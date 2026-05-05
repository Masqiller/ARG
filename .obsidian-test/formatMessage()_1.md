---
source_file: "vendor/claude-mem/src/services/integrations/TelegramNotifier.ts"
type: "code"
community: "Community None"
degree: 3
location: "L33"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatMessage()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["formatMessage[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_telegramnotifier_ts["TelegramNotifier.ts"]
    center -->|"calls"| N_integrations_telegramnotifier_escapemarkdownv2["escapeMarkdownV2[]"]
    center -->|"calls"| N_integrations_telegramnotifier_notifytelegram["notifyTelegram[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[TelegramNotifier.ts]] - `contains` [EXTRACTED]
- [[escapeMarkdownV2()]] - `calls` [EXTRACTED]
- [[notifyTelegram()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatMessage()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None