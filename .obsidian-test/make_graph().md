---
source_file: "vendor/graphify/tests/test_export.py"
type: "code"
community: "Community None"
degree: 16
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# make_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["make_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_export_py["test_export.py"]
    center -->|"calls"| N_tests_test_export_test_to_json_creates_file["test_to_json_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_json_valid_json["test_to_json_valid_json[]"]
    center -->|"calls"| N_tests_test_export_test_to_json_nodes_have_community["test_to_json_nodes_have_community[]"]
    center -->|"calls"| N_tests_test_export_test_to_cypher_creates_file["test_to_cypher_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_cypher_contains_merge_statements["test_to_cypher_contains_merge_statements[]"]
    center -->|"calls"| N_tests_test_export_test_to_graphml_creates_file["test_to_graphml_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_graphml_valid_xml["test_to_graphml_valid_xml[]"]
    center -->|"calls"| N_tests_test_export_test_to_graphml_has_community_attribute["test_to_graphml_has_community_attribute[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_creates_file["test_to_html_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_visjs["test_to_html_contains_visjs[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_search["test_to_html_contains_search[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_legend_with_labels["test_to_html_contains_legend_with_labels[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_contains_nodes_and_edges["test_to_html_contains_nodes_and_edges[]"]
    center -->|"calls"| N_tests_test_export_test_to_html_member_counts_accepted["test_to_html_member_counts_accepted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_export.py]] - `contains` [EXTRACTED]
- [[test_to_canvas_file_paths_relative_to_vault()]] - `calls` [EXTRACTED]
- [[test_to_cypher_contains_merge_statements()]] - `calls` [EXTRACTED]
- [[test_to_cypher_creates_file()]] - `calls` [EXTRACTED]
- [[test_to_graphml_creates_file()]] - `calls` [EXTRACTED]
- [[test_to_graphml_has_community_attribute()]] - `calls` [EXTRACTED]
- [[test_to_graphml_valid_xml()]] - `calls` [EXTRACTED]
- [[test_to_html_contains_legend_with_labels()]] - `calls` [EXTRACTED]
- [[test_to_html_contains_nodes_and_edges()]] - `calls` [EXTRACTED]
- [[test_to_html_contains_search()]] - `calls` [EXTRACTED]
- [[test_to_html_contains_visjs()]] - `calls` [EXTRACTED]
- [[test_to_html_creates_file()]] - `calls` [EXTRACTED]
- [[test_to_html_member_counts_accepted()]] - `calls` [EXTRACTED]
- [[test_to_json_creates_file()]] - `calls` [EXTRACTED]
- [[test_to_json_nodes_have_community()]] - `calls` [EXTRACTED]
- [[test_to_json_valid_json()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[make_graph()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None