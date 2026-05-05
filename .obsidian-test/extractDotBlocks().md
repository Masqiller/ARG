---
source_file: "vendor/external_plugins/superpowers/skills/writing-skills/render-graphs.js"
type: "code"
community: "Community None"
degree: 2
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractDotBlocks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["extractDotBlocks[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_superpowers_skills_writing_skills_render_graphs_js["render-graphs.js"]
    center -->|"calls"| N_writing_skills_render_graphs_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_3]] - `calls` [EXTRACTED]
- [[render-graphs.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractDotBlocks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None