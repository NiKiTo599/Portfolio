const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const mine = require("mime");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/api/download", (req, res) => {
  const filePath = __dirname + "/Resume.docx";
  console.log(filePath)

  /* const fileName = path.basename(filePath);

  const mimeType = mime.lookup(filePath);

  res.setHeader("Content-disposition", "attachment; filename=" + fileName);
  res.setHeader("Content-type", mimeType);

  const filestream = fs.createReadStream(filePath);
  filestream.pipe(res); */
  res.download(filePath)
});

app.post("/api/world", (req, res) => {
  nodemailer.createTestAccount((err, acount) => {
    /* let transporter = nodemailer
      .createTransport('smtps://akulichnikita0@gmail.com:Nik35985@smtp.gmail.com/?pool=true'); */
    let transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use TLS
      auth: {
        user: "akulichnikita0@gmail.com",
        pass: "Nik35985",
      },
    });
    /* let transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'windows',
        logger: false
    }); */
    let mailOptitions = {
      from: "Portfolio <akulichnikita0@gmail.com>",
      to: "akulich.nikita@mail.ru",
      subject: "Contact with me",
      text: `${req.body.post}`,
      html: `<h1>${req.body.post.name}</h1><h2>${req.body.post.email}</h2><p>${req.body.post.message}</p>`,
    };
    transporter.sendMail(mailOptitions, (error, info) => {
      if (error) {
        console.log(error);
      }
    });
  });
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post.name}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
