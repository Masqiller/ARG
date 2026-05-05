---
source_file: "vendor/claude-mem/src/shared/plugin-state.ts"
type: "code"
community: "Community None"
degree: 3
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isPluginDisabledInClaudeSettings()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["isPluginDisabledInClaudeSettings[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_infrastructure_plugin_disabled_check_test_ts["plugin-disabled-check.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_plugin_state_ts["plugin-state.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[plugin-disabled-check.test.ts]] - `imports` [EXTRACTED]
- [[plugin-state.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isPluginDisabledInClaudeSettings()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None