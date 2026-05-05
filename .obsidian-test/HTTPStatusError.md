---
source_file: "vendor/graphify/worked/httpx/raw/exceptions.py"
type: "code"
community: "Community None"
degree: 10
location: "L78"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# HTTPStatusError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["HTTPStatusError"]:::centerNode
    center -->|"uses"| N_raw_models_url["URL"]
    center -->|"uses"| N_raw_models_headers["Headers"]
    center -->|"uses"| N_raw_models_cookies["Cookies"]
    center -->|"uses"| N_raw_models_request["Request"]
    center -->|"uses"| N_raw_models_response["Response"]
    center -->|"calls"| N_raw_models_response_raise_for_status[".raise_for_status[]"]
    center -->|"contains"| N_vendor_graphify_worked_httpx_raw_exceptions_py["exceptions.py"]
    center -->|"inherits"| N_raw_exceptions_httperror["HTTPError"]
    center -->|"method"| N_raw_exceptions_httpstatuserror_init[".__init__[]"]
    center -->|"rationale_for"| N_raw_exceptions_rationale_79["A 4xx or 5xx response was received."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_21]] - `method` [EXTRACTED]
- [[.raise_for_status()]] - `calls` [INFERRED]
- [[A 4xx or 5xx response was received.]] - `rationale_for` [EXTRACTED]
- [[Cookies]] - `uses` [INFERRED]
- [[HTTPError]] - `inherits` [EXTRACTED]
- [[Headers]] - `uses` [INFERRED]
- [[Request]] - `uses` [INFERRED]
- [[Response]] - `uses` [INFERRED]
- [[URL]] - `uses` [INFERRED]
- [[exceptions.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HTTPStatusError]]
```

#graphify/code #graphify/INFERRED #community/Community_None