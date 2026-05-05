---
source_file: "vendor/graphify/worked/example/raw/validator.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L33"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Raise if the format is not in the allowed list.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Raise if the format is not in the allowed list."]:::centerNode
    center -->|"rationale_for"| N_raw_validator_check_format["check_format[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[check_format()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Raise if the format is not in the allowed list.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None