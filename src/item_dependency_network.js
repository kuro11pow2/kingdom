import { Node, Edge, Network, DataSet, DataView, Queue }from './network_object.js';

var nodes = [...Array(15).keys()].map((n) => {
    return new Node(n);
}).map(
    // Make the nodes wide, the higher the id the wider, except for every third.
    (node) => (
        (node.label =
            node.id % 3 === 0
                ? `${node.id}`
                : `| ${"-".repeat(node.id)} ${node.id} ${"-".repeat(node.id)} |`),
        node
    )
);

var edges = [
    new Edge(0, 1),
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
    { from: 3, to: 7 },
    { from: 3, to: 8 },
    { from: 4, to: 9 },
    { from: 4, to: 10 },
    { from: 10, to: 10 },
    { from: 5, to: 11 },
    { from: 5, to: 12 },
    { from: 6, to: 13 },
    { from: 6, to: 14 },
    { from: 7, to: 15 },
];

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
