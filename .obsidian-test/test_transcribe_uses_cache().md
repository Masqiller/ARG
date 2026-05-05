---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "code"
community: "Community None"
degree: 3
location: "L68"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_transcribe_uses_cache()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_transcribe_uses_cache[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_transcribe_py["test_transcribe.py"]
    center -->|"rationale_for"| N_tests_test_transcribe_rationale_69["If transcript already exists, transcribe[] returns cached path without running W"]
    center -->|"calls"| N_graphify_transcribe_transcribe["transcribe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[If transcript already exists, transcribe() returns cached path without running W]] - `rationale_for` [EXTRACTED]
- [[test_transcribe.py]] - `contains` [EXTRACTED]
- [[transcribe()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_transcribe_uses_cache()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None