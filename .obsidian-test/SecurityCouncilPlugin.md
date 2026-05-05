---
source_file: "src/plugins/security-council.ts"
type: "code"
community: "Community None"
degree: 5
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SecurityCouncilPlugin

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["SecurityCouncilPlugin"]:::centerNode
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"contains"| N_src_plugins_security_council_ts["security-council.ts"]
    center -->|"method"| N_plugins_security_council_securitycouncilplugin_constructor[".constructor[]"]
    center -->|"method"| N_plugins_security_council_securitycouncilplugin_execute[".execute[]"]
    center -->|"imports"| N_scripts_audit_n8n_backbone_ts["audit_n8n_backbone.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_54]] - `method` [EXTRACTED]
- [[.execute()]] - `method` [EXTRACTED]
- [[audit_n8n_backbone.ts]] - `imports` [EXTRACTED]
- [[security-council.ts]] - `contains` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SecurityCouncilPlugin]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None