/**
 * 上海灵心智算 Landing Page - 交互逻辑与Canvas动效
 * 版权所有 (c) 2024 上海灵心智算智能科技有限公司
 */

const translations = {
    'zh': {
        'nav-tech': '核心技术',
        'nav-vision': '企业愿景',
        'nav-join': '加入内测',
        'hero-slogan': '智算无界，灵心先行',
        'hero-title': '为 10B 阶 AI Agent 打造的<br><span class="gradient-text">长效数字化记忆</span>',
        'hero-desc': '上海灵心智算推出的 VecminDB，是全球首款集成 NSGA-II 自进化引擎的 AI Agent 专用数据库，专为百亿级动态知识与长时记忆工作负载打造。',
        'btn-apply': '申请内测席位',
        'feat-title': 'AI Agent 记忆底座',
        'feat-1-h': '01. 自进化感知',
        'feat-1-p': '内置 NSGA-II 算法，实时捕捉 Agent 交互中的 Pareto 最优状态，实现记忆检索的自适应优化。',
        'feat-2-h': '02. 百亿级并发',
        'feat-2-p': '采用 1024 路物理分片锁机制，确保在万级 Agent 协作场景下的知识同步零延迟。',
        'feat-3-h': '03. 动态知识感知',
        'feat-3-p': '原生支持动态知识图谱嵌入与跨模态记忆持久化，定义 Agent 的智慧边际。',
        'wait-h': '抢先体验 VecminDB',
        'wait-p': '我们即将开启企业尊享内测，名额有限。请提交您的邮件地址，我们将第一时间与您联系。',
        'wait-checkbox': '我希望优先获取《10B 阶 Agent 记忆架构技术白皮书》',
        'input-placeholder': '输入您的企业邮箱...',
        'btn-submit': '预约席位',
        'feedback': '感谢您的关注！灵心智算团队将很快与您取得联系。'
    },
    'en': {
        'nav-tech': 'Technology',
        'nav-vision': 'Vision',
        'nav-join': 'Join Waitlist',
        'hero-slogan': 'Intelligence Without Borders, Lingxin Leading',
        'hero-title': 'Long-term Digital Memory <br>for <span class="gradient-text">10B-Scale AI Agents</span>',
        'hero-desc': 'Launched by Lingxin AI, VecminDB is the world\'s first high-performance database with an integrated NSGA-II engine, purpose-built for AI Agent long-term memory and dynamic knowledge workloads.',
        'btn-apply': 'Request Beta Access',
        'feat-title': 'Agent Memory Substrate',
        'feat-1-h': '01. Self-Evolving Perception',
        'feat-1-p': 'Standard-breaking NSGA-II algorithm finds Pareto optimal for Agent recall and latency.',
        'feat-2-h': '02. 10B-Scale Throughput',
        'feat-2-p': '1024-way sharded Manifold locks ensure zero-lag synchronization for collaborative Agent swarms.',
        'feat-3-h': '03. Dynamic Knowledge',
        'feat-3-p': 'Native support for dynamic KG embeddings and cross-modal intent persistence at scale.',
        'wait-h': 'Experience VecminDB First',
        'wait-p': 'Exclusive enterprise beta opening soon. Limited seats available. Submit your email to be the first to know.',
        'wait-checkbox': 'I would like priority access to the "10B-Scale Agent Memory Architecture" Whitepaper.',
        'input-placeholder': 'Enter company email...',
        'btn-submit': 'Reserve Seat',
        'feedback': 'Thanks for your interest! Our team will contact you shortly.'
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
    console.log(`[Lingxin-Analytics] 🚀 Event: ${eventName}`, payload);
};

// 3. Waitlist 表单提交交互
const initWaitlistForm = () => {
    const form = document.getElementById('waitlistForm');
    const feedback = document.getElementById('formFeedback');
    const submitBtn = document.getElementById('submitBtn');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('userEmail');
        
        // 追踪提交事件 (带异常保护)
        try {
            trackEvent('Waitlist_Submit', { email: emailInput.value });
        } catch (err) { console.warn("Analytics blocked or failed."); }

        // 交互反馈
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerText = '正在预约...';

        setTimeout(() => {
            form.style.display = 'none';
            if (feedback) feedback.style.display = 'block';
            console.log("Lingxin AI: User Joined the Waitlist.");
        }, 1200);
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
        
        // --- 核心增强：绘制 1024 路流形分片背景纹理 ---
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
        ctx.lineWidth = 0.5;
        const cellSize = 30;
        for (let x = 0; x < width; x += cellSize) {
            for (let y = 0; y < height; y += cellSize) {
                if (Math.random() > 0.995) {
                    ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
                    ctx.fillRect(x, y, cellSize, cellSize);
                }
            }
        }

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
                // 模拟 Manifold 锁的连波效应
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
    initWaitlistForm();
    initScrollReveal();
    initVectorViz();

    if (!window.sessionStorage.getItem('lx_sid')) {
        window.sessionStorage.setItem('lx_sid', Math.random().toString(36).substring(7));
    }

    // 语言切换功能激活
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'zh' ? 'en' : 'zh';
            setLanguage(nextLang);
            langBtn.innerText = nextLang === 'zh' ? 'EN' : '中';
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
            }, 1000); // 确保用户能感受到品牌入场感
        }
    }, 100);

    // 性能心跳记录 (Telemetry)
    if (window.performance) {
        window.addEventListener('load', () => {
            const timing = window.performance.getEntriesByType('navigation')[0];
            console.log(`[Lingxin-Telemetry] Core Loaded in ${timing.duration.toFixed(2)}ms`);
            
            // 初始展示追踪
            trackEvent('Page_View', { 
                referrer: document.referrer, 
                loadTime: timing.duration 
            });
        });
    }
});
