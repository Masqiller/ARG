---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/compress.py"
type: "code"
community: "Community None"
degree: 6
location: "L75"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# call_claude()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["call_claude[]"]:::centerNode
    center -->|"calls"| N_runtimeerror["RuntimeError"]
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_compress_py["compress.py"]
    center -->|"calls"| N_scripts_compress_strip_llm_wrapper["strip_llm_wrapper[]"]
    center -->|"calls"| N_scripts_compress_compress_file["compress_file[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RuntimeError]] - `calls` [INFERRED]
- [[compress.py]] - `contains` [EXTRACTED]
- [[compress.py_1]] - `contains` [EXTRACTED]
- [[compress.py_2]] - `contains` [EXTRACTED]
- [[compress_file()]] - `calls` [EXTRACTED]
- [[strip_llm_wrapper()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[call_claude()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None