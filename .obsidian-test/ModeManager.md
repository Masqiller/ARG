---
source_file: "vendor/claude-mem/src/services/domain/ModeManager.ts"
type: "code"
community: "Community None"
degree: 29
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ModeManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 29

## Architecture Graph
```mermaid
graph LR
    center["ModeManager"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_gemini_provider_test_ts["gemini_provider.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_formattingservice_ts["FormattingService.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_timelineservice_ts["TimelineService.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_resultformatter_ts["ResultFormatter.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_timelinebuilder_ts["TimelineBuilder.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_domain_modemanager_ts["ModeManager.ts"]
    center -->|"method"| N_domain_modemanager_modemanager_constructor[".constructor[]"]
    center -->|"method"| N_domain_modemanager_modemanager_getinstance[".getInstance[]"]
    center -->|"method"| N_domain_modemanager_modemanager_parseinheritance[".parseInheritance[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_34]] - `method` [EXTRACTED]
- [[.deepMerge()]] - `method` [EXTRACTED]
- [[.getActiveMode()]] - `method` [EXTRACTED]
- [[.getInstance()]] - `method` [EXTRACTED]
- [[.getObservationConcepts()]] - `method` [EXTRACTED]
- [[.getObservationTypes()]] - `method` [EXTRACTED]
- [[.getTypeIcon()_1]] - `method` [EXTRACTED]
- [[.getTypeLabel()]] - `method` [EXTRACTED]
- [[.getWorkEmoji()]] - `method` [EXTRACTED]
- [[.isPlainObject()]] - `method` [EXTRACTED]
- [[.loadMode()]] - `method` [EXTRACTED]
- [[.loadModeFile()]] - `method` [EXTRACTED]
- [[.parseInheritance()]] - `method` [EXTRACTED]
- [[.validateType()]] - `method` [EXTRACTED]
- [[AgentFormatter.ts]] - `imports` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[ContextConfigLoader.ts]] - `imports` [EXTRACTED]
- [[FormattingService.ts]] - `imports` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[HumanFormatter.ts]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `contains` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[ResultFormatter.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[SettingsRoutes.ts]] - `imports` [EXTRACTED]
- [[TimelineBuilder.ts]] - `imports` [EXTRACTED]
- [[TimelineService.ts]] - `imports` [EXTRACTED]
- [[gemini_provider.test.ts]] - `imports` [EXTRACTED]
- [[parser.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ModeManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None