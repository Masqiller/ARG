---
source_file: "vendor/external_plugins/caveman/tests/test_validate_inline.py"
type: "code"
community: "Community None"
degree: 7
location: "L45"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# TestValidateInlineCodes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["TestValidateInlineCodes"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tests_test_validate_inline_py["test_validate_inline.py"]
    center -->|"method"| N_tests_test_validate_inline_testvalidateinlinecodes_test_match[".test_match[]"]
    center -->|"method"| N_tests_test_validate_inline_testvalidateinlinecodes_test_lost[".test_lost[]"]
    center -->|"method"| N_tests_test_validate_inline_testvalidateinlinecodes_test_added[".test_added[]"]
    center -->|"method"| N_tests_test_validate_inline_testvalidateinlinecodes_test_empty_orig[".test_empty_orig[]"]
    center -->|"method"| N_tests_test_validate_inline_testvalidateinlinecodes_test_both_empty[".test_both_empty[]"]
    center -->|"uses"| N_scripts_validate_validationresult["ValidationResult"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.test_added()]] - `method` [EXTRACTED]
- [[.test_both_empty()]] - `method` [EXTRACTED]
- [[.test_empty_orig()]] - `method` [EXTRACTED]
- [[.test_lost()]] - `method` [EXTRACTED]
- [[.test_match()]] - `method` [EXTRACTED]
- [[ValidationResult]] - `uses` [INFERRED]
- [[test_validate_inline.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[TestValidateInlineCodes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None