---
source_file: "vendor/claude-mem/evals/swebench/summarize.py"
type: "code"
community: "Community None"
degree: 6
location: "L209"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_summarize_py["summarize.py"]
    center -->|"calls"| N_swebench_summarize_load_expected_instance_ids["load_expected_instance_ids[]"]
    center -->|"calls"| N_swebench_summarize_load_run_results["load_run_results[]"]
    center -->|"calls"| N_swebench_summarize_render_summary_markdown["render_summary_markdown[]"]
    center -->|"calls"| N_swebench_summarize_render_diff_markdown["render_diff_markdown[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_expected_instance_ids()]] - `calls` [EXTRACTED]
- [[load_run_results()]] - `calls` [EXTRACTED]
- [[render_diff_markdown()]] - `calls` [EXTRACTED]
- [[render_summary_markdown()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[summarize.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_26]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None