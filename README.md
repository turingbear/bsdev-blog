# About this project:

The application includes a customized backend design using Sanity Studio(a headless backend content management system). This is mobile responsive and was built using the following: NextJS with TypeScript, Tailwind, Embedded and custom designed Sanity Studio. **see package.json for all the packages I used**

## Install and configure

```yarn```

or
```npm install```

- Create a Sanity Studio account if you don't already have one. https://www.sanity.io/.
- Create a project **DO NOT DEPLOY THE STUDIO AS THIS IS AN EMBEDDED STUDIO**
- Create a Dataset (i.e. 'production')
- Set the CORS origins for your application


- Create a .env.local file in the root directory of this application and add the following lines.
  
```
NEXT_PUBLIC_SANITY_PROJECT_ID=<project_id> (This can be found on the main project dashboard page in Sanity Studio)
NEXT_PUBLIC_SANITY_DATASET=<dataset_name> (Whatever you named your dataset)
NEXT_PUBLIC_SANITY_API_VERSION=v2021-10-21 (For more information on choosing an api version see https://www.sanity.io/docs/api-versioning)
```
## Start up the Dev server

```
npm run dev
```


