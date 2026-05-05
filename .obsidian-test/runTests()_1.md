---
source_file: "vendor/external_plugins/superpowers/tests/brainstorm-server/server.test.js"
type: "code"
community: "Community None"
degree: 5
location: "L72"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runTests()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["runTests[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_superpowers_tests_brainstorm_server_server_test_js["server.test.js"]
    center -->|"calls"| N_brainstorm_server_server_test_cleanup["cleanup[]"]
    center -->|"calls"| N_brainstorm_server_server_test_sleep["sleep[]"]
    center -->|"calls"| N_brainstorm_server_server_test_startserver["startServer[]"]
    center -->|"calls"| N_brainstorm_server_server_test_waitforserver["waitForServer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanup()]] - `calls` [EXTRACTED]
- [[server.test.js]] - `contains` [EXTRACTED]
- [[sleep()]] - `calls` [EXTRACTED]
- [[startServer()]] - `calls` [EXTRACTED]
- [[waitForServer()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runTests()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None