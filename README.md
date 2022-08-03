---
title: CSL Chinese Document
date: 2022-08-02 16:02:13
updated: 2022-08-03 10:52:03
---

# CSL Chinese Document

CSL (Citation Style Language) 是一种基于 XML 的语言，用来描述或格式化引用和参考文献目录的开源语言。使用 CSL 的参考文献管理软件包括 Zotero，Mendeley，Papers。

由 CSL 编写的 style 定义了引用和参考文献目录的格式。Zotero 就是通过 style 来生成指定格式的引用和参考文献目录。

据统计，现在已经有超过 9000 个 style，覆盖了大多数的常见的 SCI 期刊。在 Zotero 中能很容易检索到对应期刊的 style。但是即使有这么多的 style，仍然有可能有的期刊没有对应的 style。此外，有的 style 年代久远，已经不符合期刊 author guideline 中的要求，因此，我们需要学习 CSL 来定制需要的 style，至少能在已有的 style 上修改来满足期刊的要求。但是遗憾的是，国内 CSL 的资料几乎没有。

本项目是对 [CSL 英文文档](https://docs.citationstyles.org/en/stable/primer.html) 的翻译。

本人能力有限，理解和翻译有误处请大家谅解，同时欢迎提 [issue](https://github.com/zotero-cn/csl-doc-chinese/issues) 和 [pull requests](https://github.com/zotero-cn/csl-doc-chinese/pulls)。

> [!TIP] 本项目基于 [Mao Zhou](https://github.com/ZMAlt) 的工作，
> 
> Zhou 于 2019 年翻译了 CSL 1.0.1 的规范全文，但限于学业时间精力等原因，无法及时维护文档。本组织基于 Zhou 的工作对文档进行重新排版与更新。
>  
> 译文原始站点：[Welcome to CSL-chinese’s documentation! — CSL-chinese documentation](https://csl-chinese.readthedocs.io/en/latest/)
> 
> 译文原始仓库：[ZMAlt/CSL-Chinese: CSL Chinese Document (github.com)](https://github.com/ZMAlt/CSL-Chinese)
> 
> 中文文档重排版：[Northword](https://github.com/northword)
> 
> 中文文档重排版仓库：[zotero-cn/csl-chinese: CSL 中文文档 (github.com)](https://github.com/zotero-cn/csl-chinese)

## 贡献指南

请参阅 [贡献指南](https://github.com/zotero-cn/contribution-guidelines)。

> 贡献指南当前处于施工中，尚无法访问。

## 构建

1. Fork 当前仓库
2. Clone fork 的仓库到本地
3. 安装 python 3.7+ 
4. 安装相关依赖

```bash
pip install requirements.txt
```

6. 在仓库根目录运行 mkdocs

```bash
mkdocs serve
```