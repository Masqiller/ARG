---
source_file: "vendor/graphify/graphify/watch.py"
type: "code"
community: "Community None"
degree: 13
location: "L49"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _rebuild_code()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["_rebuild_code[]"]:::centerNode
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    center -->|"calls"| N_graphify_export_to_html["to_html[]"]
    center -->|"contains"| N_vendor_graphify_graphify_watch_py["watch.py"]
    center -->|"calls"| N_graphify_watch_git_head["_git_head[]"]
    center -->|"calls"| N_graphify_watch_report_root_label["_report_root_label[]"]
    center -->|"calls"| N_graphify_watch_relativize_source_files["_relativize_source_files[]"]
    center -->|"calls"| N_graphify_watch_watch["watch[]"]
    center -->|"rationale_for"| N_graphify_watch_rationale_50["Re-run AST extraction + build + cluster + report for code files. No LLM needed."]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_graphify_detect_save_manifest["save_manifest[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Re-run AST extraction + build + cluster + report for code files. No LLM needed.]] - `rationale_for` [EXTRACTED]
- [[_git_head()_1]] - `calls` [EXTRACTED]
- [[_relativize_source_files()]] - `calls` [EXTRACTED]
- [[_report_root_label()]] - `calls` [EXTRACTED]
- [[detect()]] - `calls` [INFERRED]
- [[extract()]] - `calls` [INFERRED]
- [[main()_2]] - `calls` [INFERRED]
- [[save_manifest()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[to_html()]] - `calls` [INFERRED]
- [[to_json()]] - `calls` [INFERRED]
- [[watch()]] - `calls` [EXTRACTED]
- [[watch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_rebuild_code()]]
```

#graphify/code #graphify/INFERRED #community/Community_None