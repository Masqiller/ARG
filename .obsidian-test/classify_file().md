---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 16
location: "L110"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# classify_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["classify_file[]"]:::centerNode
    center -->|"calls"| N_tests_test_detect_test_classify_python["test_classify_python[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_typescript["test_classify_typescript[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_markdown["test_classify_markdown[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_pdf["test_classify_pdf[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_pdf_in_xcassets_skipped["test_classify_pdf_in_xcassets_skipped[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_pdf_in_xcassets_root_skipped["test_classify_pdf_in_xcassets_root_skipped[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_unknown_returns_none["test_classify_unknown_returns_none[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_image["test_classify_image[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_md_paper_by_signals["test_classify_md_paper_by_signals[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_md_doc_without_signals["test_classify_md_doc_without_signals[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_attention_paper["test_classify_attention_paper[]"]
    center -->|"calls"| N_tests_test_detect_test_classify_video_extensions["test_classify_video_extensions[]"]
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_looks_like_paper["_looks_like_paper[]"]
    center -->|"calls"| N_graphify_detect_shebang_file_type["_shebang_file_type[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_looks_like_paper()]] - `calls` [EXTRACTED]
- [[_shebang_file_type()]] - `calls` [EXTRACTED]
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[test_classify_attention_paper()]] - `calls` [INFERRED]
- [[test_classify_image()]] - `calls` [INFERRED]
- [[test_classify_markdown()]] - `calls` [INFERRED]
- [[test_classify_md_doc_without_signals()]] - `calls` [INFERRED]
- [[test_classify_md_paper_by_signals()]] - `calls` [INFERRED]
- [[test_classify_pdf()]] - `calls` [INFERRED]
- [[test_classify_pdf_in_xcassets_root_skipped()]] - `calls` [INFERRED]
- [[test_classify_pdf_in_xcassets_skipped()]] - `calls` [INFERRED]
- [[test_classify_python()]] - `calls` [INFERRED]
- [[test_classify_typescript()]] - `calls` [INFERRED]
- [[test_classify_unknown_returns_none()]] - `calls` [INFERRED]
- [[test_classify_video_extensions()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[classify_file()]]
```

#graphify/code #graphify/INFERRED #community/Community_None