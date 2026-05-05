---
source_file: "vendor/graphify/worked/example/raw/validator.py"
type: "code"
community: "Community None"
degree: 4
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# normalize_fields()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["normalize_fields[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_example_raw_validator_py["validator.py"]
    center -->|"calls"| N_raw_validator_validate_document["validate_document[]"]
    center -->|"rationale_for"| N_raw_validator_rationale_40["Clean up text fields using the processor."]
    center -->|"calls"| N_raw_processor_normalize_text["normalize_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Clean up text fields using the processor.]] - `rationale_for` [EXTRACTED]
- [[normalize_text()]] - `calls` [INFERRED]
- [[validate_document()]] - `calls` [EXTRACTED]
- [[validator.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[normalize_fields()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None