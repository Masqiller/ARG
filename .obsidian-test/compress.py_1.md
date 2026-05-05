---
source_file: "vendor/external_plugins/caveman/plugins/caveman/skills/compress/scripts/compress.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# compress.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["compress.py"]:::centerNode
    center -->|"contains"| N_scripts_compress_is_sensitive_path["is_sensitive_path[]"]
    center -->|"contains"| N_scripts_compress_strip_llm_wrapper["strip_llm_wrapper[]"]
    center -->|"contains"| N_scripts_compress_call_claude["call_claude[]"]
    center -->|"contains"| N_scripts_compress_build_compress_prompt["build_compress_prompt[]"]
    center -->|"contains"| N_scripts_compress_build_fix_prompt["build_fix_prompt[]"]
    center -->|"contains"| N_scripts_compress_compress_file["compress_file[]"]
    center -->|"imports_from"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_detect_py["detect.py"]
    center -->|"imports_from"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    center -->|"imports_from"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_cli_py["cli.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[build_compress_prompt()]] - `contains` [EXTRACTED]
- [[build_fix_prompt()]] - `contains` [EXTRACTED]
- [[call_claude()]] - `contains` [EXTRACTED]
- [[cli.py_1]] - `imports_from` [EXTRACTED]
- [[compress_file()]] - `contains` [EXTRACTED]
- [[detect.py_2]] - `imports_from` [EXTRACTED]
- [[is_sensitive_path()]] - `contains` [EXTRACTED]
- [[strip_llm_wrapper()]] - `contains` [EXTRACTED]
- [[validate.py_2]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[compress.py_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None