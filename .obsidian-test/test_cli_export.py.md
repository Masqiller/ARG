---
source_file: "vendor/graphify/tests/test_cli_export.py"
type: "code"
community: "Community None"
degree: 20
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cli_export.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["test_cli_export.py"]:::centerNode
    center -->|"contains"| N_tests_test_cli_export_run["_run[]"]
    center -->|"contains"| N_tests_test_cli_export_make_graph["_make_graph[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_html_creates_file["test_export_html_creates_file[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_html_no_viz_removes_file["test_export_html_no_viz_removes_file[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_html_error_without_graph["test_export_html_error_without_graph[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_obsidian_creates_vault["test_export_obsidian_creates_vault[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_obsidian_custom_dir["test_export_obsidian_custom_dir[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_wiki_creates_articles["test_export_wiki_creates_articles[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_graphml_creates_file["test_export_graphml_creates_file[]"]
    center -->|"contains"| N_tests_test_cli_export_test_export_neo4j_creates_cypher["test_export_neo4j_creates_cypher[]"]
    center -->|"contains"| N_tests_test_cli_export_test_query_returns_output["test_query_returns_output[]"]
    center -->|"contains"| N_tests_test_cli_export_test_query_dfs_flag["test_query_dfs_flag[]"]
    center -->|"contains"| N_tests_test_cli_export_test_query_budget_flag["test_query_budget_flag[]"]
    center -->|"contains"| N_tests_test_cli_export_test_query_missing_graph_fails["test_query_missing_graph_fails[]"]
    center -->|"contains"| N_tests_test_cli_export_test_path_runs_without_error["test_path_runs_without_error[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Integration tests for graphify export subcommands and CLI commands.  Each test b]] - `rationale_for` [EXTRACTED]
- [[_make_graph()_3]] - `contains` [EXTRACTED]
- [[_run()]] - `contains` [EXTRACTED]
- [[test_explain_missing_graph_fails()]] - `contains` [EXTRACTED]
- [[test_explain_runs_without_error()]] - `contains` [EXTRACTED]
- [[test_export_graphml_creates_file()]] - `contains` [EXTRACTED]
- [[test_export_html_creates_file()]] - `contains` [EXTRACTED]
- [[test_export_html_error_without_graph()]] - `contains` [EXTRACTED]
- [[test_export_html_no_viz_removes_file()]] - `contains` [EXTRACTED]
- [[test_export_neo4j_creates_cypher()]] - `contains` [EXTRACTED]
- [[test_export_obsidian_creates_vault()]] - `contains` [EXTRACTED]
- [[test_export_obsidian_custom_dir()]] - `contains` [EXTRACTED]
- [[test_export_unknown_format_fails()]] - `contains` [EXTRACTED]
- [[test_export_wiki_creates_articles()]] - `contains` [EXTRACTED]
- [[test_path_missing_graph_fails()]] - `contains` [EXTRACTED]
- [[test_path_runs_without_error()]] - `contains` [EXTRACTED]
- [[test_query_budget_flag()]] - `contains` [EXTRACTED]
- [[test_query_dfs_flag()]] - `contains` [EXTRACTED]
- [[test_query_missing_graph_fails()]] - `contains` [EXTRACTED]
- [[test_query_returns_output()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cli_export.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None