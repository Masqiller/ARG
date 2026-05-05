---
source_file: "vendor/external_plugins/caveman/tests/verify_repo.py"
type: "code"
community: "Community None"
degree: 3
location: "L124"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# verify_synced_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["verify_synced_files[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tests_verify_repo_py["verify_repo.py"]
    center -->|"calls"| N_tests_verify_repo_section["section[]"]
    center -->|"calls"| N_tests_verify_repo_ensure["ensure[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensure()]] - `calls` [EXTRACTED]
- [[section()]] - `calls` [EXTRACTED]
- [[verify_repo.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[verify_synced_files()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None