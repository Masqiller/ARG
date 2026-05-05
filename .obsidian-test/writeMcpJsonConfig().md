---
source_file: "vendor/claude-mem/tests/mcp-integrations.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeMcpJsonConfig()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["writeMcpJsonConfig[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_mcp_integrations_test_ts["mcp-integrations.test.ts"]
    center -->|"calls"| N_tests_mcp_integrations_test_buildmcpserverentry["buildMcpServerEntry[]"]
    center -->|"calls"| N_utils_json_utils_readjsonsafe["readJsonSafe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildMcpServerEntry()]] - `calls` [EXTRACTED]
- [[mcp-integrations.test.ts]] - `contains` [EXTRACTED]
- [[readJsonSafe()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeMcpJsonConfig()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None