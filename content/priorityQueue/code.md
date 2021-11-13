# What is a Priority Queue (Using Heap)

> A priority queue is basically a type of queue that puts the elements sorted in its priority order. Used by our kernel to assign tasks based on their priorities.

> Priority queue is implemented using a max heap since we want to access and remove the biggest element in the queue

We can also make priority queue using a an array and sort it every time we add an element. Your question can be, they will have same time complexity so why not use a sorting algo. In the blog I have written, I used a list instead of an array so access elements were costly, but if you use an array instead of a list, the time for insert and remove would've been O(logn) which is super cheap

```java:PriorityQueue.java

  public class PriorityQueue {

  // We will be using the heap abstract class,
  // Since it puts the max values on top and our
  // Look up time would then be O(1) to find
  // biggest priority task

  Heap heap = new Heap();

  public void insert(int value) {}

  public int peek() {}

  public void remove() {}

  @Override
  public String toString() {}
}

```

All methods are exactly same as heap so, there is no need for any explanation.

Click <a href="/heap">here</a> if you want to see the heap blog.

```java:methods.java

  // Time: O(nlogn) space: O(1)
  public void insert(int value) {
    heap.insert(value);
  }

  // Time: O(1) space: O(1)

  public int peek() {
    return heap.peek();
  }

  // Time: O(nlogn) space: O(1)

  public void remove() {
    heap.remove();
  }

  // Time: O(n) Space: O(n), n -> number of characters

  @Override
  public String toString() {
    return heap.toString();
  }

```
