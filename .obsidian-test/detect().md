---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 31
location: "L621"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# detect()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 31

## Architecture Graph
```mermaid
graph LR
    center["detect[]"]:::centerNode
    center -->|"calls"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    center -->|"calls"| N_tests_test_detect_test_detect_finds_fixtures["test_detect_finds_fixtures[]"]
    center -->|"calls"| N_tests_test_detect_test_detect_warns_small_corpus["test_detect_warns_small_corpus[]"]
    center -->|"calls"| N_tests_test_detect_test_detect_skips_dotfiles["test_detect_skips_dotfiles[]"]
    center -->|"calls"| N_tests_test_detect_test_graphifyignore_excludes_file["test_graphifyignore_excludes_file[]"]
    center -->|"calls"| N_tests_test_detect_test_graphifyignore_missing_is_fine["test_graphifyignore_missing_is_fine[]"]
    center -->|"calls"| N_tests_test_detect_test_graphifyignore_comments_ignored["test_graphifyignore_comments_ignored[]"]
    center -->|"calls"| N_tests_test_detect_test_detect_follows_symlinked_directory["test_detect_follows_symlinked_directory[]"]
    center -->|"calls"| N_tests_test_detect_test_detect_follows_symlinked_file["test_detect_follows_symlinked_file[]"]
    center -->|"calls"| N_tests_test_detect_test_graphifyignore_hermetic_without_vcs["test_graphifyignore_hermetic_without_vcs[]"]
    center -->|"calls"| N_tests_test_detect_test_graphifyignore_discovered_from_parent_in_vcs["test_graphifyignore_discovered_from_parent_in_vcs[]"]
    center -->|"calls"| N_tests_test_detect_test_graphifyignore_stops_at_git_boundary["test_graphifyignore_stops_at_git_boundary[]"]
    center -->|"calls"| N_tests_test_detect_test_graphifyignore_at_git_root_is_included["test_graphifyignore_at_git_root_is_included[]"]
    center -->|"calls"| N_tests_test_detect_test_detect_handles_circular_symlinks["test_detect_handles_circular_symlinks[]"]
    center -->|"calls"| N_tests_test_detect_test_detect_includes_video_key["test_detect_includes_video_key[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_could_contain_included_path()]] - `calls` [EXTRACTED]
- [[_is_ignored()]] - `calls` [EXTRACTED]
- [[_is_included()]] - `calls` [EXTRACTED]
- [[_is_noise_dir()]] - `calls` [EXTRACTED]
- [[_is_sensitive()]] - `calls` [EXTRACTED]
- [[_load_graphifyignore()]] - `calls` [EXTRACTED]
- [[_load_graphifyinclude()]] - `calls` [EXTRACTED]
- [[_rebuild_code()]] - `calls` [INFERRED]
- [[classify_file()]] - `calls` [EXTRACTED]
- [[convert_office_file()]] - `calls` [EXTRACTED]
- [[count_words()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[detect_incremental()]] - `calls` [EXTRACTED]
- [[run_pipeline()]] - `calls` [INFERRED]
- [[str]] - `calls` [EXTRACTED]
- [[test_detect_finds_fixtures()]] - `calls` [INFERRED]
- [[test_detect_finds_video_files()]] - `calls` [INFERRED]
- [[test_detect_follows_symlinked_directory()]] - `calls` [INFERRED]
- [[test_detect_follows_symlinked_file()]] - `calls` [INFERRED]
- [[test_detect_handles_circular_symlinks()]] - `calls` [INFERRED]
- [[test_detect_includes_video_key()]] - `calls` [INFERRED]
- [[test_detect_skips_dotfiles()]] - `calls` [INFERRED]
- [[test_detect_video_not_in_words()]] - `calls` [INFERRED]
- [[test_detect_warns_small_corpus()]] - `calls` [INFERRED]
- [[test_graphifyignore_at_git_root_is_included()]] - `calls` [INFERRED]
- [[test_graphifyignore_comments_ignored()]] - `calls` [INFERRED]
- [[test_graphifyignore_discovered_from_parent_in_vcs()]] - `calls` [INFERRED]
- [[test_graphifyignore_excludes_file()]] - `calls` [INFERRED]
- [[test_graphifyignore_hermetic_without_vcs()]] - `calls` [INFERRED]
- [[test_graphifyignore_missing_is_fine()]] - `calls` [INFERRED]
- [[test_graphifyignore_stops_at_git_boundary()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect()]]
```

#graphify/code #graphify/INFERRED #community/Community_None