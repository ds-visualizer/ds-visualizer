import javax.management.RuntimeErrorException;

public class Queue {

  private Node head = null;
  private Node tail = null;
  private int length = 0;

  class Node {
    int value;
    Node next = null;

    @Override
    public String toString() {
      return "" + this.value;
    }

    public Node(int value) { // Constructor for a Node
      this.value = value;
    }
  }

  /*
   * Time: O(1)
   * 
   * Space: O(1);
   */

  public void push(int value) {
    Node node = new Node(value);
    length++;

    if (this.head == null) {
      this.head = this.tail = node;
      return;
    }

    tail.next = node;
    tail = tail.next;
  }

  /*
   * Time: O(1)
   * 
   * Space: O(1);
   * 
   * Method same as pop or remove
   */

  public void poll() {
    if (head == null)
      return;

    length--;

    head = head.next;
  }

  /*
   * Time: O(1)
   * 
   * Space: O(1);
   */

  public int peek() {
    if (head == null)
      throw new RuntimeErrorException(null, "Queue is empty");
    // throw err

    return head.value;
  }

  public boolean isEmpty() {
    return length == 0;
  }

  /*
   * Time: O(n)
   * 
   * Space: O(1);
   */

  @Override
  public String toString() {

    String str = "[";
    Node current = head;

    while (current != null) { // Since we are iterating thru every element, the time complexity turns out to
                              // be O(n)
      str += current.value + ", ";
      current = current.next;
    }

    return str.substring(0, str.length() - 2) + "]";
    // this is just for decoration, you can return the string however you want to
    // :/.
  }

  // You can add more methods but I think this much will be enough for now.
}