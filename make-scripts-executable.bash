#!/bin/bash

echo "🔧 Making all shell scripts executable for bash..."

# Make all shell scripts executable
chmod +x final-professional-migration.bash
chmod +x migrate-to-github.sh
chmod +x verify-structure.sh
chmod +x complete-ui-migration.sh

# Also make the old zsh scripts executable in case needed
chmod +x final-professional-migration.zsh 2>/dev/null
chmod +x make-scripts-executable.zsh 2>/dev/null

echo "✅ All scripts are now executable!"
echo ""
echo "📋 Available scripts (bash compatible):"
echo "1. ./final-professional-migration.bash  - Complete the professional migration"
echo "2. ./verify-structure.sh                - Verify your structure is correct"
echo "3. ./migrate-to-github.sh               - Push to GitHub"
echo "4. ./complete-ui-migration.sh           - Legacy migration script"
echo ""
echo "🎯 RECOMMENDED: Run the scripts in this order:"
echo "   1. ./final-professional-migration.bash"
echo "   2. ./verify-structure.sh"
echo "   3. ./migrate-to-github.sh"