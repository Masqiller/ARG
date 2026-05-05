---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/compress.py"
type: "code"
community: "Community None"
degree: 5
location: "L59"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# strip_llm_wrapper()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["strip_llm_wrapper[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_compress_py["compress.py"]
    center -->|"calls"| N_scripts_compress_call_claude["call_claude[]"]
    center -->|"rationale_for"| N_scripts_compress_rationale_60["Strip outer ```markdown ... ``` fence when it wraps the entire output."]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_compress_py["compress.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Strip outer ```markdown ... ``` fence when it wraps the entire output.]] - `rationale_for` [EXTRACTED]
- [[call_claude()]] - `calls` [EXTRACTED]
- [[compress.py]] - `contains` [EXTRACTED]
- [[compress.py_1]] - `contains` [EXTRACTED]
- [[compress.py_2]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[strip_llm_wrapper()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None