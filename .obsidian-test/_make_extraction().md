---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "code"
community: "Community None"
degree: 7
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_extraction()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_make_extraction[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_confidence_py["test_confidence.py"]
    center -->|"calls"| N_tests_test_confidence_test_extracted_edges_have_score_1["test_extracted_edges_have_score_1[]"]
    center -->|"calls"| N_tests_test_confidence_test_inferred_edges_score_in_range["test_inferred_edges_score_in_range[]"]
    center -->|"calls"| N_tests_test_confidence_test_ambiguous_edges_score_at_most_04["test_ambiguous_edges_score_at_most_04[]"]
    center -->|"calls"| N_tests_test_confidence_test_confidence_score_round_trip["test_confidence_score_round_trip[]"]
    center -->|"calls"| N_tests_test_confidence_test_report_shows_avg_confidence_for_inferred["test_report_shows_avg_confidence_for_inferred[]"]
    center -->|"rationale_for"| N_tests_test_confidence_rationale_18["Return a minimal extraction dict with one edge of each confidence type."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return a minimal extraction dict with one edge of each confidence type.]] - `rationale_for` [EXTRACTED]
- [[test_ambiguous_edges_score_at_most_04()]] - `calls` [EXTRACTED]
- [[test_confidence.py]] - `contains` [EXTRACTED]
- [[test_confidence_score_round_trip()]] - `calls` [EXTRACTED]
- [[test_extracted_edges_have_score_1()]] - `calls` [EXTRACTED]
- [[test_inferred_edges_score_in_range()]] - `calls` [EXTRACTED]
- [[test_report_shows_avg_confidence_for_inferred()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_extraction()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None