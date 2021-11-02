public class Main {
  public static void main(String[] args) {
    var graph = new Graph();

    graph.addNode("a");
    graph.addNode("b");
    graph.addNode("c");
    graph.addNode("d");
    graph.addNode("e");

    graph.addEdge("a", "b");
    graph.addEdge("b", "e");
    graph.addEdge("a", "e");
    graph.addEdge("c", "a");
    graph.addEdge("c", "b");
    graph.addEdge("c", "d");
    graph.addEdge("d", "e");

    // DFSing taking c vertex

    graph.DFS("c");
  }
}
