/**
 * VecminDB Asset Dashboard Generator - AI Agent Memory Edition
 * Shanghai Lingxin Intelligent Technology Co., Ltd.
 */

const fs = require('fs');
const path = require('path');

const assets = [
    { cat: 'Development', name: 'Agent Memory Portal', file: 'index.html', desc: '10B-Scale Agent memory visualization & i18n frontend.' },
    { cat: 'Operations', name: 'Docker Infrastructure', file: 'Dockerfile', desc: 'SRE-hardened container environment with Health Probes.' },
    { cat: 'QA', name: 'E2E Test Suite', file: 'tests/landing_page_e2e.test.js', desc: 'Playwright-based automated quality assurance.' },
];

const generateHtml = () => {
    const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8"><title>VecminDB 资产全景看板 | 灵心智算</title>
        <style>
            body { background: #050508; color: white; font-family: 'Inter', sans-serif; padding: 50px; line-height: 1.6; }
            .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 40px; }
            .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 25px; border-radius: 12px; transition: 0.3s; }
            .card:hover { border-color: #3b82f6; background: rgba(59,130,246,0.05); }
            h1 { font-size: 2.5rem; background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
            .cat { font-size: 0.65rem; text-transform: uppercase; color: #06b6d4; letter-spacing: 3px; font-weight: 800; }
            .file { font-family: 'JetBrains Mono', monospace; color: #71717a; font-size: 0.75rem; margin-top: 15px; display: block; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 10px; }
            .badge { background: #3b82f6; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.6rem; vertical-align: middle; margin-left: 5px; }
        </style>
    </head>
    <body>
        <div class="cat">Shanghai Lingxin Intelligent Technology</div>
        <h1>VecminDB 资产全景看板 <span class="badge">AGENT MEMORY EDITION</span></h1>
        <p style="color: #a1a1aa; max-width: 600px;">VecminDB landing page public assets overview.</p>
        <div class="grid">
            ${assets.map(a => `
                <div class="card">
                    <div class="cat">${a.cat}</div>
                    <h3 style="margin: 12px 0 8px 0; color: #f4f4f5;">${a.name}</h3>
                    <p style="font-size: 0.85rem; color: #a1a1aa;">${a.desc}</p>
                    <span class="file">${a.file}</span>
                </div>
            `).join('')}
        </div>
    </body>
    </html>`;

    fs.writeFileSync(path.join(__dirname, '../ASSET_DASHBOARD.html'), html);
    console.log(">>> [Lingxin-AI] Agent Memory Edition Dashboard generated successfully.");
};

generateHtml();
