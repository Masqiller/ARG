---
source_file: "vendor/external_plugins/caveman/tests/test_compress_safety.py"
type: "code"
community: "Community None"
degree: 7
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CompressSafetyTests

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["CompressSafetyTests"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tests_test_compress_safety_py["test_compress_safety.py"]
    center -->|"method"| N_tests_test_compress_safety_compresssafetytests_file_with["._file_with[]"]
    center -->|"method"| N_tests_test_compress_safety_compresssafetytests_test_empty_input_refused[".test_empty_input_refused[]"]
    center -->|"method"| N_tests_test_compress_safety_compresssafetytests_test_empty_compressed_output_does_not_touch_disk[".test_empty_compressed_output_does_not_touch_disk[]"]
    center -->|"method"| N_tests_test_compress_safety_compresssafetytests_test_whitespace_only_compressed_output_does_not_touch_disk[".test_whitespace_only_compressed_output_does_not_touch_disk[]"]
    center -->|"method"| N_tests_test_compress_safety_compresssafetytests_test_identical_compressed_output_does_not_touch_disk[".test_identical_compressed_output_does_not_touch_disk[]"]
    center -->|"method"| N_tests_test_compress_safety_compresssafetytests_test_real_compression_writes_backup_and_target[".test_real_compression_writes_backup_and_target[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[._file_with()]] - `method` [EXTRACTED]
- [[.test_empty_compressed_output_does_not_touch_disk()]] - `method` [EXTRACTED]
- [[.test_empty_input_refused()]] - `method` [EXTRACTED]
- [[.test_identical_compressed_output_does_not_touch_disk()]] - `method` [EXTRACTED]
- [[.test_real_compression_writes_backup_and_target()]] - `method` [EXTRACTED]
- [[.test_whitespace_only_compressed_output_does_not_touch_disk()]] - `method` [EXTRACTED]
- [[test_compress_safety.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CompressSafetyTests]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None