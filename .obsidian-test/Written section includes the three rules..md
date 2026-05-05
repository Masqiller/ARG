---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L20"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Written section includes the three rules.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Written section includes the three rules."]:::centerNode
    center -->|"rationale_for"| N_tests_test_claude_md_test_install_contains_expected_rules["test_install_contains_expected_rules[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_install_contains_expected_rules()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Written section includes the three rules.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None