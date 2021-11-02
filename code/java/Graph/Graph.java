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

  public void removeNode(String label) {
    Node labelNode = findNode(label);

    if (labelNode == null) // no vertex to remove if it doesn't exist in the linked list
      return;

    // This is a super costly for loop, getting the node is O(v), then removing the
    // node is again O(v)

    // Using hash map we can get this to O(1), so come back to this after learning
    // hash maps 😉

    nodes.remove(labelNode);

    // We also need to iterate to all the other vertices and remove the link to
    // label

    // Due to this method, removing a node becomes O(v^2)

    for (Node node : nodes)
      node.edges.remove(labelNode);

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

  public void removeEdge(String from, String to) {

    Node fromNode = findNode(from);
    Node toNode = findNode(to);

    // we again need to find if both nodes exist or no.

    if (fromNode == null || toNode == null)
      return;

    fromNode.edges.remove(toNode);

    // Link before we also need to remove it from to if you are doing
    // undirected graphs

  }

  public void print() {

    // Please don't use this method in production lol, this is solely for the
    // purpose of teaching

    for (Node node : nodes)
      System.out.println(node.label + " is connected to " + node.edges.toString());

  }

}