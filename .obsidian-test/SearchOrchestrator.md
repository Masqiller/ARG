---
source_file: "vendor/claude-mem/src/services/worker/search/SearchOrchestrator.ts"
type: "code"
community: "Community None"
degree: 16
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SearchOrchestrator

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["SearchOrchestrator"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_search_search_orchestrator_test_ts["search-orchestrator.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_constructor[".constructor[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_search[".search[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_executewithfallback[".executeWithFallback[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_findbyconcept[".findByConcept[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_findbytype[".findByType[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_findbyfile[".findByFile[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_gettimeline[".getTimeline[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_formattimeline[".formatTimeline[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_formatsearchresults[".formatSearchResults[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_getformatter[".getFormatter[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_gettimelinebuilder[".getTimelineBuilder[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_normalizeparams[".normalizeParams[]"]
    center -->|"method"| N_search_searchorchestrator_searchorchestrator_ischromaavailable[".isChromaAvailable[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_14]] - `method` [EXTRACTED]
- [[.executeWithFallback()]] - `method` [EXTRACTED]
- [[.findByConcept()]] - `method` [EXTRACTED]
- [[.findByFile()]] - `method` [EXTRACTED]
- [[.findByType()]] - `method` [EXTRACTED]
- [[.formatSearchResults()_1]] - `method` [EXTRACTED]
- [[.formatTimeline()_1]] - `method` [EXTRACTED]
- [[.getFormatter()_1]] - `method` [EXTRACTED]
- [[.getTimeline()]] - `method` [EXTRACTED]
- [[.getTimelineBuilder()]] - `method` [EXTRACTED]
- [[.isChromaAvailable()]] - `method` [EXTRACTED]
- [[.normalizeParams()_1]] - `method` [EXTRACTED]
- [[.search()_1]] - `method` [EXTRACTED]
- [[CorpusBuilder.ts]] - `imports` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `contains` [EXTRACTED]
- [[search-orchestrator.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SearchOrchestrator]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None