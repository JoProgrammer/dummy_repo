const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === "/") {
        res.end(
            `
            <h1>Welcome to the <span style="font-size: 1.1em;font-weight:900;color:blue;">HOME</span> page.</h1>
            <br><br>
            <span>PAGES:</span><a href="http://localhost:5000/">home</a><a href="http://localhost:5000/about">about</a>
            <style>a { padding: 0 10px; }</style>
            `
        );
    }
    if (req.url === "/about") {
        res.end(
            `
            <h1>Welcome to the <span style="font-size: 1.1em;font-weight:900;color:blue;">ABOUT</span> page.</h1>
            <br><br>
            <span>PAGES:</span><a href="http://localhost:5000/">home</a><a href="http://localhost:5000/about">about</a>
            <style>a { padding: 0 10px; }</style>
            `
        );
    }
    res.end(`
            <h1>Oops!</h1>
            <p style="margin-left: 30px">Sorry but the page you are trying access does not exist, or is down. Click the link below to
            return home (unless of course home is what you are trying to access)</p>
            <a href="http://localhost:5000/" style="margin-left:-100px;">Return Home</a>
            <style>
                a {
                    transition: margin 1s ease;
                }
            </style>
            <script>
                setTimeout(()=>{ document.querySelector('a').style.marginLeft = "60px";}, 1000);
            </script>
    `);
});

server.listen(5000);