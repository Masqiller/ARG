---
source_file: "vendor/graphify/worked/example/raw/parser.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L71"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Parse a list of files and return their record IDs.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Parse a list of files and return their record IDs."]:::centerNode
    center -->|"rationale_for"| N_raw_parser_batch_parse["batch_parse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[batch_parse()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Parse a list of files and return their record IDs.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None