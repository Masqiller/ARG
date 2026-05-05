---
source_file: "vendor/graphify/tests/test_pipeline.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L24"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Run the full pipeline on the fixtures directory. Returns a dict of outputs.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Run the full pipeline on the fixtures directory. Returns a dict of outputs."]:::centerNode
    center -->|"rationale_for"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[run_pipeline()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Run the full pipeline on the fixtures directory. Returns a dict of outputs.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None