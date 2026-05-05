---
source_file: "vendor/graphify/graphify/security.py"
type: "code"
community: "Community None"
degree: 12
location: "L121"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# safe_fetch()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["safe_fetch[]"]:::centerNode
    center -->|"calls"| N_tests_test_security_test_safe_fetch_rejects_file_url["test_safe_fetch_rejects_file_url[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_rejects_ftp_url["test_safe_fetch_rejects_ftp_url[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_returns_bytes["test_safe_fetch_returns_bytes[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_raises_on_non_2xx["test_safe_fetch_raises_on_non_2xx[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_raises_on_size_exceeded["test_safe_fetch_raises_on_size_exceeded[]"]
    center -->|"contains"| N_vendor_graphify_graphify_security_py["security.py"]
    center -->|"calls"| N_graphify_security_validate_url["validate_url[]"]
    center -->|"calls"| N_graphify_security_ssrf_guarded_socket["_ssrf_guarded_socket[]"]
    center -->|"calls"| N_graphify_security_build_opener["_build_opener[]"]
    center -->|"calls"| N_graphify_security_safe_fetch_text["safe_fetch_text[]"]
    center -->|"rationale_for"| N_graphify_security_rationale_122["Fetch *url* and return raw bytes.      Protections applied:     - URL scheme val"]
    center -->|"calls"| N_graphify_ingest_download_binary["_download_binary[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Fetch url and return raw bytes.      Protections applied     - URL scheme val]] - `rationale_for` [EXTRACTED]
- [[_build_opener()]] - `calls` [EXTRACTED]
- [[_download_binary()]] - `calls` [INFERRED]
- [[_ssrf_guarded_socket()]] - `calls` [EXTRACTED]
- [[safe_fetch_text()]] - `calls` [EXTRACTED]
- [[security.py]] - `contains` [EXTRACTED]
- [[test_safe_fetch_raises_on_non_2xx()]] - `calls` [INFERRED]
- [[test_safe_fetch_raises_on_size_exceeded()]] - `calls` [INFERRED]
- [[test_safe_fetch_rejects_file_url()]] - `calls` [INFERRED]
- [[test_safe_fetch_rejects_ftp_url()]] - `calls` [INFERRED]
- [[test_safe_fetch_returns_bytes()]] - `calls` [INFERRED]
- [[validate_url()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[safe_fetch()]]
```

#graphify/code #graphify/INFERRED #community/Community_None