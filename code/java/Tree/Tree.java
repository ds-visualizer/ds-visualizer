import java.util.*;

/*

    10
  11  12  13
22 23

*/

class Tree {

  class Node {
    public LinkedList<Node> children = new LinkedList<Node>();
    int value;
    Node parent = null;

    public Node(int value) {
      this.value = value;
    }

    public Node(int value, Node parent) {
      this.value = value;
      this.parent = parent;
    }

  }

  // On initialization of tree, we make the root.

  private LinkedList<Node> nodes = new LinkedList<Node>();

  Node root = null;

  public Tree(int root) {
    Node node = new Node(root);
    nodes.add(node);
    this.root = node;
  }

  // Method just for finding the node

  private Node findNode(int value) {

    for (Node node : nodes)
      if (node.value == value)
        return node;

    return null;
  }

  private Boolean contains(int value) {
    for (Node node : nodes)
      if (node.value == value)
        return true;

    return false;
  }

  public void addNode(int parent, int value) {
    Node parentNode = findNode(parent);

    if (parentNode == null)
      return;

    boolean exist = contains(value);

    if (exist)
      return;

    Node childNode = new Node(value, parentNode);
    nodes.add(childNode);
    parentNode.children.add(childNode);

  }

  public List<Integer> children(int parent) {
    Node parentNode = findNode(parent);

    if (parentNode == null)
      return null;

    LinkedList<Integer> childrenList = new LinkedList<Integer>();

    for (Node child : parentNode.children)
      childrenList.add(child.value);

    return childrenList;
  }

  public int parent(int child) {
    Node childNode = findNode(child);

    if (childNode == null)
      return -1; // throw error

    return childNode.parent.value;
  }

  public int height() {
    int[] maxHeight = new int[1];
    height(root, 1, maxHeight);
    return maxHeight[0];
  }

  /*
   * 11 -> 1 10 -> 2 12
   */

  private int height(Node node, int currentHeight, int[] maxHeight) {

    if (node == null)
      return currentHeight;

    for (Node child : node.children) {

      int childHeight = height(child, currentHeight + 1, maxHeight);

      if (childHeight > maxHeight[0])
        maxHeight[0] = childHeight;

    }

    return currentHeight;
  }

  public void print() {
    print(root);
  }

  private void print(Node node) {

    if (node == null)
      return;

    String children = "[";

    for (Node child : node.children)
      children += child.value + ", ";

    System.out.println(node.value + " is connected to " + children + "]");

    for (Node child : node.children)
      print(child);
  }

}

// Check out the description for more meta data
// https://dsvisualizer.isatvik.com/tree