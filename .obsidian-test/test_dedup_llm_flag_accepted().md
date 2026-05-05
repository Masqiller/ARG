---
source_file: "vendor/graphify/tests/test_dedup.py"
type: "code"
community: "Community None"
degree: 4
location: "L115"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_dedup_llm_flag_accepted()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_dedup_llm_flag_accepted[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_dedup_py["test_dedup.py"]
    center -->|"calls"| N_tests_test_dedup_make_nodes["_make_nodes[]"]
    center -->|"rationale_for"| N_tests_test_dedup_rationale_116["deduplicate_entities accepts dedup_llm_backend without crashing when no ambiguou"]
    center -->|"calls"| N_graphify_dedup_deduplicate_entities["deduplicate_entities[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_nodes()]] - `calls` [EXTRACTED]
- [[deduplicate_entities accepts dedup_llm_backend without crashing when no ambiguou]] - `rationale_for` [EXTRACTED]
- [[deduplicate_entities()]] - `calls` [INFERRED]
- [[test_dedup.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_dedup_llm_flag_accepted()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None