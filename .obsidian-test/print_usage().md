---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/cli.py"
type: "code"
community: "Community None"
degree: 4
location: "L28"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# print_usage()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["print_usage[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_cli_py["cli.py"]
    center -->|"calls"| N_scripts_cli_main["main[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_cli_py["cli.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_cli_py["cli.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cli.py]] - `contains` [EXTRACTED]
- [[cli.py_1]] - `contains` [EXTRACTED]
- [[cli.py_2]] - `contains` [EXTRACTED]
- [[main()_12]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[print_usage()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None