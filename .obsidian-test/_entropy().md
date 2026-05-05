---
source_file: "vendor/graphify/graphify/dedup.py"
type: "code"
community: "Community None"
degree: 7
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _entropy()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_entropy[]"]:::centerNode
    center -->|"calls"| N_tests_test_dedup_test_entropy_short_label_low["test_entropy_short_label_low[]"]
    center -->|"calls"| N_tests_test_dedup_test_entropy_normal_label_high["test_entropy_normal_label_high[]"]
    center -->|"calls"| N_tests_test_dedup_test_entropy_empty_string["test_entropy_empty_string[]"]
    center -->|"contains"| N_vendor_graphify_graphify_dedup_py["dedup.py"]
    center -->|"calls"| N_graphify_dedup_norm["_norm[]"]
    center -->|"calls"| N_graphify_dedup_deduplicate_entities["deduplicate_entities[]"]
    center -->|"rationale_for"| N_graphify_dedup_rationale_23["Shannon entropy in bits/char of the normalised label."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Shannon entropy in bitschar of the normalised label.]] - `rationale_for` [EXTRACTED]
- [[_norm()]] - `calls` [EXTRACTED]
- [[dedup.py]] - `contains` [EXTRACTED]
- [[deduplicate_entities()]] - `calls` [EXTRACTED]
- [[test_entropy_empty_string()]] - `calls` [INFERRED]
- [[test_entropy_normal_label_high()]] - `calls` [INFERRED]
- [[test_entropy_short_label_low()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_entropy()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None