**D1 接入步骤**

1. 在 Cloudflare Dashboard 打开你的项目 `mjti-preview`
2. 进入 `Settings`
3. 找到 `Functions`
4. 在 `D1 database bindings` 里新增一个绑定
   - Variable name: `DB`
   - Database: 选择你新建的 D1 数据库

**建库**

1. 在 Cloudflare Dashboard 左侧进入 `Storage & Databases`
2. 选择 `D1 SQL Database`
3. 新建一个数据库，例如：`mjti-preview-db`

**执行表结构**

把这个文件内容粘进去执行：
- [cloudflare_d1_schema.sql](/Users/ss/Documents/New%20project/mjti-preview/cloudflare_d1_schema.sql)

执行完成后会生成 `sessions` 表。

**重新部署**

绑定完成后，重新 push 一次，或者在 Pages 里点最新部署 `Retry deployment`。

**验证是否生效**

1. 打开站点做一次主测试
2. 再做一次附加题
3. 回到 D1 后台，执行：

```sql
SELECT id, started_at, status, current_step, main_result_code, bonus_title
FROM sessions
ORDER BY started_at DESC
LIMIT 20;
```

如果有数据，就说明：
- session/start 成功
- 作答进度有写入
- 主人格结果有落库
- 附加题称号有落库

**当前已经会记录的字段**

- `id`
- `started_at`
- `updated_at`
- `completed_at`
- `status`
- `current_step`
- `total_questions`
- `source`
- `user_agent`
- `ip_hash`
- `country`
- `colo`
- `answers_json`
- `bonus_answers_json`
- `main_result_code`
- `main_result_codes_json`
- `main_similarity`
- `mode_kicker`
- `bonus_title`
- `bonus_accuracy`
- `bonus_correct`
- `bonus_total`

**注意**

当前是匿名统计：
- 不收手机号
- 不收昵称
- 只保留匿名 session 和基础环境信息
