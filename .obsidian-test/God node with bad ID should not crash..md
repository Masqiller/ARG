---
source_file: "vendor/graphify/tests/test_wiki.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L106"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# God node with bad ID should not crash.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["God node with bad ID should not crash."]:::centerNode
    center -->|"rationale_for"| N_tests_test_wiki_test_to_wiki_skips_missing_god_node_ids["test_to_wiki_skips_missing_god_node_ids[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_to_wiki_skips_missing_god_node_ids()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[God node with bad ID should not crash.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None