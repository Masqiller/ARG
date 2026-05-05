---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 5
location: "L41"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# NetworkError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["NetworkError"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_swift["sample.swift"]
    center -->|"case_of"| N_fixtures_sample_networkerror_timeout["timeout"]
    center -->|"case_of"| N_fixtures_sample_networkerror_connectionfailed["connectionFailed"]
    center -->|"case_of"| N_fixtures_sample_networkerror_unauthorized["unauthorized"]
    center -->|"method"| N_fixtures_sample_networkerror_describe[".describe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.describe()]] - `method` [EXTRACTED]
- [[connectionFailed]] - `case_of` [EXTRACTED]
- [[sample.swift]] - `contains` [EXTRACTED]
- [[timeout]] - `case_of` [EXTRACTED]
- [[unauthorized]] - `case_of` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[NetworkError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None