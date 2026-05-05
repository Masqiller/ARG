---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L123"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# transcribe_all() returns cached paths for already-transcribed files.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["transcribe_all[] returns cached paths for already-transcribed files."]:::centerNode
    center -->|"rationale_for"| N_tests_test_transcribe_test_transcribe_all_uses_cache["test_transcribe_all_uses_cache[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_transcribe_all_uses_cache()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transcribe_all() returns cached paths for already-transcribed files.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None