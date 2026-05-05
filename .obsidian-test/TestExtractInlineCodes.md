---
source_file: "vendor/external_plugins/caveman/tests/test_validate_inline.py"
type: "code"
community: "Community None"
degree: 6
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TestExtractInlineCodes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["TestExtractInlineCodes"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tests_test_validate_inline_py["test_validate_inline.py"]
    center -->|"method"| N_tests_test_validate_inline_testextractinlinecodes_test_fenced_blocks_excluded[".test_fenced_blocks_excluded[]"]
    center -->|"method"| N_tests_test_validate_inline_testextractinlinecodes_test_inline_only[".test_inline_only[]"]
    center -->|"method"| N_tests_test_validate_inline_testextractinlinecodes_test_mixed_content[".test_mixed_content[]"]
    center -->|"method"| N_tests_test_validate_inline_testextractinlinecodes_test_empty[".test_empty[]"]
    center -->|"uses"| N_scripts_validate_validationresult["ValidationResult"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.test_empty()]] - `method` [EXTRACTED]
- [[.test_fenced_blocks_excluded()]] - `method` [EXTRACTED]
- [[.test_inline_only()]] - `method` [EXTRACTED]
- [[.test_mixed_content()]] - `method` [EXTRACTED]
- [[ValidationResult]] - `uses` [INFERRED]
- [[test_validate_inline.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TestExtractInlineCodes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None