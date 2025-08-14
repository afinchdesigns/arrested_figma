#!/bin/bash

echo "🔍 Verifying Professional Structure..."
echo "===================================="

# Check if src/ directory exists
if [[ ! -d "src" ]]; then
    echo "❌ ERROR: src/ directory not found!"
    echo "Run the migration script first: ./final-professional-migration.bash"
    exit 1
fi

echo "✅ src/ directory found"

# Verify key directories
directories=("src/components" "src/components/ui" "src/imports" "src/styles")
for dir in "${directories[@]}"; do
    if [[ -d "$dir" ]]; then
        echo "✅ $dir"
    else
        echo "❌ $dir - MISSING!"
    fi
done

# Count files in each directory
echo ""
echo "📊 File counts:"
total_components=$(find src/components -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l | tr -d ' ')
ui_components=$(find src/components/ui -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l | tr -d ' ')
imports=$(find src/imports -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l | tr -d ' ')

echo "📁 Components: $total_components"
echo "📁 UI Library: $ui_components"
echo "📁 Imports: $imports"

# Check for duplicate root files (should be cleaned)
echo ""
echo "🔍 Checking for duplicate root files:"
if [[ -f "App.tsx" ]]; then
    echo "⚠️  WARNING: Root App.tsx still exists (should be removed)"
else
    echo "✅ Root App.tsx properly removed"
fi

if [[ -d "components" ]]; then
    echo "⚠️  WARNING: Root components/ still exists (should be removed)"
else
    echo "✅ Root components/ properly removed"
fi

if [[ -d "imports" ]]; then
    echo "⚠️  WARNING: Root imports/ still exists (should be removed)"
else
    echo "✅ Root imports/ properly removed"
fi

if [[ -d "styles" ]]; then
    echo "⚠️  WARNING: Root styles/ still exists (should be removed)"
else
    echo "✅ Root styles/ properly removed"
fi

# Verify key files exist
echo ""
echo "🔍 Key files verification:"
key_files=("src/App.tsx" "src/main.tsx" "src/styles/globals.css" "package.json" "vite.config.ts")
all_good=true

for file in "${key_files[@]}"; do
    if [[ -f "$file" ]]; then
        echo "✅ $file"
    else
        echo "❌ $file - MISSING!"
        all_good=false
    fi
done

echo ""
if $all_good && [[ $ui_components -ge 20 ]]; then
    echo "🎉 PROFESSIONAL STRUCTURE VERIFIED!"
    echo "✅ Ready for GitHub deployment"
    echo "✅ Enterprise-level organization"
    echo "✅ Complete component library"
else
    echo "⚠️  Structure needs attention - run migration script"
fi

echo ""
echo "📋 Next steps:"
echo "1. npm run dev (test locally)"
echo "2. ./migrate-to-github.sh (push to GitHub)"
echo "3. Deploy to Vercel/Netlify"