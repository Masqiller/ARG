---
source_file: "vendor/graphify/tests/test_chunking.py"
type: "code"
community: "Community None"
degree: 22
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_chunking.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 22

## Architecture Graph
```mermaid
graph LR
    center["test_chunking.py"]:::centerNode
    center -->|"contains"| N_tests_test_chunking_no_tokenizer["no_tokenizer[]"]
    center -->|"contains"| N_tests_test_chunking_test_pack_chunks_packs_small_files_together["test_pack_chunks_packs_small_files_together[]"]
    center -->|"contains"| N_tests_test_chunking_test_pack_chunks_starts_new_chunk_when_budget_would_overflow["test_pack_chunks_starts_new_chunk_when_budget_would_overflow[]"]
    center -->|"contains"| N_tests_test_chunking_test_pack_chunks_groups_by_directory["test_pack_chunks_groups_by_directory[]"]
    center -->|"contains"| N_tests_test_chunking_test_pack_chunks_oversized_file_gets_its_own_chunk["test_pack_chunks_oversized_file_gets_its_own_chunk[]"]
    center -->|"contains"| N_tests_test_chunking_test_pack_chunks_rejects_non_positive_budget["test_pack_chunks_rejects_non_positive_budget[]"]
    center -->|"contains"| N_tests_test_chunking_test_estimate_file_tokens_uses_tiktoken_when_available["test_estimate_file_tokens_uses_tiktoken_when_available[]"]
    center -->|"contains"| N_tests_test_chunking_test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer["test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer[]"]
    center -->|"contains"| N_tests_test_chunking_stub_chunk_result["_stub_chunk_result[]"]
    center -->|"contains"| N_tests_test_chunking_test_corpus_parallel_runs_chunks_concurrently["test_corpus_parallel_runs_chunks_concurrently[]"]
    center -->|"contains"| N_tests_test_chunking_test_corpus_parallel_sequential_when_max_concurrency_is_one["test_corpus_parallel_sequential_when_max_concurrency_is_one[]"]
    center -->|"contains"| N_tests_test_chunking_test_corpus_parallel_continues_after_chunk_failure["test_corpus_parallel_continues_after_chunk_failure[]"]
    center -->|"contains"| N_tests_test_chunking_test_corpus_parallel_legacy_mode_when_token_budget_is_none["test_corpus_parallel_legacy_mode_when_token_budget_is_none[]"]
    center -->|"contains"| N_tests_test_chunking_test_corpus_parallel_token_budget_default_packs_files["test_corpus_parallel_token_budget_default_packs_files[]"]
    center -->|"contains"| N_tests_test_chunking_stub_with_finish["_stub_with_finish[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for token-aware chunking and parallel chunk execution in graphify.llm.]] - `rationale_for` [EXTRACTED]
- [[_stub_chunk_result()]] - `contains` [EXTRACTED]
- [[_stub_with_finish()]] - `contains` [EXTRACTED]
- [[no_tokenizer()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_caps_at_max_depth()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_recurses_for_persistent_truncation()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_returns_directly_when_not_truncated()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_single_file_truncation_does_not_recurse()]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_splits_when_finish_reason_length()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_continues_after_chunk_failure()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_legacy_mode_when_token_budget_is_none()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_runs_chunks_concurrently()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_sequential_when_max_concurrency_is_one()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_token_budget_default_packs_files()]] - `contains` [EXTRACTED]
- [[test_corpus_parallel_uses_adaptive_retry()]] - `contains` [EXTRACTED]
- [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]] - `contains` [EXTRACTED]
- [[test_estimate_file_tokens_uses_tiktoken_when_available()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_groups_by_directory()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_oversized_file_gets_its_own_chunk()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_packs_small_files_together()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_rejects_non_positive_budget()]] - `contains` [EXTRACTED]
- [[test_pack_chunks_starts_new_chunk_when_budget_would_overflow()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_chunking.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None