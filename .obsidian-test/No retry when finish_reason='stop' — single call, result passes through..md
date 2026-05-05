---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L295"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# No retry when finish_reason='stop' — single call, result passes through.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["No retry when finish_reason='stop' — single call, result passes through."]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_adaptive_retry_returns_directly_when_not_truncated["test_adaptive_retry_returns_directly_when_not_truncated[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_adaptive_retry_returns_directly_when_not_truncated()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[No retry when finish_reason='stop' — single call, result passes through.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None