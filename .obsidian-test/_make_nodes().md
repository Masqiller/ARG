---
source_file: "vendor/graphify/tests/test_dedup.py"
type: "code"
community: "Community None"
degree: 10
location: "L34"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_nodes()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["_make_nodes[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_dedup_py["test_dedup.py"]
    center -->|"calls"| N_tests_test_dedup_test_exact_duplicates_merged["test_exact_duplicates_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_typo_merged["test_typo_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_unrelated_not_merged["test_unrelated_not_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_short_low_entropy_not_merged["test_short_low_entropy_not_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_edges_rewired_after_merge["test_edges_rewired_after_merge[]"]
    center -->|"calls"| N_tests_test_dedup_test_self_loops_dropped_after_merge["test_self_loops_dropped_after_merge[]"]
    center -->|"calls"| N_tests_test_dedup_test_community_boost_aids_merge["test_community_boost_aids_merge[]"]
    center -->|"calls"| N_tests_test_dedup_test_single_node_no_crash["test_single_node_no_crash[]"]
    center -->|"calls"| N_tests_test_dedup_test_dedup_llm_flag_accepted["test_dedup_llm_flag_accepted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_community_boost_aids_merge()]] - `calls` [EXTRACTED]
- [[test_dedup.py]] - `contains` [EXTRACTED]
- [[test_dedup_llm_flag_accepted()]] - `calls` [EXTRACTED]
- [[test_edges_rewired_after_merge()]] - `calls` [EXTRACTED]
- [[test_exact_duplicates_merged()]] - `calls` [EXTRACTED]
- [[test_self_loops_dropped_after_merge()]] - `calls` [EXTRACTED]
- [[test_short_low_entropy_not_merged()]] - `calls` [EXTRACTED]
- [[test_single_node_no_crash()]] - `calls` [EXTRACTED]
- [[test_typo_merged()]] - `calls` [EXTRACTED]
- [[test_unrelated_not_merged()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_nodes()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None