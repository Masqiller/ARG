---
source_file: "vendor/claude-mem/src/services/context/types.ts"
type: "code"
community: "Community None"
degree: 11
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# types.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["types.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_context_observation_compiler_test_ts["observation-compiler.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_context_formatters_agent_formatter_test_ts["agent-formatter.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextconfigloader_ts["ContextConfigLoader.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_observationcompiler_ts["ObservationCompiler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_formatters_humanformatter_ts["HumanFormatter.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_sections_headerrenderer_ts["HeaderRenderer.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_sections_summaryrenderer_ts["SummaryRenderer.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_sections_footerrenderer_ts["FooterRenderer.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_sections_timelinerenderer_ts["TimelineRenderer.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `imports_from` [EXTRACTED]
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[ContextConfigLoader.ts]] - `imports_from` [EXTRACTED]
- [[FooterRenderer.ts]] - `imports_from` [EXTRACTED]
- [[HeaderRenderer.ts]] - `imports_from` [EXTRACTED]
- [[HumanFormatter.ts]] - `imports_from` [EXTRACTED]
- [[ObservationCompiler.ts]] - `imports_from` [EXTRACTED]
- [[SummaryRenderer.ts]] - `imports_from` [EXTRACTED]
- [[TimelineRenderer.ts]] - `imports_from` [EXTRACTED]
- [[agent-formatter.test.ts]] - `imports_from` [EXTRACTED]
- [[observation-compiler.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[types.ts_12]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None