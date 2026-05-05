---
source_file: "scripts/evaluate_efficiency.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# evaluate_efficiency.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["evaluate_efficiency.ts"]:::centerNode
    center -->|"imports"| N_src_skill_mapper_getskillpath["getSkillPath[]"]
    center -->|"imports"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    center -->|"contains"| N_scripts_evaluate_efficiency_simulatescenarioa["simulateScenarioA[]"]
    center -->|"contains"| N_scripts_evaluate_efficiency_simulatescenariob["simulateScenarioB[]"]
    center -->|"contains"| N_scripts_evaluate_efficiency_simulatescenarioc["simulateScenarioC[]"]
    center -->|"contains"| N_scripts_evaluate_efficiency_generatereport["generateReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[generateReport()_1]] - `contains` [EXTRACTED]
- [[getSkillPath()]] - `imports` [EXTRACTED]
- [[recommendSkillsForTask()]] - `imports` [EXTRACTED]
- [[simulateScenarioA()]] - `contains` [EXTRACTED]
- [[simulateScenarioB()]] - `contains` [EXTRACTED]
- [[simulateScenarioC()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[evaluate_efficiency.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None