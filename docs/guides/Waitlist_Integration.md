# Waitlist 获客接口对接指南 (V1.0)
**上海灵心智算智能科技有限公司 - 运营手册**

目前 VecminDB 落地页表单采用的是 `Simulated Mode` (模拟提交)。当您准备将其正式上线时，请参考以下三种方案进行后端对接：

---

## 方案 A：极简 Serverless 对接 (推荐)
如果您想快速收集邮箱，可以使用 Formspree 或 Netlify Forms：

1. **修改 index.html**:
   将 `<form id="waitlistForm">` 的 `action` 指向您的服务商 URL。
2. **修改 script.js**:
   注释掉 `e.preventDefault()` 部分，或改用 `fetch` 向后端发送 JSON：
   ```javascript
   fetch('https://your-api-endpoint.com/waitlist', {
       method: 'POST',
       body: JSON.stringify({ email: emailInput.value })
   });
   ```

---

## 方案 B：自研 Python/Node.js 后端
如果您希望将数据直接存入自己的数据库（如 VecminDB 后端或 PostgreSQL）：

1. 在 `api/waitlist_handler.js` 中补全存库逻辑。
2. 我们已在该文件中为您预留了标准的 API 契约结构。建议使用 `HTTPS` 并增加 `Rate Limiting` (限流)，防止机器人恶意刷票。

---

## 方案 C：自动化同步 (Zapier / Make)
- 您可以通过 Webhook 将表单直接同步到 Google Sheets 或您的 CRM 系统中，实现自动化的销售跟进。

---
> [!TIP]
> **安全性建议**：
> 在正式上线前，请务必在 Nginx 层开启 HSTS，并在业务层增加 Email 验证逻辑，以确保“10B 阶 Agent 记忆内核”的品牌严肃性。
