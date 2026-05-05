---
source_file: "vendor/claude-mem/tests/mcp-integrations.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# mcp-integrations.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["mcp-integrations.test.ts"]:::centerNode
    center -->|"imports"| N_utils_json_utils_readjsonsafe["readJsonSafe[]"]
    center -->|"imports"| N_utils_context_injection_injectcontextintomarkdownfile["injectContextIntoMarkdownFile[]"]
    center -->|"contains"| N_tests_mcp_integrations_test_buildmcpserverentry["buildMcpServerEntry[]"]
    center -->|"contains"| N_tests_mcp_integrations_test_writemcpjsonconfig["writeMcpJsonConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildMcpServerEntry()]] - `contains` [EXTRACTED]
- [[injectContextIntoMarkdownFile()]] - `imports` [EXTRACTED]
- [[readJsonSafe()]] - `imports` [EXTRACTED]
- [[writeMcpJsonConfig()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[mcp-integrations.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None