---
source_file: "vendor/graphify/graphify/wiki.py"
type: "code"
community: "Community None"
degree: 21
location: "L179"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# to_wiki()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 21

## Architecture Graph
```mermaid
graph LR
    center["to_wiki[]"]:::centerNode
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
    center -->|"calls"| N_tests_test_wiki_test_community_article_truncation_notice["test_community_article_truncation_notice[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Generate a Wikipedia-style wiki from the graph.      Writes       - index]] - `rationale_for` [EXTRACTED]
- [[_community_article()]] - `calls` [EXTRACTED]
- [[_god_node_article()]] - `calls` [EXTRACTED]
- [[_index_md()]] - `calls` [EXTRACTED]
- [[_safe_filename()]] - `calls` [EXTRACTED]
- [[test_article_navigation_footer()]] - `calls` [INFERRED]
- [[test_community_article_has_audit_trail()]] - `calls` [INFERRED]
- [[test_community_article_has_cross_links()]] - `calls` [INFERRED]
- [[test_community_article_shows_cohesion()]] - `calls` [INFERRED]
- [[test_community_article_truncation_notice()]] - `calls` [INFERRED]
- [[test_god_node_article_has_connections()]] - `calls` [INFERRED]
- [[test_god_node_article_links_community()]] - `calls` [INFERRED]
- [[test_index_links_all_communities()]] - `calls` [INFERRED]
- [[test_index_lists_god_nodes()]] - `calls` [INFERRED]
- [[test_to_wiki_community_articles_created()]] - `calls` [INFERRED]
- [[test_to_wiki_god_node_article_created()]] - `calls` [INFERRED]
- [[test_to_wiki_no_labels_uses_fallback()]] - `calls` [INFERRED]
- [[test_to_wiki_returns_article_count()]] - `calls` [INFERRED]
- [[test_to_wiki_skips_missing_god_node_ids()]] - `calls` [INFERRED]
- [[test_to_wiki_writes_index()]] - `calls` [INFERRED]
- [[wiki.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_wiki()]]
```

#graphify/code #graphify/INFERRED #community/Community_None