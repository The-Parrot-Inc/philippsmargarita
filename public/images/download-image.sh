#!/bin/bash
# Script to download the hidden entrance image from GitHub issue
# This script requires authentication to GitHub

set -e

IMAGE_URL="https://github.com/user-attachments/assets/f571ed1c-4450-4d12-a829-cc6d338e107e"
OUTPUT_FILE="hidden-entrance.jpg"

echo "Downloading hidden entrance image from GitHub issue..."
echo "Source: $IMAGE_URL"
echo "Target: $OUTPUT_FILE"
echo ""

# Try with curl (requires GitHub session cookies)
if command -v curl &> /dev/null; then
    echo "Attempting download with curl..."
    curl -L "$IMAGE_URL" -o "$OUTPUT_FILE" --fail-with-body
    
    # Verify it's an actual image
    if file "$OUTPUT_FILE" | grep -q "image"; then
        echo "✓ Successfully downloaded image!"
        echo "✓ File size: $(du -h "$OUTPUT_FILE" | cut -f1)"
        echo "✓ File type: $(file -b "$OUTPUT_FILE")"
        exit 0
    else
        echo "✗ Downloaded file is not an image. You may need to download it manually from your browser."
        echo "  1. Open: https://github.com/josueggh/Philippsmargarita/issues/5"
        echo "  2. Right-click the image and 'Save Image As...'"
        echo "  3. Save as 'hidden-entrance.jpg' in this directory"
        rm -f "$OUTPUT_FILE"
        exit 1
    fi
else
    echo "curl not found. Please download manually:"
    echo "  1. Open: https://github.com/josueggh/Philippsmargarita/issues/5"
    echo "  2. Right-click the image and 'Save Image As...'"
    echo "  3. Save as 'hidden-entrance.jpg' in this directory"
    exit 1
fi
