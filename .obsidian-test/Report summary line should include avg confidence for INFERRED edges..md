---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L137"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Report summary line should include avg confidence for INFERRED edges.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Report summary line should include avg confidence for INFERRED edges."]:::centerNode
    center -->|"rationale_for"| N_tests_test_confidence_test_report_shows_avg_confidence_for_inferred["test_report_shows_avg_confidence_for_inferred[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_report_shows_avg_confidence_for_inferred()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Report summary line should include avg confidence for INFERRED edges.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None