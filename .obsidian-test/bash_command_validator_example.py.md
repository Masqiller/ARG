---
source_file: "vendor/external_plugins/claude-code/examples/hooks/bash_command_validator_example.py"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# bash_command_validator_example.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["bash_command_validator_example.py"]:::centerNode
    center -->|"contains"| N_hooks_bash_command_validator_example_validate_command["_validate_command[]"]
    center -->|"contains"| N_hooks_bash_command_validator_example_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_validate_command()]] - `contains` [EXTRACTED]
- [[main()_9]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[bash_command_validator_example.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None