const header=document.querySelector('header');

function createHeader() {
    header.innerHTML=`
    <div class="links">
    <a href="../Convert-to-Century/index.html" target="_blank">Century Converter</a>
    <a href="../Convert-to-Years/index.html" target="_blank">Years Converter</a>
    <a href="../Convert-to-days of week/index.html" target="_blank">Days Converter</a>
    <a href="../Convert-to-months of year/index.html" target="_blank">Months Converter</a>
    <a href="../Currency-Conversion/index.html" target="_blank">Currency Converter</a>
    <a href="../Convert-to-Temperature/index.html" target="_blank">Temperature Converter</a>
    </div>
    `
}

createHeader();