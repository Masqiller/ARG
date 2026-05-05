---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/validate.py"
type: "code"
community: "Community None"
degree: 5
location: "L41"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_code_blocks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["extract_code_blocks[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_validate_py["validate.py"]
    center -->|"calls"| N_scripts_validate_validate_code_blocks["validate_code_blocks[]"]
    center -->|"rationale_for"| N_scripts_validate_rationale_42["Line-based fenced code block extractor.      Handles ``` and ~~~ fences with var"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Line-based fenced code block extractor.      Handles ``` and ~~~ fences with var]] - `rationale_for` [EXTRACTED]
- [[validate.py_1]] - `contains` [EXTRACTED]
- [[validate.py_2]] - `contains` [EXTRACTED]
- [[validate.py_3]] - `contains` [EXTRACTED]
- [[validate_code_blocks()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_code_blocks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None