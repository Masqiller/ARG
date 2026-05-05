---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L102"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Edges lacking confidence_score get sensible defaults in to_json.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Edges lacking confidence_score get sensible defaults in to_json."]:::centerNode
    center -->|"rationale_for"| N_tests_test_confidence_test_to_json_defaults_missing_confidence_score["test_to_json_defaults_missing_confidence_score[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_to_json_defaults_missing_confidence_score()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Edges lacking confidence_score get sensible defaults in to_json.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None