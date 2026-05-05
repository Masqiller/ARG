---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 34
location: "L14"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _labels()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 34

## Architecture Graph
```mermaid
graph LR
    center["_labels[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_class["test_java_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_interface["test_java_finds_interface[]"]
    center -->|"calls"| N_tests_test_languages_test_java_finds_methods["test_java_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_c_finds_functions["test_c_finds_functions[]"]
    center -->|"calls"| N_tests_test_languages_test_cpp_finds_class["test_cpp_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_cpp_finds_methods["test_cpp_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_ruby_finds_class["test_ruby_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_ruby_finds_methods["test_ruby_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_ruby_finds_function["test_ruby_finds_function[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_class["test_csharp_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_interface["test_csharp_finds_interface[]"]
    center -->|"calls"| N_tests_test_languages_test_csharp_finds_methods["test_csharp_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_finds_class["test_kotlin_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_kotlin_finds_data_class["test_kotlin_finds_data_class[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_c_finds_functions()]] - `calls` [EXTRACTED]
- [[test_cpp_finds_class()]] - `calls` [EXTRACTED]
- [[test_cpp_finds_methods()]] - `calls` [EXTRACTED]
- [[test_csharp_finds_class()]] - `calls` [EXTRACTED]
- [[test_csharp_finds_interface()]] - `calls` [EXTRACTED]
- [[test_csharp_finds_methods()]] - `calls` [EXTRACTED]
- [[test_java_finds_class()]] - `calls` [EXTRACTED]
- [[test_java_finds_interface()]] - `calls` [EXTRACTED]
- [[test_java_finds_methods()]] - `calls` [EXTRACTED]
- [[test_kotlin_finds_class()]] - `calls` [EXTRACTED]
- [[test_kotlin_finds_data_class()]] - `calls` [EXTRACTED]
- [[test_kotlin_finds_function()]] - `calls` [EXTRACTED]
- [[test_kotlin_finds_methods()]] - `calls` [EXTRACTED]
- [[test_languages.py]] - `contains` [EXTRACTED]
- [[test_php_finds_class()]] - `calls` [EXTRACTED]
- [[test_php_finds_function()]] - `calls` [EXTRACTED]
- [[test_php_finds_methods()]] - `calls` [EXTRACTED]
- [[test_ruby_finds_class()]] - `calls` [EXTRACTED]
- [[test_ruby_finds_function()]] - `calls` [EXTRACTED]
- [[test_ruby_finds_methods()]] - `calls` [EXTRACTED]
- [[test_scala_finds_class()]] - `calls` [EXTRACTED]
- [[test_scala_finds_methods()]] - `calls` [EXTRACTED]
- [[test_scala_finds_object()]] - `calls` [EXTRACTED]
- [[test_swift_finds_actor()]] - `calls` [EXTRACTED]
- [[test_swift_finds_class()]] - `calls` [EXTRACTED]
- [[test_swift_finds_deinit()]] - `calls` [EXTRACTED]
- [[test_swift_finds_enum()]] - `calls` [EXTRACTED]
- [[test_swift_finds_enum_cases()]] - `calls` [EXTRACTED]
- [[test_swift_finds_enum_methods()]] - `calls` [EXTRACTED]
- [[test_swift_finds_function()]] - `calls` [EXTRACTED]
- [[test_swift_finds_methods()]] - `calls` [EXTRACTED]
- [[test_swift_finds_protocol()]] - `calls` [EXTRACTED]
- [[test_swift_finds_struct()]] - `calls` [EXTRACTED]
- [[test_swift_finds_subscript()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_labels()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None