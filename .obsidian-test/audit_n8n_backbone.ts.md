---
source_file: "scripts/audit_n8n_backbone.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# audit_n8n_backbone.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["audit_n8n_backbone.ts"]:::centerNode
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"imports"| N_plugins_security_council_securitycouncilplugin["SecurityCouncilPlugin"]
    center -->|"contains"| N_scripts_audit_n8n_backbone_auditbackbone["auditBackbone[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[SecurityCouncilPlugin]] - `imports` [EXTRACTED]
- [[auditBackbone()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[audit_n8n_backbone.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None