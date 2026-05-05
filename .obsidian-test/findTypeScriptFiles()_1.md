---
source_file: "vendor/claude-mem/tests/log-level-audit.test.ts"
type: "code"
community: "Community None"
degree: 1
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# findTypeScriptFiles()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["findTypeScriptFiles[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_log_level_audit_test_ts["log-level-audit.test.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[log-level-audit.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[findTypeScriptFiles()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None