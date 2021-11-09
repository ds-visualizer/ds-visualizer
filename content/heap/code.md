# What is a Heap?

> Heap is a type of binary tree where left and right children are smaller or equal to their parent. Another important feature of heap is that they are a balanced binary tree from left to right. The root node is always the biggest

```text:example.txt

        10
      /   \
    5       6
   / \     /
  5   4   6

  Thats a heap since all nodes are smaller or equal to their parent and are filled from left to right.

  But this wouldn't be a heap.

       10
     /   \
    5      6
   / \      \
  5   4      6

  Since the nodes aren't filled from left to right.
  The node 6 has an empty left child but not the right
```

There are **2 Types** of heaps ie, `Max` and `Min` Heap.

The example we just see is called max heap, in case of min heap, the nodes are greater or equal to the parent node. So the root node is always the smallest.

Before we jump into heaps, there are some terms you should be aware of, such as: `bubble-up` and `bubble-down`.

This blog I'll be focusing on max heap but the implementation of min heap will also be the same so don't worry about it and take it as a challenge to make min heap on your own 😄.

And heaps are generally made using array since they will always be a filled binary tree so using an array will be space efficient.

```text:example.txt

suppose our heap is:

       10
      /   \
    5      6
   / \    /
  5   4  6

and we want to add 7 to it. lets look at how we do it.

7 First gets added to the end of the list then it starts bubbling up to its right position, lets look at it.


       10
      /   \
    5      6
   / \    / \
  5   4  6   7

7 needs to swap with 6 cuz child is greater than parent.

       10
      /   \
    5      7
   / \    / \
  5   4  6   6

Now checks if its greater than parent, which is 10, its not so it stops bubbling

```

HAHA I just told it can be implemented with an array so why did I use binary tree, I just wanted to give an example, from here on I'll be using an array.

Before we go futher I need you to take a look at `few formulae`:

- To get the **parent of current index** = (index - 1) /2
- To get the **left child of current index** = (2 \* index) + 1
- To get the **Right child of current index** = (2 \* index) + 2

Lets do the same bubble up function with an array now:

```js:example.txt

 heap = [10,5,6,5,4,6];

 // Insert 7 to the end since we want to add it/

 heap = [10,5,6,5,4,6,7];

 // Lets make sure 7 is smaller than its parent,
 // parent(heap.length -1)

 parentIndex = parent(heap.length-1);

 if(heap[parentIndex] < heap[heap.length])

 // You do a swap and keep doing this till all parent are bigger :)

```

We will look at bubble down soon after looking at the implementation of heap insert function.

Before we get started, lets look at heap class structure.

```java:Heap.java

class Heap{

  private LinkedList<Integer> heap = new LinkedList<Integer>();

  // To check if both children are smaller or equal
  private boolean isValidParent(int index) {}

  private int leftChild(int index) {}

  private int rightChild(int index) {}

  private int parent(int index) {}

  private int leftChildIndex(int index) {}

  private int leftRightIndex(int index) {}

  private int parentIndex(int index) {}

  private boolean hasLeftChild(int index) {}

  private boolean hasRightChild(int index) {}

  private void swap(List<Integer> arr, int index1, int index2) {}

  // Gets the node that has larger child
  private int largerChildIndex(int index) {}

  private void bubbleDown(int parent, int child) {}

  private void bubbleUp(int parent) {}

  public void insert(int value) {}

  public void remove () {}

  public boolean isEmpty() {}

  public int peek() {}

  public String toString() {}
}

```

HAHA it might look like alot of methods, but honestly all of them are just one line functions. I had to do this in order to make the code clean and give y'all a clean understanding of what we are doing :), So don't walk away yet haha.

Lets look at the helper functions before we go look at insert method.

```java:helper.java

  // Time: O(n) Space: O(1)

  private boolean isValidParent(int index) {
    if (!hasLeftChild(index))
      return true;

    if (!hasRightChild(index))
      return heap.get(index) > leftChild(index);

    return (heap.get(index) > leftChild(index) && heap.get(index) > rightChild(index));
  }

  // TIme: O(n) Space: O(1)

  private int leftChild(int index) {
    return heap.get(leftChildIndex(index));
  }

  // TIme: O(n) Space: O(1)

  private int rightChild(int index) {
    return heap.get(rightChildIndex(index));
  }

  // TIme: O(n) Space: O(1)

  private int parent(int index) {
    return heap.get(parentIndex(index));
  }

  // TIme: O(1) Space: O(1)

  private int leftChildIndex(int index) {
    return (2 * index) + 1;
  }

  // TIme: O(1) Space: O(1)

  private int rightChildIndex(int index) {
    return (2 * index) + 2;
  }

  // TIme: O(1) Space: O(1)

  private boolean hasLeftChild(int index) {
    return leftChildIndex(index) < heap.size();
  }

  // TIme: O(1) Space: O(1)

  private boolean hasRightChild(int index) {
    return rightChildIndex(index) < heap.size();
  }

  // TIme: O(1) Space: O(1)

  private int parentIndex(int index) {

    // Returns the parent index of the index

    return (index - 1) / 2;
  }

  // TIme: O(n) Space: O(1)

  private void swap(LinkedList<Integer> arr, int index1, int index2) {

    Collections.swap(arr, index1, index2);
  }

  // TIme: O(n) Space: O(1)

  private int largerChildIndex(int index) {

    if (!hasRightChild(index))
      return leftChildIndex(index);

    return leftChild(index) > rightChild(index) ? leftChildIndex(index) : rightChildIndex(index);
  }
```

> Height of a balanced binary tree is logn

The helper function do what the name says so I'm not going over them.

Lets look at how we insert an element into the heap:

```java:insert.java

  // Time: O(n) space: O(1)

  private void bubbleUp(int index) {
    swap(heap, index, parentIndex(index));
  }

  /*
   * Time: O(nlogn)
   * Space: O(1)
   */

  public void insert(int value) {
    heap.add(value);
    int index = heap.size() - 1; // Since it gets added in the last

    // Now we want to bubble up the elements so they satisfy the heap property
    // We want to keep doing this till we find the right parent

    // This loop iterates till we reach the top of the tree in worst condition
    // And height of tree is logn

    while (heap.get(index) > parent(index)) {

      // Bubble up has time of n
      bubbleUp(index);

      // Since out index will now be swapped with the parent
      index = parentIndex(index);
    }
  }
```

Now lets look at remove:

```js:example.txt

  heap = [10,5,6,5,4,3];

  // when calling remove, we take out the root node
  // and insert last node in it's place

  heap = [3,5,6,5,4];

  // Now we need to push down 3 since its not in the right position,
  // This is called bubble down

  heap = [6,5,3,5,4];

  // Now thats a perfect heap, we just swapped 3 with 6, if any of its child was greater than 3,
  // we would've swapped it again.
```

Lets look at the code now:

```java:remove.java

  // Time: O(n) Space: O(1)

  private void bubbleDown(int parent, int child) {
    swap(heap, parent, child);
  }

  /*
   * Time: O(nlogn)
   * Space: O(1)
   */

  public void remove() {

    if (heap.isEmpty())
      throw new RuntimeException("Heap empty");

    // We remove the first node and put the last node in first
    heap.removeFirst();
    heap.addFirst(heap.pollLast());

    int index = 0;

    // Like in the example we have seen, we only do the swap if the element isn't a valid parent

    // Again the loop will run till it reaches the end, height is logn

    while (index < heap.size() && !isValidParent(index)) {

      // LargerChildIndex is an O(n) operator

      int largerChild = largerChildIndex(index);

      // Bubble down is a O(n) operator

      bubbleDown(index, largerChild);
      index = largerChild;

    }

  }

```

That should cover most of heaps, lets look at some side functions that can be helpful.

```java:isEmpty.java

  /*
   * Time: O(1)
   * Space: O(1)
   */

  public boolean isEmpty() {
    return heap.size() == 0;
  }
```

```java:peek.java

  /*
   * Time: O(1)
   * Space: O(1)
   */

  public int peek() {
    if (heap.isEmpty())
      throw new RuntimeException("Heap empty");

    return heap.peek();
  }
```

```java:toString.java

  /*
   * Time: O(n)
   * Space: O(n), n -> number of characters
   */

  @Override
  public String toString() {
    return heap.toString();
  }
```
