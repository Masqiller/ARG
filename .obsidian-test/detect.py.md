---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 25
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detect.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 25

## Architecture Graph
```mermaid
graph LR
    center["detect.py"]:::centerNode
    center -->|"imports_from"| N_enum["Enum"]
    center -->|"contains"| N_graphify_detect_filetype["FileType"]
    center -->|"contains"| N_graphify_detect_is_sensitive["_is_sensitive[]"]
    center -->|"contains"| N_graphify_detect_looks_like_paper["_looks_like_paper[]"]
    center -->|"contains"| N_graphify_detect_shebang_file_type["_shebang_file_type[]"]
    center -->|"contains"| N_graphify_detect_classify_file["classify_file[]"]
    center -->|"contains"| N_graphify_detect_extract_pdf_text["extract_pdf_text[]"]
    center -->|"contains"| N_graphify_detect_docx_to_markdown["docx_to_markdown[]"]
    center -->|"contains"| N_graphify_detect_xlsx_to_markdown["xlsx_to_markdown[]"]
    center -->|"contains"| N_graphify_detect_xlsx_extract_structure["xlsx_extract_structure[]"]
    center -->|"contains"| N_graphify_detect_convert_office_file["convert_office_file[]"]
    center -->|"contains"| N_graphify_detect_count_words["count_words[]"]
    center -->|"contains"| N_graphify_detect_is_noise_dir["_is_noise_dir[]"]
    center -->|"contains"| N_graphify_detect_parse_gitignore_line["_parse_gitignore_line[]"]
    center -->|"contains"| N_graphify_detect_find_vcs_root["_find_vcs_root[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Enum]] - `imports_from` [EXTRACTED]
- [[FileType]] - `contains` [EXTRACTED]
- [[_could_contain_included_path()]] - `contains` [EXTRACTED]
- [[_find_vcs_root()]] - `contains` [EXTRACTED]
- [[_is_ignored()]] - `contains` [EXTRACTED]
- [[_is_included()]] - `contains` [EXTRACTED]
- [[_is_noise_dir()]] - `contains` [EXTRACTED]
- [[_is_sensitive()]] - `contains` [EXTRACTED]
- [[_load_graphifyignore()]] - `contains` [EXTRACTED]
- [[_load_graphifyinclude()]] - `contains` [EXTRACTED]
- [[_looks_like_paper()]] - `contains` [EXTRACTED]
- [[_md5_file()]] - `contains` [EXTRACTED]
- [[_parse_gitignore_line()]] - `contains` [EXTRACTED]
- [[_shebang_file_type()]] - `contains` [EXTRACTED]
- [[classify_file()]] - `contains` [EXTRACTED]
- [[convert_office_file()]] - `contains` [EXTRACTED]
- [[count_words()]] - `contains` [EXTRACTED]
- [[detect()]] - `contains` [EXTRACTED]
- [[detect_incremental()]] - `contains` [EXTRACTED]
- [[docx_to_markdown()]] - `contains` [EXTRACTED]
- [[extract_pdf_text()]] - `contains` [EXTRACTED]
- [[load_manifest()]] - `contains` [EXTRACTED]
- [[save_manifest()]] - `contains` [EXTRACTED]
- [[xlsx_extract_structure()]] - `contains` [EXTRACTED]
- [[xlsx_to_markdown()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None