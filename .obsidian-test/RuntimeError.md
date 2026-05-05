---
source_file: ""
type: "code"
community: "Community None"
degree: 7
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# RuntimeError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["RuntimeError"]:::centerNode
    center -->|"calls"| N_tests_test_transcribe_test_transcribe_all_skips_failed["test_transcribe_all_skips_failed[]"]
    center -->|"calls"| N_graphify_extract_check_tree_sitter_version["_check_tree_sitter_version[]"]
    center -->|"calls"| N_graphify_hooks_install["install[]"]
    center -->|"calls"| N_graphify_hooks_uninstall["uninstall[]"]
    center -->|"calls"| N_graphify_ingest_ingest["ingest[]"]
    center -->|"inherits"| N_tests_verify_repo_checkfailure["CheckFailure"]
    center -->|"calls"| N_scripts_compress_call_claude["call_claude[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CheckFailure]] - `inherits` [EXTRACTED]
- [[_check_tree_sitter_version()]] - `calls` [INFERRED]
- [[call_claude()]] - `calls` [INFERRED]
- [[ingest()]] - `calls` [INFERRED]
- [[install()]] - `calls` [INFERRED]
- [[test_transcribe_all_skips_failed()]] - `calls` [INFERRED]
- [[uninstall()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RuntimeError]]
```

#graphify/code #graphify/INFERRED #community/Community_None