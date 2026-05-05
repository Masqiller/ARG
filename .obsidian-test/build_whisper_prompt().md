---
source_file: "vendor/graphify/graphify/transcribe.py"
type: "code"
community: "Community None"
degree: 6
location: "L93"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# build_whisper_prompt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["build_whisper_prompt[]"]:::centerNode
    center -->|"calls"| N_tests_test_transcribe_test_build_whisper_prompt_no_nodes["test_build_whisper_prompt_no_nodes[]"]
    center -->|"calls"| N_tests_test_transcribe_test_build_whisper_prompt_env_override["test_build_whisper_prompt_env_override[]"]
    center -->|"calls"| N_tests_test_transcribe_test_build_whisper_prompt_returns_topic_string["test_build_whisper_prompt_returns_topic_string[]"]
    center -->|"calls"| N_tests_test_transcribe_test_build_whisper_prompt_nodes_without_labels["test_build_whisper_prompt_nodes_without_labels[]"]
    center -->|"contains"| N_vendor_graphify_graphify_transcribe_py["transcribe.py"]
    center -->|"rationale_for"| N_graphify_transcribe_rationale_94["Build a domain hint for Whisper from god nodes extracted from the corpus.      F"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Build a domain hint for Whisper from god nodes extracted from the corpus.      F]] - `rationale_for` [EXTRACTED]
- [[test_build_whisper_prompt_env_override()]] - `calls` [INFERRED]
- [[test_build_whisper_prompt_no_nodes()]] - `calls` [INFERRED]
- [[test_build_whisper_prompt_nodes_without_labels()]] - `calls` [INFERRED]
- [[test_build_whisper_prompt_returns_topic_string()]] - `calls` [INFERRED]
- [[transcribe.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_whisper_prompt()]]
```

#graphify/code #graphify/INFERRED #community/Community_None