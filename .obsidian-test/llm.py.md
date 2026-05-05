---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# llm.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["llm.py"]:::centerNode
    center -->|"contains"| N_graphify_llm_get_tokenizer["_get_tokenizer[]"]
    center -->|"contains"| N_graphify_llm_read_files["_read_files[]"]
    center -->|"contains"| N_graphify_llm_parse_llm_json["_parse_llm_json[]"]
    center -->|"contains"| N_graphify_llm_call_openai_compat["_call_openai_compat[]"]
    center -->|"contains"| N_graphify_llm_call_claude["_call_claude[]"]
    center -->|"contains"| N_graphify_llm_extract_files_direct["extract_files_direct[]"]
    center -->|"contains"| N_graphify_llm_estimate_file_tokens["_estimate_file_tokens[]"]
    center -->|"contains"| N_graphify_llm_pack_chunks_by_tokens["_pack_chunks_by_tokens[]"]
    center -->|"contains"| N_graphify_llm_extract_with_adaptive_retry["_extract_with_adaptive_retry[]"]
    center -->|"contains"| N_graphify_llm_extract_corpus_parallel["extract_corpus_parallel[]"]
    center -->|"contains"| N_graphify_llm_merge_into["_merge_into[]"]
    center -->|"contains"| N_graphify_llm_estimate_cost["estimate_cost[]"]
    center -->|"contains"| N_graphify_llm_detect_backend["detect_backend[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_call_claude()]] - `contains` [EXTRACTED]
- [[_call_openai_compat()]] - `contains` [EXTRACTED]
- [[_estimate_file_tokens()]] - `contains` [EXTRACTED]
- [[_extract_with_adaptive_retry()]] - `contains` [EXTRACTED]
- [[_get_tokenizer()]] - `contains` [EXTRACTED]
- [[_merge_into()]] - `contains` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `contains` [EXTRACTED]
- [[_parse_llm_json()]] - `contains` [EXTRACTED]
- [[_read_files()]] - `contains` [EXTRACTED]
- [[detect_backend()]] - `contains` [EXTRACTED]
- [[estimate_cost()]] - `contains` [EXTRACTED]
- [[extract_corpus_parallel()]] - `contains` [EXTRACTED]
- [[extract_files_direct()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[llm.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None