---
source_file: "vendor/claude-mem/tests/worker/provider-classifiers.test.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# provider-classifiers.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["provider-classifiers.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_provider_errors_ts["provider-errors.ts"]
    center -->|"imports"| N_worker_provider_errors_classifiedprovidererror["ClassifiedProviderError"]
    center -->|"imports"| N_worker_provider_errors_isclassified["isClassified[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports"| N_worker_claudeprovider_classifyclaudeerror["classifyClaudeError[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"imports"| N_worker_geminiprovider_classifygeminierror["classifyGeminiError[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_worker_openrouterprovider_classifyopenroutererror["classifyOpenRouterError[]"]
    center -->|"contains"| N_worker_provider_classifiers_test_overloadederror["OverloadedError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClassifiedProviderError]] - `imports` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports_from` [EXTRACTED]
- [[OverloadedError_1]] - `contains` [EXTRACTED]
- [[classifyClaudeError()]] - `imports` [EXTRACTED]
- [[classifyGeminiError()]] - `imports` [EXTRACTED]
- [[classifyOpenRouterError()]] - `imports` [EXTRACTED]
- [[isClassified()]] - `imports` [EXTRACTED]
- [[provider-errors.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[provider-classifiers.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None