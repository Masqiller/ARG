---
source_file: "vendor/claude-mem/openclaw/src/index.ts"
type: "code"
community: "Community None"
degree: 3
location: "L204"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildGetSourceLabel()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["buildGetSourceLabel[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_openclaw_src_index_ts["index.ts"]
    center -->|"calls"| N_src_index_poolemojiforagent["poolEmojiForAgent[]"]
    center -->|"calls"| N_src_index_claudememplugin["claudeMemPlugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claudeMemPlugin()]] - `calls` [EXTRACTED]
- [[index.ts]] - `contains` [EXTRACTED]
- [[poolEmojiForAgent()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildGetSourceLabel()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None