---
source_file: "vendor/claude-mem/src/bin/import-xml-observations.ts"
type: "code"
community: "Community None"
degree: 11
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# import-xml-observations.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["import-xml-observations.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_bin_import_xml_observations_buildtimestampmap["buildTimestampMap[]"]
    center -->|"contains"| N_bin_import_xml_observations_extracttag["extractTag[]"]
    center -->|"contains"| N_bin_import_xml_observations_extractarraytags["extractArrayTags[]"]
    center -->|"contains"| N_bin_import_xml_observations_parseobservation["parseObservation[]"]
    center -->|"contains"| N_bin_import_xml_observations_parsesummary["parseSummary[]"]
    center -->|"contains"| N_bin_import_xml_observations_extracttimestamp["extractTimestamp[]"]
    center -->|"contains"| N_bin_import_xml_observations_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[buildTimestampMap()]] - `contains` [EXTRACTED]
- [[extractArrayTags()]] - `contains` [EXTRACTED]
- [[extractTag()]] - `contains` [EXTRACTED]
- [[extractTimestamp()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[main()_24]] - `contains` [EXTRACTED]
- [[parseObservation()]] - `contains` [EXTRACTED]
- [[parseSummary()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[import-xml-observations.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None