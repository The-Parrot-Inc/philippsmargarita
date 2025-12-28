# Public Assets Directory

This directory contains static assets that are served directly by Vite.

## Structure

```
public/
└── images/
    ├── hidden-entrance.jpg      # ⚠️ Placeholder - needs replacement
    ├── PLACEHOLDER_INFO.md      # Instructions for replacing placeholder
    ├── download-image.sh        # Helper script to download the image
    └── README.md               # Directory documentation
```

## Usage

Files in this directory are copied as-is to the build output root. They can be referenced in code using absolute paths starting with `/`.

### Example:
```tsx
<img src="/images/hidden-entrance.jpg" alt="Hidden entrance" />
```

### Important Notes:
- Do not include sensitive information in this directory
- Optimize images before adding them (compress, resize appropriately)
- Use descriptive filenames
- Consider adding a `.gitkeep` if you want to commit an empty directory structure

## Current Action Required

The `hidden-entrance.jpg` file is currently a placeholder. See `images/PLACEHOLDER_INFO.md` for details on replacing it with the actual image from the GitHub issue.
