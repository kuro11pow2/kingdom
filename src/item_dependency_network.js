import { Node, Edge, Network, DataSet, DataView, Queue } from './vis_network_support.js';
import { ItemFactory, ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage } from "./data/item_calc.js";


var toJsonSet = aset => JSON.stringify([...new Set(aset)].sort());
var fromJsonSet = jset => new Array(...JSON.parse(jset)).map((item) => new Node(item.id, item.label));

console.log(fromJsonSet(toJsonSet([new Node(0), new Node(1)])));

function printMaterialRecurse(item) {
    console.log(item.toString());
    if (item instanceof IProducible) {
        for (item of item.materials) {
            printMaterialRecurse(item);
        }
    }
}

function dependencyGraph(items) {
    let Obj2Id = JSON.stringify;
    let Id2Object = JSON.parse;

    let nodes = new Set();
    let edges = new Set();
    function recurse(item, nodes, edges) {
        let node = { id: item.krName, label: item.krName, group: item.order }
        nodes.add(Obj2Id(node));
        if (item instanceof IProducible) {
            for (let child of item.materials) {
                // let label = `${child.krName} ${child.count}개 + ${item.timeNeeded}초 = ${item.krName} ${item.outCount}개`
                let label = ' '

                let edge = { from: child.krName, to: item.krName, label: label };
                edges.add(Obj2Id(edge));
                recurse(child, nodes, edges);
            }
        }
        else if (item instanceof IProducibleSet) {
            for (let child of item.inputs) {
                let label = ' '
                let edge = { from: child.krName, to: item.krName, label: label };
                edges.add(Obj2Id(edge));
                
                for (let parent of item.outputs) {
                    let edge = { from: item.krName, to: parent.krName, label: label };
                    edges.add(Obj2Id(edge));
                }
                recurse(child, nodes, edges);
            }
        }
    }

    for (let item of items)
        recurse(item, nodes, edges);

    nodes = Array.from(nodes).map(x => { return new Node(...Object.values(Id2Object(x))) });
    edges = Array.from(edges).map(x => { return new Edge(...Object.values(Id2Object(x))) });
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
catch { }

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
                avoidOverlap: 1,
            },
        },
    };

    network = new Network(container, data, options);
}

window.addEventListener("load", () => {
    draw();
});
