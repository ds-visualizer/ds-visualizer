# Tree code

For this code I won't be having a visulizer due to the lack of time :((, but I'll update it soon once I get free :)).

Trees and graphs are almost the same except that `graphs` are `circular` while `trees` aren't circular.

```text:example.txt

Tree example:

       1
    /  |  \
  2    3   4  -> Since they aren't circular

Graph example:

      1
    /   \
   2 --- 3 -> Since they are circular

```

Now that you have a brief understating about about trees, lets look at the code:

The plain structure would look like this:

```java:Tree.java


class Tree {

  // Node structure in tree

  class Node {

    int value;
    Node parent = null;
    public LinkedList<Node> children = new LinkedList<Node>();

    // 2 different constructors

    public Node(int value) {
      this.value = value;
    }

    public Node(int value, Node parent) {
      this.value = value;
      this.parent = parent;
    }

  }


  private LinkedList<Node> nodes = new LinkedList<Node>();

  Node root = null;

  // On initialization of tree, we make the root.
  // Tree Constructor

  public Tree(int root) {
    Node node = new Node(root);
    nodes.add(node);
    this.root = node;
  }

  // Method just for finding the node

  private Node findNode(int value) {}

  private Boolean contains(int value) {}

  public void addNode(int parent, int value) {}

  public List<Integer> children(int parent) {}

  public int parent(int child) {}

  public int height() {}

  public void print() {}

}

```

Lets try to understand the node in this structure.

`value` is a property that stores the data, `parent` is a pointer that holds the memory location of the parent, and `children` linked list is used
for for storing all the children. In linked list we used `next` since we already know that there will only be one pointer for us to hold, but in this case we don't know how many children the nodes will have so we used a list in-order to store the children.

Now list look at the helper function, `findNode` and `contains`:

```java:helperFunctions.java

 /*
  * Time: O(n), n -> number of nodes in the tree, we can make this O(1) with hashmap
  * Space: O(1)
  */

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

```

The helper functions are straight forward so lets go look at the `adding nodes`:

```java:addNode.java

  /*
  * Time: O(n),
  * Space: O(1)
  */

  public void addNode(int parent, int value) {

    // O(n) due to this find method

    Node parentNode = findNode(parent);

    if (parentNode == null) // If no parent node then it shouldn't be added
      return;

    // Another O(n)
    boolean exist = contains(value); // if value already exist then we can't add since they have to be unique

    if (exist)
      return;

    Node childNode = new Node(value, parentNode);

    nodes.add(childNode); // add child node to nodes
    parentNode.children.add(childNode); // add child node to the parent node

  }

```

Now lets look at a function that gives us the children for a parent.

```java:children.java

 /*
  * Time: O(n),
  * Space: O(1)
  */

public List<Integer> children(int parent) {
    Node parentNode = findNode(parent); // O(n) due to this method

    if (parentNode == null)
      return null;

    LinkedList<Integer> childrenList = new LinkedList<Integer>();

    // This method will be O(c) -> where c is the number of children in the parent node

    for (Node child : parentNode.children) // add each value into the list
      childrenList.add(child.value);

    return childrenList;
  }

```

Now lets look at the function that gives the parent of the child.

```java:parent.java

  /*
  * Time: O(n),
  * Space: O(1)
  */

  public int parent(int child) {
    Node childNode = findNode(child);

    if (childNode == null)
      return -1; // throw error, we don't return -1 haha. just did it for this blog
                 // To put it friendly

    return childNode.parent.value;
  }

```

Now lets look a cool method, `print`:

```java:print.java

  /*
  * Time: O(n),
  * Space: O(1)
  */

  public void print() {
    print(root);
  }

  // A recursive method that visits every child and print it's children

  private void print(Node node) {

    if (node == null)
      return;

    String children = "[";

    for (Node child : node.children)
      children += child.value + ", ";

    System.out.println(node.value + " is connected to " + children + "]");

    for (Node child : node.children)
      print(child);  // Call this function for every children
  }

```

Finally lets look at the method height, I personally don't like this method since its heavily dependent on heap memory so for now
I'll put it this way but if I find a better method, I'll update it.

```java:height.java

 /*
  * Time: O(n),
  * Space: O(1)
  */

public int height() {
    int[] maxHeight = new int[1];
    height(root, 1, maxHeight);
    return maxHeight[0];
  }

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
```
