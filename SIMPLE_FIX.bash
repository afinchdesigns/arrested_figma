#!/bin/bash

echo "🚀 SIMPLE ARRESTED MACHINE MIGRATION"
echo "===================================="
echo ""

# Make this script executable
chmod +x "$0"

# Copy missing UI components from root to src/
echo "📁 Copying missing UI components to src/..."

# List of UI components that need to be copied
components=(
  "alert-dialog.tsx"
  "aspect-ratio.tsx" 
  "avatar.tsx"
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

copied_count=0
for component in "${components[@]}"; do
  if [[ -f "components/ui/$component" ]] && [[ ! -f "src/components/ui/$component" ]]; then
    cp "components/ui/$component" "src/components/ui/"
    echo "✅ $component"
    ((copied_count++))
  fi
done

echo "📊 Copied $copied_count components"
echo ""

# Update the root App.tsx to point to src (fix the imports)
if [[ -f "App.tsx" ]]; then
  echo "🔧 Updating root App.tsx to use src/ structure..."
  mv "App.tsx" "App.tsx.backup"
  echo "✅ Backed up root App.tsx"
fi

# Update main.tsx to point to correct App
echo "🔧 Checking main.tsx..."
if [[ -f "src/main.tsx" ]]; then
  echo "✅ src/main.tsx exists"
else
  echo "❌ src/main.tsx missing - creating it..."
  cat > "src/main.tsx" << 'EOF'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
EOF
  echo "✅ Created src/main.tsx"
fi

# Verify final structure
echo ""
echo "📊 Final verification:"
if [[ -d "src" ]]; then
  total_components=$(find src/components -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l | tr -d ' ')
  ui_components=$(find src/components/ui -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l | tr -d ' ')
  
  echo "📁 Total src/components: $total_components"
  echo "📁 UI components: $ui_components"
  
  if [[ $ui_components -ge 20 ]]; then
    echo "🎉 SUCCESS! Professional structure ready!"
  fi
fi

echo ""
echo "🎯 NEXT STEPS:"
echo "1. npm run dev    (test your app)"
echo "2. npm run build  (build for production)"
echo ""
echo "✅ Your portfolio is ready to go!"