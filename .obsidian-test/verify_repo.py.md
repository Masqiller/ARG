---
source_file: "vendor/external_plugins/caveman/tests/verify_repo.py"
type: "code"
community: "Community None"
degree: 16
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# verify_repo.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["verify_repo.py"]:::centerNode
    center -->|"contains"| N_tests_verify_repo_checkfailure["CheckFailure"]
    center -->|"contains"| N_tests_verify_repo_section["section[]"]
    center -->|"contains"| N_tests_verify_repo_ensure["ensure[]"]
    center -->|"contains"| N_tests_verify_repo_run["run[]"]
    center -->|"contains"| N_tests_verify_repo_read_json["read_json[]"]
    center -->|"contains"| N_tests_verify_repo_shell_path["shell_path[]"]
    center -->|"contains"| N_tests_verify_repo_frontmatter_description["_frontmatter_description[]"]
    center -->|"contains"| N_tests_verify_repo_verify_skill_frontmatter_upload_compatibility["verify_skill_frontmatter_upload_compatibility[]"]
    center -->|"contains"| N_tests_verify_repo_verify_synced_files["verify_synced_files[]"]
    center -->|"contains"| N_tests_verify_repo_verify_manifests_and_syntax["verify_manifests_and_syntax[]"]
    center -->|"contains"| N_tests_verify_repo_verify_powershell_static["verify_powershell_static[]"]
    center -->|"contains"| N_tests_verify_repo_load_compress_modules["load_compress_modules[]"]
    center -->|"contains"| N_tests_verify_repo_verify_compress_fixtures["verify_compress_fixtures[]"]
    center -->|"contains"| N_tests_verify_repo_verify_compress_cli["verify_compress_cli[]"]
    center -->|"contains"| N_tests_verify_repo_verify_hook_install_flow["verify_hook_install_flow[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CheckFailure]] - `contains` [EXTRACTED]
- [[_frontmatter_description()]] - `contains` [EXTRACTED]
- [[ensure()]] - `contains` [EXTRACTED]
- [[load_compress_modules()]] - `contains` [EXTRACTED]
- [[main()_10]] - `contains` [EXTRACTED]
- [[read_json()]] - `contains` [EXTRACTED]
- [[run()]] - `contains` [EXTRACTED]
- [[section()]] - `contains` [EXTRACTED]
- [[shell_path()]] - `contains` [EXTRACTED]
- [[verify_compress_cli()]] - `contains` [EXTRACTED]
- [[verify_compress_fixtures()]] - `contains` [EXTRACTED]
- [[verify_hook_install_flow()]] - `contains` [EXTRACTED]
- [[verify_manifests_and_syntax()]] - `contains` [EXTRACTED]
- [[verify_powershell_static()]] - `contains` [EXTRACTED]
- [[verify_skill_frontmatter_upload_compatibility()]] - `contains` [EXTRACTED]
- [[verify_synced_files()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[verify_repo.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None