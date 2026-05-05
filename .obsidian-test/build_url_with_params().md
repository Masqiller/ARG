---
source_file: "vendor/graphify/worked/httpx/raw/utils.py"
type: "code"
community: "Community None"
degree: 4
location: "L78"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build_url_with_params()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["build_url_with_params[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_utils_py["utils.py"]
    center -->|"calls"| N_raw_utils_flatten_queryparams["flatten_queryparams[]"]
    center -->|"rationale_for"| N_raw_utils_rationale_79["Append query parameters to a URL string."]
    center -->|"calls"| N_raw_client_baseclient_build_request["._build_request[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[._build_request()]] - `calls` [INFERRED]
- [[Append query parameters to a URL string.]] - `rationale_for` [EXTRACTED]
- [[flatten_queryparams()]] - `calls` [EXTRACTED]
- [[utils.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_url_with_params()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None