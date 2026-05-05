---
source_file: "vendor/graphify/tests/test_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L163"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Analyzer.process() calls run_analysis() - cross class→function calls edge.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Analyzer.process[] calls run_analysis[] - cross class→function calls edge."]:::centerNode
    center -->|"rationale_for"| N_tests_test_extract_test_method_calls_module_function["test_method_calls_module_function[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_method_calls_module_function()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Analyzer.process() calls run_analysis() - cross class→function calls edge.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None