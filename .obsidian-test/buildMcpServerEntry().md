---
source_file: "vendor/claude-mem/tests/mcp-integrations.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildMcpServerEntry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["buildMcpServerEntry[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_mcp_integrations_test_ts["mcp-integrations.test.ts"]
    center -->|"calls"| N_tests_mcp_integrations_test_writemcpjsonconfig["writeMcpJsonConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[mcp-integrations.test.ts]] - `contains` [EXTRACTED]
- [[writeMcpJsonConfig()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildMcpServerEntry()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None