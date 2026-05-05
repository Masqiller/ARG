---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L318"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# finish_reason='length' triggers split-in-half. Both halves succeed     on the se

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["finish_reason='length' triggers split-in-half. Both halves succeed     on the se"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_adaptive_retry_splits_when_finish_reason_length["test_adaptive_retry_splits_when_finish_reason_length[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_adaptive_retry_splits_when_finish_reason_length()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[finish_reason='length' triggers split-in-half. Both halves succeed     on the se]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None