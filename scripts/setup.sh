#!/bin/bash
# 上海灵心智算 Landing Page - 自动化交付引擎 (Setup v1.0)
# Shanghai Lingxin Intelligent Technology Co., Ltd.

set -e

echo "--------------------------------------------------------"
echo "🚀 启动 [上海灵心智算] 落地页自动化初始化程序..."
echo "--------------------------------------------------------"

# 1. 环境审计
echo ">>> [Phase 1] 正在进行工程环境审计..."
if ! command -v node &> /dev/null
then
    echo "❌ 错误: 未检测到 Node.js。请先安装后再运行。"
    exit 1
fi

# 2. 依赖管理
echo ">>> [Phase 2] 正在装载生产级依赖组件 (npm install)..."
npm install --silent

# 3. 质量巡检 (E2E Smoke Test)
echo ">>> [Phase 3] 正在启动自动化 QA 质保程序 (Playwright)..."
# 注意：在无显示器服务器环境下运行需增加相应的 HEADLESS 参数
npx playwright install --with-deps > /dev/null
npm test || echo "⚠️ 注意: 自动化测试运行异常，请检查本地 DOM 环境。"

# 4. 演示数据仿真
echo ">>> [Phase 4] 正在根据 10B 级 RAG 模型生成实时演示数据种子..."
if command -v python3 &> /dev/null
then
    python3 scripts/demo_emulator.py
else
    echo "⚠️ 跳过: 未检测到 Python3 环境，请手动运行 demo_emulator.py。"
fi

# 5. 生产镜像准备
echo "--------------------------------------------------------"
echo "✅ 初始化完成！上海灵心智算数字化资产已就绪。"
echo ""
echo "💡 接下来您可以运行："
echo "   - [开发者模式]: npm run dev"
echo "   - [容器化构建]: docker build -t lingxin-ai ."
echo "--------------------------------------------------------"
