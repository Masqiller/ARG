---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 11
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _relations()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["_relations[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_imports["test_java_finds_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_c_finds_includes["test_c_finds_includes[]"]
    center -->|"calls"| N_tests_test_languages_test_cpp_finds_includes["test_cpp_finds_includes[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_usings["test_csharp_finds_usings[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_imports["test_php_finds_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_static_property_access["test_php_finds_static_property_access[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_config_helper_call["test_php_finds_config_helper_call[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_container_bind["test_php_finds_container_bind[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_event_listeners["test_php_finds_event_listeners[]"]
    center -->|"calls"| N_tests_test_languages_test_swift_finds_imports["test_swift_finds_imports[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_c_finds_includes()]] - `calls` [EXTRACTED]
- [[test_cpp_finds_includes()]] - `calls` [EXTRACTED]
- [[test_csharp_finds_usings()]] - `calls` [EXTRACTED]
- [[test_java_finds_imports()]] - `calls` [EXTRACTED]
- [[test_languages.py]] - `contains` [EXTRACTED]
- [[test_php_finds_config_helper_call()]] - `calls` [EXTRACTED]
- [[test_php_finds_container_bind()]] - `calls` [EXTRACTED]
- [[test_php_finds_event_listeners()]] - `calls` [EXTRACTED]
- [[test_php_finds_imports()]] - `calls` [EXTRACTED]
- [[test_php_finds_static_property_access()]] - `calls` [EXTRACTED]
- [[test_swift_finds_imports()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_relations()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None