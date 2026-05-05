---
source_file: "vendor/graphify/worked/httpx/raw/utils.py"
type: "code"
community: "Community None"
degree: 2
location: "L55"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# obfuscate_sensitive_headers()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["obfuscate_sensitive_headers[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_utils_py["utils.py"]
    center -->|"rationale_for"| N_raw_utils_rationale_56["Return a copy of headers with sensitive values replaced by [obfuscated]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return a copy of headers with sensitive values replaced by obfuscated.]] - `rationale_for` [EXTRACTED]
- [[utils.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[obfuscate_sensitive_headers()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None