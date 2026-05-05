---
source_file: "vendor/graphify/worked/example/raw/validator.py"
type: "code"
community: "Community None"
degree: 4
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# check_format()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["check_format[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_validator_py["validator.py"]
    center -->|"calls"| N_raw_validator_validationerror["ValidationError"]
    center -->|"calls"| N_raw_validator_validate_document["validate_document[]"]
    center -->|"rationale_for"| N_raw_validator_rationale_33["Raise if the format is not in the allowed list."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Raise if the format is not in the allowed list.]] - `rationale_for` [EXTRACTED]
- [[ValidationError]] - `calls` [EXTRACTED]
- [[validate_document()]] - `calls` [EXTRACTED]
- [[validator.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[check_format()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None