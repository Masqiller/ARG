---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/compress.py"
type: "code"
community: "Community None"
degree: 4
location: "L123"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build_fix_prompt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["build_fix_prompt[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_compress_py["compress.py"]
    center -->|"calls"| N_scripts_compress_compress_file["compress_file[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[compress.py]] - `contains` [EXTRACTED]
- [[compress.py_1]] - `contains` [EXTRACTED]
- [[compress.py_2]] - `contains` [EXTRACTED]
- [[compress_file()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_fix_prompt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None