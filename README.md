# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

Set MongoDB connection string to an environment variable called `DATABASE_URL` in a `.env` file.

```terminal
touch .env
```

Example connection string:

```
DATABASE_URL=mongodb+srv://ajcwebdev:dont-steal-my-db-ill-kill-you@nailed-it.5mngs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Install dependencies and start development server

```terminal
yarn
yarn rw dev
```

Open `http://localhost:8910/posts` to see the admin dashboard.

![01-redwood-admin-with-mongodb](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yxfxm54a7n17dezag4pw.png)

This should match your data in Atlas or Railway.

![02-mongodb-atlas-with-seed-data](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gf772mp6umqgrb71f5r2.png)

## Resources

* [MongoDB Atlas Guide](https://dev.to/ajcwebdev/can-i-use-mongodb-with-prisma-yet-50go)
* [MongoDB on Railway Guide](https://dev.to/ajcwebdev/query-a-mongodb-database-with-prisma-and-railway-ig8)
* [Redwood Tutorial Blog with MongoDB](https://github.com/thedavidprice/redwood-tutorial-mongo)
* [Issue #840, MongoDB: Create a Doc or Cookbook](https://github.com/redwoodjs/redwoodjs.com/issues/840)

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
