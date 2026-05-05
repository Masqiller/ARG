---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "code"
community: "Community None"
degree: 5
location: "L136"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# test_transcribe_all_skips_failed()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_transcribe_all_skips_failed[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_transcribe_py["test_transcribe.py"]
    center -->|"rationale_for"| N_tests_test_transcribe_rationale_137["transcribe_all[] warns and skips files that fail to transcribe."]
    center -->|"calls"| N_runtimeerror["RuntimeError"]
    center -->|"calls"| N_graphify_transcribe_transcribe_all["transcribe_all[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RuntimeError]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[test_transcribe.py]] - `contains` [EXTRACTED]
- [[transcribe_all()]] - `calls` [INFERRED]
- [[transcribe_all() warns and skips files that fail to transcribe.]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_transcribe_all_skips_failed()]]
```

#graphify/code #graphify/INFERRED #community/Community_None