---
source_file: "vendor/claude-mem/src/services/context/formatters/AgentFormatter.ts"
type: "code"
community: "Community None"
degree: 2
location: "L51"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# renderAgentContextEconomics()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["renderAgentContextEconomics[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_context_formatters_agent_formatter_test_ts["agent-formatter.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `contains` [EXTRACTED]
- [[agent-formatter.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[renderAgentContextEconomics()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None