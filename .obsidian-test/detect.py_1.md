---
source_file: "vendor/external_plugins/caveman/caveman-compress/scripts/detect.py"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detect.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["detect.py"]:::centerNode
    center -->|"imports_from"| N_vendor_external_plugins_caveman_caveman_compress_scripts_compress_py["compress.py"]
    center -->|"contains"| N_scripts_detect_is_code_line["_is_code_line[]"]
    center -->|"contains"| N_scripts_detect_is_json_content["_is_json_content[]"]
    center -->|"contains"| N_scripts_detect_is_yaml_content["_is_yaml_content[]"]
    center -->|"contains"| N_scripts_detect_detect_file_type["detect_file_type[]"]
    center -->|"contains"| N_scripts_detect_should_compress["should_compress[]"]
    center -->|"imports_from"| N_vendor_external_plugins_caveman_caveman_compress_scripts_cli_py["cli.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_is_code_line()]] - `contains` [EXTRACTED]
- [[_is_json_content()]] - `contains` [EXTRACTED]
- [[_is_yaml_content()]] - `contains` [EXTRACTED]
- [[cli.py]] - `imports_from` [EXTRACTED]
- [[compress.py]] - `imports_from` [EXTRACTED]
- [[detect_file_type()]] - `contains` [EXTRACTED]
- [[should_compress()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect.py_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None