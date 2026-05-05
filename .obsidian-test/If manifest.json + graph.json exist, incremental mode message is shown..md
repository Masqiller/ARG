---
source_file: "vendor/graphify/tests/test_incremental.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L42"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# If manifest.json + graph.json exist, incremental mode message is shown.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["If manifest.json + graph.json exist, incremental mode message is shown."]:::centerNode
    center -->|"rationale_for"| N_tests_test_incremental_test_incremental_mode_detected_via_manifest["test_incremental_mode_detected_via_manifest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_incremental_mode_detected_via_manifest()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[If manifest.json + graph.json exist, incremental mode message is shown.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None