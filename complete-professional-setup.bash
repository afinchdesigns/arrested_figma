#!/bin/bash

echo "🚀 ARRESTED MACHINE - COMPLETE PROFESSIONAL SETUP"
echo "================================================="
echo ""
echo "This will transform your portfolio into an enterprise-level application!"
echo ""

# Make all scripts executable first
echo "🔧 Making scripts executable..."
chmod +x make-scripts-executable.bash
chmod +x final-professional-migration.bash
chmod +x verify-structure.sh
chmod +x migrate-to-github.sh
chmod +x complete-ui-migration.sh
echo "✅ All scripts are now executable"
echo ""

# Run the professional migration
echo "🏗️  Running professional migration..."
./final-professional-migration.bash

if [[ $? -ne 0 ]]; then
    echo "❌ Migration failed. Please check the output above."
    exit 1
fi

echo ""
echo "🔍 Verifying structure..."
./verify-structure.sh

if [[ $? -ne 0 ]]; then
    echo "❌ Verification failed. Please check the output above."
    exit 1
fi

echo ""
echo "📦 Installing dependencies..."
npm install

if [[ $? -ne 0 ]]; then
    echo "❌ npm install failed. Please check your package.json"
    exit 1
fi

echo ""
echo "🎉 PROFESSIONAL SETUP COMPLETE!"
echo "==============================="
echo ""
echo "✅ Enterprise-level file structure"
echo "✅ 35+ professional UI components"  
echo "✅ Complete component library"
echo "✅ All dependencies installed"
echo "✅ Ready for development & deployment"
echo ""
echo "🚀 NEXT STEPS:"
echo "1. Test your application:  npm run dev"
echo "2. Deploy to GitHub:       ./migrate-to-github.sh"
echo "3. Deploy to Vercel:       Visit vercel.com → Import GitHub repo"
echo ""
echo "🌟 Your portfolio is now PROFESSIONAL-GRADE!"
echo "   Same structure used by billion-dollar companies!"
echo ""

# Ask if they want to start the dev server
echo "Would you like to start the development server now? (y/n)"
read -r start_dev

if [[ $start_dev == "y" || $start_dev == "Y" ]]; then
    echo ""
    echo "🚀 Starting development server..."
    echo "Visit http://localhost:3000 to see your professional portfolio!"
    npm run dev
fi