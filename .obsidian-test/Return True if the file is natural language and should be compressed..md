---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L101"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return True if the file is natural language and should be compressed.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return True if the file is natural language and should be compressed."]:::centerNode
    center -->|"rationale_for"| N_scripts_detect_should_compress["should_compress[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[should_compress()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return True if the file is natural language and should be compressed.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None