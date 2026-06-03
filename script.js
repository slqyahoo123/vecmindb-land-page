/**
 * 上海灵心智算 Landing Page - 交互逻辑与Canvas动效
 * 版权所有 (c) 2026 上海灵心智算智能科技有限公司
 */

const translations = {
    'zh': {
        'nav-features': '核心能力',
        'nav-quickstart': '快速上手',
        'nav-pricing': '定价',
        'nav-docs': '文档',
        'hero-badge': '认知型向量数据库',
        'hero-title': '给那些已经超越了<br>传统<span class="gradient-text">向量数据库</span>的 AI 智能体',
        'hero-desc': 'VecminDB 是首款融合了“记忆生命周期管理”与“高性能检索”的双核认知向量数据库。它不仅具备极速的向量检索与内置 ONNX 嵌入，更原生支持长短期遗忘（LTSM）、在线质心演化（Welford）与联邦知识共享。一行 Docker 启动，让您的 Agent 拥有会自我进化的自主脑。',
        'btn-start': 'Docker 一行启动',
        'btn-pricing': '查看定价',
        'btn-github': 'GitHub SDK',
        'feat-title': '为什么选择认知型向量数据库？',
        'feat-subtitle': '传统的向量数据库给了智能体一块静态硬盘。而 VecminDB 赋予智能体一个双核驱动、具备自我巩固、遗忘进化与隐私联邦的“活记忆大脑”。',
        'feat-1-h': '自动遗忘 (LTSM)',
        'feat-1-p': 'Episodic Memory 按 W(t)=exp(-λ×Δt) 自动衰减。被反复访问的记忆留下，一次性噪音自动消失。Agent 永远不会从三个月前的垃圾记忆里检索答案。',
        'feat-2-h': 'PCA 记忆蒸馏',
        'feat-2-p': '3 条以上衰减的记忆自动 PCA 压缩为一个 Abstract Centroid。不需要写摘要脚本，不需要调 LLM API——引擎层自动完成。存储量随时间收敛，而非发散。',
        'feat-3-h': 'Agent 主权隔离',
        'feat-3-p': 'Sovereignty Token + HMAC-SHA256 签名链在引擎层强制隔离。财务 Agent 的记忆物理上不能被客服 Agent 读取——不是应用层 filter，是引擎层隔离。',
        'feat-4-h': '联邦知识共享',
        'feat-4-p': 'Sovereign Federation 将多个 Agent 的蒸馏候选在 DP-Federated PCA 下聚合为 Alliance Centroid。共享的是知识质心，不是原始隐私记忆。',
        'feat-5-h': '零外部依赖',
        'feat-5-p': '内置 ONNX 模型 (~15 MB)。一个 Docker 镜像启动。不需要 Python 环境、不需要 PyTorch、不需要 OpenAI API Key、不需要任何外部 Embedding 服务。',
        'feat-6-h': 'NSGA-II 自调优',
        'feat-6-p': '内置多目标演化优化器自动在召回率×延迟×内存的 Pareto 前沿搜索最优解。Shadow Index 后台重建 + ArcSwapAny 原子切换——前端查询零中断。',
        'qs-title': '30 秒看到价值',
        'qs-desc': '不需要 SDK。不需要 API Key。不需要配置环境。你甚至不需要碰向量。',
        'qs-note': '你从未碰过 embedding 模型——VecminDB 内置处理了。你从未写一行蒸馏代码——引擎在后台自动运行。',
        'price-title': '按 Agent 计费，不按向量',
        'price-desc': '向量数随时间增长。Agent 数不会。LTSM 蒸馏让存储收敛而非发散——你的账单不随 Agent 运行时间增长。',
        'plan-free-h': 'Free',
        'plan-free-desc': '5 Agents · 100K 向量/Agent · 1 Node · 蒸馏启用 · 无需信用卡 · 永久免费',
        'plan-pro-h': 'Pro',
        'plan-pro-desc': '50 Agents · 1M 向量/Agent · ≤3 Nodes · Email Support',
        'plan-team-h': 'Team',
        'plan-team-desc': '500 Agents · 无限制向量 · ≤10 Nodes · Sovereign Federation · Priority SLA',
        'plan-ent-h': 'Enterprise',
        'plan-ent-price': '定制',
        'plan-ent-desc': '无限 Agent · 无限节点 · 气隙部署 · 源码托管 · 专属 SLA · 信创适配',
        'contact-title': '准备好给你的 Agent 一个真正的记忆系统？',
        'contact-desc': '30 天全功能试用。Free tier 永久免费。数据永不离开你的 VPC。',
        'contact-btn': '联系我们的企业团队 →',
        'mission-badge': 'PROPRIETARY · BUILT IN RUST',
        'mission-desc': 'VecminDB 是闭源商业软件。核心引擎基于 Rust 极致性能构建，拥有 8 项认知向量领域的专利布局。作为行业领先的双核认知向量数据库，我们不仅提供超低延迟的向量存取，更实现了智能体记忆的全生命周期自主演化与跨 Agent 联邦知识链。上海灵心智算智能科技有限公司。',
        'loader-title': 'VecminDB Memory OS',
        'loader-status': 'INITIALIZING MEMORY ENGINE...',
        'logo-text': 'VecminDB',
        'viz-label': '记忆蒸馏管线',
        'viz-title': 'LTSM <span style="font-weight: 300; opacity: 0.7;">LIFECYCLE</span>',
        'code-comment-1': '# 1. 启动 VecminDB（零外部依赖）',
        'code-comment-1-1': '# 官方 GitHub GHCR 源 (海外直连推荐):',
        'code-comment-1-2': '# 备选：国内阿里云极速专线 (中国大陆开发者推荐，免翻墙秒级下载):',
        'code-comment-2': '# 2. 存一条记忆——纯文本，不要向量。内置模型自动处理 Embedding。',
        'code-comment-3': '# 3. 语义搜索——"who disputes charges" 找到 "always disputes charges over $50"',
        'code-comment-4': '# 4. 浏览器打开 Dashboard，看记忆蒸馏实时发生',
        'qs-download-title': '下载原生离线包 (Zero-Docker)',
        'qs-download-desc': '内置 ONNX 运行库与 BGE-M3 权重。解压即用，支持 100% 物理断网运行。',
        'btn-ent-contact': 'Enterprise 询价 →',
        'footer-copyright': '© 2026 上海灵心智算智能科技有限公司. All Rights Reserved. VecminDB is proprietary software.',
        'footer-patent': 'VecminDB 系统核心算法受多项专利申请保护。未经授权，任何形式的逆向工程或商业模仿将面临法律追责。',
        'footer-icp': '沪ICP备2025120712号-1',
        'footer-en-name': 'SHANGHAI LINGXIN ZHISUAN INTELLIGENT TECHNOLOGY CO., LTD.'
    },
    'en': {
        'nav-features': 'Features',
        'nav-quickstart': 'Quick Start',
        'nav-pricing': 'Pricing',
        'nav-docs': 'Docs',
        'hero-badge': 'COGNITIVE VECTOR DATABASE',
        'hero-title': 'For AI agents who have<br>outgrown their <span class="gradient-text">vector database.</span>',
        'hero-desc': 'VecminDB is the first dual-core Cognitive Vector Database merging high-performance retrieval with native memory lifecycle management. Built-in ONNX embeddings, real-time online centroid evolution (Welford), LTSM semantic pruning, and secure federated learning. Docker run in seconds — data never leaves your VPC.',
        'btn-start': 'Docker Run',
        'btn-pricing': 'See Pricing',
        'btn-github': 'GitHub SDK',
        'feat-title': 'Why Choose a Cognitive Vector Database?',
        'feat-subtitle': 'Generic vector databases give your agent a static hard drive. VecminDB equips it with a dual-core active brain that dynamically forgets, distills, and federates on its own.',
        'feat-1-h': 'Automatic Forgetting (LTSM)',
        'feat-1-p': 'Episodic memories decay via W(t)=exp(-λ×Δt). Frequently accessed memories persist. One-time noise disappears. Your agent never retrieves answers from three-month-old garbage.',
        'feat-2-h': 'PCA Memory Distillation',
        'feat-2-p': 'Groups of 3+ decaying memories are automatically PCA-compressed into one Abstract Centroid. No summarization scripts. No LLM API calls. Engine-level. Storage converges over time.',
        'feat-3-h': 'Agent Sovereignty Isolation',
        'feat-3-p': 'Sovereignty Token + HMAC-SHA256 signature chain enforces isolation at the engine layer. Finance agent memories are physically unreadable by support agents — not an app-layer filter.',
        'feat-4-h': 'Federated Knowledge Sharing',
        'feat-4-p': 'Sovereign Federation aggregates distillation candidates via DP-Federated PCA into Alliance Centroids. Shared knowledge centroids — never raw private memories.',
        'feat-5-h': 'Zero External Dependencies',
        'feat-5-p': 'Built-in ONNX model (~15 MB). One Docker image. No Python. No PyTorch. No OpenAI API key. No external embedding service. Single binary, single container.',
        'feat-6-h': 'NSGA-II Auto-Tuning',
        'feat-6-p': 'Multi-objective evolutionary optimizer finds the Pareto frontier of recall × latency × memory automatically. Shadow Index background rebuild + ArcSwapAny atomic swap — zero downtime.',
        'qs-title': 'See Value in 30 Seconds',
        'qs-desc': 'No SDK. No API key. No environment setup. You never even touch a vector.',
        'qs-note': 'You never touched an embedding model — VecminDB handles it. You never wrote distillation code — the engine runs it in the background.',
        'price-title': 'Per Agent, Not Per Vector',
        'price-desc': 'Vector count grows with time. Agent count doesn\'t. LTSM distillation means storage converges, not diverges — your bill doesn\'t grow the longer your agents run.',
        'plan-free-h': 'Free',
        'plan-free-desc': '5 Agents · 100K vectors/agent · 1 Node · Distillation enabled · No credit card · Free forever',
        'plan-pro-h': 'Pro',
        'plan-pro-desc': '50 Agents · 1M vectors/agent · ≤3 Nodes · Email Support',
        'plan-team-h': 'Team',
        'plan-team-desc': '500 Agents · Unlimited vectors · ≤10 Nodes · Sovereign Federation · Priority SLA',
        'plan-ent-h': 'Enterprise',
        'plan-ent-price': 'Custom',
        'plan-ent-desc': 'Unlimited Agents · Unlimited Nodes · Air-gapped · Source escrow · Dedicated SLA · Custom architecture',
        'contact-title': 'Ready to give your agents a real memory system?',
        'contact-desc': '30-day full-featured trial. Free tier forever. Data never leaves your VPC.',
        'contact-btn': 'Contact Enterprise Team →',
        'mission-badge': 'PROPRIETARY · BUILT IN RUST',
        'mission-desc': 'VecminDB is proprietary commercial software. Built from scratch in Rust for extreme performance with 8 filed patent applications. As the industry\'s first dual-core Cognitive Vector Database, we deliver sub-millisecond retrieval coupled with native memory evolution and cross-agent federated knowledge consensus. Shanghai Lingxin Zhisuan Intelligent Technology Co., Ltd.',
        'loader-title': 'VecminDB Memory OS',
        'loader-status': 'INITIALIZING MEMORY ENGINE...',
        'logo-text': 'VecminDB',
        'viz-label': 'Memory Distillation Pipeline',
        'viz-title': 'LTSM <span style="font-weight: 300; opacity: 0.7;">LIFECYCLE</span>',
        'code-comment-1': '# 1. Start VecminDB (Zero dependencies)',
        'code-comment-1-1': '# Official GitHub GHCR Registry (Recommended for global connection):',
        'code-comment-1-2': '# Alternative: Domestic Aliyun Registry (Recommended for mainland China, instant download):',
        'code-comment-2': '# 2. Store a memory — plain text, no vectors. Built-in model handles embeddings.',
        'code-comment-3': '# 3. Semantic search — "who disputes charges" finds "always disputes charges over $50"',
        'code-comment-4': '# 4. Open Dashboard in browser, watch memory distillation happen in real-time',
        'qs-download-title': 'Download Native Binaries (Zero-Docker)',
        'qs-download-desc': 'Includes ONNX runtime and BGE-M3 weights. Unzip and run, supports 100% air-gapped execution.',
        'btn-ent-contact': 'Contact Enterprise Sales →',
        'footer-copyright': '© 2026 Shanghai Lingxin Zhisuan Intelligent Technology Co., Ltd. All Rights Reserved. VecminDB is proprietary software.',
        'footer-patent': 'VecminDB core algorithms are protected by multiple patent applications. Unauthorized reverse engineering or commercial imitation will face legal action.',
        'footer-icp': '沪ICP备2025120712号-1',
        'footer-en-name': 'SHANGHAI LINGXIN ZHISUAN INTELLIGENT TECHNOLOGY CO., LTD.'
    }
};

let currentLang = 'zh';

const APP_CONFIG = {
    IS_PROD: false, // 预留生产模式开关，可一键切换至真实后端API
    VERSION: '1.5.0'
};

const setLanguage = (lang) => {
    currentLang = lang;
    // W3C 辅助功能对齐：同步更新 HTML 语言属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang;
};

// 1. Canvas 算力神经网背景实现
const initNexusEffect = () => {
    const container = document.getElementById('canvas-container');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    container.appendChild(canvas);

    let dots = [];
    const DOT_COUNT = 80;
    const CONNECTION_DIST = 150;

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Dot {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
            ctx.fill();
        }
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        dots.forEach(dot => {
            dot.update();
            dot.draw();
        });

        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / CONNECTION_DIST - 0.5})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    for (let i = 0; i < DOT_COUNT; i++) dots.push(new Dot());
    animate();
};

// 2. 商业洞察追踪引擎 (Telemetry Engine)
const trackEvent = (eventName, params = {}) => {
    const payload = {
        event: eventName,
        timestamp: new Date().toISOString(),
        language: typeof currentLang !== 'undefined' ? currentLang : 'zh',
        params: params,
        session: window.sessionStorage.getItem('lx_sid') || 'anon'
    };
    console.log(`[Lingxin-Analytics] Event: ${eventName}`, payload);
    // 生产模式下通过 sendBeacon 异步上报
    try {
        if (navigator.sendBeacon && APP_CONFIG.IS_PROD) {
            navigator.sendBeacon('/api/telemetry', JSON.stringify(payload));
        }
    } catch { /* silent */ }
};

// 3. CTA 点击追踪
const initCTATracking = () => {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.textContent?.trim() || 'unknown';
            trackEvent('CTA_Click', { button: text });
        });
    });
};

// 3. 平滑滚动增强
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        
        if (targetEl) {
            // 移动端菜单自动收起
            const mainNav = document.getElementById('mainNav');
            const menuBtn = document.getElementById('menuBtn');
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                if (menuBtn) menuBtn.classList.remove('active');
            }

            targetEl.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 4. 滚动感应入场动画 (Intersection Observer)
const initScrollReveal = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
};

// 5. 向量空间智算可视化实现
const initVectorViz = () => {
    const canvas = document.getElementById('vizCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    let clusters = [];
    const PARTICLE_COUNT = 150;
    const CLUSTER_COUNT = 4;

    const resize = () => {
        const container = canvas.parentElement;
        width = canvas.width = container.offsetWidth;
        height = canvas.height = container.offsetHeight;
    };

    class Cluster {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.targetX = Math.random() * width;
            this.targetY = Math.random() * height;
            this.strength = 1.5 + Math.random() * 2;
        }
        update() {
            this.x += (this.targetX - this.x) * 0.01;
            this.y += (this.targetY - this.y) * 0.01;
            if (Math.abs(this.x - this.targetX) < 10) this.reset();
        }
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.cluster = Math.floor(Math.random() * CLUSTER_COUNT);
        }
        update() {
            const c = clusters[this.cluster];
            // 受聚类中心吸引力影响
            const dx = c.x - this.x;
            const dy = c.y - this.y;
            this.vx += dx * 0.0005;
            this.vy += dy * 0.0005;
            
            this.vx *= 0.95; // 阻尼
            this.vy *= 0.95;
            
            this.x += this.vx;
            this.y += this.vy;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.fill();
            
            // 语义动效增强：随机呈现“记忆节点”
            if (Math.random() > 0.99) {
                ctx.font = '8px monospace';
                ctx.fillStyle = 'var(--accent-secondary)';
                ctx.fillText('MEMORY_NODE', this.x + 5, this.y);
            }
        }
    }

    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        clusters.forEach(c => c.update());
        
        particles.forEach(p => {
            p.update();
            p.draw();
            const c = clusters[p.cluster];
            const dist = Math.sqrt((c.x - p.x)**2 + (c.y - p.y)**2);
            if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(c.x, c.y);
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist/150 - 0.6})`;
                ctx.stroke();
            }
        });

        // 模拟实时写入脉冲 (10B Scale Ingestion)
        if (Math.random() > 0.9) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            const streamY = Math.random() * height;
            ctx.fillRect(0, streamY, width, 1);
        }

        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    for (let i = 0; i < CLUSTER_COUNT; i++) clusters.push(new Cluster());
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    animate();
};

// 初始化启动
document.addEventListener('DOMContentLoaded', () => {
    initNexusEffect();
    initCTATracking();
    initScrollReveal();
    initVectorViz();

    if (!window.sessionStorage.getItem('lx_sid')) {
        window.sessionStorage.setItem('lx_sid', Math.random().toString(36).substring(7));
    }

    // 语言切换功能激活
    const langBtn = document.getElementById('langBtn');
    
    // 初始化时检测浏览器语言或默认语言
    const initLang = (navigator.language || navigator.userLanguage).startsWith('zh') ? 'zh' : 'en';
    if (initLang === 'en') {
        setLanguage('en');
        if (langBtn) langBtn.innerText = '中文';
    } else {
        setLanguage('zh');
        if (langBtn) langBtn.innerText = 'EN';
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'zh' ? 'en' : 'zh';
            setLanguage(nextLang);
            langBtn.innerText = nextLang === 'zh' ? 'EN' : '中文';
            trackEvent('Language_Switch', { to: nextLang });
        });
    }

    // 移动端菜单控制
    const menuBtn = document.getElementById('menuBtn');
    const mainNav = document.getElementById('mainNav');
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuBtn.classList.toggle('active');
            trackEvent('Mobile_Menu_Toggle');
        });
    }

    // 主题切换
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
            const nextTheme = isDark ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            themeToggle.innerText = isDark ? '☀️' : '🌓';
            trackEvent('Theme_Switch', { mode: nextTheme });
        });
    }

    // 渐显入场动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';

        // 移除加载层
        const loader = document.getElementById('loader-overlay');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 800);
            }, 400);
        }
    }, 100);

    // 性能心跳记录 (Telemetry)
    if (window.performance) {
        window.addEventListener('load', () => {
            const entries = window.performance.getEntriesByType('navigation');
            const timing = entries[0];
            if (timing) {
                console.log(`[Lingxin-Telemetry] Core Loaded in ${timing.duration.toFixed(2)}ms`);
                trackEvent('Page_View', {
                    referrer: document.referrer,
                    loadTime: timing.duration
                });
            }
        });
    }
});
