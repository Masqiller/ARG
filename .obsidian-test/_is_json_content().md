---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/detect.py"
type: "code"
community: "Community None"
degree: 5
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _is_json_content()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_is_json_content[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_detect_py["detect.py"]
    center -->|"calls"| N_scripts_detect_detect_file_type["detect_file_type[]"]
    center -->|"rationale_for"| N_scripts_detect_rationale_38["Check if content is valid JSON."]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_detect_py["detect.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_detect_py["detect.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Check if content is valid JSON.]] - `rationale_for` [EXTRACTED]
- [[detect.py_1]] - `contains` [EXTRACTED]
- [[detect.py_2]] - `contains` [EXTRACTED]
- [[detect.py_3]] - `contains` [EXTRACTED]
- [[detect_file_type()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_is_json_content()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None