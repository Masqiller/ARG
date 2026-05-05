---
source_file: "vendor/graphify/tests/test_wiki.py"
type: "code"
community: "Community None"
degree: 3
location: "L128"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_community_article_truncation_notice()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_community_article_truncation_notice[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_wiki_py["test_wiki.py"]
    center -->|"rationale_for"| N_tests_test_wiki_rationale_129["Communities with more than 25 nodes show a truncation notice."]
    center -->|"calls"| N_graphify_wiki_to_wiki["to_wiki[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Communities with more than 25 nodes show a truncation notice.]] - `rationale_for` [EXTRACTED]
- [[test_wiki.py]] - `contains` [EXTRACTED]
- [[to_wiki()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_community_article_truncation_notice()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None