---
source_file: "vendor/external_plugins/caveman/tests/verify_repo.py"
type: "code"
community: "Community None"
degree: 3
location: "L70"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _frontmatter_description()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_frontmatter_description[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tests_verify_repo_py["verify_repo.py"]
    center -->|"calls"| N_tests_verify_repo_ensure["ensure[]"]
    center -->|"calls"| N_tests_verify_repo_verify_skill_frontmatter_upload_compatibility["verify_skill_frontmatter_upload_compatibility[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensure()]] - `calls` [EXTRACTED]
- [[verify_repo.py]] - `contains` [EXTRACTED]
- [[verify_skill_frontmatter_upload_compatibility()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_frontmatter_description()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None