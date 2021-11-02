public class Main {

  public static void main(String[] args) {
    Graph graph = new Graph();
    graph.addNode("test1");
    graph.addNode("test2");
    graph.addNode("test3");
    graph.addEdge("test1", "test2");
    graph.addEdge("test2", "test3");
    graph.addEdge("test3", "test1");
    graph.print();

  }
}
