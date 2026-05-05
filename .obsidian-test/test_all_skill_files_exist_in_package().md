---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 2
location: "L93"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_all_skill_files_exist_in_package()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_all_skill_files_exist_in_package[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"rationale_for"| N_tests_test_install_rationale_94["All installable platform skill files must be present in the installed package."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[All installable platform skill files must be present in the installed package.]] - `rationale_for` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_all_skill_files_exist_in_package()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None