---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/validate.py"
type: "code"
community: "Community None"
degree: 10
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ValidationResult

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["ValidationResult"]:::centerNode
    center -->|"uses"| N_tests_test_validate_inline_testextractinlinecodes["TestExtractInlineCodes"]
    center -->|"uses"| N_tests_test_validate_inline_testvalidateinlinecodes["TestValidateInlineCodes"]
    center -->|"uses"| N_tests_test_validate_inline_testvalidateintegration["TestValidateIntegration"]
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_validate_py["validate.py"]
    center -->|"method"| N_scripts_validate_validationresult_init[".__init__[]"]
    center -->|"method"| N_scripts_validate_validationresult_add_error[".add_error[]"]
    center -->|"method"| N_scripts_validate_validationresult_add_warning[".add_warning[]"]
    center -->|"calls"| N_scripts_validate_validate["validate[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_validate_py["validate.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_23]] - `method` [EXTRACTED]
- [[.add_error()]] - `method` [EXTRACTED]
- [[.add_warning()]] - `method` [EXTRACTED]
- [[TestExtractInlineCodes]] - `uses` [INFERRED]
- [[TestValidateInlineCodes]] - `uses` [INFERRED]
- [[TestValidateIntegration]] - `uses` [INFERRED]
- [[validate()_2]] - `calls` [EXTRACTED]
- [[validate.py_1]] - `contains` [EXTRACTED]
- [[validate.py_2]] - `contains` [EXTRACTED]
- [[validate.py_3]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ValidationResult]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None