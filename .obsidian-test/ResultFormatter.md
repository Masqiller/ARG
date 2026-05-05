---
source_file: "vendor/claude-mem/src/services/worker/search/ResultFormatter.ts"
type: "code"
community: "Community None"
degree: 17
location: "L15"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ResultFormatter

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["ResultFormatter"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_search_result_formatter_test_ts["result-formatter.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_resultformatter_ts["ResultFormatter.ts"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatsearchresults[".formatSearchResults[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_combineresults[".combineResults[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatsearchtableheader[".formatSearchTableHeader[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formattableheader[".formatTableHeader[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatobservationsearchrow[".formatObservationSearchRow[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatsessionsearchrow[".formatSessionSearchRow[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatpromptsearchrow[".formatPromptSearchRow[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatobservationindex[".formatObservationIndex[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatsessionindex[".formatSessionIndex[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatpromptindex[".formatPromptIndex[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_estimatereadtokens[".estimateReadTokens[]"]
    center -->|"method"| N_search_resultformatter_resultformatter_formatchromafailuremessage[".formatChromaFailureMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.combineResults()]] - `method` [EXTRACTED]
- [[.estimateReadTokens()_1]] - `method` [EXTRACTED]
- [[.formatChromaFailureMessage()]] - `method` [EXTRACTED]
- [[.formatObservationIndex()_1]] - `method` [EXTRACTED]
- [[.formatObservationSearchRow()_1]] - `method` [EXTRACTED]
- [[.formatPromptIndex()]] - `method` [EXTRACTED]
- [[.formatPromptSearchRow()]] - `method` [EXTRACTED]
- [[.formatSearchResults()]] - `method` [EXTRACTED]
- [[.formatSearchTableHeader()_1]] - `method` [EXTRACTED]
- [[.formatSearchTips()_1]] - `method` [EXTRACTED]
- [[.formatSessionIndex()_1]] - `method` [EXTRACTED]
- [[.formatSessionSearchRow()_1]] - `method` [EXTRACTED]
- [[.formatTableHeader()_1]] - `method` [EXTRACTED]
- [[ResultFormatter.ts]] - `contains` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[result-formatter.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ResultFormatter]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None