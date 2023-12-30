import * as cheerio from "cheerio";
import axios from "axios";
import { carType } from "types/carType";

export const scrape = async (link: string) => {
    try {
        const response = await axios.get(link);
        const $ = cheerio.load(response.data);
        $(".classified").each((i, el) => {
            const carItem = $(el);
            const name = carItem.find(".classified .textContentHolder .textContent .ga-title");
            const price = carItem.find(".classified .textContentHolder .textContent .price");
            if(name.text().trim().length) {
                const car: carType = {
                    name: name.text().trim(),
                    price: priceToInt(price.text())
                };
                console.log(car);
                console.log("--------------------------------------------")
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const priceToInt = (text: string) => {
    if(isNaN(parseInt(text.split(" ")[0].trim().replace(".", "")))) {
        return "Po dogovoru"
    } else {
        return parseInt(text.split(" ")[0].trim().replace(".", ""))
    }
}

const models = async () => {
    try {
        const response = await axios.get("https://www.polovniautomobili.com/");
        const $ = cheerio.load(response.data);
        $("#brand option").each((i, el) => {
            const models = $(el);
            console.log(models.text());
            console.log("--------------------------------------------")
        })
    } catch (error) {
        console.log(error)
    }
}

export const pageNumber = async (): Promise<number|undefined> => {
    try {
        const response = await axios.get("https://www.polovniautomobili.com/auto-oglasi/pretraga?page=1&sort=basic&brand=audi&city_distance=0&showOldNew=all&without_price=1");
        const $ = cheerio.load(response.data);
        const page = $("#search-results > div:nth-child(3) > small:nth-child(1)").text();
        return Math.round(parseInt(page.split(" ").slice(-1)[0])/25)
    } catch (error) {
        console.log(error);
    }
}

// models();
