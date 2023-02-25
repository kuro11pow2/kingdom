import { ItemFactory, ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage } from "./item_data.js";


(function SetProducibles() {
    let tree = new Map();
    let items = Object.values(ItemFactory).map((cls) => new cls(0));
    for (let item of items.values()) {
        if (item instanceof IProducible) {
            for (let material of item.materials) {

                if (!tree.has(material.name)) {
                    tree.set(material.name, new Set());
                }
                
                tree.set(material.name, tree.get(material.name).add(item.name));
            }
        }
        else if (item instanceof IProducibleSet) {
            for (let parent of item.inputs) {

                if (!tree.has(parent.name)) {
                    tree.set(parent.name, new Set());
                }
                
                tree.set(parent.name, tree.get(parent.name).add(item.name));

                for (let child of item.outputs) {
                    if (!tree.has(item.name)) {
                        tree.set(item.name, new Set());
                    }
                    
                    tree.set(item.name, tree.get(item.name).add(child.name));
                }
            }
        }
    }
    tree.forEach((v, k, m) => {
        ItemFactory[k].prototype.producibles = v;
    })
})();

// 이 아이템이 재료로 들어가는 모든 아이템을 각각 1회 생산할 때 드는 총 개수
(function SetmaximumDemandPerHour() {
    let demand = new Map();
    for (let itemClass of Object.values(ItemFactory)) {
        let item = new itemClass(0);
        
        if ((item instanceof IProducible) === false) {
            continue;
        }

        for (let material of item.materials) {
            /*
            시간당 소모량 = 재료개수*3600/생산시간(초)
            */
            let count = material.count*3600/item.timeRequired;
            if (demand.has(material.name)) {
                count += demand.get(material.name);
            }
            demand.set(material.name, count);
        }
    }

    Object.values(ItemFactory).map((cls) => cls.prototype.maximumDemandPerHour = 0);

    demand.forEach((v, k, m) => {
        ItemFactory[k].prototype.maximumDemandPerHour = v;
    })
})();

// 
(function SetmaximumProductionPerHour() {
    let production = new Map();
    for (let itemClass of Object.values(ItemFactory)) {
        let item = new itemClass(0);
        
        if ((item instanceof IProducible) === false) {
            continue;
        }
        production.set(item.name, item.outCount * 3600 / item.timeRequired);
    }

    Object.values(ItemFactory).map((cls) => cls.prototype.maximumProductionPerHour = 0);

    production.forEach((v, k, m) => {
        ItemFactory[k].prototype.maximumProductionPerHour = v;
    })

})();

// 아이템 생산 단계 계산
(function SetOrder() {
    let order = new Map();
    
    function dfs(node, depth) {
        if (order.has(node)) {
            depth = Math.max(depth, order.get(node));
        }
        order.set(node, depth);
        if (ItemFactory[node].prototype.producibles == undefined ) {
            return;
        }
        
        for (let child of ItemFactory[node].prototype.producibles) {
            dfs(child, depth+1);
        }
    }
    dfs("Coin", 0);
    dfs("Won", 0);

    order.forEach((v, k, m) => {
        ItemFactory[k].prototype.order = v;
    })
})();

// 소요 시간 총합 = 재료 아이템들의 소요 시간 총합 + 아이템 생산 시간
(function SetTotalTimeAndCoin() {
    let totalTimePerRequired = new Map();
    let totalCoinPerRequired = new Map();

    let items = Object.values(ItemFactory).map((cls) => new cls(0));

    function GetTotalTime(item) {
        if (item instanceof IProducible == false) {
            if (totalTimePerRequired.has(item.name) === false) {
                totalTimePerRequired.set(item.name, 0);
            }
        }
        if (totalTimePerRequired.has(item.name)) {
            return item.count * totalTimePerRequired.get(item.name);
        }
        let totalTime = item.timeRequired;
        for (let material of item.materials) {
            totalTime += GetTotalTime(material);
        }
        totalTime /= item.outCount
        totalTimePerRequired.set(item.name, totalTime);
        return totalTime;
    }

    function GetTotalCoin(item) {
        if (item instanceof IProducible == false) {
            if (totalCoinPerRequired.has(item.name) === false) {
                totalCoinPerRequired.set(item.name, 1);
            }
        }
        if (totalCoinPerRequired.has(item.name)) {
            return item.count * totalCoinPerRequired.get(item.name);
        }
        let totalCoin = 0;
        for (let material of item.materials) {
            totalCoin += GetTotalCoin(material);
        }
        totalCoin /= item.outCount
        totalCoinPerRequired.set(item.name, totalCoin);
        return totalCoin;
    }

    for (let item of items.values()) {
        GetTotalTime(item);
        GetTotalCoin(item);
    }
    totalTimePerRequired.forEach((v, k, m) => {
        ItemFactory[k].prototype.totalTimePerRequired = v;
    })
    totalCoinPerRequired.forEach((v, k, m) => {
        ItemFactory[k].prototype.totalCoinPerRequired = v;
    })
})();


export { ItemFactory, ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage };