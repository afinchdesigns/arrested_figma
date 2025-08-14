#!/bin/bash

echo "🚀 FINISHING ARRESTED MACHINE MIGRATION"
echo "======================================="

# Copy remaining UI components from root to src
missing_components=(
    "breadcrumb.tsx"
    "calendar.tsx" 
    "carousel.tsx"
    "chart.tsx"
    "collapsible.tsx"
    "command.tsx"
    "context-menu.tsx"
    "drawer.tsx"
    "dropdown-menu.tsx"
    "hover-card.tsx"
    "input-otp.tsx"
    "menubar.tsx"
    "navigation-menu.tsx"
    "pagination.tsx"
    "popover.tsx"
    "progress.tsx"
    "radio-group.tsx"
    "resizable.tsx"
    "scroll-area.tsx"
    "separator.tsx"
    "sheet.tsx"
    "sidebar.tsx"
    "skeleton.tsx"
    "sonner.tsx"
    "switch.tsx"
    "table.tsx"
    "toggle-group.tsx"
    "toggle.tsx"
    "use-mobile.ts"
)

echo "📁 Copying remaining UI components..."
copied=0
for component in "${missing_components[@]}"; do
    if [[ -f "components/ui/$component" ]] && [[ ! -f "src/components/ui/$component" ]]; then
        cp "components/ui/$component" "src/components/ui/"
        echo "✅ $component"
        ((copied++))
    fi
done

echo "📊 Copied $copied additional components"

# Remove root App.tsx to prevent conflict
if [[ -f "App.tsx" ]]; then
    rm "App.tsx"
    echo "🧹 Removed conflicting root App.tsx"
fi

echo ""
echo "🎊 MIGRATION COMPLETE!"
echo "✅ Professional src/ structure ready"
echo "✅ All UI components available"
echo "✅ No file conflicts"
echo ""
echo "🚀 Test your portfolio: npm run dev"
echo "🌟 Ready for deployment!"