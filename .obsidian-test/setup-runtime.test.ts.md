---
source_file: "vendor/claude-mem/tests/setup-runtime.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# setup-runtime.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["setup-runtime.test.ts"]:::centerNode
    center -->|"imports"| N_install_setup_runtime_readinstallmarker["readInstallMarker[]"]
    center -->|"imports"| N_install_setup_runtime_writeinstallmarker["writeInstallMarker[]"]
    center -->|"imports"| N_install_setup_runtime_isinstallcurrent["isInstallCurrent[]"]
    center -->|"contains"| N_tests_setup_runtime_test_probebunversion["probeBunVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isInstallCurrent()]] - `imports` [EXTRACTED]
- [[probeBunVersion()]] - `contains` [EXTRACTED]
- [[readInstallMarker()]] - `imports` [EXTRACTED]
- [[writeInstallMarker()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[setup-runtime.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None