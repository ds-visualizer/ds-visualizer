import javax.management.RuntimeErrorException;
import java.util.*;

public class Tree {

  class Node {
    int value;
    Node leftChild;
    Node rightChild;

    public Node(int value) {
      this.value = value;
    }
  }

  private Node root = null;

  public void insert(int value) {
    Node node = new Node(value);

    // When there is no root, the node becomes the root

    if (root == null) {
      root = node;
      return;
    }

    Node current = root;
    while (true) {

      // Checking if the value is less than or greater than the current

      if (value < current.value) {

        // When the leftChild of current node is null, the new node is placed over there

        if (current.leftChild == null) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {

        // When the rightChild of current node is null, the new node is places over
        // there

        if (current.rightChild == null) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  // all variables and methods are public by default, so don't manually add it
  // Older versions of java will need you to add public

  int findMin() {

    // Ill slowly add exceptions, since java is a strict type language I recommend
    // y'all to learn it as well

    if (root == null)
      throw new RuntimeErrorException(null, "No root in the tree");

    Node current = root;

    // We only want to iterate to the left cuz the left most is where the smallest
    // node is at

    while (current.leftChild != null) {
      current = current.leftChild;
    }

    return current.value;
  }

  Boolean contains(int value) {
    return contains(root, value);
  }

  private Boolean contains(Node node, int value) {

    if (node == null)
      return false;

    if (node.value == value)
      return true;

    if (value < node.value)
      return contains(node.leftChild, value);

    else {
      return contains(node.rightChild, value);
    }

  }

  List<Integer> preOrder() {
    List<Integer> nodes = new LinkedList<>();
    preOrder(root, nodes);
    return nodes;
  }

  private void preOrder(Node node, List<Integer> nodes) {
    if (node == null)
      return;

    nodes.add(node.value);
    preOrder(node.leftChild, nodes);
    preOrder(node.rightChild, nodes);
  }

  List<Integer> inOrder() {

    List<Integer> nodes = new LinkedList<>();
    inOrder(root, nodes);

    return nodes;
  }

  private void inOrder(Node node, List<Integer> nodes) {

    if (node == null)
      return;

    inOrder(node.leftChild, nodes);
    nodes.add(node.value);
    inOrder(node.rightChild, nodes);
  }

  List<Integer> postOrder() {

    List<Integer> nodes = new LinkedList<>();
    postOrder(root, nodes);

    return nodes;
  }

  private void postOrder(Node node, List<Integer> nodes) {

    if (node == null)
      return;

    nodes.add(node.value);
    postOrder(node.leftChild, nodes);
    postOrder(node.rightChild, nodes);
  }

  void levelOrder() {

    if (root == null)
      return;

    // this is how we create a queue in java

    Queue<Node> visited = new LinkedList<>();

    // .add just adds the new node to the end of the queue

    visited.add(root);

    while (!visited.isEmpty()) {

      // poll is basically pop. It remove first element in the queue

      Node current = visited.poll();

      System.out.println(current.value);

      if (current.leftChild != null)
        visited.add(current.leftChild);
      if (current.rightChild != null)
        visited.add(current.rightChild);

    }

    // We need to add a node before we call the method so we don't keep calling the
    // parent node in the method

  }

}
