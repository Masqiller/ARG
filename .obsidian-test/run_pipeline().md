---
source_file: "vendor/graphify/tests/test_pipeline.py"
type: "code"
community: "Community None"
degree: 17
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# run_pipeline()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["run_pipeline[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_pipeline_py["test_pipeline.py"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_runs_end_to_end["test_pipeline_runs_end_to_end[]"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_graph_has_edges["test_pipeline_graph_has_edges[]"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_all_nodes_have_community["test_pipeline_all_nodes_have_community[]"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_report_mentions_top_god_node["test_pipeline_report_mentions_top_god_node[]"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_detection_finds_code_and_docs["test_pipeline_detection_finds_code_and_docs[]"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_incremental_update["test_pipeline_incremental_update[]"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_extraction_confidence_labels["test_pipeline_extraction_confidence_labels[]"]
    center -->|"calls"| N_tests_test_pipeline_test_pipeline_no_self_loops["test_pipeline_no_self_loops[]"]
    center -->|"rationale_for"| N_tests_test_pipeline_rationale_24["Run the full pipeline on the fixtures directory. Returns a dict of outputs."]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    center -->|"calls"| N_graphify_export_to_html["to_html[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[Run the full pipeline on the fixtures directory. Returns a dict of outputs.]] - `rationale_for` [EXTRACTED]
- [[detect()]] - `calls` [INFERRED]
- [[extract()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[test_pipeline.py]] - `contains` [EXTRACTED]
- [[test_pipeline_all_nodes_have_community()]] - `calls` [EXTRACTED]
- [[test_pipeline_detection_finds_code_and_docs()]] - `calls` [EXTRACTED]
- [[test_pipeline_extraction_confidence_labels()]] - `calls` [EXTRACTED]
- [[test_pipeline_graph_has_edges()]] - `calls` [EXTRACTED]
- [[test_pipeline_incremental_update()]] - `calls` [EXTRACTED]
- [[test_pipeline_no_self_loops()]] - `calls` [EXTRACTED]
- [[test_pipeline_report_mentions_top_god_node()]] - `calls` [EXTRACTED]
- [[test_pipeline_runs_end_to_end()]] - `calls` [EXTRACTED]
- [[to_html()]] - `calls` [INFERRED]
- [[to_json()]] - `calls` [INFERRED]
- [[to_obsidian()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run_pipeline()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None