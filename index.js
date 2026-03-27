const express = require('express');
const app = express();

const AFFILIATE_ID = "14354840000";

app.get('/go', (req, res) => {
    const url = req.query.url;
    const sub = req.query.sub || "fb";

    if (!url) return res.send("Thiếu link");

    const encoded = encodeURIComponent(url);

    const final = `https://s.shopee.vn/an_redir?origin_link=${encoded}&affiliate_id=${AFFILIATE_ID}&sub_id=${sub}`;

    res.redirect(final);
});

app.get('/', (req, res) => {
    res.send("Web affiliate đang chạy ngon 👍");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server chạy rồi"));