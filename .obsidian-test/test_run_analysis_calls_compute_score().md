---
source_file: "vendor/graphify/tests/test_extract.py"
type: "code"
community: "Community None"
degree: 3
location: "L141"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_run_analysis_calls_compute_score()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_run_analysis_calls_compute_score[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_extract_py["test_extract.py"]
    center -->|"rationale_for"| N_tests_test_extract_rationale_142["run_analysis[] calls compute_score[] - must appear as a calls edge."]
    center -->|"calls"| N_graphify_extract_extract_python["extract_python[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_python()]] - `calls` [INFERRED]
- [[run_analysis() calls compute_score() - must appear as a calls edge.]] - `rationale_for` [EXTRACTED]
- [[test_extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_run_analysis_calls_compute_score()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None