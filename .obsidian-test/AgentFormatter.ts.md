---
source_file: "vendor/claude-mem/src/services/context/formatters/AgentFormatter.ts"
type: "code"
community: "Community None"
degree: 25
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# AgentFormatter.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 25

## Architecture Graph
```mermaid
graph LR
    center["AgentFormatter.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_context_formatters_agent_formatter_test_ts["agent-formatter.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_domain_modemanager_ts["ModeManager.ts"]
    center -->|"imports"| N_domain_modemanager_modemanager["ModeManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_types_ts["types.ts"]
    center -->|"contains"| N_formatters_agentformatter_formatheaderdatetime["formatHeaderDateTime[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagentheader["renderAgentHeader[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagentlegend["renderAgentLegend[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagentcolumnkey["renderAgentColumnKey[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagentcontextindex["renderAgentContextIndex[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagentcontexteconomics["renderAgentContextEconomics[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagentdayheader["renderAgentDayHeader[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagentfileheader["renderAgentFileHeader[]"]
    center -->|"contains"| N_formatters_agentformatter_compacttime["compactTime[]"]
    center -->|"contains"| N_formatters_agentformatter_renderagenttablerow["renderAgentTableRow[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[FooterRenderer.ts]] - `imports_from` [EXTRACTED]
- [[HeaderRenderer.ts]] - `imports_from` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[SummaryRenderer.ts]] - `imports_from` [EXTRACTED]
- [[TimelineRenderer.ts]] - `imports_from` [EXTRACTED]
- [[agent-formatter.test.ts]] - `imports_from` [EXTRACTED]
- [[compactTime()_1]] - `contains` [EXTRACTED]
- [[formatHeaderDateTime()_1]] - `contains` [EXTRACTED]
- [[renderAgentColumnKey()]] - `contains` [EXTRACTED]
- [[renderAgentContextEconomics()]] - `contains` [EXTRACTED]
- [[renderAgentContextIndex()]] - `contains` [EXTRACTED]
- [[renderAgentDayHeader()]] - `contains` [EXTRACTED]
- [[renderAgentEmptyState()]] - `contains` [EXTRACTED]
- [[renderAgentFileHeader()]] - `contains` [EXTRACTED]
- [[renderAgentFooter()]] - `contains` [EXTRACTED]
- [[renderAgentFullObservation()]] - `contains` [EXTRACTED]
- [[renderAgentHeader()]] - `contains` [EXTRACTED]
- [[renderAgentLegend()]] - `contains` [EXTRACTED]
- [[renderAgentPreviouslySection()]] - `contains` [EXTRACTED]
- [[renderAgentSummaryField()]] - `contains` [EXTRACTED]
- [[renderAgentSummaryItem()]] - `contains` [EXTRACTED]
- [[renderAgentTableRow()]] - `contains` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AgentFormatter.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None