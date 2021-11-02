import java.lang.management.ClassLoadingMXBean;
import java.util.*;

class Graph {

  // Nodes in graphs are unique, there can't be 2 repeating nodes.
  // Generally you can use UID's and use same name but I don't want to put this
  // code complex

  class Node {

    String label;
    LinkedList<Node> edges = new LinkedList<Node>();

    public Node(String label) {
      this.label = label;
    }

    @Override
    public String toString() {
      return label;
    }

  }

  // use a hashMap here if you want to get the look up time in O(1) else using
  // linked list will give you a look up time of O(n);
  // Since we didn't learn hashmaps yet, I'll be using linked list, will update it
  // to hashmaps soon

  private LinkedList<Node> nodes = new LinkedList<Node>();

  // This method is used to find the node in the linked list, U don't need to make
  // this if ur using hashmap

  private Node findNode(String label) {

    for (Node node : nodes)
      if (node.label == label)
        return node;

    return null;
  }

  private Boolean contains(String label) {

    for (Node node : nodes)
      if (node.label == label)
        return true;

    return false;
  }

  public void addNode(String label) {
    Boolean exist = contains(label);

    if (exist) // we aren't suppose to add the vertex if it already exist
      return;

    Node node = new Node(label);
    nodes.add(node);
  }

  public void addEdge(String from, String to) {

    // We need to first check if both the nodes exist

    Node fromNode = findNode(from);
    Node toNode = findNode(to);

    if (fromNode == null || toNode == null)
      return;

    fromNode.edges.add(toNode); // This mean we are point from to to.

    // If u want to make this undirected graph then add
    // toNode.vertices.add(from);
    // so we make to also point from 😉
  }

  public void BFS(String label) {
    Node labelNode = findNode(label);

    if (labelNode == null)
      return;

    List<Node> visited = new LinkedList<>();
    Queue<Node> queue = new LinkedList<>();

    queue.add(labelNode);
    visited.add(labelNode);

    while (!queue.isEmpty()) {

      Node node = queue.poll();

      System.out.print(node + " ");

      for (Node child : node.edges) {

        if (!visited.contains(child)) {
          queue.add(child);
          visited.add(child);
        }

      }
    }

  }

  public void DFS(String label) {

    Node labelNode = findNode(label);

    if (labelNode == null)
      return;

    List<Node> visited = new LinkedList<Node>();
    Stack<Node> stack = new Stack<Node>();

    stack.add(labelNode);
    visited.add(labelNode);

    while (!stack.isEmpty()) {
      Node node = stack.pop();
      System.out.print(node + " ");

      for (Node child : node.edges) {
        if (!visited.contains(child)) {
          stack.push(child);
          visited.add(child);
        }
      }

    }
  }

}