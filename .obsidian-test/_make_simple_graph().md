---
source_file: "vendor/graphify/tests/test_analyze.py"
type: "code"
community: "Community None"
degree: 6
location: "L175"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_simple_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_make_simple_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_analyze_py["test_analyze.py"]
    center -->|"calls"| N_tests_test_analyze_test_graph_diff_new_nodes["test_graph_diff_new_nodes[]"]
    center -->|"calls"| N_tests_test_analyze_test_graph_diff_removed_nodes["test_graph_diff_removed_nodes[]"]
    center -->|"calls"| N_tests_test_analyze_test_graph_diff_new_edges["test_graph_diff_new_edges[]"]
    center -->|"calls"| N_tests_test_analyze_test_graph_diff_empty_diff["test_graph_diff_empty_diff[]"]
    center -->|"rationale_for"| N_tests_test_analyze_rationale_176["Helper: build a small nx.Graph from node/edge specs."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Helper build a small nx.Graph from nodeedge specs.]] - `rationale_for` [EXTRACTED]
- [[test_analyze.py]] - `contains` [EXTRACTED]
- [[test_graph_diff_empty_diff()]] - `calls` [EXTRACTED]
- [[test_graph_diff_new_edges()]] - `calls` [EXTRACTED]
- [[test_graph_diff_new_nodes()]] - `calls` [EXTRACTED]
- [[test_graph_diff_removed_nodes()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_simple_graph()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None