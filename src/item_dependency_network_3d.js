
import { ItemFactory, ICountable, IProducible, IHarvestGoods, IProcessedGoods } from "./data/item.js";


window.addEventListener("load", () => {

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
        let links = new Set();
        function recurse(item, nodes, links) {
            let node = {id: item.krName, group: getGroup(item)}
            nodes.add(Obj2Id(node));
            if (item instanceof IProducible) {
                for (let child of item.materialArr) {
                    // let label = `${child.krName} ${child.count}개 + ${item.timeNeeded}초 = ${item.krName} ${item.outCount}개`
    
                    let edge = { source: child.krName, target: item.krName};
                    links.add(Obj2Id(edge));
                    recurse(child, nodes, links);
                }
            }
        }
        
        for (let item of items)
            recurse(item, nodes, links);
    
        nodes = Array.from(nodes).map(x => {return Id2Object(x)});
        links = Array.from(links).map(x => {return Id2Object(x)});
        return [nodes, links];
    }

    let items = Object.values(ItemFactory).map((cls) => new cls(0));
    let ret = dependencyGraph(items);
    let nodes = Array.from(ret[0]);
    let links = Array.from(ret[1]);

    
    let network = {
        "nodes": [
            { "id": "Myriel", "group": 1 },
            { "id": "Napoleon", "group": 2 },
            { "id": "Baptistine", "group": 3 },
        ],
        "links": [
            { "source": "Myriel", "target": "Napoleon"},
            { "source": "Myriel", "target": "Baptistine" },
        ]
    };

    let graph = {
        "nodes": nodes,
        "links": links
    };

    console.log(network);
    console.log(graph);

    const Graph = ForceGraph3D()
        (document.getElementById('3d-graph'))
        .graphData(graph)
        .nodeAutoColorBy('group')
        .nodeThreeObject(node => {
            const sprite = new SpriteText(node.id);
            sprite.material.depthWrite = false; // make sprite background transparent
            sprite.color = node.color;
            sprite.textHeight = 8;
            return sprite;
        });
        
    Graph.d3Force('charge').strength(-120);
});


