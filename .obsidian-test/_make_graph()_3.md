---
source_file: "vendor/graphify/tests/test_cli_export.py"
type: "code"
community: "Community None"
degree: 16
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["_make_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cli_export_py["test_cli_export.py"]
    center -->|"calls"| N_tests_test_cli_export_test_export_html_creates_file["test_export_html_creates_file[]"]
    center -->|"calls"| N_tests_test_cli_export_test_export_html_no_viz_removes_file["test_export_html_no_viz_removes_file[]"]
    center -->|"calls"| N_tests_test_cli_export_test_export_obsidian_creates_vault["test_export_obsidian_creates_vault[]"]
    center -->|"calls"| N_tests_test_cli_export_test_export_obsidian_custom_dir["test_export_obsidian_custom_dir[]"]
    center -->|"calls"| N_tests_test_cli_export_test_export_wiki_creates_articles["test_export_wiki_creates_articles[]"]
    center -->|"calls"| N_tests_test_cli_export_test_export_graphml_creates_file["test_export_graphml_creates_file[]"]
    center -->|"calls"| N_tests_test_cli_export_test_export_neo4j_creates_cypher["test_export_neo4j_creates_cypher[]"]
    center -->|"calls"| N_tests_test_cli_export_test_query_returns_output["test_query_returns_output[]"]
    center -->|"calls"| N_tests_test_cli_export_test_query_dfs_flag["test_query_dfs_flag[]"]
    center -->|"calls"| N_tests_test_cli_export_test_query_budget_flag["test_query_budget_flag[]"]
    center -->|"calls"| N_tests_test_cli_export_test_path_runs_without_error["test_path_runs_without_error[]"]
    center -->|"calls"| N_tests_test_cli_export_test_explain_runs_without_error["test_explain_runs_without_error[]"]
    center -->|"rationale_for"| N_tests_test_cli_export_rationale_28["Build a minimal graph.json + analysis/labels files in tmp_path/graphify-out/."]
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Build a minimal graph.json + analysislabels files in tmp_pathgraphify-out.]] - `rationale_for` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_cli_export.py]] - `contains` [EXTRACTED]
- [[test_explain_runs_without_error()]] - `calls` [EXTRACTED]
- [[test_export_graphml_creates_file()]] - `calls` [EXTRACTED]
- [[test_export_html_creates_file()]] - `calls` [EXTRACTED]
- [[test_export_html_no_viz_removes_file()]] - `calls` [EXTRACTED]
- [[test_export_neo4j_creates_cypher()]] - `calls` [EXTRACTED]
- [[test_export_obsidian_creates_vault()]] - `calls` [EXTRACTED]
- [[test_export_obsidian_custom_dir()]] - `calls` [EXTRACTED]
- [[test_export_wiki_creates_articles()]] - `calls` [EXTRACTED]
- [[test_path_runs_without_error()]] - `calls` [EXTRACTED]
- [[test_query_budget_flag()]] - `calls` [EXTRACTED]
- [[test_query_dfs_flag()]] - `calls` [EXTRACTED]
- [[test_query_returns_output()]] - `calls` [EXTRACTED]
- [[to_json()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_graph()_3]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None