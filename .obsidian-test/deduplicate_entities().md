---
source_file: "vendor/graphify/graphify/dedup.py"
type: "code"
community: "Community None"
degree: 23
location: "L88"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# deduplicate_entities()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["deduplicate_entities[]"]:::centerNode
    center -->|"calls"| N_tests_test_dedup_test_exact_duplicates_merged["test_exact_duplicates_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_typo_merged["test_typo_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_unrelated_not_merged["test_unrelated_not_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_short_low_entropy_not_merged["test_short_low_entropy_not_merged[]"]
    center -->|"calls"| N_tests_test_dedup_test_edges_rewired_after_merge["test_edges_rewired_after_merge[]"]
    center -->|"calls"| N_tests_test_dedup_test_self_loops_dropped_after_merge["test_self_loops_dropped_after_merge[]"]
    center -->|"calls"| N_tests_test_dedup_test_community_boost_aids_merge["test_community_boost_aids_merge[]"]
    center -->|"calls"| N_tests_test_dedup_test_empty_inputs["test_empty_inputs[]"]
    center -->|"calls"| N_tests_test_dedup_test_single_node_no_crash["test_single_node_no_crash[]"]
    center -->|"calls"| N_tests_test_dedup_test_dedup_llm_flag_accepted["test_dedup_llm_flag_accepted[]"]
    center -->|"contains"| N_vendor_graphify_graphify_dedup_py["dedup.py"]
    center -->|"calls"| N_graphify_dedup_norm["_norm[]"]
    center -->|"calls"| N_graphify_dedup_entropy["_entropy[]"]
    center -->|"calls"| N_graphify_dedup_make_minhash["_make_minhash[]"]
    center -->|"calls"| N_graphify_dedup_uf["_UF"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.components()]] - `calls` [EXTRACTED]
- [[.find()]] - `calls` [EXTRACTED]
- [[.list()]] - `calls` [INFERRED]
- [[.union()]] - `calls` [EXTRACTED]
- [[Deduplicate near-identical entities in a knowledge graph.      Args         nod]] - `rationale_for` [EXTRACTED]
- [[_UF]] - `calls` [EXTRACTED]
- [[_entropy()]] - `calls` [EXTRACTED]
- [[_llm_tiebreak()]] - `calls` [EXTRACTED]
- [[_make_minhash()]] - `calls` [EXTRACTED]
- [[_norm()]] - `calls` [EXTRACTED]
- [[_pick_winner()]] - `calls` [EXTRACTED]
- [[build()]] - `calls` [INFERRED]
- [[dedup.py]] - `contains` [EXTRACTED]
- [[test_community_boost_aids_merge()]] - `calls` [INFERRED]
- [[test_dedup_llm_flag_accepted()]] - `calls` [INFERRED]
- [[test_edges_rewired_after_merge()]] - `calls` [INFERRED]
- [[test_empty_inputs()]] - `calls` [INFERRED]
- [[test_exact_duplicates_merged()]] - `calls` [INFERRED]
- [[test_self_loops_dropped_after_merge()]] - `calls` [INFERRED]
- [[test_short_low_entropy_not_merged()]] - `calls` [INFERRED]
- [[test_single_node_no_crash()]] - `calls` [INFERRED]
- [[test_typo_merged()]] - `calls` [INFERRED]
- [[test_unrelated_not_merged()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[deduplicate_entities()]]
```

#graphify/code #graphify/INFERRED #community/Community_None