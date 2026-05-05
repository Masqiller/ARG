---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 10
location: "L2057"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_sql()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["extract_sql[]"]:::centerNode
    center -->|"calls"| N_tests_test_multilang_test_sql_finds_tables["test_sql_finds_tables[]"]
    center -->|"calls"| N_tests_test_multilang_test_sql_finds_view["test_sql_finds_view[]"]
    center -->|"calls"| N_tests_test_multilang_test_sql_finds_function["test_sql_finds_function[]"]
    center -->|"calls"| N_tests_test_multilang_test_sql_emits_foreign_key_edge["test_sql_emits_foreign_key_edge[]"]
    center -->|"calls"| N_tests_test_multilang_test_sql_emits_reads_from_edge["test_sql_emits_reads_from_edge[]"]
    center -->|"calls"| N_tests_test_multilang_test_sql_no_dangling_edges["test_sql_no_dangling_edges[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"calls"| N_graphify_extract_make_id["_make_id[]"]
    center -->|"rationale_for"| N_graphify_extract_rationale_2058["Extract tables, views, functions, and relationships from .sql files via tree-sit"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract tables, views, functions, and relationships from .sql files via tree-sit]] - `rationale_for` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_sql_emits_foreign_key_edge()]] - `calls` [INFERRED]
- [[test_sql_emits_reads_from_edge()]] - `calls` [INFERRED]
- [[test_sql_finds_function()]] - `calls` [INFERRED]
- [[test_sql_finds_tables()]] - `calls` [INFERRED]
- [[test_sql_finds_view()]] - `calls` [INFERRED]
- [[test_sql_no_dangling_edges()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_sql()]]
```

#graphify/code #graphify/INFERRED #community/Community_None