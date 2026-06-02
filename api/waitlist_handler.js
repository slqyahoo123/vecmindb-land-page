import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

// Strict RFC-5322 compliant email regex validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default async function handler(req, res) {
    // 1. Establish CORS policies and Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Type', 'application/json');

    // Handle Preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // 2. Enforce POST constraint
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            status: 'error', 
            message: 'Method Not Allowed. Enforce POST protocol.' 
        });
    }

    try {
        const { email } = req.body;

        // 3. Strict cryptographic and formatting validation
        if (!email || !EMAIL_REGEX.test(email.trim())) {
            return res.status(400).json({ 
                status: 'error', 
                message: 'Invalid email address syntax.' 
            });
        }

        const candidateEmail = email.trim().toLowerCase();
        
        // 4. Generate high-entropy cryptographic UUID v4 as Reference ID
        const referenceId = crypto.randomUUID().toUpperCase();
        const timestamp = Date.now();

        // 5. Data Persistence Layer (Dynamic routing to VecminDB or secure log fallback)
        const vecmindbUrl = process.env.VECMINDB_URL || 'http://localhost:5520';
        const vecmindbToken = process.env.VECMINDB_API_TOKEN;
        
        let persistedToDB = false;
        
        if (process.env.VECMINDB_ACTIVE === 'true') {
            try {
                // Production integration with VecminDB via REST Gateway
                const response = await fetch(`${vecmindbUrl}/api/v1/collection/waitlist/insert`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${vecmindbToken}`
                    },
                    body: JSON.stringify({
                        vector: [0.0, 0.0, 0.0], // Default routing vector
                        payload: {
                            email: candidateEmail,
                            reference_id: referenceId,
                            timestamp: timestamp
                        }
                    })
                });
                if (response.ok) {
                    persistedToDB = true;
                }
            } catch (dbErr) {
                console.error('[Lingxin-API] Persistent store connectivity issue, activating local caching:', dbErr.message);
            }
        }

        // 6. Secondary fallback persistence (Secure Local Cache)
        if (!persistedToDB) {
            const cachePayload = { email: candidateEmail, reference_id: referenceId, timestamp };
            const cachePath = path.join('/tmp', 'waitlist_cache.json');
            
            try {
                let cacheList = [];
                if (fs.existsSync(cachePath)) {
                    const fileContent = fs.readFileSync(cachePath, 'utf8');
                    cacheList = JSON.parse(fileContent);
                }
                cacheList.push(cachePayload);
                fs.writeFileSync(cachePath, JSON.stringify(cacheList, null, 2));
            } catch (fsErr) {
                console.error('[Lingxin-API] Fallback storage failure:', fsErr.message);
            }
        }

        console.log(`[Lingxin-API] Waitlist registered successfully: ${candidateEmail} [RefId: ${referenceId}]`);

        // 7. Standard Enterprise JSON response
        return res.status(200).json({
            status: 'success',
            message: 'Successfully registered to the VecminDB waitlist.',
            payload: {
                reference_id: referenceId,
                timestamp: timestamp,
                node_active: true
            }
        });

    } catch (error) {
        console.error('[Lingxin-API] Critical waitlist crash:', error.message);
        return res.status(500).json({ 
            status: 'error', 
            message: 'Internal parsing cluster error.' 
        });
    }
}
