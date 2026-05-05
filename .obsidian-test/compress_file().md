---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/compress.py"
type: "code"
community: "Community None"
degree: 7
location: "L155"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# compress_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["compress_file[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_compress_py["compress.py"]
    center -->|"calls"| N_scripts_compress_is_sensitive_path["is_sensitive_path[]"]
    center -->|"calls"| N_scripts_compress_call_claude["call_claude[]"]
    center -->|"calls"| N_scripts_compress_build_compress_prompt["build_compress_prompt[]"]
    center -->|"calls"| N_scripts_compress_build_fix_prompt["build_fix_prompt[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build_compress_prompt()]] - `calls` [EXTRACTED]
- [[build_fix_prompt()]] - `calls` [EXTRACTED]
- [[call_claude()]] - `calls` [EXTRACTED]
- [[compress.py]] - `contains` [EXTRACTED]
- [[compress.py_1]] - `contains` [EXTRACTED]
- [[compress.py_2]] - `contains` [EXTRACTED]
- [[is_sensitive_path()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[compress_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None