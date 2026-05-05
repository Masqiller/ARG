---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 17
location: "L455"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# to_html()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["to_html[]"]:::centerNode
    center -->|"calls"| N_tests_test_export_test_to_html_creates_file["test_to_html_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_visjs["test_to_html_contains_visjs[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_search["test_to_html_contains_search[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_legend_with_labels["test_to_html_contains_legend_with_labels[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_nodes_and_edges["test_to_html_contains_nodes_and_edges[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_member_counts_accepted["test_to_html_member_counts_accepted[]"]
    center -->|"calls"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    center -->|"calls"| N_graphify_security_sanitize_label["sanitize_label[]"]
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_viz_node_limit["_viz_node_limit[]"]
    center -->|"calls"| N_graphify_export_html_styles["_html_styles[]"]
    center -->|"calls"| N_graphify_export_hyperedge_script["_hyperedge_script[]"]
    center -->|"calls"| N_graphify_export_html_script["_html_script[]"]
    center -->|"rationale_for"| N_graphify_export_rationale_463["Generate an interactive vis.js HTML visualization of the graph.      Features: n"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Generate an interactive vis.js HTML visualization of the graph.      Features n]] - `rationale_for` [EXTRACTED]
- [[_html_script()]] - `calls` [EXTRACTED]
- [[_html_styles()]] - `calls` [EXTRACTED]
- [[_hyperedge_script()]] - `calls` [EXTRACTED]
- [[_rebuild_code()]] - `calls` [INFERRED]
- [[_viz_node_limit()]] - `calls` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[run_pipeline()]] - `calls` [INFERRED]
- [[sanitize_label()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[test_to_html_contains_legend_with_labels()]] - `calls` [INFERRED]
- [[test_to_html_contains_nodes_and_edges()]] - `calls` [INFERRED]
- [[test_to_html_contains_search()]] - `calls` [INFERRED]
- [[test_to_html_contains_visjs()]] - `calls` [INFERRED]
- [[test_to_html_creates_file()]] - `calls` [INFERRED]
- [[test_to_html_member_counts_accepted()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_html()]]
```

#graphify/code #graphify/INFERRED #community/Community_None