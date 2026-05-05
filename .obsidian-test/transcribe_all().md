---
source_file: "vendor/graphify/graphify/transcribe.py"
type: "code"
community: "Community None"
degree: 7
location: "L164"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# transcribe_all()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["transcribe_all[]"]:::centerNode
    center -->|"calls"| N_tests_test_transcribe_test_transcribe_all_empty["test_transcribe_all_empty[]"]
    center -->|"calls"| N_tests_test_transcribe_test_transcribe_all_uses_cache["test_transcribe_all_uses_cache[]"]
    center -->|"calls"| N_tests_test_transcribe_test_transcribe_all_skips_failed["test_transcribe_all_skips_failed[]"]
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_transcribe_py["transcribe.py"]
    center -->|"calls"| N_graphify_transcribe_transcribe["transcribe[]"]
    center -->|"rationale_for"| N_graphify_transcribe_rationale_169["Transcribe a list of video/audio files or URLs, return paths to transcript .txt"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Transcribe a list of videoaudio files or URLs, return paths to transcript .txt]] - `rationale_for` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[test_transcribe_all_empty()]] - `calls` [INFERRED]
- [[test_transcribe_all_skips_failed()]] - `calls` [INFERRED]
- [[test_transcribe_all_uses_cache()]] - `calls` [INFERRED]
- [[transcribe()]] - `calls` [EXTRACTED]
- [[transcribe.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transcribe_all()]]
```

#graphify/code #graphify/INFERRED #community/Community_None