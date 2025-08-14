#!/bin/zsh

echo "🔧 Making all shell scripts executable..."

# Make all shell scripts executable
chmod +x /complete-ui-migration.sh
chmod +x /final-professional-migration.zsh
chmod +x /migrate-to-github.sh
chmod +x /verify-structure.sh

echo "✅ All scripts are now executable!"
echo ""
echo "📋 Available scripts:"
echo "1. ./final-professional-migration.zsh  - Complete the professional migration"
echo "2. ./verify-structure.sh              - Verify your structure is correct"
echo "3. ./migrate-to-github.sh             - Push to GitHub"
echo "4. ./complete-ui-migration.sh         - Legacy migration script"