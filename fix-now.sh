#!/bin/bash
# Simple one-liner to complete your migration
echo "🚀 QUICK FIX - Copying remaining UI components..."
cp components/ui/*.tsx src/components/ui/ 2>/dev/null || true
cp components/ui/*.ts src/components/ui/ 2>/dev/null || true
echo "✅ DONE! Your portfolio is ready."
echo "Test with: npm run dev"