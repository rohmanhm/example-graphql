# Simple GraphQL Example
Just a simple **GraphQL Example** with **[NodeJS](https://nodejs.org/)** and **PostgreSQL Driver**.

## Setup
1. Install all dependency needed.
   `npm install`
2. Setting your database config. File config can be found in `src/database/conn.js`
   * Make **Migration**
   `npm run migrate`
   * or Directly create **Seeders** it's generating `tables` too
   `npm run seeder`.
   Seeder accept 3 paramaters if you want to use it.
      * **`--seeds=<Int>`**
         Define how many you make fake data from seeders.
         **default:** `10`
      * **`--locale=<String>`**
         Define what's default data locale you need to generate your fake data to database.
         **default:** `"id_ID"`
      * **`--force=<Boolean>`**
         Be careful, all of your data will be disappear if you set it to be `true`

3. Start your application.
   `npm run start`
4. Copy url from your console and open with your browser.
   default: `http://localhost:8118/graphql` if you not change the configuration from `server.js`
