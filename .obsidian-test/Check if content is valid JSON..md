---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L38"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Check if content is valid JSON.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Check if content is valid JSON."]:::centerNode
    center -->|"rationale_for"| N_scripts_detect_is_json_content["_is_json_content[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_is_json_content()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Check if content is valid JSON.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None