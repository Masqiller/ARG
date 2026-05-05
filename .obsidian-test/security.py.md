---
source_file: "vendor/graphify/graphify/security.py"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# security.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["security.py"]:::centerNode
    center -->|"contains"| N_graphify_security_validate_url["validate_url[]"]
    center -->|"contains"| N_graphify_security_ssrf_guarded_socket["_ssrf_guarded_socket[]"]
    center -->|"contains"| N_graphify_security_nofileredirecthandler["_NoFileRedirectHandler"]
    center -->|"contains"| N_graphify_security_build_opener["_build_opener[]"]
    center -->|"contains"| N_graphify_security_safe_fetch["safe_fetch[]"]
    center -->|"contains"| N_graphify_security_safe_fetch_text["safe_fetch_text[]"]
    center -->|"contains"| N_graphify_security_validate_graph_path["validate_graph_path[]"]
    center -->|"contains"| N_graphify_security_sanitize_label["sanitize_label[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_NoFileRedirectHandler]] - `contains` [EXTRACTED]
- [[_build_opener()]] - `contains` [EXTRACTED]
- [[_ssrf_guarded_socket()]] - `contains` [EXTRACTED]
- [[safe_fetch()]] - `contains` [EXTRACTED]
- [[safe_fetch_text()]] - `contains` [EXTRACTED]
- [[sanitize_label()]] - `contains` [EXTRACTED]
- [[validate_graph_path()]] - `contains` [EXTRACTED]
- [[validate_url()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[security.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None