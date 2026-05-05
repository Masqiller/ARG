---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 32
location: "L1045"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 32

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"calls"| N_graphify_benchmark_run_benchmark["run_benchmark[]"]
    center -->|"calls"| N_graphify_benchmark_print_benchmark["print_benchmark[]"]
    center -->|"calls"| N_graphify_tree_html_write_tree_html["write_tree_html[]"]
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    center -->|"calls"| N_graphify_export_to_html["to_html[]"]
    center -->|"calls"| N_graphify_watch_rebuild_code["_rebuild_code[]"]
    center -->|"calls"| N_graphify_watch_check_update["check_update[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_check_skill_version["_check_skill_version[]"]
    center -->|"calls"| N_graphify_main_install["install[]"]
    center -->|"calls"| N_graphify_main_gemini_install["gemini_install[]"]
    center -->|"calls"| N_graphify_main_gemini_uninstall["gemini_uninstall[]"]
    center -->|"calls"| N_graphify_main_vscode_install["vscode_install[]"]
    center -->|"calls"| N_graphify_main_vscode_uninstall["vscode_uninstall[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[_agents_install()_1]] - `calls` [EXTRACTED]
- [[_agents_uninstall()_1]] - `calls` [EXTRACTED]
- [[_antigravity_install()]] - `calls` [EXTRACTED]
- [[_antigravity_uninstall()]] - `calls` [EXTRACTED]
- [[_check_skill_version()]] - `calls` [EXTRACTED]
- [[_clone_repo()]] - `calls` [EXTRACTED]
- [[_cursor_install()]] - `calls` [EXTRACTED]
- [[_cursor_uninstall()]] - `calls` [EXTRACTED]
- [[_find_node()]] - `calls` [INFERRED]
- [[_kiro_install()]] - `calls` [EXTRACTED]
- [[_kiro_uninstall()]] - `calls` [EXTRACTED]
- [[_load_graph()]] - `calls` [INFERRED]
- [[_query_graph_text()]] - `calls` [INFERRED]
- [[_rebuild_code()]] - `calls` [INFERRED]
- [[_score_nodes()]] - `calls` [INFERRED]
- [[_uninstall_codex_hook()]] - `calls` [EXTRACTED]
- [[check_update()]] - `calls` [INFERRED]
- [[claude_install()]] - `calls` [EXTRACTED]
- [[claude_uninstall()]] - `calls` [EXTRACTED]
- [[gemini_install()]] - `calls` [EXTRACTED]
- [[gemini_uninstall()]] - `calls` [EXTRACTED]
- [[install()_1]] - `calls` [EXTRACTED]
- [[print_benchmark()]] - `calls` [INFERRED]
- [[run_benchmark()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[to_html()]] - `calls` [INFERRED]
- [[to_json()]] - `calls` [INFERRED]
- [[vscode_install()]] - `calls` [EXTRACTED]
- [[vscode_uninstall()]] - `calls` [EXTRACTED]
- [[write_tree_html()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None