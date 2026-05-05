---
source_file: "vendor/graphify/tests/test_security.py"
type: "code"
community: "Community None"
degree: 23
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_security.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["test_security.py"]:::centerNode
    center -->|"contains"| N_tests_test_security_test_validate_url_accepts_http["test_validate_url_accepts_http[]"]
    center -->|"contains"| N_tests_test_security_test_validate_url_accepts_https["test_validate_url_accepts_https[]"]
    center -->|"contains"| N_tests_test_security_test_validate_url_rejects_file["test_validate_url_rejects_file[]"]
    center -->|"contains"| N_tests_test_security_test_validate_url_rejects_ftp["test_validate_url_rejects_ftp[]"]
    center -->|"contains"| N_tests_test_security_test_validate_url_rejects_data["test_validate_url_rejects_data[]"]
    center -->|"contains"| N_tests_test_security_test_validate_url_rejects_empty_scheme["test_validate_url_rejects_empty_scheme[]"]
    center -->|"contains"| N_tests_test_security_make_mock_response["_make_mock_response[]"]
    center -->|"contains"| N_tests_test_security_test_safe_fetch_rejects_file_url["test_safe_fetch_rejects_file_url[]"]
    center -->|"contains"| N_tests_test_security_test_safe_fetch_rejects_ftp_url["test_safe_fetch_rejects_ftp_url[]"]
    center -->|"contains"| N_tests_test_security_test_safe_fetch_returns_bytes["test_safe_fetch_returns_bytes[]"]
    center -->|"contains"| N_tests_test_security_test_safe_fetch_raises_on_non_2xx["test_safe_fetch_raises_on_non_2xx[]"]
    center -->|"contains"| N_tests_test_security_test_safe_fetch_raises_on_size_exceeded["test_safe_fetch_raises_on_size_exceeded[]"]
    center -->|"contains"| N_tests_test_security_test_safe_fetch_text_decodes_utf8["test_safe_fetch_text_decodes_utf8[]"]
    center -->|"contains"| N_tests_test_security_test_safe_fetch_text_replaces_bad_bytes["test_safe_fetch_text_replaces_bad_bytes[]"]
    center -->|"contains"| N_tests_test_security_test_validate_graph_path_allows_inside_base["test_validate_graph_path_allows_inside_base[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphifysecurity.py - URL validation, safe fetch, path guards, label]] - `rationale_for` [EXTRACTED]
- [[_make_mock_response()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_raises_on_non_2xx()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_raises_on_size_exceeded()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_rejects_file_url()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_rejects_ftp_url()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_returns_bytes()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_text_decodes_utf8()]] - `contains` [EXTRACTED]
- [[test_safe_fetch_text_replaces_bad_bytes()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_caps_at_256()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_passthrough_html_chars()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_safe_passthrough()]] - `contains` [EXTRACTED]
- [[test_sanitize_label_strips_control_chars()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_allows_inside_base()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_blocks_traversal()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_raises_if_file_missing()]] - `contains` [EXTRACTED]
- [[test_validate_graph_path_requires_base_exists()]] - `contains` [EXTRACTED]
- [[test_validate_url_accepts_http()]] - `contains` [EXTRACTED]
- [[test_validate_url_accepts_https()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_data()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_empty_scheme()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_file()]] - `contains` [EXTRACTED]
- [[test_validate_url_rejects_ftp()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_security.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None