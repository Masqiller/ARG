---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 7
location: "L4365"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# collect_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["collect_files[]"]:::centerNode
    center -->|"calls"| N_tests_test_extract_test_collect_files_from_dir["test_collect_files_from_dir[]"]
    center -->|"calls"| N_tests_test_extract_test_collect_files_skips_hidden["test_collect_files_skips_hidden[]"]
    center -->|"calls"| N_tests_test_extract_test_collect_files_follows_symlinked_directory["test_collect_files_follows_symlinked_directory[]"]
    center -->|"calls"| N_tests_test_extract_test_collect_files_handles_circular_symlinks["test_collect_files_handles_circular_symlinks[]"]
    center -->|"calls"| N_tests_bench_extract_main["main[]"]
    center -->|"calls"| N_graphify_detect_load_graphifyignore["_load_graphifyignore[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_load_graphifyignore()]] - `calls` [INFERRED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[main()]] - `calls` [INFERRED]
- [[test_collect_files_follows_symlinked_directory()]] - `calls` [INFERRED]
- [[test_collect_files_from_dir()]] - `calls` [INFERRED]
- [[test_collect_files_handles_circular_symlinks()]] - `calls` [INFERRED]
- [[test_collect_files_skips_hidden()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[collect_files()]]
```

#graphify/code #graphify/INFERRED #community/Community_None