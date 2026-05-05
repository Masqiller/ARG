---
source_file: "vendor/graphify/worked/example/raw/validator.py"
type: "code"
community: "Community None"
degree: 4
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ValidationError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["ValidationError"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_validator_py["validator.py"]
    center -->|"inherits"| N_exception["Exception"]
    center -->|"calls"| N_raw_validator_check_required_fields["check_required_fields[]"]
    center -->|"calls"| N_raw_validator_check_format["check_format[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Exception]] - `inherits` [EXTRACTED]
- [[check_format()]] - `calls` [EXTRACTED]
- [[check_required_fields()]] - `calls` [EXTRACTED]
- [[validator.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ValidationError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None