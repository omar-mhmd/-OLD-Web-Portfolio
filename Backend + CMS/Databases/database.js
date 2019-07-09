var sqlite3 = require("sqlite3").verbose();


// const DBSOURCE = "";

const db = new sqlite3.Database('db.sqlite', err => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    } else {
        console.log("Connected to the SQlite database.");
        db.run(
            `CREATE TABLE Galleries(
                id integer NOT NULL CONSTRAINT Galleries_pk PRIMARY KEY AUTOINCREMENT,
                name text NOT NULL UNIQUE
            )`,
            err => {
                if (err) {
                } else {
                    // Table just created, creating some rows
                    var insert = "INSERT INTO Galleries (name) VALUES (?)";
                    db.run(insert, ["2.jpg"]);
                    db.run(insert, ["3.jpg"]);
                    db.run(insert, ["4.jpg"]);
                    db.run(insert, ["5.jpg"]);
                    db.run(insert, ["6.jpg"]);
                    db.run(insert, ["7.jpg"]);
                    db.run(insert, ["8.jpg"]);
                    db.run(insert, ["10.jpg"]);
                    db.run(insert, ["11.jpg"]);
                    db.run(insert, ["12.jpg"]);
                }
            }
        );
    }
});

module.exports = db;
        // db.run(
        //     `CREATE TABLE Events (
        //         id integer NOT NULL CONSTRAINT id PRIMARY KEY,
        //         date datetime NOT NULL,
        //         description text NOT NULL,
        //         loc_lat float NOT NULL,
        //         loc_long float NOT NULL
        //     )`,
        //     err => {
        //         if (err) {
        //             // console.log("events table error", err);
        //         } else {
        //             // Table just created, creating some rows
        //             var insert =
        //                 "INSERT INTO Events (date, description, loc_lat, loc_long) VALUES (?,?,?,?)";
        //             db.run(insert, [
        //                 Date.now(),
        //                 "Hello world this is a description",
        //                 "33.333",
        //                 "32.3333"
        //             ]);
        //             db.run(insert, [
        //                 Date.now(),
        //                 "Hello world this is a description number 2",
        //                 "23.333",
        //                 "12.3333"
        //             ]);
        //         }
        //     }
        // );

        
            


