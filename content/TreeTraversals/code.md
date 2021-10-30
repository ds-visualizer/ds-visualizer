# Tree Traversals Code

## Tree traversals are classified into two categories

**Breadth-first traversals:** It is also called **Level Order traversal**. Here we visit all the nodes that are at the same level before visiting the nodes at the next level.

**Depth-first traversals:**

There are three types of depth first traversals:

- **Pre-Order Traversal**: We first visit the root, then the the left subtree and right subtree.

- **In-Order Traversal**: We first visit the left subtree, then the root and right subtree.

- **Post-Order Traversal**: We first visit the left subtree, then the right subtree and root.

Basic schema of depth first traversals:

1. `Pre-Order Traversal`: **Parent** _Left_ _Right_

2. `In-Order Traversal`: _Left_ **Parent** _Right_

3. `Post-order Traversal`: _Left_ _Right_ **Parent**

## Lets start with depth first search traversals first (DFS).

### Pre-Order Traversal:

In pre-order traversal we visit the node then go to the `left subtree` then `right subtree`.

```java:preOrder.java

  /*
  * Time: O(n)
  * Space: O(1)
  */

  // Method overloading

  public void preOrderTraversal() {
    preOrderTraversal(root);
  }

  private void preOrderTraversal(Node root) {

    if (root == null)
      return;

    System.out.println(root.value);
    preOrderTraversal(root.leftChild);
    preOrderTraversal(root.rightChild);

  }

```

### In-Order Traversal:

In In-Order traversal, we first visit the left node, then parent, then right node.

```JAVA:inOrderTraversal.java

  /*
  * Time: O(n)
  * Space: O(1)
  */

  public void inOrderTraversal() {
    inOrderTraversal(root);
  }

  private void inOrderTraversal(Node root) {
    if (root == null)
      return;

    inOrderTraversal(root.leftChild);
    System.out.println(root.value);
    inOrderTraversal(root.rightChild);

  }
```

### Post-Order Traversal:

In this method we visit the left node, then right node then the parent.

```JAVA:postOrderTraversal.java

/*
 * Time: O(n)
 * Space: O(1)
 */


// Method overloading

  public void postOrderTraversal() {
    postOrderTraversal(root);
  }

  private void postOrderTraversal(Node root) {
    if (root == null)
      return;

    postOrderTraversal(root.leftChild);
    postOrderTraversal(root.rightChild);
    System.out.println(root.value);
  }
```

Now lets look at Breadth First Search Traversal (BFS):

In this traversal we visit the nodes in first level and then go on to the next level till there are no levels to visit. Its called level order traversal.

```Java:levelOrderTraversal.java

  /*
  * Time: O(n)
  * Space: O(n)
  */

  public void levelOrder() {


    if (root == null)
      return;

    // this is how we create a queue in java

    Queue<Node> visited = new LinkedList<>();

    // .add just adds the new node to the end of the queue

    visited.add(root);

    while (!visited.isEmpty()) {

      // poll is basically pop. It removes first element in the queue

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

```

An example of this would look something like this:

```js:example.txt

      2
  1       3
0   1   3   3


visited = [];

// add 2 into the queue

// visited = [2]

while visited.length != 0 :
  current = visited.poll() // current = (Node) 2, visited = [];
  
  print(current) // print(2)
  
  if(current.leftChild != null) visited.push(current.leftChild) // visited = [1]
  if(current.rightChild != null) visited.push(current.rightChild) // visited = [1,3]

  // Keep doing this till the queue is empty, for practice you can trace this by yourself

```
