---
source_file: "vendor/claude-mem/evals/swebench/summarize.py"
type: "code"
community: "Community None"
degree: 3
location: "L122"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# render_summary_markdown()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["render_summary_markdown[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_summarize_py["summarize.py"]
    center -->|"calls"| N_swebench_summarize_format_resolved_cell["format_resolved_cell[]"]
    center -->|"calls"| N_swebench_summarize_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[format_resolved_cell()]] - `calls` [EXTRACTED]
- [[main()_26]] - `calls` [EXTRACTED]
- [[summarize.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[render_summary_markdown()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None