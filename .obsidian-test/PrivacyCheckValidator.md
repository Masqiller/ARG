---
source_file: "vendor/claude-mem/src/services/worker/validation/PrivacyCheckValidator.ts"
type: "code"
community: "Community None"
degree: 4
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# PrivacyCheckValidator

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["PrivacyCheckValidator"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_validation_privacycheckvalidator_ts["PrivacyCheckValidator.ts"]
    center -->|"method"| N_validation_privacycheckvalidator_privacycheckvalidator_checkuserpromptprivacy[".checkUserPromptPrivacy[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.checkUserPromptPrivacy()]] - `method` [EXTRACTED]
- [[PrivacyCheckValidator.ts]] - `contains` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[PrivacyCheckValidator]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None