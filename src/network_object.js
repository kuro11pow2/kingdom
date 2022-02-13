
// 인텔리센스용 눈속임 코드
var require = x => x;
var { Network, DataSet, DataView, Queue } = require("vis-network");
Network = vis.Network;
DataSet = vis.DataSet;
DataView = vis.DataView;
Queue = vis.Queue;


class Node {
    /*
        Node 생성 옵션 자동 완성 받으려고 만들었음
    */
    constructor(id, label) {
        if (id == undefined) {
            throw Error("Node의 id는 명시되어야 함");
        }
        this.id = id;
        this.label = label ? label : String(id);
    };
}

class Edge {
    constructor(from, to, label) {
        if (from == undefined || to == undefined) {
            throw Error("Edge의 시작과 끝은 명시되어야 함");
        }
        this.from = from;
        this.to = to;
        this.label = label ? label : String(from) + "->" + String(to);
    }
}

export {Node, Edge, Network, DataSet, DataView, Queue}