---
source_file: "vendor/claude-mem/evals/swebench/summarize.py"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# summarize.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["summarize.py"]:::centerNode
    center -->|"contains"| N_swebench_summarize_load_expected_instance_ids["load_expected_instance_ids[]"]
    center -->|"contains"| N_swebench_summarize_load_run_results["load_run_results[]"]
    center -->|"contains"| N_swebench_summarize_format_resolved_cell["format_resolved_cell[]"]
    center -->|"contains"| N_swebench_summarize_render_summary_markdown["render_summary_markdown[]"]
    center -->|"contains"| N_swebench_summarize_render_diff_markdown["render_diff_markdown[]"]
    center -->|"contains"| N_swebench_summarize_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[format_resolved_cell()]] - `contains` [EXTRACTED]
- [[load_expected_instance_ids()]] - `contains` [EXTRACTED]
- [[load_run_results()]] - `contains` [EXTRACTED]
- [[main()_26]] - `contains` [EXTRACTED]
- [[render_diff_markdown()]] - `contains` [EXTRACTED]
- [[render_summary_markdown()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[summarize.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None