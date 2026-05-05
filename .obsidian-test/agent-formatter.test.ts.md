---
source_file: "vendor/claude-mem/tests/context/formatters/agent-formatter.test.ts"
type: "code"
community: "Community None"
degree: 19
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# agent-formatter.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["agent-formatter.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    center -->|"imports"| N_formatters_agentformatter_renderagentheader["renderAgentHeader[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentlegend["renderAgentLegend[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentcolumnkey["renderAgentColumnKey[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentcontextindex["renderAgentContextIndex[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentcontexteconomics["renderAgentContextEconomics[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentdayheader["renderAgentDayHeader[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentfileheader["renderAgentFileHeader[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagenttablerow["renderAgentTableRow[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentfullobservation["renderAgentFullObservation[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentsummaryitem["renderAgentSummaryItem[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentsummaryfield["renderAgentSummaryField[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentpreviouslysection["renderAgentPreviouslySection[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentfooter["renderAgentFooter[]"]
    center -->|"imports"| N_formatters_agentformatter_renderagentemptystate["renderAgentEmptyState[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `imports_from` [EXTRACTED]
- [[createTestConfig()]] - `contains` [EXTRACTED]
- [[createTestEconomics()]] - `contains` [EXTRACTED]
- [[createTestObservation()_1]] - `contains` [EXTRACTED]
- [[renderAgentColumnKey()]] - `imports` [EXTRACTED]
- [[renderAgentContextEconomics()]] - `imports` [EXTRACTED]
- [[renderAgentContextIndex()]] - `imports` [EXTRACTED]
- [[renderAgentDayHeader()]] - `imports` [EXTRACTED]
- [[renderAgentEmptyState()]] - `imports` [EXTRACTED]
- [[renderAgentFileHeader()]] - `imports` [EXTRACTED]
- [[renderAgentFooter()]] - `imports` [EXTRACTED]
- [[renderAgentFullObservation()]] - `imports` [EXTRACTED]
- [[renderAgentHeader()]] - `imports` [EXTRACTED]
- [[renderAgentLegend()]] - `imports` [EXTRACTED]
- [[renderAgentPreviouslySection()]] - `imports` [EXTRACTED]
- [[renderAgentSummaryField()]] - `imports` [EXTRACTED]
- [[renderAgentSummaryItem()]] - `imports` [EXTRACTED]
- [[renderAgentTableRow()]] - `imports` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[agent-formatter.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None