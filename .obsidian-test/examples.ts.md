---
source_file: "vendor/claude-mem/scripts/translate-readme/examples.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# examples.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["examples.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_scripts_translate_readme_index_ts["index.ts"]
    center -->|"imports"| N_translate_readme_index_translatereadme["translateReadme[]"]
    center -->|"contains"| N_translate_readme_examples_translatetocommonlanguages["translateToCommonLanguages[]"]
    center -->|"contains"| N_translate_readme_examples_fulli18nsetup["fullI18nSetup[]"]
    center -->|"contains"| N_translate_readme_examples_buildscriptintegration["buildScriptIntegration[]"]
    center -->|"contains"| N_translate_readme_examples_batchtranslation["batchTranslation[]"]
    center -->|"contains"| N_translate_readme_examples_docsitesetup["docsiteSetup[]"]
    center -->|"contains"| N_translate_readme_examples_cicdtranslation["cicdTranslation[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[batchTranslation()]] - `contains` [EXTRACTED]
- [[buildScriptIntegration()]] - `contains` [EXTRACTED]
- [[cicdTranslation()]] - `contains` [EXTRACTED]
- [[docsiteSetup()]] - `contains` [EXTRACTED]
- [[fullI18nSetup()]] - `contains` [EXTRACTED]
- [[index.ts_14]] - `imports_from` [EXTRACTED]
- [[translateReadme()]] - `imports` [EXTRACTED]
- [[translateToCommonLanguages()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[examples.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None