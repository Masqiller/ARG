---
source_file: "vendor/claude-mem/openclaw/src/index.ts"
type: "code"
community: "Community None"
degree: 17
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"contains"| N_src_index_poolemojiforagent["poolEmojiForAgent[]"]
    center -->|"contains"| N_src_index_buildgetsourcelabel["buildGetSourceLabel[]"]
    center -->|"contains"| N_src_index_workerbaseurl["workerBaseUrl[]"]
    center -->|"contains"| N_src_index_circuitallow["circuitAllow[]"]
    center -->|"contains"| N_src_index_circuitonsuccess["circuitOnSuccess[]"]
    center -->|"contains"| N_src_index_circuitonfailure["circuitOnFailure[]"]
    center -->|"contains"| N_src_index_circuitreset["circuitReset[]"]
    center -->|"contains"| N_src_index_workerpost["workerPost[]"]
    center -->|"contains"| N_src_index_workerpostfireandforget["workerPostFireAndForget[]"]
    center -->|"contains"| N_src_index_workergettext["workerGetText[]"]
    center -->|"contains"| N_src_index_workergetjson["workerGetJson[]"]
    center -->|"contains"| N_src_index_formatobservationmessage["formatObservationMessage[]"]
    center -->|"contains"| N_src_index_senddirecttelegram["sendDirectTelegram[]"]
    center -->|"contains"| N_src_index_sendtochannel["sendToChannel[]"]
    center -->|"contains"| N_src_index_connecttossestream["connectToSSEStream[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildGetSourceLabel()]] - `contains` [EXTRACTED]
- [[circuitAllow()]] - `contains` [EXTRACTED]
- [[circuitOnFailure()]] - `contains` [EXTRACTED]
- [[circuitOnSuccess()]] - `contains` [EXTRACTED]
- [[circuitReset()]] - `contains` [EXTRACTED]
- [[claudeMemPlugin()]] - `contains` [EXTRACTED]
- [[connectToSSEStream()]] - `contains` [EXTRACTED]
- [[formatObservationMessage()]] - `contains` [EXTRACTED]
- [[index.test.ts_1]] - `imports_from` [EXTRACTED]
- [[poolEmojiForAgent()]] - `contains` [EXTRACTED]
- [[sendDirectTelegram()]] - `contains` [EXTRACTED]
- [[sendToChannel()]] - `contains` [EXTRACTED]
- [[workerBaseUrl()]] - `contains` [EXTRACTED]
- [[workerGetJson()]] - `contains` [EXTRACTED]
- [[workerGetText()]] - `contains` [EXTRACTED]
- [[workerPost()]] - `contains` [EXTRACTED]
- [[workerPostFireAndForget()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None