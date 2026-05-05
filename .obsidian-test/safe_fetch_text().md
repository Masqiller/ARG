---
source_file: "vendor/graphify/graphify/security.py"
type: "code"
community: "Community None"
degree: 7
location: "L165"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# safe_fetch_text()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["safe_fetch_text[]"]:::centerNode
    center -->|"calls"| N_tests_test_security_test_safe_fetch_text_decodes_utf8["test_safe_fetch_text_decodes_utf8[]"]
    center -->|"calls"| N_tests_test_security_test_safe_fetch_text_replaces_bad_bytes["test_safe_fetch_text_replaces_bad_bytes[]"]
    center -->|"contains"| N_vendor_graphify_graphify_security_py["security.py"]
    center -->|"calls"| N_graphify_security_safe_fetch["safe_fetch[]"]
    center -->|"rationale_for"| N_graphify_security_rationale_166["Fetch *url* and return decoded text [UTF-8, replacing bad bytes].      Wraps saf"]
    center -->|"calls"| N_graphify_ingest_fetch_html["_fetch_html[]"]
    center -->|"calls"| N_graphify_ingest_fetch_tweet["_fetch_tweet[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Fetch url and return decoded text (UTF-8, replacing bad bytes).      Wraps saf]] - `rationale_for` [EXTRACTED]
- [[_fetch_html()]] - `calls` [INFERRED]
- [[_fetch_tweet()]] - `calls` [INFERRED]
- [[safe_fetch()]] - `calls` [EXTRACTED]
- [[security.py]] - `contains` [EXTRACTED]
- [[test_safe_fetch_text_decodes_utf8()]] - `calls` [INFERRED]
- [[test_safe_fetch_text_replaces_bad_bytes()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[safe_fetch_text()]]
```

#graphify/code #graphify/INFERRED #community/Community_None