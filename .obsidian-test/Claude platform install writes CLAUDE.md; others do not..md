---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L102"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Claude platform install writes CLAUDE.md; others do not.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Claude platform install writes CLAUDE.md; others do not."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_claude_install_registers_claude_md["test_claude_install_registers_claude_md[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_claude_install_registers_claude_md()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Claude platform install writes CLAUDE.md; others do not.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None