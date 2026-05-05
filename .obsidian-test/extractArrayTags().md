---
source_file: "vendor/claude-mem/src/bin/import-xml-observations.ts"
type: "code"
community: "Community None"
degree: 2
location: "L95"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractArrayTags()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["extractArrayTags[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_bin_import_xml_observations_ts["import-xml-observations.ts"]
    center -->|"calls"| N_bin_import_xml_observations_parseobservation["parseObservation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[import-xml-observations.ts]] - `contains` [EXTRACTED]
- [[parseObservation()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractArrayTags()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None