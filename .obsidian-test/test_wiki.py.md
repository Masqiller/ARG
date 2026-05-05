---
source_file: "vendor/graphify/tests/test_wiki.py"
type: "code"
community: "Community None"
degree: 17
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_wiki.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["test_wiki.py"]:::centerNode
    center -->|"contains"| N_tests_test_wiki_make_graph["_make_graph[]"]
    center -->|"contains"| N_tests_test_wiki_test_to_wiki_writes_index["test_to_wiki_writes_index[]"]
    center -->|"contains"| N_tests_test_wiki_test_to_wiki_returns_article_count["test_to_wiki_returns_article_count[]"]
    center -->|"contains"| N_tests_test_wiki_test_to_wiki_community_articles_created["test_to_wiki_community_articles_created[]"]
    center -->|"contains"| N_tests_test_wiki_test_to_wiki_god_node_article_created["test_to_wiki_god_node_article_created[]"]
    center -->|"contains"| N_tests_test_wiki_test_index_links_all_communities["test_index_links_all_communities[]"]
    center -->|"contains"| N_tests_test_wiki_test_index_lists_god_nodes["test_index_lists_god_nodes[]"]
    center -->|"contains"| N_tests_test_wiki_test_community_article_has_cross_links["test_community_article_has_cross_links[]"]
    center -->|"contains"| N_tests_test_wiki_test_community_article_shows_cohesion["test_community_article_shows_cohesion[]"]
    center -->|"contains"| N_tests_test_wiki_test_community_article_has_audit_trail["test_community_article_has_audit_trail[]"]
    center -->|"contains"| N_tests_test_wiki_test_god_node_article_has_connections["test_god_node_article_has_connections[]"]
    center -->|"contains"| N_tests_test_wiki_test_god_node_article_links_community["test_god_node_article_links_community[]"]
    center -->|"contains"| N_tests_test_wiki_test_to_wiki_skips_missing_god_node_ids["test_to_wiki_skips_missing_god_node_ids[]"]
    center -->|"contains"| N_tests_test_wiki_test_to_wiki_no_labels_uses_fallback["test_to_wiki_no_labels_uses_fallback[]"]
    center -->|"contains"| N_tests_test_wiki_test_article_navigation_footer["test_article_navigation_footer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphify.wiki — Wikipedia-style article generation.]] - `rationale_for` [EXTRACTED]
- [[_make_graph()_2]] - `contains` [EXTRACTED]
- [[test_article_navigation_footer()]] - `contains` [EXTRACTED]
- [[test_community_article_has_audit_trail()]] - `contains` [EXTRACTED]
- [[test_community_article_has_cross_links()]] - `contains` [EXTRACTED]
- [[test_community_article_shows_cohesion()]] - `contains` [EXTRACTED]
- [[test_community_article_truncation_notice()]] - `contains` [EXTRACTED]
- [[test_god_node_article_has_connections()]] - `contains` [EXTRACTED]
- [[test_god_node_article_links_community()]] - `contains` [EXTRACTED]
- [[test_index_links_all_communities()]] - `contains` [EXTRACTED]
- [[test_index_lists_god_nodes()]] - `contains` [EXTRACTED]
- [[test_to_wiki_community_articles_created()]] - `contains` [EXTRACTED]
- [[test_to_wiki_god_node_article_created()]] - `contains` [EXTRACTED]
- [[test_to_wiki_no_labels_uses_fallback()]] - `contains` [EXTRACTED]
- [[test_to_wiki_returns_article_count()]] - `contains` [EXTRACTED]
- [[test_to_wiki_skips_missing_god_node_ids()]] - `contains` [EXTRACTED]
- [[test_to_wiki_writes_index()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_wiki.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None