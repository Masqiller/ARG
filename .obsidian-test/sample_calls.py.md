---
source_file: "vendor/graphify/tests/fixtures/sample_calls.py"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample_calls.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["sample_calls.py"]:::centerNode
    center -->|"contains"| N_fixtures_sample_calls_compute_score["compute_score[]"]
    center -->|"contains"| N_fixtures_sample_calls_normalize["normalize[]"]
    center -->|"contains"| N_fixtures_sample_calls_run_analysis["run_analysis[]"]
    center -->|"contains"| N_fixtures_sample_calls_analyzer["Analyzer"]
    center -->|"rationale_for"| N_fixtures_sample_calls_rationale_1["Fixture: functions and methods that call each other - for call-graph extraction"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Analyzer]] - `contains` [EXTRACTED]
- [[Fixture functions and methods that call each other - for call-graph extraction]] - `rationale_for` [EXTRACTED]
- [[compute_score()]] - `contains` [EXTRACTED]
- [[normalize()]] - `contains` [EXTRACTED]
- [[run_analysis()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample_calls.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None