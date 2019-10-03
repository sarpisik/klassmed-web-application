# A JAMStack web application built with [Gatsby](https://www.gatsbyjs.org/) & [Sanity.io](https://www.sanity.io)

Click [here](https://www.klassmed.com) to see application

- [Features](#features)
- [Installation](#installation)
- [Env variables](#env-variables)
- [Usage example](#usage-example)
  - [Node Mailer Configuration (Email Distributing)](<#node-mailer-configuration-(email-distributing)>)
  - [Gatsby Configuration (Graphql)](<#gatsby-configuration-(graphql)>)
- [Development setup](#development-setup)
  - [Run it](#run-it)
  - [Development workflow](#development-workflow)
- [Deployment](#deployment)
- [Credentials](#credentials)
- [License](#license)

## Features

**A company website built with Gatsby**

- 📡 Real-time content preview in development
- ⏱ Fast & frugal builds
- 🗃 No accidental missing fields/types
- 🧰 Full Render Control with Portable Text Or Markdown
- 📸 Gatsby-Image support
- 🔧 Minimal configuration

**Sanity Studio with a schema for**

- 🏢 Company info
- 📃 Pages
- 👨🏼‍🎨 Products
- 👩🏾‍💻 Frequently Asked Questions
- 📰 Messages from contact form

## Installation

```sh
git clone https://github.com/sarpisik/klassmed-web-application.git
cd klassmed-web-application
npm install

# Install or upgrade the Sanity CLI to
# make sure you are on v0.140.0 or higher
npm install -g @sanity/cli
# Set up Sanity.io account and project (≈ 45s)
npm run init

```

## Env variables

### Node Mailer Configuration (Email Distributing)

- EMAIL_HOST = Email hosting server address.
- EMAIL_AUTH_USER = User name.
- EMAIL_AUTH_PASSWORD = User password.
- EMAIL_SENDER = Email sender mail address.
- EMAIL_RECEIVER = Your client's email address to send.
- EMAIL_CC = Optional email address.

### Gatsby Configuration (Graphql)

- SANITY_PROJECT_ID = Your project ID in sanity.io.
- SANITY_DATASET = Dataset name.
- SANITY_TOKEN_WRITE = A valid token for write access. You will need this to write new message document on receiving message from client via contact form.
- SITE_URL = Production website url for creating web manifest and SEO optimizations.
- GATSBY_GOOGLE_MAPS_API = Google maps api for google maps component.
- GOOGLE_TRACK_ID = Google analytics ID.

## Development setup

### Run it

```sh
npm start
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
```

### Development workflow

There is a [blog post](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content) for more details about how to use this template, but if you would like to just start tinkering:

- The Sanity Studio keeps its schemas in `./studio/schemas`. It will hot reload the editor when you edit them so just start experimenting. [Read more about their schemas here](https://www.sanity.io/docs/content-studio/the-schema).
- App followed Gatsby conventions and [you can read all about them here](https://www.gatsbyjs.org/tutorial/).
- If you want Gatsby to not throw errors on missing fields for unpopulated data you need to redeploy the GraphQL API so we can generate schemas – `sanity graphql deploy`

## Deployment

```sh
# Deploy a GraphQL API and schema to Sanity
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy

# Build & deploy to Zeit's Now. Remember to set `basePath` to "/studio" in sanity.json
npm run now-deploy
```

> **Deploy on Zeit:** This app assumes deployed to zeit. If you want to deploy edit the now.json config for you.
>
> Fork or clone the example to your GitHub account. After adding your repo to Zeit you’ll get automatic builds & deploys when pushing to master. You can also add a [webhook](https://www.sanity.io/docs/webhooks) to get deploys on content changes.

## Credentials

1. [Original template to fork](https://https://github.com/sanity-io/example-company-website-gatsby-sanity-combo/fork)
2. [Sanity studio](https://www.sanity.io)
3. [Gatsby](https://www.gatsbyjs.org)
4. [Zeit](https://zeit.co)

## License

MIT
