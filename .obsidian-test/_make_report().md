---
source_file: "vendor/graphify/tests/test_hypergraph.py"
type: "code"
community: "Community None"
degree: 6
location: "L165"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_report()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_make_report[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_hypergraph_py["test_hypergraph.py"]
    center -->|"calls"| N_tests_test_hypergraph_test_report_includes_hyperedges_section["test_report_includes_hyperedges_section[]"]
    center -->|"calls"| N_tests_test_hypergraph_test_report_includes_hyperedge_node_list["test_report_includes_hyperedge_node_list[]"]
    center -->|"calls"| N_tests_test_hypergraph_test_report_skips_hyperedges_section_when_empty["test_report_skips_hyperedges_section_when_empty[]"]
    center -->|"calls"| N_tests_test_hypergraph_test_report_skips_hyperedges_section_when_key_missing["test_report_skips_hyperedges_section_when_key_missing[]"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[test_hypergraph.py]] - `contains` [EXTRACTED]
- [[test_report_includes_hyperedge_node_list()]] - `calls` [EXTRACTED]
- [[test_report_includes_hyperedges_section()]] - `calls` [EXTRACTED]
- [[test_report_skips_hyperedges_section_when_empty()]] - `calls` [EXTRACTED]
- [[test_report_skips_hyperedges_section_when_key_missing()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_report()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None