---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 5
location: "L835"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _agents_install()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_agents_install[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_install_opencode_plugin["_install_opencode_plugin[]"]
    center -->|"calls"| N_graphify_main_install_codex_hook["_install_codex_hook[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_836["Write the graphify section to the local AGENTS.md [Codex/OpenCode/OpenClaw]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Write the graphify section to the local AGENTS.md (CodexOpenCodeOpenClaw).]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[_install_codex_hook()]] - `calls` [EXTRACTED]
- [[_install_opencode_plugin()]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_agents_install()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None