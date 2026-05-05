---
source_file: "vendor/graphify/tests/test_rationale.py"
type: "code"
community: "Community None"
degree: 4
location: "L70"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_short_docstring_ignored()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_short_docstring_ignored[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_rationale_py["test_rationale.py"]
    center -->|"calls"| N_tests_test_rationale_write_py["_write_py[]"]
    center -->|"rationale_for"| N_tests_test_rationale_rationale_71["Trivial docstrings under 20 chars should not become rationale nodes."]
    center -->|"calls"| N_graphify_extract_extract_python["extract_python[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Trivial docstrings under 20 chars should not become rationale nodes.]] - `rationale_for` [EXTRACTED]
- [[_write_py()]] - `calls` [EXTRACTED]
- [[extract_python()]] - `calls` [INFERRED]
- [[test_rationale.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_short_docstring_ignored()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None