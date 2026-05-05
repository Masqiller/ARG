---
source_file: "vendor/graphify/worked/httpx/raw/models.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# models.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["models.py"]:::centerNode
    center -->|"contains"| N_raw_models_url["URL"]
    center -->|"contains"| N_raw_models_headers["Headers"]
    center -->|"contains"| N_raw_models_cookies["Cookies"]
    center -->|"contains"| N_raw_models_request["Request"]
    center -->|"contains"| N_raw_models_response["Response"]
    center -->|"contains"| N_raw_models_text["text[]"]
    center -->|"contains"| N_raw_models_is_success["is_success[]"]
    center -->|"contains"| N_raw_models_is_error["is_error[]"]
    center -->|"rationale_for"| N_raw_models_rationale_1["Core data models: URL, Headers, Cookies, Request, Response. These are the centra"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Cookies]] - `contains` [EXTRACTED]
- [[Core data models URL, Headers, Cookies, Request, Response. These are the centra]] - `rationale_for` [EXTRACTED]
- [[Headers]] - `contains` [EXTRACTED]
- [[Request]] - `contains` [EXTRACTED]
- [[Response]] - `contains` [EXTRACTED]
- [[URL]] - `contains` [EXTRACTED]
- [[is_error()]] - `contains` [EXTRACTED]
- [[is_success()]] - `contains` [EXTRACTED]
- [[text()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[models.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None