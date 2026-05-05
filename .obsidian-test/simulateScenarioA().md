---
source_file: "scripts/evaluate_efficiency.ts"
type: "code"
community: "Community None"
degree: 3
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# simulateScenarioA()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["simulateScenarioA[]"]:::centerNode
    center -->|"calls"| N_src_skill_mapper_getskillpath["getSkillPath[]"]
    center -->|"contains"| N_scripts_evaluate_efficiency_ts["evaluate_efficiency.ts"]
    center -->|"calls"| N_scripts_evaluate_efficiency_generatereport["generateReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[evaluate_efficiency.ts]] - `contains` [EXTRACTED]
- [[generateReport()_1]] - `calls` [EXTRACTED]
- [[getSkillPath()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[simulateScenarioA()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None