---
source_file: "vendor/claude-mem/tests/gemini-cli-compat.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# gemini-cli-compat.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["gemini-cli-compat.test.ts"]:::centerNode
    center -->|"contains"| N_tests_gemini_cli_compat_test_writetranscript["writeTranscript[]"]
    center -->|"contains"| N_tests_gemini_cli_compat_test_setup["setup[]"]
    center -->|"contains"| N_tests_gemini_cli_compat_test_teardown["teardown[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[setup()]] - `contains` [EXTRACTED]
- [[teardown()]] - `contains` [EXTRACTED]
- [[writeTranscript()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gemini-cli-compat.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None