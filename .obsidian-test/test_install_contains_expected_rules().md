---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "code"
community: "Community None"
degree: 3
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_install_contains_expected_rules()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_install_contains_expected_rules[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_claude_md_py["test_claude_md.py"]
    center -->|"rationale_for"| N_tests_test_claude_md_rationale_20["Written section includes the three rules."]
    center -->|"calls"| N_graphify_main_claude_install["claude_install[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Written section includes the three rules.]] - `rationale_for` [EXTRACTED]
- [[claude_install()]] - `calls` [INFERRED]
- [[test_claude_md.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_install_contains_expected_rules()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None