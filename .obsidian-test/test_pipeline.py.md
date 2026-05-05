---
source_file: "vendor/graphify/tests/test_pipeline.py"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_pipeline.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["test_pipeline.py"]:::centerNode
    center -->|"contains"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_runs_end_to_end["test_pipeline_runs_end_to_end[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_graph_has_edges["test_pipeline_graph_has_edges[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_all_nodes_have_community["test_pipeline_all_nodes_have_community[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_report_mentions_top_god_node["test_pipeline_report_mentions_top_god_node[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_detection_finds_code_and_docs["test_pipeline_detection_finds_code_and_docs[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_incremental_update["test_pipeline_incremental_update[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_extraction_confidence_labels["test_pipeline_extraction_confidence_labels[]"]
    center -->|"contains"| N_tests_test_pipeline_test_pipeline_no_self_loops["test_pipeline_no_self_loops[]"]
    center -->|"rationale_for"| N_tests_test_pipeline_rationale_1["End-to-end pipeline test: detect → extract → build → cluster → analyze → report"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[End-to-end pipeline test detect → extract → build → cluster → analyze → report]] - `rationale_for` [EXTRACTED]
- [[run_pipeline()]] - `contains` [EXTRACTED]
- [[test_pipeline_all_nodes_have_community()]] - `contains` [EXTRACTED]
- [[test_pipeline_detection_finds_code_and_docs()]] - `contains` [EXTRACTED]
- [[test_pipeline_extraction_confidence_labels()]] - `contains` [EXTRACTED]
- [[test_pipeline_graph_has_edges()]] - `contains` [EXTRACTED]
- [[test_pipeline_incremental_update()]] - `contains` [EXTRACTED]
- [[test_pipeline_no_self_loops()]] - `contains` [EXTRACTED]
- [[test_pipeline_report_mentions_top_god_node()]] - `contains` [EXTRACTED]
- [[test_pipeline_runs_end_to_end()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_pipeline.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None