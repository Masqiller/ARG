---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L12"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Creates CLAUDE.md when none exists.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Creates CLAUDE.md when none exists."]:::centerNode
    center -->|"rationale_for"| N_tests_test_claude_md_test_install_creates_claude_md["test_install_creates_claude_md[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_install_creates_claude_md()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Creates CLAUDE.md when none exists.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None