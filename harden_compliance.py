import os

# 定义所有要修改的法律网页
landing_dir = r"d:\mywork\program_project\vecmindb-land-page"

def update_file(filename, replacements):
    filepath = os.path.join(landing_dir, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        return
        
    with open(filepath, 'rb') as f:
        raw_data = f.read()
        
    content = raw_data.decode('utf-8', errors='ignore')
    original_content = content
    
    for target, replacement in replacements:
        content = content.replace(target, replacement)
        
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully updated compliance for: {filename}")
    else:
        print(f"No changes made for: {filename}")

# ----------------- 1. PRIVACY POLICY UPDATES -----------------
privacy_replacements = [
    (
        '<p>Our products collect minimal data necessary to function: license keys and email addresses for account purposes, and usage preferences stored locally on your device.</p>',
        '<p>VecminDB is a Cognitive Vector Database. We collect minimal personal data necessary to function: account registration emails, commercial license keys, and standard API telemetry metrics if explicitly enabled by the user.</p>'
    ),
    (
        '<p>Extension preferences are stored locally via Chrome Storage API. SaaS account data is stored securely on our servers. Payment information is handled entirely by PayPal — we do not store credit card or banking information.</p>',
        '<p>VecminDB configuration preferences are stored locally on your deployment instance. Commercial license and SaaS telemetry account data are stored securely on our infrastructure. Payment information is handled entirely by 2Checkout (Verifone) — we do not store credit card or banking information.</p>'
    ),
    (
        '<p>We use PayPal for payment processing. Your payment data is subject to PayPal\'s privacy policy.</p>',
        '<p>We use 2Checkout (Verifone) for payment processing. Your payment data is subject to 2Checkout\'s privacy policy.</p>'
    ),
    (
        '<p>For privacy-related inquiries, contact us through the channels listed on our website.</p>',
        '<p>For privacy-related inquiries, contact us at <a href="mailto:sulingqi@hotmail.com" style="color:var(--accent)">sulingqi@hotmail.com</a>.</p>'
    ),
    (
        '© 2026 Shanghai Lingxin Zhizuan Intelligent Technology Co., Ltd.',
        '© 2026 Shanghai Lingxin Intelligent Technology Co., Ltd.'
    )
]

# ----------------- 2. TERMS OF SERVICE UPDATES -----------------
terms_replacements = [
    (
        '<p>By accessing or using any LingxinMind product, extension, or SaaS service ("Services"), you agree to be bound by these Terms of Service.</p>',
        '<p>By accessing or using VecminDB, commercial licenses, or SaaS services ("Services"), you agree to be bound by these Terms of Service.</p>'
    ),
    (
        '<p>LingxinMind provides browser extensions, SaaS platforms, and AI infrastructure software including but not limited to: video speed controllers, productivity tools, pet booking systems, status page monitoring, resume generators, OCR tools, and vector database solutions.</p>',
        '<p>VecminDB is a high-performance dual-core Cognitive Vector Database providing sub-millisecond vector retrieval, native memory lifecycle management (LTSM), online centroid evolution (Welford), and DP-Federated PCA cluster orchestration.</p>'
    ),
    (
        '<p>Some Services require a paid subscription. Subscription fees are billed monthly in advance. You may cancel at any time; access continues until the end of the billing period. Payments are processed by PayPal.</p>',
        '<p>Some Services require a paid subscription. Subscription fees are billed monthly in advance. You may cancel at any time; access continues until the end of the billing period. Payments are processed by 2Checkout (Verifone).</p>'
    ),
    (
        '<p>If you are unsatisfied within 14 days of purchase, contact us for a full refund. See our <a href="/refund.html" style="color:var(--accent)">Refund Policy</a> for details.</p>',
        '<p>If you are unsatisfied within 30 days of purchase, contact us for a full refund. See our <a href="/refund.html" style="color:var(--accent)">Refund Policy</a> for details.</p>'
    ),
    (
        '<p>For questions about these terms, contact us through the channels listed on our website.</p>',
        '<p>For questions about these terms, contact us at <a href="mailto:sulingqi@hotmail.com" style="color:var(--accent)">sulingqi@hotmail.com</a>.</p>'
    ),
    (
        '© 2026 Shanghai Lingxin Zhizuan Intelligent Technology Co., Ltd.',
        '© 2026 Shanghai Lingxin Intelligent Technology Co., Ltd.'
    )
]

# ----------------- 3. REFUND POLICY UPDATES -----------------
refund_replacements = [
    (
        '<h2>14-Day Money-Back Guarantee</h2>',
        '<h2>30-Day Money-Back Guarantee</h2>'
    ),
    (
        '<p>We offer a 14-day refund policy for all LingxinMind products and Services. If you are not satisfied with your purchase, contact us within 14 days of the purchase date for a full refund.</p>',
        '<p>We offer a 30-day refund policy for all VecminDB licenses and Services. If you are not satisfied with your purchase, contact us within 30 days of the purchase date for a full refund.</p>'
    ),
    (
        '<p>Contact our support team through the channels on our website with your purchase details. We will process your refund within 5–10 business days.</p>',
        '<p>Contact our support team at <a href="mailto:sulingqi@hotmail.com" style="color:var(--accent)">sulingqi@hotmail.com</a> with your purchase details. We will process your refund within 5–10 business days.</p>'
    ),
    (
        '© 2026 Shanghai Lingxin Zhizuan Intelligent Technology Co., Ltd.',
        '© 2026 Shanghai Lingxin Intelligent Technology Co., Ltd.'
    )
]

# ----------------- 4. PRICING LINKS & FOOTER UPDATES -----------------
pricing_replacements = [
    (
        '<a href="https://buy.paddle.com/checkout?price_id=pri_01kshx2z75ngreedef6sdazqfb" target="_blank" class="btn btn-primary">Subscribe</a>',
        '<a href="https://secure.2checkout.com/checkout/buy?merchant=lingxinmind&tpl=default&prod=vecmindb_pro" target="_blank" class="btn btn-primary">Subscribe</a>'
    ),
    (
        '<a href="https://buy.paddle.com/checkout?price_id=pri_01kshybgfr013ez1hqnxpt3amt" target="_blank" class="btn btn-outline">Subscribe</a>',
        '<a href="https://secure.2checkout.com/checkout/buy?merchant=lingxinmind&tpl=default&prod=vecmindb_team" target="_blank" class="btn btn-outline">Subscribe</a>'
    ),
    (
        '© 2026 Shanghai Lingxin Zhizuan Intelligent Technology Co., Ltd.',
        '© 2026 Shanghai Lingxin Intelligent Technology Co., Ltd.'
    )
]

# ----------------- 5. CLAIM LICENSE PAGE UPDATES -----------------
claim_replacements = [
    (
        '<title>Claim License — LingxinMind</title>',
        '<title>Claim License — VecminDB</title>'
    ),
    (
        '<h1>Claim Your <span>License Key</span></h1>',
        '<h1>Claim Your <span>License Token</span></h1>'
    ),
    (
        '<p class="sub">Enter your PayPal email and subscription ID to receive your V3 Pro license key.</p>',
        '<p class="sub">Enter your purchase email and 2Checkout order reference number to retrieve your VecminDB Commercial License Token.</p>'
    ),
    (
        '<input type="email" id="email" placeholder="PayPal email used for payment">',
        '<input type="email" id="email" placeholder="Email used for payment">'
    ),
    (
        '<input type="text" id="subId" placeholder="Subscription ID (from PayPal receipt)">',
        '<input type="text" id="subId" placeholder="Order ID / Reference Number (from 2Checkout receipt)">'
    ),
    (
        '<button id="btn" onclick="claim()">Get License Key</button>',
        '<button id="btn" onclick="claim()">Get License Token</button>'
    ),
    (
        "fetch('https://license-server-production-3cf0.up.railway.app/api/webhook/paypal',{",
        "fetch('https://license-server-production-3cf0.up.railway.app/api/webhook/2checkout',{"
    ),
    (
        "body:JSON.stringify({email:email,subscriptionId:subId})",
        "body:JSON.stringify({email:email,orderId:subId})"
    ),
    (
        "if(d.key){r.className='success';r.innerHTML='<strong>Your license key:</strong><br><br><code>'+d.key+'</code><br><br>Enter this in any V3 extension to unlock Pro.';}",
        "if(d.token){r.className='success';r.innerHTML='<strong>Your license token:</strong><br><br><code>'+d.token+'</code><br><br>Configure this token in your VecminDB instance as the <code>SOVEREIGNTY_TOKEN</code> to unlock cluster features.';}"
    ),
    (
        '© 2026 Shanghai Lingxin Zhizuan Intelligent Technology Co., Ltd.',
        '© 2026 Shanghai Lingxin Intelligent Technology Co., Ltd.'
    )
]

# ----------------- 6. INDEX PAGE GITHUB UPDATES -----------------
index_replacements = [
    (
        'slqyahoo123',
        'lingxinmind'
    )
]

# 执行所有文件的更新
update_file("privacy.html", privacy_replacements)
update_file("terms.html", terms_replacements)
update_file("refund.html", refund_replacements)
update_file("pricing.html", pricing_replacements)
update_file("claim.html", claim_replacements)
update_file("index.html", index_replacements)

print("COMPLIANCE_HARDENING_SUCCESS")
