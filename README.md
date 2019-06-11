# Ren Website

## Build

To build and run the website locally:

```bash
yarn install
yarn run start
```

## Deploy

To deploy, run:

```bash
REACT_APP_GITHUB_TOKEN="your github token" yarn run deploy
```

The Github token is needed to fetch Github repo information, since Github only allows 60 requests per hour for unauthenticated requests.

