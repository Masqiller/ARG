---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "code"
community: "Community None"
degree: 3
location: "L81"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_transcribe_force_reruns()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_transcribe_force_reruns[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_transcribe_py["test_transcribe.py"]
    center -->|"rationale_for"| N_tests_test_transcribe_rationale_82["force=True re-transcribes even when cache exists."]
    center -->|"calls"| N_graphify_transcribe_transcribe["transcribe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[force=True re-transcribes even when cache exists.]] - `rationale_for` [EXTRACTED]
- [[test_transcribe.py]] - `contains` [EXTRACTED]
- [[transcribe()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_transcribe_force_reruns()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None