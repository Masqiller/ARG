---
source_file: "vendor/graphify/tests/test_rationale.py"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_rationale.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["test_rationale.py"]:::centerNode
    center -->|"contains"| N_tests_test_rationale_write_py["_write_py[]"]
    center -->|"contains"| N_tests_test_rationale_test_module_docstring_extracted["test_module_docstring_extracted[]"]
    center -->|"contains"| N_tests_test_rationale_test_function_docstring_extracted["test_function_docstring_extracted[]"]
    center -->|"contains"| N_tests_test_rationale_test_class_docstring_extracted["test_class_docstring_extracted[]"]
    center -->|"contains"| N_tests_test_rationale_test_rationale_comment_extracted["test_rationale_comment_extracted[]"]
    center -->|"contains"| N_tests_test_rationale_test_rationale_for_edges_present["test_rationale_for_edges_present[]"]
    center -->|"contains"| N_tests_test_rationale_test_short_docstring_ignored["test_short_docstring_ignored[]"]
    center -->|"contains"| N_tests_test_rationale_test_rationale_confidence_is_extracted["test_rationale_confidence_is_extracted[]"]
    center -->|"rationale_for"| N_tests_test_rationale_rationale_1["Tests for rationale/docstring extraction in extract.py."]
    center -->|"rationale_for"| N_tests_test_rationale_rationale_50["# NOTE: must run before compile[] or linker will fail"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[NOTE must run before compile() or linker will fail]] - `rationale_for` [EXTRACTED]
- [[Tests for rationaledocstring extraction in extract.py.]] - `rationale_for` [EXTRACTED]
- [[_write_py()]] - `contains` [EXTRACTED]
- [[test_class_docstring_extracted()]] - `contains` [EXTRACTED]
- [[test_function_docstring_extracted()]] - `contains` [EXTRACTED]
- [[test_module_docstring_extracted()]] - `contains` [EXTRACTED]
- [[test_rationale_comment_extracted()]] - `contains` [EXTRACTED]
- [[test_rationale_confidence_is_extracted()]] - `contains` [EXTRACTED]
- [[test_rationale_for_edges_present()]] - `contains` [EXTRACTED]
- [[test_short_docstring_ignored()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_rationale.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None