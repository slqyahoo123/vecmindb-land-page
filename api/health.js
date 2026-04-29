/**
 * VecminDB Landing Page - Service Health Intelligence
 * Purpose: Provides Liveness/Readiness probes for Docker/K8s environments.
 */

export default async function handler(req, res) {
    const healthcheck = {
        status: 'UP',
        uptime: process.uptime(),
        timestamp: Date.now(),
        node_version: process.version,
        brand: 'Shanghai Lingxin Intelligent Technology'
    };

    try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.status(200).send(JSON.stringify(healthcheck));
    } catch (error) {
        healthcheck.status = 'DOWN';
        res.status(503).send();
    }
}
