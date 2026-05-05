---
source_file: "vendor/graphify/tests/test_export.py"
type: "code"
community: "Community None"
degree: 16
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_export.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["test_export.py"]:::centerNode
    center -->|"contains"| N_tests_test_export_make_graph["make_graph[]"]
    center -->|"contains"| N_tests_test_export_test_to_json_creates_file["test_to_json_creates_file[]"]
    center -->|"contains"| N_tests_test_export_test_to_json_valid_json["test_to_json_valid_json[]"]
    center -->|"contains"| N_tests_test_export_test_to_json_nodes_have_community["test_to_json_nodes_have_community[]"]
    center -->|"contains"| N_tests_test_export_test_to_cypher_creates_file["test_to_cypher_creates_file[]"]
    center -->|"contains"| N_tests_test_export_test_to_cypher_contains_merge_statements["test_to_cypher_contains_merge_statements[]"]
    center -->|"contains"| N_tests_test_export_test_to_graphml_creates_file["test_to_graphml_creates_file[]"]
    center -->|"contains"| N_tests_test_export_test_to_graphml_valid_xml["test_to_graphml_valid_xml[]"]
    center -->|"contains"| N_tests_test_export_test_to_graphml_has_community_attribute["test_to_graphml_has_community_attribute[]"]
    center -->|"contains"| N_tests_test_export_test_to_html_creates_file["test_to_html_creates_file[]"]
    center -->|"contains"| N_tests_test_export_test_to_html_contains_visjs["test_to_html_contains_visjs[]"]
    center -->|"contains"| N_tests_test_export_test_to_html_contains_search["test_to_html_contains_search[]"]
    center -->|"contains"| N_tests_test_export_test_to_html_contains_legend_with_labels["test_to_html_contains_legend_with_labels[]"]
    center -->|"contains"| N_tests_test_export_test_to_html_contains_nodes_and_edges["test_to_html_contains_nodes_and_edges[]"]
    center -->|"contains"| N_tests_test_export_test_to_html_member_counts_accepted["test_to_html_member_counts_accepted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[make_graph()]] - `contains` [EXTRACTED]
- [[test_to_canvas_file_paths_relative_to_vault()]] - `contains` [EXTRACTED]
- [[test_to_cypher_contains_merge_statements()]] - `contains` [EXTRACTED]
- [[test_to_cypher_creates_file()]] - `contains` [EXTRACTED]
- [[test_to_graphml_creates_file()]] - `contains` [EXTRACTED]
- [[test_to_graphml_has_community_attribute()]] - `contains` [EXTRACTED]
- [[test_to_graphml_valid_xml()]] - `contains` [EXTRACTED]
- [[test_to_html_contains_legend_with_labels()]] - `contains` [EXTRACTED]
- [[test_to_html_contains_nodes_and_edges()]] - `contains` [EXTRACTED]
- [[test_to_html_contains_search()]] - `contains` [EXTRACTED]
- [[test_to_html_contains_visjs()]] - `contains` [EXTRACTED]
- [[test_to_html_creates_file()]] - `contains` [EXTRACTED]
- [[test_to_html_member_counts_accepted()]] - `contains` [EXTRACTED]
- [[test_to_json_creates_file()]] - `contains` [EXTRACTED]
- [[test_to_json_nodes_have_community()]] - `contains` [EXTRACTED]
- [[test_to_json_valid_json()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_export.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None