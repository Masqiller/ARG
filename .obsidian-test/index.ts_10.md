---
source_file: "vendor/claude-mem/src/services/context/index.ts"
type: "code"
community: "Community None"
degree: 1
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
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_context_observation_compiler_test_ts["observation-compiler.test.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[observation-compiler.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_10]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None