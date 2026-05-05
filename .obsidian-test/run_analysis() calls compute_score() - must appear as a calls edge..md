---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L142"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# run_analysis() calls compute_score() - must appear as a calls edge.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["run_analysis[] calls compute_score[] - must appear as a calls edge."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_run_analysis_calls_compute_score["test_run_analysis_calls_compute_score[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_run_analysis_calls_compute_score()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run_analysis() calls compute_score() - must appear as a calls edge.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None