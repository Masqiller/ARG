---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L78"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# OpenCode skill file must reference @mention.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["OpenCode skill file must reference @mention."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_opencode_skill_contains_mention["test_opencode_skill_contains_mention[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_opencode_skill_contains_mention()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[OpenCode skill file must reference @mention.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None