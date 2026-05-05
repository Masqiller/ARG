---
source_file: "vendor/graphify/worked/example/raw/validator.py"
type: "code"
community: "Community None"
degree: 4
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# check_required_fields()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["check_required_fields[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_validator_py["validator.py"]
    center -->|"calls"| N_raw_validator_validationerror["ValidationError"]
    center -->|"calls"| N_raw_validator_validate_document["validate_document[]"]
    center -->|"rationale_for"| N_raw_validator_rationale_26["Raise if any required field is missing."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Raise if any required field is missing.]] - `rationale_for` [EXTRACTED]
- [[ValidationError]] - `calls` [EXTRACTED]
- [[validate_document()]] - `calls` [EXTRACTED]
- [[validator.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[check_required_fields()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None