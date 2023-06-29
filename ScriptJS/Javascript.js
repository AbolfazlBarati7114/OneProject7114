document.addEventListener("scroll", function () {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > -2) {
        setTimeout(function () {
            document.querySelector(".TextLook").style.opacity = "1"
            document.querySelector(".TextLook").style.top = "-4px";
        }, 700)
        setTimeout(function () {
            document.querySelector(".TextLook2").style.opacity = "1";
            document.querySelector(".TextLook2").style.top = "54px";
        }, 1000)
        setTimeout(function () {
            document.querySelector(".TextBestTrades").style.opacity = "1";
            document.querySelector(".TextBestTrades").style.top = "38%";
        }, 1300)
        setTimeout(function () {
            document.querySelector(".SearchMarketHere").style.opacity = "1";
            document.querySelector(".SearchMarketHere").style.top = "59%";
            document.querySelector(".IconSearchCss").style.opacity = "1";
            document.querySelector(".IconSearchCss").style.top = "62%";
            document.querySelector(".BoxBTC").style.opacity = "1";
            document.querySelector(".BoxBTC").style.top = "80%";
            document.querySelector(".BoxAppel").style.opacity = "1";
            document.querySelector(".BoxAppel").style.top = "64%";
        }, 1600)
    }
    if (document.documentElement.scrollTop > 635) {
        document.querySelector(".BoxBTC").style.opacity = "0.7";
        document.querySelector(".BoxAppel").style.opacity = "0.7";

    }
    if (document.documentElement.scrollTop < 1518) {
        document.querySelector(".MenuJs").style.color = "#fff";
        document.querySelector(".PersonJs").style.color = "#fff";
        document.querySelector(".header").style.backgroundColor = "transparent";
        document.querySelector(".IconSearchHeaderJS").style.opacity = "0";
        document.querySelector(".PersonJs").style.backgroundColor = "transparent"

    }
    if (document.documentElement.scrollTop > 1518) {
        document.querySelector(".MenuJs").style.color = "#000";
        document.querySelector(".PersonJs").style.color = "#000";
        document.querySelector(".header").style.backgroundColor = "#fff";
        document.querySelector(".IconSearchHeaderJS").style.opacity = "1";
        document.querySelector(".PersonJs").addEventListener("mousemove", () => {
            document.querySelector(".PersonJs").style.backgroundColor = "#fff";
            document.querySelector(".PersonJs").style.color = "#2962ff";
        })
        document.querySelector(".PersonJs").addEventListener("mouseleave", () => {
            document.querySelector(".PersonJs").style.color = "#000";
        })
        document.querySelector(".IconSearchHeaderJS").addEventListener("mousemove", () => {
            document.querySelector(".IconSearchHeaderJS").style.backgroundColor = "#fff";
            document.querySelector(".IconSearchHeaderJS").style.color = "#2962ff";
        })
        document.querySelector(".IconSearchHeaderJS").addEventListener("mouseleave", () => {
            document.querySelector(".IconSearchHeaderJS").style.color = "#000";
        })
        document.querySelector(".MenuJs").addEventListener("mousemove", () => {
            document.querySelector(".MenuJs").style.backgroundColor = "transparent";
        })
    }
})
document.querySelector(".MenuJs").addEventListener("click", () => {
    document.querySelector(".BoxMenu").style.display = "block";
});
document.querySelector(".MainPage").addEventListener("click", () => {
    document.querySelector(".BoxMenu").style.display = "none";
});
document.querySelector(".PersonJS").addEventListener("click", () => {
    document.querySelector(".BoxMenu").style.display = "none";
})