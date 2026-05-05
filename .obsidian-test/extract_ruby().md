---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 7
location: "L1828"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_ruby()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["extract_ruby[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_ruby_no_error["test_ruby_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_ruby_finds_class["test_ruby_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_ruby_finds_methods["test_ruby_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_ruby_finds_function["test_ruby_finds_function[]"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_extract_generic["_extract_generic[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_1829["Extract classes, methods, singleton methods, and calls from a .rb file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, methods, singleton methods, and calls from a .rb file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_ruby_finds_class()]] - `calls` [INFERRED]
- [[test_ruby_finds_function()]] - `calls` [INFERRED]
- [[test_ruby_finds_methods()]] - `calls` [INFERRED]
- [[test_ruby_no_error()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_ruby()]]
```

#graphify/code #graphify/INFERRED #community/Community_None