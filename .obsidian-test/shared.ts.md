---
source_file: "vendor/claude-mem/src/services/worker/http/shared.ts"
type: "code"
community: "Community None"
degree: 33
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shared.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 33

## Architecture Graph
```mermaid
graph LR
    center["shared.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"imports"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"imports"| N_worker_sessionmanager_sessionmanager["SessionManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports"| N_worker_databasemanager_databasemanager["DatabaseManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_events_sessioneventbroadcaster_ts["SessionEventBroadcaster.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DatabaseManager]] - `imports` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[IngestEventBus]] - `contains` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[PrivacyCheckValidator]] - `imports` [EXTRACTED]
- [[PrivacyCheckValidator.ts]] - `imports_from` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[SessionEventBroadcaster]] - `imports` [EXTRACTED]
- [[SessionEventBroadcaster.ts]] - `imports_from` [EXTRACTED]
- [[SessionManager]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[attachIngestGeneratorStarter()]] - `contains` [EXTRACTED]
- [[getProjectContext()]] - `imports` [EXTRACTED]
- [[ingestObservation()]] - `contains` [EXTRACTED]
- [[ingestPrompt()]] - `contains` [EXTRACTED]
- [[ingestSummary()]] - `contains` [EXTRACTED]
- [[isProjectExcluded()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[normalizePlatformSource()]] - `imports` [EXTRACTED]
- [[parser.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[platform-source.ts]] - `imports_from` [EXTRACTED]
- [[processor.ts]] - `imports_from` [EXTRACTED]
- [[project-filter.ts]] - `imports_from` [EXTRACTED]
- [[project-name.ts]] - `imports_from` [EXTRACTED]
- [[requireContext()]] - `contains` [EXTRACTED]
- [[setIngestContext()]] - `contains` [EXTRACTED]
- [[stripMemoryTagsFromJson()]] - `imports` [EXTRACTED]
- [[tag-stripping.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shared.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None