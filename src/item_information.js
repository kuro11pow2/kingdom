import { ItemFactory, ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage } from "./data/item_calc.js";


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
        "최대 생산량 (개/시간)",
        "최대 소모량 (개/시간)",
        "소요 시간 총합 (초)",
        "소요 코인 총합 (코인)",
        "공급률",
        "납품 점수 (점)",
        "납품 점수 당 소요 시간 (초)",
        "직접 요구 재료",]));
    for (let itemCls of Object.values(ItemFactory)) {
        let item = new itemCls(0);

        if (item instanceof ICurrency || item instanceof ITools || item instanceof IProducibleSet) {
            continue;
        }
        let Round = (pos, num) => Math.round(num * Math.pow(10, pos)) / Math.pow(10, pos);
        let mateiralsStr = item.materials.map((material) => `${material.krName} ${Round(2, material.count / item.outCount)}개`);
        let str = new Array(
            item.krName,
            item.order,
            Round(2, item.maximumProductionPerHour),
            Round(2, item.maximumDemandPerHour),
            Round(2, item.totalTimePerRequired),
            Round(2, item.totalCoinPerRequired),
            Round(2, item.maximumProductionPerHour / item.maximumDemandPerHour),
            item.deliveryScore,
            Round(2, item.totalTimePerRequired / item.deliveryScore),
            mateiralsStr);
        tableBody.appendChild(CreateRow("td", str))
    }

});
