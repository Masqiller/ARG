---
source_file: "vendor/graphify/worked/example/raw/parser.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L30"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract title, sections, and links from markdown.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract title, sections, and links from markdown."]:::centerNode
    center -->|"rationale_for"| N_raw_parser_parse_markdown["parse_markdown[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[parse_markdown()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract title, sections, and links from markdown.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None