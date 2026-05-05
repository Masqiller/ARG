---
source_file: "vendor/external_plugins/caveman/tests/verify_repo.py"
type: "code"
community: "Community None"
degree: 4
location: "L104"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# verify_skill_frontmatter_upload_compatibility()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["verify_skill_frontmatter_upload_compatibility[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tests_verify_repo_py["verify_repo.py"]
    center -->|"calls"| N_tests_verify_repo_section["section[]"]
    center -->|"calls"| N_tests_verify_repo_ensure["ensure[]"]
    center -->|"calls"| N_tests_verify_repo_frontmatter_description["_frontmatter_description[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_frontmatter_description()]] - `calls` [EXTRACTED]
- [[ensure()]] - `calls` [EXTRACTED]
- [[section()]] - `calls` [EXTRACTED]
- [[verify_repo.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[verify_skill_frontmatter_upload_compatibility()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None