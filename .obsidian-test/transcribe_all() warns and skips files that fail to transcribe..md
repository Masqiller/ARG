---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L137"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# transcribe_all() warns and skips files that fail to transcribe.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["transcribe_all[] warns and skips files that fail to transcribe."]:::centerNode
    center -->|"rationale_for"| N_tests_test_transcribe_test_transcribe_all_skips_failed["test_transcribe_all_skips_failed[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_transcribe_all_skips_failed()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transcribe_all() warns and skips files that fail to transcribe.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None