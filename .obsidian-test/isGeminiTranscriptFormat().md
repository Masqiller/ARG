---
source_file: "vendor/claude-mem/src/shared/transcript-parser.ts"
type: "code"
community: "Community None"
degree: 2
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isGeminiTranscriptFormat()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isGeminiTranscriptFormat[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_transcript_parser_ts["transcript-parser.ts"]
    center -->|"calls"| N_shared_transcript_parser_extractlastmessage["extractLastMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractLastMessage()]] - `calls` [EXTRACTED]
- [[transcript-parser.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isGeminiTranscriptFormat()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None