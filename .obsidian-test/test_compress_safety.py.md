---
source_file: "vendor/external_plugins/caveman/tests/test_compress_safety.py"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_compress_safety.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_compress_safety.py"]:::centerNode
    center -->|"contains"| N_tests_test_compress_safety_compresssafetytests["CompressSafetyTests"]
    center -->|"rationale_for"| N_tests_test_compress_safety_rationale_1["Tests for the data-loss guards in `compress_file` [issue #237].  The compress or"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CompressSafetyTests]] - `contains` [EXTRACTED]
- [[Tests for the data-loss guards in `compress_file` (issue 237).  The compress or]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_compress_safety.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None