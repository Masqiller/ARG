---
source_file: "vendor/claude-mem/src/shared/transcript-parser.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# transcript-parser.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["transcript-parser.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_transcripts_cursor_extraction_test_ts["cursor-extraction.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_tag_stripping_ts["tag-stripping.ts"]
    center -->|"contains"| N_shared_transcript_parser_isgeminitranscriptformat["isGeminiTranscriptFormat[]"]
    center -->|"contains"| N_shared_transcript_parser_extractlastmessage["extractLastMessage[]"]
    center -->|"contains"| N_shared_transcript_parser_extractlastmessagefromgeminitranscript["extractLastMessageFromGeminiTranscript[]"]
    center -->|"contains"| N_shared_transcript_parser_extractlastmessagefromjsonl["extractLastMessageFromJsonl[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[cursor-extraction.test.ts]] - `imports_from` [EXTRACTED]
- [[extractLastMessage()]] - `contains` [EXTRACTED]
- [[extractLastMessageFromGeminiTranscript()]] - `contains` [EXTRACTED]
- [[extractLastMessageFromJsonl()]] - `contains` [EXTRACTED]
- [[isGeminiTranscriptFormat()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[summarize.ts]] - `imports_from` [EXTRACTED]
- [[tag-stripping.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transcript-parser.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None