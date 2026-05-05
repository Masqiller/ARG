---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L49"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Concept nodes (empty source_file) must not appear in surprises.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Concept nodes [empty source_file] must not appear in surprises."]:::centerNode
    center -->|"rationale_for"| N_tests_test_analyze_test_surprising_connections_excludes_concept_nodes["test_surprising_connections_excludes_concept_nodes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_surprising_connections_excludes_concept_nodes()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Concept nodes (empty source_file) must not appear in surprises.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None