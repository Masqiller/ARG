---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/detect.py"
type: "code"
community: "Community None"
degree: 8
location: "L62"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detect_file_type()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["detect_file_type[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_detect_py["detect.py"]
    center -->|"calls"| N_scripts_detect_is_code_line["_is_code_line[]"]
    center -->|"calls"| N_scripts_detect_is_json_content["_is_json_content[]"]
    center -->|"calls"| N_scripts_detect_is_yaml_content["_is_yaml_content[]"]
    center -->|"calls"| N_scripts_detect_should_compress["should_compress[]"]
    center -->|"rationale_for"| N_scripts_detect_rationale_63["Classify a file as 'natural_language', 'code', 'config', or 'unknown'.      Retu"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_detect_py["detect.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_detect_py["detect.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Classify a file as 'natural_language', 'code', 'config', or 'unknown'.      Retu]] - `rationale_for` [EXTRACTED]
- [[_is_code_line()]] - `calls` [EXTRACTED]
- [[_is_json_content()]] - `calls` [EXTRACTED]
- [[_is_yaml_content()]] - `calls` [EXTRACTED]
- [[detect.py_1]] - `contains` [EXTRACTED]
- [[detect.py_2]] - `contains` [EXTRACTED]
- [[detect.py_3]] - `contains` [EXTRACTED]
- [[should_compress()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect_file_type()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None