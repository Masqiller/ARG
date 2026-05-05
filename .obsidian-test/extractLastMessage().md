---
source_file: "vendor/claude-mem/src/shared/transcript-parser.ts"
type: "code"
community: "Community None"
degree: 6
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractLastMessage()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["extractLastMessage[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_transcripts_cursor_extraction_test_ts["cursor-extraction.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_transcript_parser_ts["transcript-parser.ts"]
    center -->|"calls"| N_shared_transcript_parser_isgeminitranscriptformat["isGeminiTranscriptFormat[]"]
    center -->|"calls"| N_shared_transcript_parser_extractlastmessagefromgeminitranscript["extractLastMessageFromGeminiTranscript[]"]
    center -->|"calls"| N_shared_transcript_parser_extractlastmessagefromjsonl["extractLastMessageFromJsonl[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cursor-extraction.test.ts]] - `imports` [EXTRACTED]
- [[extractLastMessageFromGeminiTranscript()]] - `calls` [EXTRACTED]
- [[extractLastMessageFromJsonl()]] - `calls` [EXTRACTED]
- [[isGeminiTranscriptFormat()]] - `calls` [EXTRACTED]
- [[summarize.ts]] - `imports` [EXTRACTED]
- [[transcript-parser.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractLastMessage()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None