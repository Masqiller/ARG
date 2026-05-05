---
source_file: "vendor/claude-mem/src/services/integrations/TelegramNotifier.ts"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TelegramNotifier.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["TelegramNotifier.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_integrations_telegramnotifier_escapemarkdownv2["escapeMarkdownV2[]"]
    center -->|"contains"| N_integrations_telegramnotifier_splitcsv["splitCsv[]"]
    center -->|"contains"| N_integrations_telegramnotifier_formatmessage["formatMessage[]"]
    center -->|"contains"| N_integrations_telegramnotifier_postone["postOne[]"]
    center -->|"contains"| N_integrations_telegramnotifier_notifytelegram["notifyTelegram[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[escapeMarkdownV2()]] - `contains` [EXTRACTED]
- [[formatMessage()_1]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[notifyTelegram()]] - `contains` [EXTRACTED]
- [[parser.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[postOne()]] - `contains` [EXTRACTED]
- [[splitCsv()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TelegramNotifier.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None