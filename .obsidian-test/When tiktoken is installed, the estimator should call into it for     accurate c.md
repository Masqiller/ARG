---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L111"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# When tiktoken is installed, the estimator should call into it for     accurate c

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["When tiktoken is installed, the estimator should call into it for     accurate c"]:::centerNode
    center -->|"rationale_for"| N_tests_test_chunking_test_estimate_file_tokens_uses_tiktoken_when_available["test_estimate_file_tokens_uses_tiktoken_when_available[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_estimate_file_tokens_uses_tiktoken_when_available()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[When tiktoken is installed, the estimator should call into it for     accurate c]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None