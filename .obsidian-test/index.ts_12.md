---
source_file: "vendor/claude-mem/src/integrations/opencode-plugin/index.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"contains"| N_opencode_plugin_index_resolveworkerport["resolveWorkerPort[]"]
    center -->|"contains"| N_opencode_plugin_index_workerpostfireandforget["workerPostFireAndForget[]"]
    center -->|"contains"| N_opencode_plugin_index_workergettext["workerGetText[]"]
    center -->|"contains"| N_opencode_plugin_index_getorcreatecontentsessionid["getOrCreateContentSessionId[]"]
    center -->|"contains"| N_opencode_plugin_index_claudememplugin["ClaudeMemPlugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeMemPlugin()]] - `contains` [EXTRACTED]
- [[getOrCreateContentSessionId()]] - `contains` [EXTRACTED]
- [[resolveWorkerPort()]] - `contains` [EXTRACTED]
- [[workerGetText()_1]] - `contains` [EXTRACTED]
- [[workerPostFireAndForget()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_12]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None