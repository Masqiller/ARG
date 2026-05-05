---
source_file: "vendor/claude-mem/src/cli/adapters/cursor.ts"
type: "code"
community: "Community None"
degree: 2
location: "L22"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# deriveCursorTranscriptPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["deriveCursorTranscriptPath[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_transcripts_cursor_extraction_test_ts["cursor-extraction.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_cli_adapters_cursor_ts["cursor.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cursor-extraction.test.ts]] - `imports` [EXTRACTED]
- [[cursor.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[deriveCursorTranscriptPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None