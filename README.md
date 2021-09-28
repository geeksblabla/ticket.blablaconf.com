This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup

1. Create a firebase app and with a firestore database.

2. Go to firebase project setting > Service account and generate a new private key,Download the json file and add the copy the following environment variables 👇

```
#.env.development.local
NEXT_PUBLIC_HOST=
PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

3. Create a Github auth application and add `https://yourwebsite.com/api/github-auth` as redirect url. Add you github client id and the the secret key to your environment variables:

```
NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID=
GITHUB_OAUTH_CLIENT_SECRET=

```

4. Configure Cloudinary to generate images see `utils/ticket-image-generator.ts`
