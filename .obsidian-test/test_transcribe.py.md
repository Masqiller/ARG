---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_transcribe.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["test_transcribe.py"]:::centerNode
    center -->|"contains"| N_tests_test_transcribe_test_video_extensions_set["test_video_extensions_set[]"]
    center -->|"contains"| N_tests_test_transcribe_test_build_whisper_prompt_no_nodes["test_build_whisper_prompt_no_nodes[]"]
    center -->|"contains"| N_tests_test_transcribe_test_build_whisper_prompt_env_override["test_build_whisper_prompt_env_override[]"]
    center -->|"contains"| N_tests_test_transcribe_test_build_whisper_prompt_returns_topic_string["test_build_whisper_prompt_returns_topic_string[]"]
    center -->|"contains"| N_tests_test_transcribe_test_build_whisper_prompt_nodes_without_labels["test_build_whisper_prompt_nodes_without_labels[]"]
    center -->|"contains"| N_tests_test_transcribe_test_transcribe_uses_cache["test_transcribe_uses_cache[]"]
    center -->|"contains"| N_tests_test_transcribe_test_transcribe_force_reruns["test_transcribe_force_reruns[]"]
    center -->|"contains"| N_tests_test_transcribe_test_transcribe_missing_faster_whisper["test_transcribe_missing_faster_whisper[]"]
    center -->|"contains"| N_tests_test_transcribe_test_transcribe_all_empty["test_transcribe_all_empty[]"]
    center -->|"contains"| N_tests_test_transcribe_test_transcribe_all_uses_cache["test_transcribe_all_uses_cache[]"]
    center -->|"contains"| N_tests_test_transcribe_test_transcribe_all_skips_failed["test_transcribe_all_skips_failed[]"]
    center -->|"rationale_for"| N_tests_test_transcribe_rationale_1["Tests for graphify.transcribe — video/audio transcription support."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphify.transcribe — videoaudio transcription support.]] - `rationale_for` [EXTRACTED]
- [[test_build_whisper_prompt_env_override()]] - `contains` [EXTRACTED]
- [[test_build_whisper_prompt_no_nodes()]] - `contains` [EXTRACTED]
- [[test_build_whisper_prompt_nodes_without_labels()]] - `contains` [EXTRACTED]
- [[test_build_whisper_prompt_returns_topic_string()]] - `contains` [EXTRACTED]
- [[test_transcribe_all_empty()]] - `contains` [EXTRACTED]
- [[test_transcribe_all_skips_failed()]] - `contains` [EXTRACTED]
- [[test_transcribe_all_uses_cache()]] - `contains` [EXTRACTED]
- [[test_transcribe_force_reruns()]] - `contains` [EXTRACTED]
- [[test_transcribe_missing_faster_whisper()]] - `contains` [EXTRACTED]
- [[test_transcribe_uses_cache()]] - `contains` [EXTRACTED]
- [[test_video_extensions_set()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_transcribe.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None