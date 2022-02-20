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
    
    tableHead.appendChild(CreateRow("th", ["이름", "생산 단계", "소요 시간 총합 (초/개당)", "소요 코인 총합 (코인/개당)", "직접 요구 재료 (개당)"]));
    for (let item of Object.values(ItemFactory)) {
        if (item === ItemFactory.Crystal || item == ItemFactory.Coin) {
            continue;
        }
        let inst = new item(0);
        let mateiralsStr = inst.materials.map((material) => `${material.krName} ${Math.round(material.count/inst.outCount*100)/100}개`);
        let str = new Array(inst.krName, inst.order, Math.round(inst.totalTimePerRequired*100)/100, Math.round(inst.totalCoinPerRequired*100)/100, mateiralsStr);
        tableBody.appendChild(CreateRow("td", str))
    }
    
});
