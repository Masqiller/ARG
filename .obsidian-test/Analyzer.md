---
source_file: "vendor/graphify/tests/fixtures/sample_calls.py"
type: "code"
community: "Community None"
degree: 4
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Analyzer

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Analyzer"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_calls_py["sample_calls.py"]
    center -->|"method"| N_fixtures_sample_calls_analyzer_process[".process[]"]
    center -->|"method"| N_fixtures_sample_calls_analyzer_score[".score[]"]
    center -->|"method"| N_fixtures_sample_calls_analyzer_full_pipeline[".full_pipeline[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.full_pipeline()]] - `method` [EXTRACTED]
- [[.process()]] - `method` [EXTRACTED]
- [[.score()]] - `method` [EXTRACTED]
- [[sample_calls.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Analyzer]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None