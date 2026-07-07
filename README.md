# Lachlan McDonald — Portfolio

Source for [lukeyone.github.io](https://lukeyone.github.io), a static portfolio focused on applied AI, data engineering and software engineering.

## Highlights

- Responsive, dependency-free HTML, CSS and JavaScript
- Accessible navigation and reduced-motion support
- Structured data and social metadata
- Project case studies grounded in public repositories
- Confidential commercial work described without exposing private source code
- Central `profile.json` file for synchronising the headline, summary, links, location and profile image

## Updating profile information

Edit `profile.json` to update the visible identity content without changing the page layout. The static HTML remains as a fallback when JavaScript is unavailable.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
