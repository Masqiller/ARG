---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/validate.py"
type: "code"
community: "Community None"
degree: 6
location: "L133"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# validate_paths()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["validate_paths[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_validate_py["validate.py"]
    center -->|"calls"| N_scripts_validate_validationresult_add_warning[".add_warning[]"]
    center -->|"calls"| N_scripts_validate_extract_paths["extract_paths[]"]
    center -->|"calls"| N_scripts_validate_validate["validate[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_warning()]] - `calls` [EXTRACTED]
- [[extract_paths()]] - `calls` [EXTRACTED]
- [[validate()_2]] - `calls` [EXTRACTED]
- [[validate.py_1]] - `contains` [EXTRACTED]
- [[validate.py_2]] - `contains` [EXTRACTED]
- [[validate.py_3]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[validate_paths()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None