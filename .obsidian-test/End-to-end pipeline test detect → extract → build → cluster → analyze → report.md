---
source_file: "vendor/graphify/tests/test_pipeline.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# End-to-end pipeline test: detect → extract → build → cluster → analyze → report

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["End-to-end pipeline test: detect → extract → build → cluster → analyze → report"]:::centerNode
    center -->|"rationale_for"| N_vendor_graphify_tests_test_pipeline_py["test_pipeline.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_pipeline.py]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[End-to-end pipeline test detect → extract → build → cluster → analyze → report]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None