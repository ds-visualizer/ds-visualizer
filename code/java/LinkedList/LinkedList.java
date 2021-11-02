class LinkedList {

  class Node {
    int value;
    Node next = null;

    public Node(int value) { // Constructor for a Node
      this.value = value;
    }
  }

  private Node head = null; // head and tail are pointers to the nodes
  private Node tail = null;
  private int length = 0;

  // length is optional but can change the time of `size()` method to go from O(n)
  // to O(1) and has no effect on the space.
  // Ways to decrease time 😉.

  /*
   * head, tail and length are private because you don't want to access them
   * outside of the class, You can make getters which is a good practice if you
   * want to read private variables.
   */

  /*
   * Time: O(1)
   * 
   * Space: O(1);
   */

  public void addFirst(int value) {
    length++;

    Node node = new Node(value);

    if (this.head == null) {
      this.head = this.tail = node;
      return;
    }

    node.next = head;
    head = node;

    // Node(0) 1 -> 2
    // 0 -> 1 -> 2
    // just link 0 to head
  }

  /*
   * Time: O(1)
   * 
   * Space: O(1);
   */

  public void addLast(int value) {
    Node node = new Node(value);
    length++;

    if (this.head == null) {
      this.head = this.tail = node;
      return;
    }

    tail.next = node;
    tail = tail.next;

    // 1 -> 2 0
    // 1 -> 2 -> 0
    // just link tail to 0
  }

  /*
   * Time: O(n)
   * 
   * Space: O(1);
   */

  public void insertAt(int index, int value) {

    if (index > length || index < 0) // This is required cuz if index is 0 or greater than the size of linked list,
      return; // we shouldn't be able to add a new node

    if (index == 0) { // This is optional which I have done, but U can skip it.
      addFirst(value);
      return;
    }

    if (index == length) {
      addLast(value);
      return;
    }

    /*
     * index == length is optional as well but I did this to reduce the time
     * complexity How does this reduce time? 🤔
     *
     * If you look at the bottom code, we had to iterate till the index element, and
     * we know addLast is O(1) operation so why do you want to make this do O(n)
     * when it can be done in O(1). So I decided to do this, if index = length, then
     * do addLast()
     *
     * More hacks 😉
     */

    /*
     * Suppose 0 -> 1 -> 2 -> 3 is the linked list, and we want to add Node(4) at
     * index 2,
     *
     * So we make a temporary pointer and and move it till it gets hold of
     * Node(1)'s, position. After doing this, we make Node(1) point to the new node
     * and new node point to Node(2), N by this we added a new node :0
     */

    length++;
    Node current = head;
    Node node = new Node(value);

    for (int i = 0; i < index - 1; i++) { // this for loop is the reason why insertAt method becomes O(n)
      current = current.next;
    }

    // After the for loop, current will be holding Node(1);

    Node temp = current.next;

    // Make a temporary variable such that it holds the other nodes that's after 1

    current.next = node;

    // Point Node(1) to the new Node, 0 -> 1 -> 4

    node.next = temp;

    // finally point the new node to old node, in this example Node(2), 0 -> 1 -> 4
    // -> 2 -> 3

  }

  /*
   * Time: O(1)
   * 
   * Space: O(1);
   */

  public void removeFirst() {
    if (head == null)
      return;

    length--;

    head = head.next;
  }

  /*
   * Time: O(n)
   * 
   * Space: O(1);
   */

  public void removeLast() {
    if (head == null)
      return;

    length--;

    if (head.next == null) {
      head = tail = null;
      return;
    }
    Node current = head;
    while (current.next.next != null) { // This loop is used to iterate till the last second Node
      current = current.next;
    }

    // then point last second node to null which remove the last node.
    current.next = null;
    tail = current;
  }

  /*
   * Time: O(n)
   * 
   * Space: O(1);
   */

  public void remove(int index) {

    if (index >= length || index < 0)
      return;

    if (index == 0) {
      removeFirst();
      return;
    }

    if (index == length - 1) {
      removeLast();
      return;
    }

    /*
     * Suppose 1 -> 2 -> 3 -> 4 if we want to remove index 3, we iterate till 2,
     * then make Node(2).next to point it to 4 instead of pointing it to Node(3). By
     * doing this, no node will be referencing 3 anymore, and hence Node(3) will get
     * removed from the list. Result: 1 -> 2 -> 4
     */

    Node current = head;

    for (int i = 0; i < index - 1; i++) { // This for loop is the reason find becomes an O(n) complexity.
      current = current.next;
    }

    current.next = current.next.next;
    length--;

  }

  /*
   * Time: O(n)
   * 
   * Space: O(1);
   */

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

  /*
   * Time: O(n)
   * 
   * Space: O(1);
   */

  public int get(int index) {
    Node current = head;

    if (index < 0 || index >= length)
      throw new IndexOutOfBoundsException(); // if statement is true, index out of bound ERRRRRR.

    for (int i = 0; i < index; i++) { // iterate till the index node and return the node's value
      current = current.next;
    }

    return current.value;
  }

  /*
   * Time: O(1)
   * 
   * Space: O(1);
   */

  // Thanks to us storing length, we could make this an O(1) operator, otherwise
  // it would turn out to be O(n)

  public int size() {
    return length;
  }

  // Some more methods which will not be covered here.

}