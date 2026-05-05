---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 3
location: "L420"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# vscode_uninstall()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["vscode_uninstall[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_421["Remove graphify VS Code Copilot Chat skill and .github/copilot-instructions.md s"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove graphify VS Code Copilot Chat skill and .githubcopilot-instructions.md s]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[vscode_uninstall()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None