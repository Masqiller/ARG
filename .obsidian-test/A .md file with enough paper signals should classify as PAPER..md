---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L58"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# A .md file with enough paper signals should classify as PAPER.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["A .md file with enough paper signals should classify as PAPER."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_classify_md_paper_by_signals["test_classify_md_paper_by_signals[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_classify_md_paper_by_signals()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[A .md file with enough paper signals should classify as PAPER.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None