---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 9
location: "L235"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _pack_chunks_by_tokens()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["_pack_chunks_by_tokens[]"]:::centerNode
    center -->|"calls"| N_tests_test_chunking_test_pack_chunks_packs_small_files_together["test_pack_chunks_packs_small_files_together[]"]
    center -->|"calls"| N_tests_test_chunking_test_pack_chunks_starts_new_chunk_when_budget_would_overflow["test_pack_chunks_starts_new_chunk_when_budget_would_overflow[]"]
    center -->|"calls"| N_tests_test_chunking_test_pack_chunks_groups_by_directory["test_pack_chunks_groups_by_directory[]"]
    center -->|"calls"| N_tests_test_chunking_test_pack_chunks_oversized_file_gets_its_own_chunk["test_pack_chunks_oversized_file_gets_its_own_chunk[]"]
    center -->|"calls"| N_tests_test_chunking_test_pack_chunks_rejects_non_positive_budget["test_pack_chunks_rejects_non_positive_budget[]"]
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_estimate_file_tokens["_estimate_file_tokens[]"]
    center -->|"calls"| N_graphify_llm_extract_corpus_parallel["extract_corpus_parallel[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_239["Greedily pack files into chunks that fit a token budget.      Files are first gr"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Greedily pack files into chunks that fit a token budget.      Files are first gr]] - `rationale_for` [EXTRACTED]
- [[_estimate_file_tokens()]] - `calls` [EXTRACTED]
- [[extract_corpus_parallel()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_pack_chunks_groups_by_directory()]] - `calls` [INFERRED]
- [[test_pack_chunks_oversized_file_gets_its_own_chunk()]] - `calls` [INFERRED]
- [[test_pack_chunks_packs_small_files_together()]] - `calls` [INFERRED]
- [[test_pack_chunks_rejects_non_positive_budget()]] - `calls` [INFERRED]
- [[test_pack_chunks_starts_new_chunk_when_budget_would_overflow()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_pack_chunks_by_tokens()]]
```

#graphify/code #graphify/INFERRED #community/Community_None