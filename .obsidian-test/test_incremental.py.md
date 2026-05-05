---
source_file: "vendor/graphify/tests/test_incremental.py"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_incremental.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["test_incremental.py"]:::centerNode
    center -->|"contains"| N_tests_test_incremental_run["_run[]"]
    center -->|"contains"| N_tests_test_incremental_make_docs_corpus["_make_docs_corpus[]"]
    center -->|"contains"| N_tests_test_incremental_test_manifest_written_after_extract["test_manifest_written_after_extract[]"]
    center -->|"contains"| N_tests_test_incremental_test_incremental_mode_detected_via_manifest["test_incremental_mode_detected_via_manifest[]"]
    center -->|"contains"| N_tests_test_incremental_test_no_incremental_without_manifest["test_no_incremental_without_manifest[]"]
    center -->|"rationale_for"| N_tests_test_incremental_rationale_1["Integration tests for incremental graphify extract behavior."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Integration tests for incremental graphify extract behavior.]] - `rationale_for` [EXTRACTED]
- [[_make_docs_corpus()]] - `contains` [EXTRACTED]
- [[_run()_1]] - `contains` [EXTRACTED]
- [[test_incremental_mode_detected_via_manifest()]] - `contains` [EXTRACTED]
- [[test_manifest_written_after_extract()]] - `contains` [EXTRACTED]
- [[test_no_incremental_without_manifest()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_incremental.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None