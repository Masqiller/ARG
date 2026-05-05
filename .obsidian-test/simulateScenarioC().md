---
source_file: "scripts/evaluate_efficiency.ts"
type: "code"
community: "Community None"
degree: 4
location: "L77"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# simulateScenarioC()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["simulateScenarioC[]"]:::centerNode
    center -->|"calls"| N_src_skill_mapper_getskillpath["getSkillPath[]"]
    center -->|"calls"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    center -->|"contains"| N_scripts_evaluate_efficiency_ts["evaluate_efficiency.ts"]
    center -->|"calls"| N_scripts_evaluate_efficiency_generatereport["generateReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[evaluate_efficiency.ts]] - `contains` [EXTRACTED]
- [[generateReport()_1]] - `calls` [EXTRACTED]
- [[getSkillPath()]] - `calls` [INFERRED]
- [[recommendSkillsForTask()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[simulateScenarioC()]]
```

#graphify/code #graphify/INFERRED #community/Community_None