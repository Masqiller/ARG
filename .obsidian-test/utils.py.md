---
source_file: "vendor/graphify/worked/httpx/raw/utils.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# utils.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["utils.py"]:::centerNode
    center -->|"contains"| N_raw_utils_primitive_value_to_str["primitive_value_to_str[]"]
    center -->|"contains"| N_raw_utils_normalize_header_key["normalize_header_key[]"]
    center -->|"contains"| N_raw_utils_flatten_queryparams["flatten_queryparams[]"]
    center -->|"contains"| N_raw_utils_parse_content_type["parse_content_type[]"]
    center -->|"contains"| N_raw_utils_obfuscate_sensitive_headers["obfuscate_sensitive_headers[]"]
    center -->|"contains"| N_raw_utils_unset_all_cookies["unset_all_cookies[]"]
    center -->|"contains"| N_raw_utils_is_known_encoding["is_known_encoding[]"]
    center -->|"contains"| N_raw_utils_build_url_with_params["build_url_with_params[]"]
    center -->|"rationale_for"| N_raw_utils_rationale_1["Utility functions shared across the library. Small helpers that don't belong in"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Utility functions shared across the library. Small helpers that don't belong in]] - `rationale_for` [EXTRACTED]
- [[build_url_with_params()]] - `contains` [EXTRACTED]
- [[flatten_queryparams()]] - `contains` [EXTRACTED]
- [[is_known_encoding()]] - `contains` [EXTRACTED]
- [[normalize_header_key()]] - `contains` [EXTRACTED]
- [[obfuscate_sensitive_headers()]] - `contains` [EXTRACTED]
- [[parse_content_type()]] - `contains` [EXTRACTED]
- [[primitive_value_to_str()]] - `contains` [EXTRACTED]
- [[unset_all_cookies()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[utils.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None