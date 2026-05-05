---
source_file: "vendor/graphify/tests/test_languages.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L840"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Dynamic template literals (with ${}) must not produce an imports_from edge.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Dynamic template literals [with ${}] must not produce an imports_from edge."]:::centerNode
    center -->|"rationale_for"| N_tests_test_languages_test_ts_dynamic_template_literal_skipped["test_ts_dynamic_template_literal_skipped[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_ts_dynamic_template_literal_skipped()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Dynamic template literals (with ${}) must not produce an imports_from edge.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None