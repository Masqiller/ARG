---
source_file: "vendor/graphify/tests/fixtures/sample_calls.py"
type: "code"
community: "Community None"
degree: 3
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# normalize()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["normalize[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_calls_py["sample_calls.py"]
    center -->|"calls"| N_fixtures_sample_calls_run_analysis["run_analysis[]"]
    center -->|"calls"| N_fixtures_sample_calls_analyzer_full_pipeline[".full_pipeline[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.full_pipeline()]] - `calls` [EXTRACTED]
- [[run_analysis()]] - `calls` [EXTRACTED]
- [[sample_calls.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[normalize()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None