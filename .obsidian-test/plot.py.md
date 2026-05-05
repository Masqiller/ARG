---
source_file: "vendor/external_plugins/caveman/evals/plot.py"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# plot.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["plot.py"]:::centerNode
    center -->|"contains"| N_evals_plot_count["count[]"]
    center -->|"contains"| N_evals_plot_main["main[]"]
    center -->|"rationale_for"| N_evals_plot_rationale_1["Generate a boxplot showing the distribution of token compression per skill, comp"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Generate a boxplot showing the distribution of token compression per skill, comp]] - `rationale_for` [EXTRACTED]
- [[count()]] - `contains` [EXTRACTED]
- [[main()_15]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[plot.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None