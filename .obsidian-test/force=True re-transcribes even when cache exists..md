---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L82"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# force=True re-transcribes even when cache exists.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["force=True re-transcribes even when cache exists."]:::centerNode
    center -->|"rationale_for"| N_tests_test_transcribe_test_transcribe_force_reruns["test_transcribe_force_reruns[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_transcribe_force_reruns()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[force=True re-transcribes even when cache exists.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None