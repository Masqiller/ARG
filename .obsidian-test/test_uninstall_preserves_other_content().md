---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "code"
community: "Community None"
degree: 4
location: "L71"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_uninstall_preserves_other_content()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_uninstall_preserves_other_content[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_claude_md_py["test_claude_md.py"]
    center -->|"rationale_for"| N_tests_test_claude_md_rationale_72["Uninstall keeps pre-existing content outside the graphify section."]
    center -->|"calls"| N_graphify_main_claude_install["claude_install[]"]
    center -->|"calls"| N_graphify_main_claude_uninstall["claude_uninstall[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Uninstall keeps pre-existing content outside the graphify section.]] - `rationale_for` [EXTRACTED]
- [[claude_install()]] - `calls` [INFERRED]
- [[claude_uninstall()]] - `calls` [INFERRED]
- [[test_claude_md.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_uninstall_preserves_other_content()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None