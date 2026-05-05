---
source_file: "vendor/claude-mem/tests/gemini_provider.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# gemini_provider.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["gemini_provider.test.ts"]:::centerNode
    center -->|"imports"| N_worker_geminiprovider_geminiprovider["GeminiProvider"]
    center -->|"imports"| N_worker_databasemanager_databasemanager["DatabaseManager"]
    center -->|"imports"| N_worker_sessionmanager_sessionmanager["SessionManager"]
    center -->|"imports"| N_domain_modemanager_modemanager["ModeManager"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DatabaseManager]] - `imports` [EXTRACTED]
- [[GeminiProvider]] - `imports` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[SessionManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gemini_provider.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None