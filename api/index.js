let express = require('express');
const requestIp = require('request-ip');
let app     = express();
let cors = require('cors');

app.use(requestIp.mw())




app.use(cors({
    optionsSuccessStatus: 200
})); // some legacy browsers choke on 204


app.get("/",(req,res)=>
{
  let htmlPath = __dirname+"/public/index.html";
  res.sendFile(htmlPath);
});

app.get("/api/whoami",(req,res)=>
{
  let ip    = req.clientIp;
  let lang  = req.headers["accept-language"];
  let user  = req.headers["user-agent"];
  res.json({ipaddress:ip,language:lang,software:user});
});



app.listen(process.env.PORT || 3000);
