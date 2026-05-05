---
source_file: "vendor/claude-mem/src/shared/plugin-state.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# plugin-state.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["plugin-state.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_infrastructure_plugin_disabled_check_test_ts["plugin-disabled-check.test.ts"]
    center -->|"contains"| N_shared_plugin_state_isplugindisabledinclaudesettings["isPluginDisabledInClaudeSettings[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isPluginDisabledInClaudeSettings()]] - `contains` [EXTRACTED]
- [[plugin-disabled-check.test.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[plugin-state.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None