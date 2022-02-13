
// 인텔리센스용 눈속임 코드
var require = x => x;
var { Network, DataSet, DataView, Queue } = require("vis-network");
Network = vis.Network;
DataSet = vis.DataSet;
DataView = vis.DataView;
Queue = vis.Queue;


class Node {
    constructor(id, label) {
        if (id == undefined) 
            throw new Error("id는 명시되어야 함");
        this.id = id;
        this.label = label ? label : String(this.id);
    };
}

class Edge {
    constructor(from, to, label, arrows="to") {
        if (from == undefined || to == undefined) {
            throw Error("Edge의 시작과 끝은 명시되어야 함");
        }
        this.from = from;
        this.to = to;
        this.label = label ? label : String(from) + "->" + String(to);
        this.arrows = arrows;
    }
}

export {Node, Edge, Network, DataSet, DataView, Queue}