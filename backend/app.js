const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS 설정
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API 라우트들
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/cart', require('./routes/cart.routes'));
app.use('/api/orders', require('./routes/orders.routes'));

// 정적 파일 서빙
app.use('/uploads', express.static('uploads'));

// 루트 라우트
app.get('/', (req, res) => {
    res.json({ 
        message: 'Vue Express Template Backend API Server',
        status: 'running',
        endpoints: [
            'GET /api/auth/test',
            'GET /api/products/test',
            'GET /api/cart/test',
            'GET /api/orders/test'
        ]
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
