# ⚠️ ACTION REQUIRED: Replace Placeholder Image

## hidden-entrance.jpg

**CRITICAL**: The current `hidden-entrance.jpg` file is a **TEMPORARY PLACEHOLDER** (1x1 black pixel).

### Required Action:
Replace this placeholder with the actual image from the GitHub issue:

- **Source**: https://github.com/user-attachments/assets/f571ed1c-4450-4d12-a829-cc6d338e107e
- **Description**: Dark door with warm golden light coming through
- **Format**: JPEG
- **Recommended Size**: 1920x1080 or larger for best quality

### How to Replace:
1. Download the image from the GitHub issue attachment URL above
2. Replace the existing `hidden-entrance.jpg` file in this directory (`public/images/`)
3. Ensure the filename matches exactly: `hidden-entrance.jpg`
4. Rebuild the project with `npm run build` or restart the dev server

### Technical Details:
- The code in `src/AppWithLanguage.tsx` has been updated to reference `/images/hidden-entrance.jpg`
- Vite will automatically copy files from `public/` to the root of the build output
- The image is used in the "Philosophy Section" of the website with alt text "Hidden entrance"

**Note**: Due to network restrictions in the development environment, the actual image could not be automatically downloaded. This placeholder ensures the build succeeds while the proper image is being added.
