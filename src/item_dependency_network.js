import { Node, Edge, Network, DataSet, DataView, Queue } from './network_object.js';
import { ItemFactory, ICountable, IProducible, IHarvestGoods, IProcessedGoods } from "./data/item.js";

var toJsonSet = aset => JSON.stringify([...new Set(aset)].sort()); 
var fromJsonSet = jset => new Array(...JSON.parse(jset)).map((item) => new Node(item.id, item.label));

console.log(fromJsonSet(toJsonSet([new Node(0), new Node(1)])));

function printMaterialRecurse(item) {
    console.log(item.toString());
    if (item instanceof IProducible) {
        for (item of item.materialArr) {
            printMaterialRecurse(item);
        }
    }
}

function getItemTypeId(name) {
    let idx = Object.keys(ItemFactory).indexOf(name);
    if (idx === -1)
        throw new Error("존재하지 않는 아이템");
    return idx;
}

function getGroup(item) {
    if (item instanceof ItemFactory.Coin) {
        return 0;
    }
    else if (item instanceof ItemFactory.Crystal) {
        return 1;
    }
    else if (item instanceof IHarvestGoods) {
        return 2;
    }
    else if (item instanceof IProcessedGoods) {
        return 3;
    }
    else {
        return 4;
    }
}

function dependencyGraph(items) {
    let Obj2Id = JSON.stringify;
    let Id2Object = JSON.parse;

    let nodes = new Set();
    let edges = new Set();
    function recurse(item, nodes, edges) {
        let node = {id: item.krName, label: item.krName, group: getGroup(item)}
        nodes.add(Obj2Id(node));
        if (item instanceof IProducible) {
            for (let child of item.materialArr) {
                // let label = `${child.krName} ${child.count}개 + ${item.timeNeeded}초 = ${item.krName} ${item.outCount}개`
                let label = ' '

                let edge = { from: child.krName, to: item.krName, label: label };
                edges.add(Obj2Id(edge));
                recurse(child, nodes, edges);
            }
        }
    }
    
    for (let item of items)
        recurse(item, nodes, edges);

    nodes = Array.from(nodes).map(x => {return new Node(...Object.values(Id2Object(x)))});
    edges = Array.from(edges).map(x => {return new Edge(...Object.values(Id2Object(x)))});
    return [nodes, edges];
}

let items = Object.values(ItemFactory).map((cls) => new cls(0));

console.log(items);

console.log("> item 기본 출력");
console.log(items[0].toString());

try {
    console.log("> item 전체 출력");
    console.log(items[0].fullInfo());    
}
catch {}

console.log("> item 생산 경로");
printMaterialRecurse(items[0]);

console.log("> items 생산 그래프");
let ret = dependencyGraph(items);
let nodes = ret[0];
let edges = ret[1];

console.log(nodes, edges);

var network = null;

function draw() {
    // clean up old network
    if (network != null) {
        network.destroy();
        network = null;
    }

    // create a network
    var container = document.getElementById("mynetwork");
    var data = { nodes, edges };
    var options = {
        // layout: {
        //     hierarchical: {
        //         direction: "UD",
        //         sortMethod: "directed",
        //     },
        // },
        physics: {
            hierarchicalRepulsion: {
                avoidOverlap: 1.0,
            },
        },
    };

    network = new Network(container, data, options);
}

window.addEventListener("load", () => {
    draw();
});
