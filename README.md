# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 

Scaffold seemed to work flawlessly.

![01-redwood-admin-with-mongodb](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yxfxm54a7n17dezag4pw.png)

![02-mongodb-atlas-with-seed-data](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gf772mp6umqgrb71f5r2.png)

## Resources

* If you need help getting setup with Atlas you can view my guide [here](https://dev.to/ajcwebdev/can-i-use-mongodb-with-prisma-yet-50go).

## Prisma Schema

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["mongodb"]
}

model Post {
  id    String @id @default(dbgenerated()) @map("_id") @db.ObjectId
  title String
  body  String
}
```
