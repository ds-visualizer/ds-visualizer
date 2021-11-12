# Graph Traversals Code

Like trees there are 2 types of traversals, Breadth-first traversal and Depth-first traversal.

Breadth-first traversals will go thru each node in the current level before going into the next level.

Depth-first traversal will go thru the node till it reaches the end before going to the next node.

```text:example.txt
  (They are directed graph pointing all downwards 😜)

        1
      /   \
     2     3
      \   /
        4

    -> If we start our traversals from 1, then depth-first traversal output would be
      [1,2,4,3] or [1,3,4,2].

    -> In these traversals we need to specify which node we want to start traversing from,
       Since in graphs there is no root unlike trees.

    -> For Breadth-first traversal, our output will be,
        [1,2,3,4] or [1,3,2,4]

    -> We look at all nodes in the level before going into the next level
```

Now that you have a brief understanding, lets look at the code for it.

lets stat with `breadth first` traversal, its similar to what we have seen in trees.

```java:breadthFirst.java

  public void breadthFirst(String label) {
    Node labelNode = findNode(label);

    if (labelNode == null)
      return;

    List<Node> visited = new LinkedList<Node>();
    Queue<Node> queue = new LinkedList<Node>();

    queue.add(labelNode);
    visited.add(labelNode);

    while (!queue.isEmpty()) {

      Node node = queue.poll();

      System.out.print(node + " ");

      for (Node child : node.edges) {

        // In graphs we need to make sure that we didn't visit the node
        // if we did, we won't add the node into the queue.
        // If otherwise u add the node into the queue, we will end up in an infinity loop 😣

        if (!visited.contains(child)) {
          queue.add(child);
          visited.add(child);
        }

      }
    }

  }

```

Now for DFS, lets look at the algorithm:

```java:depthFirst.java

  public void depthFirst(String label) {

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

```
