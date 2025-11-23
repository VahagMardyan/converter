const header=document.querySelector('header');

function createHeader() {
    header.innerHTML=`
    <div class="links">
    <a href="../Convert-to-Century/index.html">Century Converter</a>
    <a href="../Convert-to-Years/index.html">Years Converter</a>
    <a href="../Convert-to-days-of-week/index.html">Days Converter</a>
    <a href="../Convert-to-months-of-year/index.html">Months Converter</a>
    <a href="../Currency-Conversion/index.html">Currency Converter</a>
    <a href="../Convert-to-Temperature/index.html">Temperature Converter</a>
    <a href="../index.html">Back to default page</a>
    </div>
    `
}

createHeader();