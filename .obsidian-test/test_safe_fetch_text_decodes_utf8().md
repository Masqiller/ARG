---
source_file: "vendor/graphify/tests/test_security.py"
type: "code"
community: "Community None"
degree: 3
location: "L113"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_safe_fetch_text_decodes_utf8()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_safe_fetch_text_decodes_utf8[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_security_py["test_security.py"]
    center -->|"calls"| N_tests_test_security_make_mock_response["_make_mock_response[]"]
    center -->|"calls"| N_graphify_security_safe_fetch_text["safe_fetch_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_mock_response()]] - `calls` [EXTRACTED]
- [[safe_fetch_text()]] - `calls` [INFERRED]
- [[test_security.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_safe_fetch_text_decodes_utf8()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None