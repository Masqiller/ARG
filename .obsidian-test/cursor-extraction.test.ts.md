---
source_file: "vendor/claude-mem/tests/transcripts/cursor-extraction.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor-extraction.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["cursor-extraction.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_transcript_parser_ts["transcript-parser.ts"]
    center -->|"imports"| N_shared_transcript_parser_extractlastmessage["extractLastMessage[]"]
    center -->|"imports"| N_shared_transcript_parser_extractlastmessagefromjsonl["extractLastMessageFromJsonl[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_adapters_cursor_ts["cursor.ts"]
    center -->|"imports"| N_adapters_cursor_derivecursortranscriptpath["deriveCursorTranscriptPath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cursor.ts]] - `imports_from` [EXTRACTED]
- [[deriveCursorTranscriptPath()]] - `imports` [EXTRACTED]
- [[extractLastMessage()]] - `imports` [EXTRACTED]
- [[extractLastMessageFromJsonl()]] - `imports` [EXTRACTED]
- [[transcript-parser.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor-extraction.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None