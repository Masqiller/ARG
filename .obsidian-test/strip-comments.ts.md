---
source_file: "vendor/claude-mem/scripts/strip-comments.ts"
type: "code"
community: "Community None"
degree: 17
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# strip-comments.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["strip-comments.ts"]:::centerNode
    center -->|"contains"| N_scripts_strip_comments_parseargs["parseArgs[]"]
    center -->|"contains"| N_scripts_strip_comments_printhelp["printHelp[]"]
    center -->|"contains"| N_scripts_strip_comments_isdirectivejs["isDirectiveJs[]"]
    center -->|"contains"| N_scripts_strip_comments_scriptkindfor["scriptKindFor[]"]
    center -->|"contains"| N_scripts_strip_comments_parsediagnosticscount["parseDiagnosticsCount[]"]
    center -->|"contains"| N_scripts_strip_comments_stripjslike["stripJsLike[]"]
    center -->|"contains"| N_scripts_strip_comments_collapseblanklines["collapseBlankLines[]"]
    center -->|"contains"| N_scripts_strip_comments_spliceranges["spliceRanges[]"]
    center -->|"contains"| N_scripts_strip_comments_stripcss["stripCss[]"]
    center -->|"contains"| N_scripts_strip_comments_ismdxnarrativecomment["isMdxNarrativeComment[]"]
    center -->|"contains"| N_scripts_strip_comments_stripmarkdown["stripMarkdown[]"]
    center -->|"contains"| N_scripts_strip_comments_striphtml["stripHtml[]"]
    center -->|"contains"| N_scripts_strip_comments_collecthtmlcommentranges["collectHtmlCommentRanges[]"]
    center -->|"contains"| N_scripts_strip_comments_striphashcomments["stripHashComments[]"]
    center -->|"contains"| N_scripts_strip_comments_striphashfromline["stripHashFromLine[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collapseBlankLines()]] - `contains` [EXTRACTED]
- [[collectHtmlCommentRanges()]] - `contains` [EXTRACTED]
- [[isDirectiveJs()]] - `contains` [EXTRACTED]
- [[isMdxNarrativeComment()]] - `contains` [EXTRACTED]
- [[main()_28]] - `contains` [EXTRACTED]
- [[parseArgs()_1]] - `contains` [EXTRACTED]
- [[parseDiagnosticsCount()]] - `contains` [EXTRACTED]
- [[printHelp()_1]] - `contains` [EXTRACTED]
- [[processFile()_1]] - `contains` [EXTRACTED]
- [[scriptKindFor()]] - `contains` [EXTRACTED]
- [[spliceRanges()]] - `contains` [EXTRACTED]
- [[stripCss()]] - `contains` [EXTRACTED]
- [[stripHashComments()]] - `contains` [EXTRACTED]
- [[stripHashFromLine()]] - `contains` [EXTRACTED]
- [[stripHtml()]] - `contains` [EXTRACTED]
- [[stripJsLike()]] - `contains` [EXTRACTED]
- [[stripMarkdown()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[strip-comments.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None