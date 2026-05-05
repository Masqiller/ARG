---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "code"
community: "Community None"
degree: 5
location: "L80"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_confidence_score_round_trip()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_confidence_score_round_trip[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_confidence_py["test_confidence.py"]
    center -->|"calls"| N_tests_test_confidence_make_extraction["_make_extraction[]"]
    center -->|"rationale_for"| N_tests_test_confidence_rationale_81["confidence_score survives build_from_json → to_json → JSON parse round-trip."]
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_extraction()]] - `calls` [EXTRACTED]
- [[confidence_score survives build_from_json → to_json → JSON parse round-trip.]] - `rationale_for` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_confidence.py]] - `contains` [EXTRACTED]
- [[to_json()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_confidence_score_round_trip()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None