import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({ message: 'Authorization token required' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.email !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ message: 'Access denied: Admins only' });
        }

        next();
    } catch (error) {
        console.error('Admin authentication error:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export default adminAuth;