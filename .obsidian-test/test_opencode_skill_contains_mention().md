---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 2
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_opencode_skill_contains_mention()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_opencode_skill_contains_mention[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"rationale_for"| N_tests_test_install_rationale_78["OpenCode skill file must reference @mention."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCode skill file must reference @mention.]] - `rationale_for` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_opencode_skill_contains_mention()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None