---
source_file: "vendor/graphify/worked/httpx/raw/utils.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L56"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return a copy of headers with sensitive values replaced by [obfuscated].

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return a copy of headers with sensitive values replaced by [obfuscated]."]:::centerNode
    center -->|"rationale_for"| N_raw_utils_obfuscate_sensitive_headers["obfuscate_sensitive_headers[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[obfuscate_sensitive_headers()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return a copy of headers with sensitive values replaced by obfuscated.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None