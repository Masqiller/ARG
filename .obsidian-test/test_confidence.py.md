---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_confidence.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["test_confidence.py"]:::centerNode
    center -->|"contains"| N_tests_test_confidence_make_extraction["_make_extraction[]"]
    center -->|"contains"| N_tests_test_confidence_test_extracted_edges_have_score_1["test_extracted_edges_have_score_1[]"]
    center -->|"contains"| N_tests_test_confidence_test_inferred_edges_score_in_range["test_inferred_edges_score_in_range[]"]
    center -->|"contains"| N_tests_test_confidence_test_ambiguous_edges_score_at_most_04["test_ambiguous_edges_score_at_most_04[]"]
    center -->|"contains"| N_tests_test_confidence_test_confidence_score_round_trip["test_confidence_score_round_trip[]"]
    center -->|"contains"| N_tests_test_confidence_test_to_json_defaults_missing_confidence_score["test_to_json_defaults_missing_confidence_score[]"]
    center -->|"contains"| N_tests_test_confidence_test_report_shows_avg_confidence_for_inferred["test_report_shows_avg_confidence_for_inferred[]"]
    center -->|"contains"| N_tests_test_confidence_test_report_inferred_tag_with_score["test_report_inferred_tag_with_score[]"]
    center -->|"rationale_for"| N_tests_test_confidence_rationale_1["Tests for confidence_score on edges."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for confidence_score on edges.]] - `rationale_for` [EXTRACTED]
- [[_make_extraction()]] - `contains` [EXTRACTED]
- [[test_ambiguous_edges_score_at_most_04()]] - `contains` [EXTRACTED]
- [[test_confidence_score_round_trip()]] - `contains` [EXTRACTED]
- [[test_extracted_edges_have_score_1()]] - `contains` [EXTRACTED]
- [[test_inferred_edges_score_in_range()]] - `contains` [EXTRACTED]
- [[test_report_inferred_tag_with_score()]] - `contains` [EXTRACTED]
- [[test_report_shows_avg_confidence_for_inferred()]] - `contains` [EXTRACTED]
- [[test_to_json_defaults_missing_confidence_score()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_confidence.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None