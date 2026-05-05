---
source_file: "vendor/claude-mem/tests/viewer/welcome-card-storage.test.ts"
type: "code"
community: "Community None"
degree: 7
location: "L3"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# MemoryStorage

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["MemoryStorage"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_viewer_welcome_card_storage_test_ts["welcome-card-storage.test.ts"]
    center -->|"method"| N_viewer_welcome_card_storage_test_memorystorage_getitem[".getItem[]"]
    center -->|"method"| N_viewer_welcome_card_storage_test_memorystorage_setitem[".setItem[]"]
    center -->|"method"| N_viewer_welcome_card_storage_test_memorystorage_removeitem[".removeItem[]"]
    center -->|"method"| N_viewer_welcome_card_storage_test_memorystorage_clear[".clear[]"]
    center -->|"method"| N_viewer_welcome_card_storage_test_memorystorage_length[".length[]"]
    center -->|"method"| N_viewer_welcome_card_storage_test_memorystorage_key[".key[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.clear()_1]] - `method` [EXTRACTED]
- [[.getItem()]] - `method` [EXTRACTED]
- [[.key()]] - `method` [EXTRACTED]
- [[.length()]] - `method` [EXTRACTED]
- [[.removeItem()]] - `method` [EXTRACTED]
- [[.setItem()]] - `method` [EXTRACTED]
- [[welcome-card-storage.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[MemoryStorage]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None