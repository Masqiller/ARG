---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/cli.py"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cli.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["cli.py"]:::centerNode
    center -->|"contains"| N_scripts_cli_print_usage["print_usage[]"]
    center -->|"contains"| N_scripts_cli_main["main[]"]
    center -->|"imports_from"| N_vendor_external_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    center -->|"imports_from"| N_vendor_external_plugins_caveman_skills_compress_scripts_detect_py["detect.py"]
    center -->|"imports_from"| N_vendor_external_plugins_caveman_skills_compress_scripts_main_py["__main__.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[__main__.py_3]] - `imports_from` [EXTRACTED]
- [[compress.py_2]] - `imports_from` [EXTRACTED]
- [[detect.py_3]] - `imports_from` [EXTRACTED]
- [[main()_12]] - `contains` [EXTRACTED]
- [[print_usage()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cli.py_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None