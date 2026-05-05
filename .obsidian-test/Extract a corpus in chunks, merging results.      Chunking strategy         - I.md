---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L364"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract a corpus in chunks, merging results.      Chunking strategy:         - I

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract a corpus in chunks, merging results.      Chunking strategy:         - I"]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_extract_corpus_parallel["extract_corpus_parallel[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_corpus_parallel()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract a corpus in chunks, merging results.      Chunking strategy         - I]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None