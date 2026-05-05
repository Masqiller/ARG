---
source_file: "vendor/graphify/tests/test_ingest.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_ingest.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["test_ingest.py"]:::centerNode
    center -->|"contains"| N_tests_test_ingest_test_file_created["test_file_created[]"]
    center -->|"contains"| N_tests_test_ingest_test_filename_format["test_filename_format[]"]
    center -->|"contains"| N_tests_test_ingest_test_frontmatter_question["test_frontmatter_question[]"]
    center -->|"contains"| N_tests_test_ingest_test_frontmatter_type["test_frontmatter_type[]"]
    center -->|"contains"| N_tests_test_ingest_test_source_nodes_included["test_source_nodes_included[]"]
    center -->|"contains"| N_tests_test_ingest_test_source_nodes_capped_at_10["test_source_nodes_capped_at_10[]"]
    center -->|"contains"| N_tests_test_ingest_test_memory_dir_created["test_memory_dir_created[]"]
    center -->|"contains"| N_tests_test_ingest_test_answer_in_body["test_answer_in_body[]"]
    center -->|"rationale_for"| N_tests_test_ingest_rationale_1["Tests for graphify.ingest.save_query_result"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphify.ingest.save_query_result]] - `rationale_for` [EXTRACTED]
- [[test_answer_in_body()]] - `contains` [EXTRACTED]
- [[test_file_created()]] - `contains` [EXTRACTED]
- [[test_filename_format()]] - `contains` [EXTRACTED]
- [[test_frontmatter_question()]] - `contains` [EXTRACTED]
- [[test_frontmatter_type()]] - `contains` [EXTRACTED]
- [[test_memory_dir_created()]] - `contains` [EXTRACTED]
- [[test_source_nodes_capped_at_10()]] - `contains` [EXTRACTED]
- [[test_source_nodes_included()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_ingest.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None