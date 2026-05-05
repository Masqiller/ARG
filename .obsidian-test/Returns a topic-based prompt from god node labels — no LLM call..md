---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L48"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Returns a topic-based prompt from god node labels — no LLM call.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Returns a topic-based prompt from god node labels — no LLM call."]:::centerNode
    center -->|"rationale_for"| N_tests_test_transcribe_test_build_whisper_prompt_returns_topic_string["test_build_whisper_prompt_returns_topic_string[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_build_whisper_prompt_returns_topic_string()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Returns a topic-based prompt from god node labels — no LLM call.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None