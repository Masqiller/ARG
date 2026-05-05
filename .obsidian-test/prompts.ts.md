---
source_file: "vendor/claude-mem/src/sdk/prompts.ts"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# prompts.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["prompts.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_response_processor_test_ts["response-processor.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_sdk_prompts_test_ts["prompts.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_domain_types_ts["types.ts"]
    center -->|"contains"| N_sdk_prompts_buildinitprompt["buildInitPrompt[]"]
    center -->|"contains"| N_sdk_prompts_buildobservationprompt["buildObservationPrompt[]"]
    center -->|"contains"| N_sdk_prompts_buildsummaryprompt["buildSummaryPrompt[]"]
    center -->|"contains"| N_sdk_prompts_buildcontinuationprompt["buildContinuationPrompt[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports_from` [EXTRACTED]
- [[buildContinuationPrompt()]] - `contains` [EXTRACTED]
- [[buildInitPrompt()]] - `contains` [EXTRACTED]
- [[buildObservationPrompt()]] - `contains` [EXTRACTED]
- [[buildSummaryPrompt()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[prompts.test.ts]] - `imports_from` [EXTRACTED]
- [[response-processor.test.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_5]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[prompts.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None