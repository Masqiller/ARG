---
source_file: "vendor/graphify/tests/test_incremental.py"
type: "code"
community: "Community None"
degree: 5
location: "L53"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_no_incremental_without_manifest()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_no_incremental_without_manifest[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_incremental_py["test_incremental.py"]
    center -->|"calls"| N_tests_test_incremental_run["_run[]"]
    center -->|"calls"| N_tests_test_incremental_make_docs_corpus["_make_docs_corpus[]"]
    center -->|"rationale_for"| N_tests_test_incremental_rationale_54["Without manifest.json, full scan message is shown [not incremental]."]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Without manifest.json, full scan message is shown (not incremental).]] - `rationale_for` [EXTRACTED]
- [[_make_docs_corpus()]] - `calls` [EXTRACTED]
- [[_run()_1]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_incremental.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_no_incremental_without_manifest()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None