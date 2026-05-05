---
source_file: "vendor/claude-mem/tests/supervisor/env-sanitizer.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# env-sanitizer.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["env-sanitizer.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_env_sanitizer_ts["env-sanitizer.ts"]
    center -->|"imports"| N_supervisor_env_sanitizer_sanitizeenv["sanitizeEnv[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[env-sanitizer.ts]] - `imports_from` [EXTRACTED]
- [[sanitizeEnv()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[env-sanitizer.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None