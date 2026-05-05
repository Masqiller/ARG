---
source_file: "vendor/graphify/tests/test_report.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_report.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["test_report.py"]:::centerNode
    center -->|"contains"| N_tests_test_report_make_inputs["make_inputs[]"]
    center -->|"contains"| N_tests_test_report_test_report_contains_header["test_report_contains_header[]"]
    center -->|"contains"| N_tests_test_report_test_report_contains_corpus_check["test_report_contains_corpus_check[]"]
    center -->|"contains"| N_tests_test_report_test_report_contains_god_nodes["test_report_contains_god_nodes[]"]
    center -->|"contains"| N_tests_test_report_test_report_contains_surprising_connections["test_report_contains_surprising_connections[]"]
    center -->|"contains"| N_tests_test_report_test_report_contains_communities["test_report_contains_communities[]"]
    center -->|"contains"| N_tests_test_report_test_report_contains_ambiguous_section["test_report_contains_ambiguous_section[]"]
    center -->|"contains"| N_tests_test_report_test_report_shows_token_cost["test_report_shows_token_cost[]"]
    center -->|"contains"| N_tests_test_report_test_report_shows_raw_cohesion_scores["test_report_shows_raw_cohesion_scores[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[make_inputs()]] - `contains` [EXTRACTED]
- [[test_report_contains_ambiguous_section()]] - `contains` [EXTRACTED]
- [[test_report_contains_communities()]] - `contains` [EXTRACTED]
- [[test_report_contains_corpus_check()]] - `contains` [EXTRACTED]
- [[test_report_contains_god_nodes()]] - `contains` [EXTRACTED]
- [[test_report_contains_header()]] - `contains` [EXTRACTED]
- [[test_report_contains_surprising_connections()]] - `contains` [EXTRACTED]
- [[test_report_shows_raw_cohesion_scores()]] - `contains` [EXTRACTED]
- [[test_report_shows_token_cost()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_report.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None