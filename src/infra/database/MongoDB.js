const mongoose = require("mongoose");

class MongoDB {
  static async startConnection(user, password) {
    await mongoose
      .connect(
        `mongodb+srv://${user}:${password}@fullture-challenge-t7-c.9qsyil9.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => console.log("Mongo connected"))
      .catch((err) => console.error(err));
  }

  static async closeConnection() {
    await mongoose
      .disconnect()
      .then(() => console.log("Mongo disconnected"))
      .catch((err) => console.error(err));
  }
}

module.exports = MongoDB;
