
import { ItemFactory, ICountable, ICurrency, IProducible, IProducibleSet, IHarvestGoods, ITools, IProcessedGoods, ICashPackage } from "./data/item_calc.js";
// import ForceGraph3D from "3d-force-graph"

window.addEventListener("load", () => {

    function dependencyGraph(items) {
        let Obj2Id = JSON.stringify;
        let Id2Object = JSON.parse;
    
        let nodes = new Set();
        let links = new Set();
        function recurse(item, nodes, links) {
            let node = {id: item.krName, group: item.order}
            nodes.add(Obj2Id(node));
            if (item instanceof IProducible) {
                for (let child of item.materials) {
                    // let label = `${child.krName} ${child.count}개 + ${item.timeNeeded}초 = ${item.krName} ${item.outCount}개`
    
                    let edge = { source: child.krName, target: item.krName};
                    links.add(Obj2Id(edge));
                    recurse(child, nodes, links);
                }
            }
            else if (item instanceof IProducibleSet) {
                for (let child of item.inputs) {
                    let edge = { source: child.krName, target: item.krName };
                    links.add(Obj2Id(edge));
                    
                    for (let parent of item.outputs) {
                        let edge = { source: item.krName, target: parent.krName };
                        links.add(Obj2Id(edge));
                    }
                    recurse(child, nodes, links);
                }
            }
        }
        
        for (let item of items)
            recurse(item, nodes, links);
    
        nodes = Array.from(nodes).map(x => {return Id2Object(x)});
        links = Array.from(links).map(x => {return Id2Object(x)});
        console.log(nodes);
        return [nodes, links];
    }

    let items = Object.values(ItemFactory).map((cls) => new cls(0));
    let ret = dependencyGraph(items);
    let nodes = Array.from(ret[0]);
    let links = Array.from(ret[1]);

    let graph = {
        "nodes": nodes,
        "links": links
    };

    const Graph = ForceGraph3D()
        (document.getElementById('3d-graph'))
        .graphData(graph)
        .nodeAutoColorBy('group')
        .linkAutoColorBy(d => { 
            let key = graph.nodes
                        .map(x=>x.id)
                        .indexOf(d.source);
            console.log(d, key, graph.nodes[key])
            graph.nodes[key].group
        })
        .linkOpacity(0.5)
        .linkDirectionalArrowLength(5)
        .linkDirectionalArrowRelPos(1)
        .nodeThreeObject(node => {
            const sprite = new SpriteText(node.id);
            sprite.material.depthWrite = false; // make sprite background transparent
            sprite.color = node.color;
            sprite.textHeight = 4;
            return sprite;
        });
        
});



