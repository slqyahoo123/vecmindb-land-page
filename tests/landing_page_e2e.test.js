/**
 * 上海灵心智算 Landing Page - 自动化端到端测试
 * 标准：Playwright / Puppeteer 兼容语义
 */

const { test, expect } = require('@playwright/test');

test.describe('Lingxin AI Landing Page Quality Audit', () => {

    test('should render core brand assets and canvas containers', async ({ page }) => {
        await page.goto('./index.html');

        // 验证品牌标识
        const logo = await page.locator('.logo');
        await expect(logo).toContainText('灵心智算');

        // 验证两个核心算力动画容器是否就绪
        await expect(page.locator('#canvas-container')).toBeVisible();
        await expect(page.locator('#vizCanvas')).toBeVisible();
    });

    test('should switch language smoothly (i18n check)', async ({ page }) => {
        await page.goto('./index.html');

        // 默认中文校验
        await expect(page.locator('[data-i18n="nav-tech"]')).toHaveText('核心技术');

        // 触发语言切换
        await page.click('#langBtn');

        // 英文文案校验
        await expect(page.locator('[data-i18n="nav-tech"]')).toHaveText('Technology');
        await expect(page.locator('#langBtn')).toHaveText('中');
    });

    test('should handle waitlist form interaction', async ({ page }) => {
        await page.goto('./index.html');

        const emailInput = page.locator('#userEmail');
        await emailInput.fill('pilot@lingxin.ai');
        await page.click('#submitBtn');

        // 验证反馈信息展示
        const feedback = page.locator('#formFeedback');
        await expect(feedback).toBeVisible();
    });
});
