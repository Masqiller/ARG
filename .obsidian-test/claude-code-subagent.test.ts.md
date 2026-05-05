---
source_file: "vendor/claude-mem/tests/cli/adapters/claude-code-subagent.test.ts"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# claude-code-subagent.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["claude-code-subagent.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_claude_code_ts["claude-code.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-code.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[claude-code-subagent.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None