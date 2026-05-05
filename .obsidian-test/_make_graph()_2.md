---
source_file: "vendor/graphify/tests/test_wiki.py"
type: "code"
community: "Community None"
degree: 15
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["_make_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_wiki_py["test_wiki.py"]
    center -->|"calls"| N_tests_test_wiki_test_to_wiki_writes_index["test_to_wiki_writes_index[]"]
    center -->|"calls"| N_tests_test_wiki_test_to_wiki_returns_article_count["test_to_wiki_returns_article_count[]"]
    center -->|"calls"| N_tests_test_wiki_test_to_wiki_community_articles_created["test_to_wiki_community_articles_created[]"]
    center -->|"calls"| N_tests_test_wiki_test_to_wiki_god_node_article_created["test_to_wiki_god_node_article_created[]"]
    center -->|"calls"| N_tests_test_wiki_test_index_links_all_communities["test_index_links_all_communities[]"]
    center -->|"calls"| N_tests_test_wiki_test_index_lists_god_nodes["test_index_lists_god_nodes[]"]
    center -->|"calls"| N_tests_test_wiki_test_community_article_has_cross_links["test_community_article_has_cross_links[]"]
    center -->|"calls"| N_tests_test_wiki_test_community_article_shows_cohesion["test_community_article_shows_cohesion[]"]
    center -->|"calls"| N_tests_test_wiki_test_community_article_has_audit_trail["test_community_article_has_audit_trail[]"]
    center -->|"calls"| N_tests_test_wiki_test_god_node_article_has_connections["test_god_node_article_has_connections[]"]
    center -->|"calls"| N_tests_test_wiki_test_god_node_article_links_community["test_god_node_article_links_community[]"]
    center -->|"calls"| N_tests_test_wiki_test_to_wiki_skips_missing_god_node_ids["test_to_wiki_skips_missing_god_node_ids[]"]
    center -->|"calls"| N_tests_test_wiki_test_to_wiki_no_labels_uses_fallback["test_to_wiki_no_labels_uses_fallback[]"]
    center -->|"calls"| N_tests_test_wiki_test_article_navigation_footer["test_article_navigation_footer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_article_navigation_footer()]] - `calls` [EXTRACTED]
- [[test_community_article_has_audit_trail()]] - `calls` [EXTRACTED]
- [[test_community_article_has_cross_links()]] - `calls` [EXTRACTED]
- [[test_community_article_shows_cohesion()]] - `calls` [EXTRACTED]
- [[test_god_node_article_has_connections()]] - `calls` [EXTRACTED]
- [[test_god_node_article_links_community()]] - `calls` [EXTRACTED]
- [[test_index_links_all_communities()]] - `calls` [EXTRACTED]
- [[test_index_lists_god_nodes()]] - `calls` [EXTRACTED]
- [[test_to_wiki_community_articles_created()]] - `calls` [EXTRACTED]
- [[test_to_wiki_god_node_article_created()]] - `calls` [EXTRACTED]
- [[test_to_wiki_no_labels_uses_fallback()]] - `calls` [EXTRACTED]
- [[test_to_wiki_returns_article_count()]] - `calls` [EXTRACTED]
- [[test_to_wiki_skips_missing_god_node_ids()]] - `calls` [EXTRACTED]
- [[test_to_wiki_writes_index()]] - `calls` [EXTRACTED]
- [[test_wiki.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_graph()_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None