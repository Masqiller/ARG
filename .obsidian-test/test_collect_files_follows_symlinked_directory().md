---
source_file: "vendor/graphify/tests/test_extract.py"
type: "code"
community: "Community None"
degree: 2
location: "L76"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_collect_files_follows_symlinked_directory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_collect_files_follows_symlinked_directory[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_extract_py["test_extract.py"]
    center -->|"calls"| N_graphify_extract_collect_files["collect_files[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collect_files()]] - `calls` [INFERRED]
- [[test_extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_collect_files_follows_symlinked_directory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None