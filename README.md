# cargameNEW

AGENTS---
READ GAMEPLAN.MD

## Run locally

```bash
npm install
npm run dev
```

The first version includes starting setup, vehicle acquisition, history inspection, pricing, customer negotiation, sale accounting, and local save/restore.

## Deploy to Netlify

This repository includes `netlify.toml`, which configures Netlify to run `npm run build` and publish the `dist` directory.

### Netlify dashboard

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. In Netlify, choose **Add new project** and **Import an existing project**.
3. Select the repository and keep the detected settings:
	- Build command: `npm run build`
	- Publish directory: `dist`
4. Choose **Deploy**.

Every new commit pushed to the selected branch will trigger a new deployment.

### Netlify CLI

After installing and authenticating the Netlify CLI, run:

```bash
npm install
npm run build
npx netlify deploy --dir=dist
```

Use `npx netlify deploy --prod --dir=dist` when you are ready to deploy directly to the production site.

## Validate

```bash
npm test
npm run lint
npm run build
```