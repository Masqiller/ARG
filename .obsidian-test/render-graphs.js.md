---
source_file: "vendor/external_plugins/superpowers/skills/writing-skills/render-graphs.js"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# render-graphs.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["render-graphs.js"]:::centerNode
    center -->|"contains"| N_writing_skills_render_graphs_extractdotblocks["extractDotBlocks[]"]
    center -->|"contains"| N_writing_skills_render_graphs_extractgraphbody["extractGraphBody[]"]
    center -->|"contains"| N_writing_skills_render_graphs_combinegraphs["combineGraphs[]"]
    center -->|"contains"| N_writing_skills_render_graphs_rendertosvg["renderToSvg[]"]
    center -->|"contains"| N_writing_skills_render_graphs_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[combineGraphs()]] - `contains` [EXTRACTED]
- [[extractDotBlocks()]] - `contains` [EXTRACTED]
- [[extractGraphBody()]] - `contains` [EXTRACTED]
- [[main()_3]] - `contains` [EXTRACTED]
- [[renderToSvg()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[render-graphs.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None