---
source_file: "vendor/graphify/tests/test_confidence.py"
type: "code"
community: "Community None"
degree: 2
location: "L154"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_report_inferred_tag_with_score()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_report_inferred_tag_with_score[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_confidence_py["test_confidence.py"]
    center -->|"rationale_for"| N_tests_test_confidence_rationale_155["Surprising connections section shows confidence score next to INFERRED edges."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Surprising connections section shows confidence score next to INFERRED edges.]] - `rationale_for` [EXTRACTED]
- [[test_confidence.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_report_inferred_tag_with_score()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None