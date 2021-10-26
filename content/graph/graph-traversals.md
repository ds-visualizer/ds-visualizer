#

```java

    /*
    * Traversal methods are different ways in which you can iterate through the tree.
    */

    public void preOrderTraversal();

    public void inOrderTraversal();

    public void postOrderTraversal();

```

Tree traversals are classified into two categories:

- Breadth-first traversals: It is also called **Level Order traversal**. Here we visit all the nodes at the same level before visiting the
  nodes at the next level but in this blog we won't go around them since they make use of stacks. We will go around them in graphs.

- Depth-first traversals:

There are three types of depth first traversals:

- **Pre-Order Traversal**: We first visit the root, then the the left subtree and right subtree.

- **In-Order Traversal**: We first visit the left subtree, then the root and right subtree.

- **Post-Order Traversal**: We first visit the left subtree, then the right subtree and root.

Basic schema of depth first traversals:

1. Pre-Order Traversal: **Root** _Left_ _Right_

2. In-Order Traversal: _Left_ **Root** _Right_

3. Post-order Traversal: _Left_ _Right_ **Root**

Since, you have understood various traversals that are possible in a tree, now lets look at the code for **depth-first traversals**.

> For tree traversals we will be using recursions.

Let look at `preOrderTraversal` Method:

```JAVA:preOrderTraversal.java

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

Lets look at `inOrderTraversal` Method:

```JAVA:inOrderTraversal.java

/*
 * Time: O(n)
 * Space: O(1)
 */


// Method overloading

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

Lets look at `postOrderTraversal` Method:

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

> Since `root` is declared as private, which cannot be accessed outside the class, we have overloaded the methods without the parameter (`root`).

- Method overloading: There can be multiple methods in a class with same names but different parameters.

Now let's look at the difference between height and depth before we move on to `height` method.

- Depth: The number of edges from the `root` to the **target** node. (You move from the top to bottom).

- Height: Height is the opposite of depth. As we go up the the tree, the height of the nodes increases. It can be defined as the longest path from the leaf node to the **target** node.
  Height of the `root` node is also called the height of the tree.

Leaf node: A node with no child is called a lead. There are no nodes attached after it.
