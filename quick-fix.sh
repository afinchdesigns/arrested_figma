#!/bin/bash
# Quick fix for iCloud setup
echo "🚀 Quick Arrested Machine Fix..."
cp components/ui/*.tsx src/components/ui/ 2>/dev/null || true
cp components/ui/*.ts src/components/ui/ 2>/dev/null || true
[[ -f "App.tsx" ]] && rm "App.tsx" && echo "✅ Removed root App.tsx"
echo "✅ Migration complete! Run: npm run dev"