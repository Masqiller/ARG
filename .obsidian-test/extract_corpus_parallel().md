---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 10
location: "L352"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# extract_corpus_parallel()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["extract_corpus_parallel[]"]:::centerNode
    center -->|"calls"| N_tests_test_chunking_test_corpus_parallel_runs_chunks_concurrently["test_corpus_parallel_runs_chunks_concurrently[]"]
    center -->|"calls"| N_tests_test_chunking_test_corpus_parallel_sequential_when_max_concurrency_is_one["test_corpus_parallel_sequential_when_max_concurrency_is_one[]"]
    center -->|"calls"| N_tests_test_chunking_test_corpus_parallel_continues_after_chunk_failure["test_corpus_parallel_continues_after_chunk_failure[]"]
    center -->|"calls"| N_tests_test_chunking_test_corpus_parallel_legacy_mode_when_token_budget_is_none["test_corpus_parallel_legacy_mode_when_token_budget_is_none[]"]
    center -->|"calls"| N_tests_test_chunking_test_corpus_parallel_token_budget_default_packs_files["test_corpus_parallel_token_budget_default_packs_files[]"]
    center -->|"calls"| N_tests_test_chunking_test_corpus_parallel_uses_adaptive_retry["test_corpus_parallel_uses_adaptive_retry[]"]
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_pack_chunks_by_tokens["_pack_chunks_by_tokens[]"]
    center -->|"calls"| N_graphify_llm_merge_into["_merge_into[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_364["Extract a corpus in chunks, merging results.      Chunking strategy:         - I"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract a corpus in chunks, merging results.      Chunking strategy         - I]] - `rationale_for` [EXTRACTED]
- [[_merge_into()]] - `calls` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_continues_after_chunk_failure()]] - `calls` [INFERRED]
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - `calls` [INFERRED]
- [[test_corpus_parallel_runs_chunks_concurrently()]] - `calls` [INFERRED]
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - `calls` [INFERRED]
- [[test_corpus_parallel_token_budget_default_packs_files()]] - `calls` [INFERRED]
- [[test_corpus_parallel_uses_adaptive_retry()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_corpus_parallel()]]
```

#graphify/code #graphify/INFERRED #community/Community_None