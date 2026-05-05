---
source_file: "vendor/claude-mem/src/npx-cli/banner.ts"
type: "code"
community: "Community None"
degree: 7
location: "L110"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# playBanner()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["playBanner[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_banner_ts["banner.ts"]
    center -->|"calls"| N_npx_cli_banner_getframes["getFrames[]"]
    center -->|"calls"| N_npx_cli_banner_detecttruecolor["detectTruecolor[]"]
    center -->|"calls"| N_npx_cli_banner_isbannerenabled["isBannerEnabled[]"]
    center -->|"calls"| N_npx_cli_banner_sleep["sleep[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_runinstallcommand["runInstallCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[banner.ts]] - `contains` [EXTRACTED]
- [[detectTruecolor()]] - `calls` [EXTRACTED]
- [[getFrames()]] - `calls` [EXTRACTED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[isBannerEnabled()]] - `calls` [EXTRACTED]
- [[runInstallCommand()]] - `calls` [INFERRED]
- [[sleep()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[playBanner()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None