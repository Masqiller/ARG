---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "code"
community: "Community None"
degree: 4
location: "L190"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# select_instances()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["select_instances[]"]:::centerNode
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_run_batch_py["run-batch.py"]
    center -->|"calls"| N_swebench_run_batch_main["main[]"]
    center -->|"rationale_for"| N_swebench_run_batch_rationale_195["Filter dataset rows by instance_ids [if given] and apply limit."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[Filter dataset rows by instance_ids (if given) and apply limit.]] - `rationale_for` [EXTRACTED]
- [[main()_27]] - `calls` [EXTRACTED]
- [[run-batch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[select_instances()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None