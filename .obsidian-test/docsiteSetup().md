---
source_file: "vendor/claude-mem/scripts/translate-readme/examples.ts"
type: "code"
community: "Community None"
degree: 2
location: "L68"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# docsiteSetup()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["docsiteSetup[]"]:::centerNode
    center -->|"calls"| N_translate_readme_index_translatereadme["translateReadme[]"]
    center -->|"contains"| N_vendor_claude_mem_scripts_translate_readme_examples_ts["examples.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[examples.ts]] - `contains` [EXTRACTED]
- [[translateReadme()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[docsiteSetup()]]
```

#graphify/code #graphify/INFERRED #community/Community_None