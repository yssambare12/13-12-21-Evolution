const app = require("./index");

const connect = require("./configs/db1");

app.listen(4000, async function(){
    await connect();
    console.log("Listening on port 4000");
})