---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L94"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# All installable platform skill files must be present in the installed package.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["All installable platform skill files must be present in the installed package."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_all_skill_files_exist_in_package["test_all_skill_files_exist_in_package[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_all_skill_files_exist_in_package()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[All installable platform skill files must be present in the installed package.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None