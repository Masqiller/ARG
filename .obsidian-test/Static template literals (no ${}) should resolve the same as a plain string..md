---
source_file: "vendor/graphify/tests/test_languages.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L851"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Static template literals (no ${}) should resolve the same as a plain string.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Static template literals [no ${}] should resolve the same as a plain string."]:::centerNode
    center -->|"rationale_for"| N_tests_test_languages_test_ts_static_template_literal_resolved["test_ts_static_template_literal_resolved[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_ts_static_template_literal_resolved()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Static template literals (no ${}) should resolve the same as a plain string.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None