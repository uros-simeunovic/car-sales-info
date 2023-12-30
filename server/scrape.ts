import { pageNumber, scrape } from "./utils/scrapeScript";

pageNumber().then((maxPage: number|undefined) => {
    let page = 1;
    console.log("sdaads")
    if(maxPage) {
        setInterval(() => {
            // scrape(`https://www.polovniautomobili.com/auto-oglasi/pretraga?page=${page}&sort=basic&brand=audi&city_distance=0&showOldNew=all&without_price=1`)
            console.log("dasdasasddasasd")
        }, 5000);
    }
});



// setInterval(() => {
    
// }, 3000);
