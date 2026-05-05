---
source_file: "vendor/external_plugins/superpowers/tests/brainstorm-server/server.test.js"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# server.test.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["server.test.js"]:::centerNode
    center -->|"contains"| N_brainstorm_server_server_test_cleanup["cleanup[]"]
    center -->|"contains"| N_brainstorm_server_server_test_sleep["sleep[]"]
    center -->|"contains"| N_brainstorm_server_server_test_fetch["fetch[]"]
    center -->|"contains"| N_brainstorm_server_server_test_startserver["startServer[]"]
    center -->|"contains"| N_brainstorm_server_server_test_waitforserver["waitForServer[]"]
    center -->|"contains"| N_brainstorm_server_server_test_runtests["runTests[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanup()]] - `contains` [EXTRACTED]
- [[fetch()]] - `contains` [EXTRACTED]
- [[runTests()_1]] - `contains` [EXTRACTED]
- [[sleep()]] - `contains` [EXTRACTED]
- [[startServer()]] - `contains` [EXTRACTED]
- [[waitForServer()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[server.test.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None