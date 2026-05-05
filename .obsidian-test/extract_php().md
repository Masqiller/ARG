---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 18
location: "L1848"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_php()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["extract_php[]"]:::centerNode
    center -->|"calls"| N_tests_test_languages_test_php_no_error["test_php_no_error[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_class["test_php_finds_class[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_methods["test_php_finds_methods[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_function["test_php_finds_function[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_imports["test_php_finds_imports[]"]
    center -->|"calls"| N_tests_test_languages_test_php_import_edges_have_import_context["test_php_import_edges_have_import_context[]"]
    center -->|"calls"| N_tests_test_languages_test_php_call_edges_have_call_context["test_php_call_edges_have_call_context[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_static_property_access["test_php_finds_static_property_access[]"]
    center -->|"calls"| N_tests_test_languages_test_php_static_prop_target_is_holding_class["test_php_static_prop_target_is_holding_class[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_config_helper_call["test_php_finds_config_helper_call[]"]
    center -->|"calls"| N_tests_test_languages_test_php_config_helper_target_matches_first_segment["test_php_config_helper_target_matches_first_segment[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_container_bind["test_php_finds_container_bind[]"]
    center -->|"calls"| N_tests_test_languages_test_php_container_bind_links_contract_to_implementation["test_php_container_bind_links_contract_to_implementation[]"]
    center -->|"calls"| N_tests_test_languages_test_php_finds_event_listeners["test_php_finds_event_listeners[]"]
    center -->|"calls"| N_tests_test_languages_test_php_event_listener_links_event_to_listener["test_php_event_listener_links_event_to_listener[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract classes, functions, methods, namespace uses, and calls from a .php file.]] - `rationale_for` [EXTRACTED]
- [[_extract_generic()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[test_php_call_edges_have_call_context()]] - `calls` [INFERRED]
- [[test_php_config_helper_target_matches_first_segment()]] - `calls` [INFERRED]
- [[test_php_container_bind_links_contract_to_implementation()]] - `calls` [INFERRED]
- [[test_php_event_listener_links_event_to_listener()]] - `calls` [INFERRED]
- [[test_php_finds_class()]] - `calls` [INFERRED]
- [[test_php_finds_config_helper_call()]] - `calls` [INFERRED]
- [[test_php_finds_container_bind()]] - `calls` [INFERRED]
- [[test_php_finds_event_listeners()]] - `calls` [INFERRED]
- [[test_php_finds_function()]] - `calls` [INFERRED]
- [[test_php_finds_imports()]] - `calls` [INFERRED]
- [[test_php_finds_methods()]] - `calls` [INFERRED]
- [[test_php_finds_static_property_access()]] - `calls` [INFERRED]
- [[test_php_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_php_no_error()]] - `calls` [INFERRED]
- [[test_php_static_prop_target_is_holding_class()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_php()]]
```

#graphify/code #graphify/INFERRED #community/Community_None