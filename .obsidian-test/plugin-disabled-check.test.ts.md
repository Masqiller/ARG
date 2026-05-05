---
source_file: "vendor/claude-mem/tests/infrastructure/plugin-disabled-check.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# plugin-disabled-check.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["plugin-disabled-check.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_plugin_state_ts["plugin-state.ts"]
    center -->|"imports"| N_shared_plugin_state_isplugindisabledinclaudesettings["isPluginDisabledInClaudeSettings[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isPluginDisabledInClaudeSettings()]] - `imports` [EXTRACTED]
- [[plugin-state.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[plugin-disabled-check.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None