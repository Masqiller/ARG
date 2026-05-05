#!/bin/bash
# Universal Workforce Orchestrator (ARG) - Zero-Config Bootstrap
# Mandate: Talk Less, Do More.

set -e

echo "🌊 [ARG] Initializing Universal Workforce Orchestrator..."

# 1. Node.js dependencies
echo "📦 [1/4] Installing Node.js dependencies..."
npm install

# 2. Expert Plugins & Submodules
echo "🛠️ [2/4] Resolving External Plugins & Core Graphify..."
# If not already submodules, we clone them into local vendor/ directory
mkdir -p vendor

if [ ! -d "vendor/graphify" ]; then
    echo "   ↳ Cloning Graphify Core..."
    git clone https://github.com/safishamsi/graphify vendor/graphify
else
    echo "   ↳ Graphify Core detected."
fi

if [ ! -d "vendor/external_plugins" ]; then
    echo "   ↳ Cloning External Plugin Libraries..."
    mkdir -p vendor/external_plugins
    # In a real scenario, we'd clone specific repos here. 
    # For now, we point to the existing external_plugins if available, or create a stub.
    if [ -d "../external_plugins" ]; then
        cp -r ../external_plugins/* vendor/external_plugins/
    fi
fi

# 3. Python Environment for Graphify
echo "🐍 [3/4] Setting up Graphify Python environment..."
if command -v pip3 &> /dev/null; then
    pip3 install -e vendor/graphify/
else
    echo "⚠️ Warning: pip3 not found. Graphify core may not run."
fi

# 4. Build
echo "🏗️ [4/4] Building ARG VibeRouter..."
npm run build

echo "✅ [ARG] System Ready. Run 'npm run vibe -- \"your task\"' to begin."
