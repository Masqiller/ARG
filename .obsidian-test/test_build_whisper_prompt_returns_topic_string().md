---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "code"
community: "Community None"
degree: 3
location: "L47"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_build_whisper_prompt_returns_topic_string()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_build_whisper_prompt_returns_topic_string[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_transcribe_py["test_transcribe.py"]
    center -->|"rationale_for"| N_tests_test_transcribe_rationale_48["Returns a topic-based prompt from god node labels — no LLM call."]
    center -->|"calls"| N_graphify_transcribe_build_whisper_prompt["build_whisper_prompt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Returns a topic-based prompt from god node labels — no LLM call.]] - `rationale_for` [EXTRACTED]
- [[build_whisper_prompt()]] - `calls` [INFERRED]
- [[test_transcribe.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_build_whisper_prompt_returns_topic_string()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None