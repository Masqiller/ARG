---
source_file: "vendor/graphify/tests/test_rationale.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L71"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Trivial docstrings under 20 chars should not become rationale nodes.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Trivial docstrings under 20 chars should not become rationale nodes."]:::centerNode
    center -->|"rationale_for"| N_tests_test_rationale_test_short_docstring_ignored["test_short_docstring_ignored[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_short_docstring_ignored()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Trivial docstrings under 20 chars should not become rationale nodes.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None