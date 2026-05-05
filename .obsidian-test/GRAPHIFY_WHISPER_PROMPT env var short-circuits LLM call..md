---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L41"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# GRAPHIFY_WHISPER_PROMPT env var short-circuits LLM call.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["GRAPHIFY_WHISPER_PROMPT env var short-circuits LLM call."]:::centerNode
    center -->|"rationale_for"| N_tests_test_transcribe_test_build_whisper_prompt_env_override["test_build_whisper_prompt_env_override[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_build_whisper_prompt_env_override()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GRAPHIFY_WHISPER_PROMPT env var short-circuits LLM call.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None