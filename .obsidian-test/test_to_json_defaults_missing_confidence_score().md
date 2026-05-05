---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "code"
community: "Community None"
degree: 4
location: "L101"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_to_json_defaults_missing_confidence_score()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_to_json_defaults_missing_confidence_score[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_confidence_py["test_confidence.py"]
    center -->|"rationale_for"| N_tests_test_confidence_rationale_102["Edges lacking confidence_score get sensible defaults in to_json."]
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Edges lacking confidence_score get sensible defaults in to_json.]] - `rationale_for` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_confidence.py]] - `contains` [EXTRACTED]
- [[to_json()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_to_json_defaults_missing_confidence_score()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None