---
source_file: "vendor/graphify/tests/test_security.py"
type: "code"
community: "Community None"
degree: 5
location: "L53"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_mock_response()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_make_mock_response[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_security_py["test_security.py"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_returns_bytes["test_safe_fetch_returns_bytes[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_raises_on_non_2xx["test_safe_fetch_raises_on_non_2xx[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_text_decodes_utf8["test_safe_fetch_text_decodes_utf8[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_text_replaces_bad_bytes["test_safe_fetch_text_replaces_bad_bytes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_safe_fetch_raises_on_non_2xx()]] - `calls` [EXTRACTED]
- [[test_safe_fetch_returns_bytes()]] - `calls` [EXTRACTED]
- [[test_safe_fetch_text_decodes_utf8()]] - `calls` [EXTRACTED]
- [[test_safe_fetch_text_replaces_bad_bytes()]] - `calls` [EXTRACTED]
- [[test_security.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_mock_response()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None