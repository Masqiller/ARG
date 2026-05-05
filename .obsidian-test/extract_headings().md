---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/validate.py"
type: "code"
community: "Community None"
degree: 4
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_headings()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["extract_headings[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_validate_py["validate.py"]
    center -->|"calls"| N_scripts_validate_validate_headings["validate_headings[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[validate.py_1]] - `contains` [EXTRACTED]
- [[validate.py_2]] - `contains` [EXTRACTED]
- [[validate.py_3]] - `contains` [EXTRACTED]
- [[validate_headings()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_headings()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None