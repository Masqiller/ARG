---
source_file: "vendor/graphify/tests/test_dedup.py"
type: "code"
community: "Community None"
degree: 19
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_dedup.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["test_dedup.py"]:::centerNode
    center -->|"contains"| N_tests_test_dedup_test_entropy_short_label_low["test_entropy_short_label_low[]"]
    center -->|"contains"| N_tests_test_dedup_test_entropy_normal_label_high["test_entropy_normal_label_high[]"]
    center -->|"contains"| N_tests_test_dedup_test_entropy_empty_string["test_entropy_empty_string[]"]
    center -->|"contains"| N_tests_test_dedup_test_shingles_produces_trigrams["test_shingles_produces_trigrams[]"]
    center -->|"contains"| N_tests_test_dedup_test_shingles_short_string["test_shingles_short_string[]"]
    center -->|"contains"| N_tests_test_dedup_make_nodes["_make_nodes[]"]
    center -->|"contains"| N_tests_test_dedup_make_edges["_make_edges[]"]
    center -->|"contains"| N_tests_test_dedup_test_exact_duplicates_merged["test_exact_duplicates_merged[]"]
    center -->|"contains"| N_tests_test_dedup_test_typo_merged["test_typo_merged[]"]
    center -->|"contains"| N_tests_test_dedup_test_unrelated_not_merged["test_unrelated_not_merged[]"]
    center -->|"contains"| N_tests_test_dedup_test_short_low_entropy_not_merged["test_short_low_entropy_not_merged[]"]
    center -->|"contains"| N_tests_test_dedup_test_edges_rewired_after_merge["test_edges_rewired_after_merge[]"]
    center -->|"contains"| N_tests_test_dedup_test_self_loops_dropped_after_merge["test_self_loops_dropped_after_merge[]"]
    center -->|"contains"| N_tests_test_dedup_test_community_boost_aids_merge["test_community_boost_aids_merge[]"]
    center -->|"contains"| N_tests_test_dedup_test_empty_inputs["test_empty_inputs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphifydedup.py entity deduplication pipeline.]] - `rationale_for` [EXTRACTED]
- [[_make_edges()]] - `contains` [EXTRACTED]
- [[_make_nodes()]] - `contains` [EXTRACTED]
- [[test_build_calls_dedup()]] - `contains` [EXTRACTED]
- [[test_community_boost_aids_merge()]] - `contains` [EXTRACTED]
- [[test_dedup_llm_flag_accepted()]] - `contains` [EXTRACTED]
- [[test_edges_rewired_after_merge()]] - `contains` [EXTRACTED]
- [[test_empty_inputs()]] - `contains` [EXTRACTED]
- [[test_entropy_empty_string()]] - `contains` [EXTRACTED]
- [[test_entropy_normal_label_high()]] - `contains` [EXTRACTED]
- [[test_entropy_short_label_low()]] - `contains` [EXTRACTED]
- [[test_exact_duplicates_merged()]] - `contains` [EXTRACTED]
- [[test_self_loops_dropped_after_merge()]] - `contains` [EXTRACTED]
- [[test_shingles_produces_trigrams()]] - `contains` [EXTRACTED]
- [[test_shingles_short_string()]] - `contains` [EXTRACTED]
- [[test_short_low_entropy_not_merged()]] - `contains` [EXTRACTED]
- [[test_single_node_no_crash()]] - `contains` [EXTRACTED]
- [[test_typo_merged()]] - `contains` [EXTRACTED]
- [[test_unrelated_not_merged()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_dedup.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None