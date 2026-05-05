---
source_file: "vendor/graphify/tests/fixtures/sample_calls.py"
type: "code"
community: "Community None"
degree: 4
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# run_analysis()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["run_analysis[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_calls_py["sample_calls.py"]
    center -->|"calls"| N_fixtures_sample_calls_compute_score["compute_score[]"]
    center -->|"calls"| N_fixtures_sample_calls_normalize["normalize[]"]
    center -->|"calls"| N_fixtures_sample_calls_analyzer_process[".process[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.process()]] - `calls` [EXTRACTED]
- [[compute_score()]] - `calls` [EXTRACTED]
- [[normalize()]] - `calls` [EXTRACTED]
- [[sample_calls.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run_analysis()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None