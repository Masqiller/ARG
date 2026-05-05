---
source_file: "vendor/claude-mem/src/services/transcripts/processor.ts"
type: "code"
community: "Community None"
degree: 20
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TranscriptEventProcessor

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["TranscriptEventProcessor"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_processentry[".processEntry[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_getsessionkey[".getSessionKey[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_getorcreatesession[".getOrCreateSession[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_resolvesessionid[".resolveSessionId[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_resolvecwd[".resolveCwd[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_resolveproject[".resolveProject[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_handleevent[".handleEvent[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_applysessioncontext[".applySessionContext[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_handlesessioninit[".handleSessionInit[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_handletooluse[".handleToolUse[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_handletoolresult[".handleToolResult[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_sendobservation[".sendObservation[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_sendfileedit[".sendFileEdit[]"]
    center -->|"method"| N_transcripts_processor_transcripteventprocessor_maybeparsejson[".maybeParseJson[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.applySessionContext()]] - `method` [EXTRACTED]
- [[.getOrCreateSession()]] - `method` [EXTRACTED]
- [[.getSessionKey()]] - `method` [EXTRACTED]
- [[.handleEvent()]] - `method` [EXTRACTED]
- [[.handleSessionEnd()]] - `method` [EXTRACTED]
- [[.handleSessionInit()]] - `method` [EXTRACTED]
- [[.handleToolResult()]] - `method` [EXTRACTED]
- [[.handleToolUse()]] - `method` [EXTRACTED]
- [[.maybeParseJson()]] - `method` [EXTRACTED]
- [[.parseApplyPatchFiles()]] - `method` [EXTRACTED]
- [[.processEntry()]] - `method` [EXTRACTED]
- [[.queueSummary()]] - `method` [EXTRACTED]
- [[.resolveCwd()]] - `method` [EXTRACTED]
- [[.resolveProject()]] - `method` [EXTRACTED]
- [[.resolveSessionId()]] - `method` [EXTRACTED]
- [[.sendFileEdit()]] - `method` [EXTRACTED]
- [[.sendObservation()]] - `method` [EXTRACTED]
- [[.updateContext()]] - `method` [EXTRACTED]
- [[processor.ts]] - `contains` [EXTRACTED]
- [[watcher.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TranscriptEventProcessor]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None