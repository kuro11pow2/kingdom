import { Node, Edge, Network, DataSet, DataView, Queue } from './network_object.js';
import { ItemFactory, ICountable, IProducible } from "./data/item.js";


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

function dependencyGraph(items) {
    let nodes = new Set();
    let edges = new Array();
    function recurse(item, nodes, edges) {
        nodes.add(item.krName);
        if (item instanceof IProducible) {
            for (let child of item.materialArr) {
                edges.push(new Edge(child.krName, item.krName, `${child.krName} ${child.count}개 + ${item.timeNeeded}초 = ${item.krName} ${item.outCount}개`));
                recurse(child, nodes, edges);
            }
        }
    }
    for (let item of items)
        recurse(item, nodes, edges);
    return [Array.from(nodes).map(x => {return {id: x, label: x}}), edges];
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
        layout: {
            hierarchical: {
                direction: "UD",
                sortMethod: "directed",
            },
        },
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
