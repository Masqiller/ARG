---
source_file: "vendor/graphify/worked/example/raw/validator.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L26"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Raise if any required field is missing.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Raise if any required field is missing."]:::centerNode
    center -->|"rationale_for"| N_raw_validator_check_required_fields["check_required_fields[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[check_required_fields()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Raise if any required field is missing.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None