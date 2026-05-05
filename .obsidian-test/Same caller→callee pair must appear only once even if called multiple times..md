---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L174"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Same caller→callee pair must appear only once even if called multiple times.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Same caller→callee pair must appear only once even if called multiple times."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_calls_deduplication["test_calls_deduplication[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_calls_deduplication()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Same caller→callee pair must appear only once even if called multiple times.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None