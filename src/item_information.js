import { ItemFactory, ICountable, IProducible, IHarvestGoods, IProcessedGoods } from "./data/item.js";


window.addEventListener("load", () => {
    let tableHead = document.getElementById("head");
    let tableBody = document.getElementById("body");

    function CreateRow(tag, strings) {
        let row = document.createElement("tr")
        for (let str of strings) {
            let cell = document.createElement(tag);
            cell.innerText = str;
            row.appendChild(cell);
        }
        return row;
    }

    tableHead.appendChild(CreateRow("th", [
        "이름",
        "생산 단계",
        "최대 생산량 (시간당)",
        "최대 소모량 (시간당)",
        "소요 시간 총합 (초/개당)",
        "소요 코인 총합 (코인/개당)",
        "납품 점수 (점/개당)",
        "직접 요구 재료 (개당)",]));
    for (let item of Object.values(ItemFactory)) {
        if (item === ItemFactory.Crystal || item == ItemFactory.Coin) {
            continue;
        }
        let Round = (pos, num) => Math.round(num * Math.pow(10, pos)) / Math.pow(10, pos);
        let inst = new item(0);
        let mateiralsStr = inst.materials.map((material) => `${material.krName} ${Round(2, material.count / inst.outCount)}개`);
        let str = new Array(
            inst.krName,
            inst.order,
            Round(2, inst.outCount * 3600 / inst.timeRequired),
            Round(2, inst.maximumDemandPerHour),
            Round(2, inst.totalTimePerRequired),
            Round(2, inst.totalCoinPerRequired),
            inst.deliveryScore,
            mateiralsStr);
        tableBody.appendChild(CreateRow("td", str))
    }

});
