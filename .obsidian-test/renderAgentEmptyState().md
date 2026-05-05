---
source_file: "vendor/claude-mem/src/services/context/formatters/AgentFormatter.ts"
type: "code"
community: "Community None"
degree: 5
location: "L170"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# renderAgentEmptyState()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["renderAgentEmptyState[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_context_formatters_agent_formatter_test_ts["agent-formatter.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_renderemptystate["renderEmptyState[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    center -->|"calls"| N_formatters_agentformatter_formatheaderdatetime["formatHeaderDateTime[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `contains` [EXTRACTED]
- [[ContextBuilder.ts]] - `imports` [EXTRACTED]
- [[agent-formatter.test.ts]] - `imports` [EXTRACTED]
- [[formatHeaderDateTime()_1]] - `calls` [EXTRACTED]
- [[renderEmptyState()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[renderAgentEmptyState()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None