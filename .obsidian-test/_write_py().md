---
source_file: "vendor/graphify/tests/test_rationale.py"
type: "code"
community: "Community None"
degree: 8
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _write_py()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["_write_py[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_rationale_py["test_rationale.py"]
    center -->|"calls"| N_tests_test_rationale_test_module_docstring_extracted["test_module_docstring_extracted[]"]
    center -->|"calls"| N_tests_test_rationale_test_function_docstring_extracted["test_function_docstring_extracted[]"]
    center -->|"calls"| N_tests_test_rationale_test_class_docstring_extracted["test_class_docstring_extracted[]"]
    center -->|"calls"| N_tests_test_rationale_test_rationale_comment_extracted["test_rationale_comment_extracted[]"]
    center -->|"calls"| N_tests_test_rationale_test_rationale_for_edges_present["test_rationale_for_edges_present[]"]
    center -->|"calls"| N_tests_test_rationale_test_short_docstring_ignored["test_short_docstring_ignored[]"]
    center -->|"calls"| N_tests_test_rationale_test_rationale_confidence_is_extracted["test_rationale_confidence_is_extracted[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_class_docstring_extracted()]] - `calls` [EXTRACTED]
- [[test_function_docstring_extracted()]] - `calls` [EXTRACTED]
- [[test_module_docstring_extracted()]] - `calls` [EXTRACTED]
- [[test_rationale.py]] - `contains` [EXTRACTED]
- [[test_rationale_comment_extracted()]] - `calls` [EXTRACTED]
- [[test_rationale_confidence_is_extracted()]] - `calls` [EXTRACTED]
- [[test_rationale_for_edges_present()]] - `calls` [EXTRACTED]
- [[test_short_docstring_ignored()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_write_py()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None