document.querySelector(".RightDivs").addEventListener("click", () => {
    document.querySelector(".DivIndices").style.left = "-100%";
    document.querySelector(".RightDivs").style.display = "none";
})
document.querySelector(".LeftDivs").addEventListener("click", () => {
    document.querySelector(".RightDivs").style.display = "block"
})
document.querySelector(".LeftDivs").addEventListener("click", () => {
    document.querySelector(".DivIndices").style.left = "0%";
})
document.querySelector(".TextIndices").addEventListener("click", () => {
    document.querySelector(".TextIndices").style.fontWeight = "600";
    document.querySelector(".TextStocks").style.fontWeight = "500";
    document.querySelector(".TextCrypto").style.fontWeight = "500";
    document.querySelector(".TextForex").style.fontWeight = "500";
    document.querySelector(".TextFutures").style.fontWeight = "500";
    document.querySelector(".DivIndices").style.left = "0%";
    document.querySelector(".RightDivs").style.display = "block";
    setTimeout(function(){
        document.querySelector(".OneDivIndices").style.top = "-10%";
    }, 600)
    setTimeout(function(){
        document.querySelector(".OneDivIndices").style.top = "7%";
    }, 1000)
})
document.querySelector(".TextStocks").addEventListener("click", () => {
    document.querySelector(".TextIndices").style.fontWeight = "500";
    document.querySelector(".TextStocks").style.fontWeight = "600";
    document.querySelector(".TextCrypto").style.fontWeight = "500";
    document.querySelector(".TextForex").style.fontWeight = "500";
    document.querySelector(".TextFutures").style.fontWeight = "500";
    document.querySelector(".DivIndices").style.left = "-36%";
    document.querySelector(".RightDivs").style.display = "block"
    setTimeout(function(){
        document.querySelector(".TwoDivIndices").style.top = "-10%";
    }, 600)
    setTimeout(function(){
        document.querySelector(".TwoDivIndices").style.top = "7%";
    }, 1000)
})
document.querySelector(".TextCrypto").addEventListener("click", () => {
    document.querySelector(".TextIndices").style.fontWeight = "500";
    document.querySelector(".TextStocks").style.fontWeight = "500";
    document.querySelector(".TextCrypto").style.fontWeight = "600";
    document.querySelector(".TextForex").style.fontWeight = "500";
    document.querySelector(".TextFutures").style.fontWeight = "500";
    document.querySelector(".DivIndices").style.left = "-70%";
    document.querySelector(".RightDivs").style.display = "block"
    setTimeout(function(){
        document.querySelector(".ThreeDivIndices").style.top = "-10%";
    }, 600)
    setTimeout(function(){
        document.querySelector(".ThreeDivIndices").style.top = "7%";
    }, 1000)
})
document.querySelector(".TextForex").addEventListener("click", () => {
    document.querySelector(".TextIndices").style.fontWeight = "500";
    document.querySelector(".TextStocks").style.fontWeight = "500";
    document.querySelector(".TextCrypto").style.fontWeight = "500";
    document.querySelector(".TextForex").style.fontWeight = "600";
    document.querySelector(".TextFutures").style.fontWeight = "500";
    document.querySelector(".DivIndices").style.left = "-105%";
    document.querySelector(".RightDivs").style.display = "none";
    setTimeout(function(){
        document.querySelector(".FoorDivIndices").style.top = "-10%";
    }, 600)
    setTimeout(function(){
        document.querySelector(".FoorDivIndices").style.top = "7%";
    }, 1000)

})
document.querySelector(".TextFutures").addEventListener("click", () => {
    document.querySelector(".TextIndices").style.fontWeight = "500";
    document.querySelector(".TextStocks").style.fontWeight = "500";
    document.querySelector(".TextCrypto").style.fontWeight = "500";
    document.querySelector(".TextForex").style.fontWeight = "500";
    document.querySelector(".TextFutures").style.fontWeight = "600";
    document.querySelector(".DivIndices").style.left = "-105%";
    document.querySelector(".RightDivs").style.display = "none";
    setTimeout(function(){
        document.querySelector(".FiveDivIndices").style.top = "-10%";
    }, 600)
    setTimeout(function(){
        document.querySelector(".FiveDivIndices").style.top = "7%";
    }, 1000)

})