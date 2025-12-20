#!/bin/bash

echo "🚀 Setting up Vue Frontend for Doctor Portal"
echo "============================================="

# Create environment file for development
if [ ! -f .env.development ]; then
    echo "📝 Creating .env.development file..."
    cat > .env.development << EOF
VITE_API_URL=http://localhost:8000/api
VITE_APP_TITLE=Doctor Portal (Development)
EOF
    echo "✅ Created .env.development"
else
    echo "ℹ️  .env.development already exists"
fi

# Create environment file for production
if [ ! -f .env.production ]; then
    echo "📝 Creating .env.production file..."
    cat > .env.production << EOF
VITE_API_URL=https://your-domain.com/api
VITE_APP_TITLE=Doctor Portal
EOF
    echo "✅ Created .env.production"
else
    echo "ℹ️  .env.production already exists"
fi

# Create environment file for mocking (fallback)
if [ ! -f .env.mocking ]; then
    echo "📝 Creating .env.mocking file..."
    cat > .env.mocking << EOF
VITE_API_URL=/api
VITE_APP_TITLE=Doctor Portal (Mock Mode)
EOF
    echo "✅ Created .env.mocking"
else
    echo "ℹ️  .env.mocking already exists"
fi

echo ""
echo "🎉 Frontend setup completed!"
echo ""
echo "Environment files created:"
echo "  📁 .env.development  - Connect to Django backend (http://localhost:8000/api)"
echo "  📁 .env.production   - Connect to production backend"
echo "  📁 .env.mocking      - Use mock data (fallback)"
echo ""
echo "To run the frontend:"
echo "  🚀 Development mode: npm run dev"
echo "  🚀 Mock mode: npm run dev:mock"
echo "  🚀 Production build: npm run build"
echo ""
echo "Make sure your Django backend is running on http://localhost:8000"

