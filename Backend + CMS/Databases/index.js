var express = require("express")
var app = express();
var db = require("./database.js");
const cors =require('cors');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(cors());



app.get('/', function (req, res) {

    res.send('ok');
})



//// Gallery Database////////

app.get("/gallery/read", (req, res) => {
    var sql = "select * from Galleries";
    var params = [];
    db.all(sql, params, (err, galleries) => {
        if (err) {
            res.status(400).json({
                error: err.message
            });
            return;
        }
        const new_galleries = galleries.map(gallery => {
            gallery.name =
                "http://localhost:8000/arts/" + gallery.name;

            return gallery;
        });
        res.json({
            message: "success",
            data: galleries
        });
    });
});


app.get("/gallery/:id", (req, res, next) => {
    var sql = "select * from Galleries where id = ?";
    var params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        if (row === undefined) {
            res.status(404).json({
                message: "error: Id not found 404",
                data: {}
            });
        }
        row.name = "http://localhost:8000/arts/" + row.name;
        res.json({
            message: "success",
            data: row
        });
    });
});

app.post('/gallery/edit/:id',(req,res)=>{
    db.run(`UPDATE Galleries SET name = ? WHERE id=?`,[req.query.name,req.params.id],function(err){
        if(err){
        }
        else{
            res.json({
                message:'ok'
            })
        }
    })
})

app.delete("/gallery/delete/:id", (req, res, next) => {
    db.run(
        'DELETE FROM Galleries WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})


app.post("/gallery", (req, res, next) => {
    var errors = [];

    if (!req.body.name) {
        errors.push("No image name specified");
    }
    if (errors.length) {
        res.status(400).json({ error: errors.join(",") });
        return;
    }
    var data = {
        name: req.body.name
    };
    var sql = "INSERT INTO Galleries (name) VALUES (?)";
    var params = [data.name];
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: data,
            id: this.lastID
        });
    });
});
/////// End of Gallery Database ///////////













app.listen(8000, () => console.log("Listening to port 8000"));
