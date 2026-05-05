---
source_file: "vendor/graphify/tests/test_incremental.py"
type: "code"
community: "Community None"
degree: 4
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _run()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_run[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_incremental_py["test_incremental.py"]
    center -->|"calls"| N_tests_test_incremental_test_manifest_written_after_extract["test_manifest_written_after_extract[]"]
    center -->|"calls"| N_tests_test_incremental_test_incremental_mode_detected_via_manifest["test_incremental_mode_detected_via_manifest[]"]
    center -->|"calls"| N_tests_test_incremental_test_no_incremental_without_manifest["test_no_incremental_without_manifest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_incremental.py]] - `contains` [EXTRACTED]
- [[test_incremental_mode_detected_via_manifest()]] - `calls` [EXTRACTED]
- [[test_manifest_written_after_extract()]] - `calls` [EXTRACTED]
- [[test_no_incremental_without_manifest()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_run()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None