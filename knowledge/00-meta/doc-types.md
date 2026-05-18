

|  文档类型 | 缩写 | 文件名格式 | 存储位置 | 格式建议 | 阶段-需求分析 | 阶段-原型设计 | 阶段-开发需求 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 需求接收日志 | RIL | RIL-YYYY-MM-NNN\_brief-description | 任意位置（由记录人自行管理） | markdown | 输入 | – | – |
| 需求分析文档 | BRD | REQ\_2024-05-001\_user-requirements-name | requirements 下 | markdown | 输出 | 输入 | 输入 |
| 产品设计文档 | PRD | （是一个目录，后面补充细节，包含 modules, components, pages 等的设计细节） | requirements/REQ_some-req/prd 下 | markdown | – | 输出 | 输入 |
| 原型文件 | – | 无文件名，是一个可部署的前端项目。 | requirements/[prototype.md](http://prototype.md) 里记录有关信息， git分支名和需求文档的名字对应，比如 req\_2024-05-001 | – | – | 输出 | – |
| 开发需求文档 | SRD | specification-requirements-doc.md | requirements/REQ_some-req/specification-requirements-doc.md | Markdown | – | – | 输出 |
| 测试用例 | TC | test-cases.md | requirements/test-cases.md | Markdown / 测试代码 | – | – | 输出 |
| 上线检查清单 | CKL | launch-checklist.md | requirements/REQ_some-req/launch-checklist.md | Markdown /  | – | – | 输出 |
| 用户手册 | MAN | user-manual.md | requirements/REQ_some-req/user-manual.md  | Markdown | – | – | 输出 |

