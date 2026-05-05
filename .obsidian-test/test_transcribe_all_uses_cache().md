---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "code"
community: "Community None"
degree: 4
location: "L122"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_transcribe_all_uses_cache()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_transcribe_all_uses_cache[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_transcribe_py["test_transcribe.py"]
    center -->|"rationale_for"| N_tests_test_transcribe_rationale_123["transcribe_all[] returns cached paths for already-transcribed files."]
    center -->|"calls"| N_graphify_transcribe_transcribe_all["transcribe_all[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[str]] - `calls` [INFERRED]
- [[test_transcribe.py]] - `contains` [EXTRACTED]
- [[transcribe_all()]] - `calls` [INFERRED]
- [[transcribe_all() returns cached paths for already-transcribed files.]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_transcribe_all_uses_cache()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None