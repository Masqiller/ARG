---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 2
location: "L293"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_gemini_install_merges_existing_gemini_md()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_gemini_install_merges_existing_gemini_md[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_graphify_main_gemini_install["gemini_install[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[gemini_install()]] - `calls` [INFERRED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_gemini_install_merges_existing_gemini_md()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None