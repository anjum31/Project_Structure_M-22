const app=require("./app");
const port = process.env.RUNNING_PORT;
app.listen(port,function () {
    console.log("App Run Succesfully")
})