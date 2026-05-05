---
source_file: "vendor/graphify/tests/test_report.py"
type: "code"
community: "Community None"
degree: 9
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# make_inputs()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["make_inputs[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_report_py["test_report.py"]
    center -->|"calls"| N_tests_test_report_test_report_contains_header["test_report_contains_header[]"]
    center -->|"calls"| N_tests_test_report_test_report_contains_corpus_check["test_report_contains_corpus_check[]"]
    center -->|"calls"| N_tests_test_report_test_report_contains_god_nodes["test_report_contains_god_nodes[]"]
    center -->|"calls"| N_tests_test_report_test_report_contains_surprising_connections["test_report_contains_surprising_connections[]"]
    center -->|"calls"| N_tests_test_report_test_report_contains_communities["test_report_contains_communities[]"]
    center -->|"calls"| N_tests_test_report_test_report_contains_ambiguous_section["test_report_contains_ambiguous_section[]"]
    center -->|"calls"| N_tests_test_report_test_report_shows_token_cost["test_report_shows_token_cost[]"]
    center -->|"calls"| N_tests_test_report_test_report_shows_raw_cohesion_scores["test_report_shows_raw_cohesion_scores[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_report.py]] - `contains` [EXTRACTED]
- [[test_report_contains_ambiguous_section()]] - `calls` [EXTRACTED]
- [[test_report_contains_communities()]] - `calls` [EXTRACTED]
- [[test_report_contains_corpus_check()]] - `calls` [EXTRACTED]
- [[test_report_contains_god_nodes()]] - `calls` [EXTRACTED]
- [[test_report_contains_header()]] - `calls` [EXTRACTED]
- [[test_report_contains_surprising_connections()]] - `calls` [EXTRACTED]
- [[test_report_shows_raw_cohesion_scores()]] - `calls` [EXTRACTED]
- [[test_report_shows_token_cost()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[make_inputs()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None