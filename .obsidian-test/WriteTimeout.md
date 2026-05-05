---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 3
location: "L34"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# WriteTimeout

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["WriteTimeout"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_timeoutexception["TimeoutException"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_35["Timed out while sending data to the host."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Timed out while sending data to the host.]] - `rationale_for` [EXTRACTED]
- [[TimeoutException]] - `inherits` [EXTRACTED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[WriteTimeout]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None