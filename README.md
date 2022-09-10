# Discord Bot V14.3.0

## Requirements & Steps
* This Project
* Node.js V16.9+
* Discord Bot Token, Prefix
* Edit the `config.js` that is in the config folder
* Run `npm i` once in Terminal to install Dependencies
* Run `node index.js` to ***RUN*** the bot.

## Config file:

```js
module.exports = {

  Prefix: "+", // YOUR BOT PREFIX.

  Users: {
    OWNERS: ["496802380063440896", "672951993165152266"] // THE BOT OWNERS ID.
  },

  Handlers: {
    MONGO: "" // YOUR MONGO URI.
  },

  Client: {
    TOKEN: "", // YOUR BOT TOKEN.
    ID: "" // YOUR BOT ID.
  }

}
```
