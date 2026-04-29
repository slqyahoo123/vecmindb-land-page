/**
 * Lingxin AI Waitlist API - 标准化处理模版
 * 
 * 职责：
 * 1. 拦截前端提交的 Waitlist 请求
 * 2. 预留数据库(VecminDB)写入接口占位
 * 3. 返回工业标准 JSON 响应
 */

export default async function handler(req, res) {
    // 1. 设置跨域防护与响应类型
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // 2. 仅允许 POST 请求
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            status: 'error', 
            message: 'Method Not Allowed' 
        });
    }

    try {
        const { email } = req.body;

        // 3. 通用格式校验
        if (!email || !email.includes('@')) {
            return res.status(400).json({ 
                status: 'error', 
                message: 'Invalid email address provided.' 
            });
        }

        /**
         * TODO: [PRODUCTION-GATE]
         * 在此处集成 VecminDB 存储引擎，将数据持久化至 sharded 表空间。
         * await vecmindb.insert('waitlist_collection', { email, timestamp: Date.now() });
         */

        console.log(`[Lingxin-API] New candidate joined the waitlist: ${email}`);

        // 4. 返回成功负载
        return res.status(200).json({
            status: 'success',
            message: 'Successfully joined the Lingxin Zh算 waitlist.',
            payload: {
                reference_id: Math.random().toString(36).substring(7).toUpperCase()
            }
        });

    } catch (error) {
        return res.status(500).json({ 
            status: 'error', 
            message: 'Internal processing cluster error.' 
        });
    }
}
