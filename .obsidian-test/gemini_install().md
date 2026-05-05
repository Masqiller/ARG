---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 11
location: "L272"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# gemini_install()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["gemini_install[]"]:::centerNode
    center -->|"calls"| N_tests_test_install_test_gemini_install_writes_gemini_md["test_gemini_install_writes_gemini_md[]"]
    center -->|"calls"| N_tests_test_install_test_gemini_install_writes_hook["test_gemini_install_writes_hook[]"]
    center -->|"calls"| N_tests_test_install_test_gemini_install_idempotent["test_gemini_install_idempotent[]"]
    center -->|"calls"| N_tests_test_install_test_gemini_install_merges_existing_gemini_md["test_gemini_install_merges_existing_gemini_md[]"]
    center -->|"calls"| N_tests_test_install_test_gemini_uninstall_removes_section["test_gemini_uninstall_removes_section[]"]
    center -->|"calls"| N_tests_test_install_test_gemini_uninstall_removes_hook["test_gemini_uninstall_removes_hook[]"]
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_install["install[]"]
    center -->|"calls"| N_graphify_main_install_gemini_hook["_install_gemini_hook[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_273["Copy skill file to ~/.gemini/skills/graphify/, write GEMINI.md section, and inst"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Copy skill file to ~.geminiskillsgraphify, write GEMINI.md section, and inst]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[_install_gemini_hook()]] - `calls` [EXTRACTED]
- [[install()_1]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]
- [[test_gemini_install_idempotent()]] - `calls` [INFERRED]
- [[test_gemini_install_merges_existing_gemini_md()]] - `calls` [INFERRED]
- [[test_gemini_install_writes_gemini_md()]] - `calls` [INFERRED]
- [[test_gemini_install_writes_hook()]] - `calls` [INFERRED]
- [[test_gemini_uninstall_removes_hook()]] - `calls` [INFERRED]
- [[test_gemini_uninstall_removes_section()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gemini_install()]]
```

#graphify/code #graphify/INFERRED #community/Community_None