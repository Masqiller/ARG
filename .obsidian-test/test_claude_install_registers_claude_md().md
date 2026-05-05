---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 3
location: "L101"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_claude_install_registers_claude_md()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_claude_install_registers_claude_md[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_install["_install[]"]
    center -->|"rationale_for"| N_tests_test_install_rationale_102["Claude platform install writes CLAUDE.md; others do not."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Claude platform install writes CLAUDE.md; others do not.]] - `rationale_for` [EXTRACTED]
- [[_install()]] - `calls` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_claude_install_registers_claude_md()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None