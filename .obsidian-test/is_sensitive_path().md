---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/compress.py"
type: "code"
community: "Community None"
degree: 5
location: "L46"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# is_sensitive_path()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["is_sensitive_path[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_compress_py["compress.py"]
    center -->|"calls"| N_scripts_compress_compress_file["compress_file[]"]
    center -->|"rationale_for"| N_scripts_compress_rationale_47["Heuristic denylist for files that must never be shipped to a third-party API."]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Heuristic denylist for files that must never be shipped to a third-party API.]] - `rationale_for` [EXTRACTED]
- [[compress.py]] - `contains` [EXTRACTED]
- [[compress.py_1]] - `contains` [EXTRACTED]
- [[compress.py_2]] - `contains` [EXTRACTED]
- [[compress_file()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[is_sensitive_path()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None