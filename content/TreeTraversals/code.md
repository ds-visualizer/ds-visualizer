# TreeTraversals Code

## Tree traversals are classified into two categories

- **Breadth-first traversals:** It is also called **Level Order traversal**. Here we visit all the nodes at the same level before visiting the
  nodes at the next level but in this blog we won't go around them since they make use of stacks. We will go around them in graphs.

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

In In-Order traversal, we first visit the left subtree, then parent, then right subtree.

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

In this method we visit the left side, then right side then the parent.

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

In this traversal we visit each node and then go on to the next node. Its called level order traversal.

```Java:levelOrderTraversal.java

  /*
  * Time: O(n)
  * Space: O(1)
  */

  public void levelOrder() {

    // We need to visit the root node before we start the recursion 
    // since we never touch the root again in the recursion
   
    System.out.println(root.value);
    levelOrder(root);

  }

  private void levelOrder(Node node) {

    if (node == null)
      return;

    // If we have left child only then we can access it otherwise its an error

    if (node.leftChild != null) 
      System.out.println(node.leftChild.value);

    // If we have right child only then we can access it otherwise its an errors

    if (node.rightChild != null) 
      System.out.println(node.rightChild.value);

    levelOrder(node.leftChild);

    levelOrder(node.rightChild);
  }

```