---
source_file: "vendor/claude-mem/tests/worker/provider-errors.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# provider-errors.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["provider-errors.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_provider_errors_ts["provider-errors.ts"]
    center -->|"imports"| N_worker_provider_errors_classifiedprovidererror["ClassifiedProviderError"]
    center -->|"imports"| N_worker_provider_errors_isclassified["isClassified[]"]
    center -->|"contains"| N_worker_provider_errors_test_overloadederror["OverloadedError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClassifiedProviderError]] - `imports` [EXTRACTED]
- [[OverloadedError]] - `contains` [EXTRACTED]
- [[isClassified()]] - `imports` [EXTRACTED]
- [[provider-errors.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[provider-errors.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None