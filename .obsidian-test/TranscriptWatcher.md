---
source_file: "vendor/claude-mem/src/services/transcripts/watcher.ts"
type: "code"
community: "Community None"
degree: 15
location: "L87"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TranscriptWatcher

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["TranscriptWatcher"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_cli_ts["cli.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_transcripts_watcher_ts["watcher.ts"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_constructor[".constructor[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_start[".start[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_stop[".stop[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_setupwatch[".setupWatch[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_deepestnonglobancestor[".deepestNonGlobAncestor[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_resolveschema[".resolveSchema[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_resolvewatchfiles[".resolveWatchFiles[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_normalizeglobpattern[".normalizeGlobPattern[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_hasglob[".hasGlob[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_addtailer[".addTailer[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_handleline[".handleLine[]"]
    center -->|"method"| N_transcripts_watcher_transcriptwatcher_extractsessionidfrompath[".extractSessionIdFromPath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.addTailer()]] - `method` [EXTRACTED]
- [[.constructor()_33]] - `method` [EXTRACTED]
- [[.deepestNonGlobAncestor()]] - `method` [EXTRACTED]
- [[.extractSessionIdFromPath()]] - `method` [EXTRACTED]
- [[.handleLine()]] - `method` [EXTRACTED]
- [[.hasGlob()]] - `method` [EXTRACTED]
- [[.normalizeGlobPattern()]] - `method` [EXTRACTED]
- [[.resolveSchema()]] - `method` [EXTRACTED]
- [[.resolveWatchFiles()]] - `method` [EXTRACTED]
- [[.setupWatch()]] - `method` [EXTRACTED]
- [[.start()_2]] - `method` [EXTRACTED]
- [[.stop()]] - `method` [EXTRACTED]
- [[cli.ts]] - `imports` [EXTRACTED]
- [[watcher.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TranscriptWatcher]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None