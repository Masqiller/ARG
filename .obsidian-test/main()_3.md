---
source_file: "vendor/external_plugins/superpowers/skills/writing-skills/render-graphs.js"
type: "code"
community: "Community None"
degree: 4
location: "L84"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_superpowers_skills_writing_skills_render_graphs_js["render-graphs.js"]
    center -->|"calls"| N_writing_skills_render_graphs_extractdotblocks["extractDotBlocks[]"]
    center -->|"calls"| N_writing_skills_render_graphs_combinegraphs["combineGraphs[]"]
    center -->|"calls"| N_writing_skills_render_graphs_rendertosvg["renderToSvg[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[combineGraphs()]] - `calls` [EXTRACTED]
- [[extractDotBlocks()]] - `calls` [EXTRACTED]
- [[render-graphs.js]] - `contains` [EXTRACTED]
- [[renderToSvg()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_3]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None