---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 6
location: "L337"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# count_words()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["count_words[]"]:::centerNode
    center -->|"calls"| N_tests_test_detect_test_count_words_sample_md["test_count_words_sample_md[]"]
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_extract_pdf_text["extract_pdf_text[]"]
    center -->|"calls"| N_graphify_detect_docx_to_markdown["docx_to_markdown[]"]
    center -->|"calls"| N_graphify_detect_xlsx_to_markdown["xlsx_to_markdown[]"]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[docx_to_markdown()]] - `calls` [EXTRACTED]
- [[extract_pdf_text()]] - `calls` [EXTRACTED]
- [[test_count_words_sample_md()]] - `calls` [INFERRED]
- [[xlsx_to_markdown()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[count_words()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None