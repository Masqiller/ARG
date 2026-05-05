---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "code"
community: "Community None"
degree: 3
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_install_creates_claude_md()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_install_creates_claude_md[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_claude_md_py["test_claude_md.py"]
    center -->|"rationale_for"| N_tests_test_claude_md_rationale_12["Creates CLAUDE.md when none exists."]
    center -->|"calls"| N_graphify_main_claude_install["claude_install[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Creates CLAUDE.md when none exists.]] - `rationale_for` [EXTRACTED]
- [[claude_install()]] - `calls` [INFERRED]
- [[test_claude_md.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_install_creates_claude_md()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None