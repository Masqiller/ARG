---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 2
location: "L365"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_php_config_helper_target_matches_first_segment()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_php_config_helper_target_matches_first_segment[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_graphify_extract_extract_php["extract_php[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_php()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_php_config_helper_target_matches_first_segment()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None