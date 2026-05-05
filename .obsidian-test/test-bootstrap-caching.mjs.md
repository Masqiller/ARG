---
source_file: "vendor/external_plugins/superpowers/tests/opencode/test-bootstrap-caching.mjs"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test-bootstrap-caching.mjs

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test-bootstrap-caching.mjs"]:::centerNode
    center -->|"contains"| N_opencode_test_bootstrap_caching_isbootstrapskillpath["isBootstrapSkillPath[]"]
    center -->|"contains"| N_opencode_test_bootstrap_caching_makeoutput["makeOutput[]"]
    center -->|"contains"| N_opencode_test_bootstrap_caching_countbootstrapparts["countBootstrapParts[]"]
    center -->|"contains"| N_opencode_test_bootstrap_caching_assertpresentbootstrap["assertPresentBootstrap[]"]
    center -->|"contains"| N_opencode_test_bootstrap_caching_assertmissingbootstrap["assertMissingBootstrap[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[assertMissingBootstrap()]] - `contains` [EXTRACTED]
- [[assertPresentBootstrap()]] - `contains` [EXTRACTED]
- [[countBootstrapParts()]] - `contains` [EXTRACTED]
- [[isBootstrapSkillPath()]] - `contains` [EXTRACTED]
- [[makeOutput()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test-bootstrap-caching.mjs]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None