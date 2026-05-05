---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 5
location: "L1094"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# to_graphml()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["to_graphml[]"]:::centerNode
    center -->|"calls"| N_tests_test_export_test_to_graphml_creates_file["test_to_graphml_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_graphml_valid_xml["test_to_graphml_valid_xml[]"]
    center -->|"calls"| N_tests_test_export_test_to_graphml_has_community_attribute["test_to_graphml_has_community_attribute[]"]
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"rationale_for"| N_graphify_export_rationale_1099["Export graph as GraphML - opens in Gephi, yEd, and any GraphML-compatible tool."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Export graph as GraphML - opens in Gephi, yEd, and any GraphML-compatible tool.]] - `rationale_for` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[test_to_graphml_creates_file()]] - `calls` [INFERRED]
- [[test_to_graphml_has_community_attribute()]] - `calls` [INFERRED]
- [[test_to_graphml_valid_xml()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_graphml()]]
```

#graphify/code #graphify/INFERRED #community/Community_None