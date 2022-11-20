import Queue from './queue';

export default class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        const headNodes = this.AdjList.keys();

        headNodes.forEach(head => {
            const adjNodes = this.AdjList.get(head);
            let conc = "";

            adjNodes.forEach(node => {
                conc += node + " ";
            })

            console.log(head + " -> " + conc);
        })
    }

    bfs(startingNode) {
        let visited = {};
        let searchResult = []

        const queue = new Queue();

        visited[startingNode] = true;
        queue.enQueue(startingNode);

        while (!queue.isEmpty()) {
            let firstQueueElement = queue.deQueue();

            searchResult.push(firstQueueElement)

            const neighbors = this.AdjList.get(firstQueueElement);

            neighbors.forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.enQueue(neighbor);
                }
            })
        }

        return searchResult;
    }
}
