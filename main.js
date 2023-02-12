//apply margin bottom to the main content based on footer height
let footer = document.querySelector('#footer');
function outputSize() {
    const footerHeight = footer.offsetHeight;
    // console.log(footerHeight);
    document.querySelector('main').style.marginBottom = `${footerHeight}px`;
}
outputSize();
new ResizeObserver(outputSize).observe(footer);