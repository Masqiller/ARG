---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L47"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Heuristic: check if content looks like YAML.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Heuristic: check if content looks like YAML."]:::centerNode
    center -->|"rationale_for"| N_scripts_detect_is_yaml_content["_is_yaml_content[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_is_yaml_content()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Heuristic check if content looks like YAML.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None