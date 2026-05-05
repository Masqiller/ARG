---
source_file: "vendor/graphify/tests/fixtures/sample_calls.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Fixture: functions and methods that call each other - for call-graph extraction

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Fixture: functions and methods that call each other - for call-graph extraction"]:::centerNode
    center -->|"rationale_for"| N_vendor_graphify_tests_fixtures_sample_calls_py["sample_calls.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[sample_calls.py]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Fixture functions and methods that call each other - for call-graph extraction]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None