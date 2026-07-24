# Lachlan McDonald — Portfolio

Source for [lukeyone.github.io](https://lukeyone.github.io), a static portfolio focused on applied AI, machine learning, scientific data, data engineering and software engineering.

## Current portfolio evidence

The site now highlights:

- **Assess Swift AI** — the latest uploaded secure lending-assessment PR stack, with private upload quarantine, file validation, malware scanning, cross-user isolation, lifecycle reconciliation and clean-room verification.
- **Crowdfunding Success Predictor** — a portfolio-safe Flask implementation of a trained logistic-regression workflow plus a structured campaign-readiness assessment.
- **Australian Supermarket Duopoly Analysis** — SQL, pandas, advanced visualisation and a Dockerised Airflow/Spark/PostgreSQL pipeline.
- **CubeCoder VR** — a Unity/OpenXR visual-programming environment and controlled honours study.
- **Peak Phosphorus research** — independent technical research connecting phosphate geology, processing, fertiliser systems, food security and geopolitical risk.
- **PyTorch computer vision, GPT-2 fine-tuning, microclimate clustering and Australian food classification** — consolidated in a methodology-first ML research case study.

## Evidence rules

Portfolio claims follow these rules:

1. Repository descriptions are based on the latest visible GitHub version, not planned or unpushed local work.
2. Private commercial work is described without exposing source, credentials, infrastructure identifiers or customer data.
3. Academic metrics identify the documented experiment and retain material limitations.
4. Synthetic data is labelled as synthetic.
5. AI-assisted systems are presented as decision support with human review, not autonomous consequential decision-making.

## Structure

```text
.
├── index.html
├── assess-swift-case-study.html
├── phosphorus-research.html
├── ml-research.html
├── profile.json
├── case-study.css
├── styles-base.css
├── styles-projects.css
├── styles-sections.css
├── styles-responsive.css
└── script.js
```

## Updating profile information

Edit `profile.json` to update the visible identity content without changing the page layout. The static HTML remains as a fallback when JavaScript is unavailable.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Contact

- [LinkedIn](https://www.linkedin.com/in/lachlanmcdonaldtech)
- [GitHub](https://github.com/Lukeyone)
- [lachlanmcdonald2000@gmail.com](mailto:lachlanmcdonald2000@gmail.com)
