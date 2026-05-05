---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L69"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# If transcript already exists, transcribe() returns cached path without running W

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["If transcript already exists, transcribe[] returns cached path without running W"]:::centerNode
    center -->|"rationale_for"| N_tests_test_transcribe_test_transcribe_uses_cache["test_transcribe_uses_cache[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_transcribe_uses_cache()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[If transcript already exists, transcribe() returns cached path without running W]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None