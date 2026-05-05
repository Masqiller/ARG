---
source_file: "scripts/evaluate_efficiency.ts"
type: "code"
community: "Community None"
degree: 4
location: "L113"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# generateReport()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["generateReport[]"]:::centerNode
    center -->|"contains"| N_scripts_evaluate_efficiency_ts["evaluate_efficiency.ts"]
    center -->|"calls"| N_scripts_evaluate_efficiency_simulatescenarioa["simulateScenarioA[]"]
    center -->|"calls"| N_scripts_evaluate_efficiency_simulatescenariob["simulateScenarioB[]"]
    center -->|"calls"| N_scripts_evaluate_efficiency_simulatescenarioc["simulateScenarioC[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[evaluate_efficiency.ts]] - `contains` [EXTRACTED]
- [[simulateScenarioA()]] - `calls` [EXTRACTED]
- [[simulateScenarioB()]] - `calls` [EXTRACTED]
- [[simulateScenarioC()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generateReport()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None