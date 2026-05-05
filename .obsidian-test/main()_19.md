---
source_file: "vendor/claude-mem/docs/context/agent-sdk-v2-examples.ts"
type: "code"
community: "Community None"
degree: 5
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_docs_context_agent_sdk_v2_examples_ts["agent-sdk-v2-examples.ts"]
    center -->|"calls"| N_context_agent_sdk_v2_examples_basicsession["basicSession[]"]
    center -->|"calls"| N_context_agent_sdk_v2_examples_multiturn["multiTurn[]"]
    center -->|"calls"| N_context_agent_sdk_v2_examples_oneshot["oneShot[]"]
    center -->|"calls"| N_context_agent_sdk_v2_examples_sessionresume["sessionResume[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[agent-sdk-v2-examples.ts]] - `contains` [EXTRACTED]
- [[basicSession()]] - `calls` [EXTRACTED]
- [[multiTurn()]] - `calls` [EXTRACTED]
- [[oneShot()]] - `calls` [EXTRACTED]
- [[sessionResume()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_19]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None