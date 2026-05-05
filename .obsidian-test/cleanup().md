---
source_file: "vendor/external_plugins/superpowers/tests/brainstorm-server/server.test.js"
type: "code"
community: "Community None"
degree: 2
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cleanup()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["cleanup[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_superpowers_tests_brainstorm_server_server_test_js["server.test.js"]
    center -->|"calls"| N_brainstorm_server_server_test_runtests["runTests[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[runTests()_1]] - `calls` [EXTRACTED]
- [[server.test.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cleanup()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None