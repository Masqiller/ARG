---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L81"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# confidence_score survives build_from_json → to_json → JSON parse round-trip.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["confidence_score survives build_from_json → to_json → JSON parse round-trip."]:::centerNode
    center -->|"rationale_for"| N_tests_test_confidence_test_confidence_score_round_trip["test_confidence_score_round_trip[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_confidence_score_round_trip()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[confidence_score survives build_from_json → to_json → JSON parse round-trip.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None