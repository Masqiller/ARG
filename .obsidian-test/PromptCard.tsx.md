---
source_file: "vendor/claude-mem/src/ui/viewer/components/PromptCard.tsx"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# PromptCard.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["PromptCard.tsx"]:::centerNode
    center -->|"imports"| N_utils_formatters_formatdate["formatDate[]"]
    center -->|"contains"| N_components_promptcard_promptcard["PromptCard[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[PromptCard()]] - `contains` [EXTRACTED]
- [[formatDate()_2]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[PromptCard.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None