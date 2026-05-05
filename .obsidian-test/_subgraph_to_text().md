---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 8
location: "L160"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _subgraph_to_text()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["_subgraph_to_text[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_subgraph_to_text_contains_labels["test_subgraph_to_text_contains_labels[]"]
    center -->|"calls"| N_tests_test_serve_test_subgraph_to_text_truncates["test_subgraph_to_text_truncates[]"]
    center -->|"calls"| N_tests_test_serve_test_subgraph_to_text_edge_included["test_subgraph_to_text_edge_included[]"]
    center -->|"calls"| N_tests_test_serve_test_subgraph_to_text_includes_edge_context["test_subgraph_to_text_includes_edge_context[]"]
    center -->|"calls"| N_graphify_security_sanitize_label["sanitize_label[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_query_graph_text["_query_graph_text[]"]
    center -->|"rationale_for"| N_graphify_serve_rationale_161["Render subgraph as text, cutting at token_budget [approx 3 chars/token].      se"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Render subgraph as text, cutting at token_budget (approx 3 charstoken).      se]] - `rationale_for` [EXTRACTED]
- [[_query_graph_text()]] - `calls` [EXTRACTED]
- [[sanitize_label()]] - `calls` [INFERRED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_subgraph_to_text_contains_labels()]] - `calls` [INFERRED]
- [[test_subgraph_to_text_edge_included()]] - `calls` [INFERRED]
- [[test_subgraph_to_text_includes_edge_context()]] - `calls` [INFERRED]
- [[test_subgraph_to_text_truncates()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_subgraph_to_text()]]
```

#graphify/code #graphify/INFERRED #community/Community_None