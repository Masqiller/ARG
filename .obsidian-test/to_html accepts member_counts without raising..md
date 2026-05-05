---
source_file: "vendor/graphify/tests/test_export.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L131"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# to_html accepts member_counts without raising.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["to_html accepts member_counts without raising."]:::centerNode
    center -->|"rationale_for"| N_tests_test_export_test_to_html_member_counts_accepted["test_to_html_member_counts_accepted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_to_html_member_counts_accepted()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_html accepts member_counts without raising.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None