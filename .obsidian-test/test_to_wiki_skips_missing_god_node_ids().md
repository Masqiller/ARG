---
source_file: "vendor/graphify/tests/test_wiki.py"
type: "code"
community: "Community None"
degree: 4
location: "L105"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_to_wiki_skips_missing_god_node_ids()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_to_wiki_skips_missing_god_node_ids[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_wiki_py["test_wiki.py"]
    center -->|"calls"| N_tests_test_wiki_make_graph["_make_graph[]"]
    center -->|"rationale_for"| N_tests_test_wiki_rationale_106["God node with bad ID should not crash."]
    center -->|"calls"| N_graphify_wiki_to_wiki["to_wiki[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[God node with bad ID should not crash.]] - `rationale_for` [EXTRACTED]
- [[_make_graph()_2]] - `calls` [EXTRACTED]
- [[test_wiki.py]] - `contains` [EXTRACTED]
- [[to_wiki()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_to_wiki_skips_missing_god_node_ids()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None