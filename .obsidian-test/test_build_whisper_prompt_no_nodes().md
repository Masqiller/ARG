---
source_file: "vendor/graphify/tests/test_transcribe.py"
type: "code"
community: "Community None"
degree: 3
location: "L34"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_build_whisper_prompt_no_nodes()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_build_whisper_prompt_no_nodes[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_transcribe_py["test_transcribe.py"]
    center -->|"rationale_for"| N_tests_test_transcribe_rationale_35["Empty god_nodes returns fallback prompt."]
    center -->|"calls"| N_graphify_transcribe_build_whisper_prompt["build_whisper_prompt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Empty god_nodes returns fallback prompt.]] - `rationale_for` [EXTRACTED]
- [[build_whisper_prompt()]] - `calls` [INFERRED]
- [[test_transcribe.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_build_whisper_prompt_no_nodes()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None