---
source_file: "vendor/claude-mem/docs/context/agent-sdk-v2-examples.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# agent-sdk-v2-examples.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["agent-sdk-v2-examples.ts"]:::centerNode
    center -->|"contains"| N_context_agent_sdk_v2_examples_main["main[]"]
    center -->|"contains"| N_context_agent_sdk_v2_examples_basicsession["basicSession[]"]
    center -->|"contains"| N_context_agent_sdk_v2_examples_multiturn["multiTurn[]"]
    center -->|"contains"| N_context_agent_sdk_v2_examples_oneshot["oneShot[]"]
    center -->|"contains"| N_context_agent_sdk_v2_examples_sessionresume["sessionResume[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[basicSession()]] - `contains` [EXTRACTED]
- [[main()_19]] - `contains` [EXTRACTED]
- [[multiTurn()]] - `contains` [EXTRACTED]
- [[oneShot()]] - `contains` [EXTRACTED]
- [[sessionResume()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[agent-sdk-v2-examples.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None