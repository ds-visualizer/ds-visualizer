# Adjacency List Graph Code

Graphs can be in made in 2 ways, **Adjacency matrix** and **Adjacency List**. Today we will be going thru Adjacency List type graph and stay tuned
if you want to see Adjacency matrix graph as well.

I won't go in depth of Adjacency matrix but I want to show the differences between them before we go further

`Adjacency Matrix` is made with 2D array and and very costly in space but has faster removal times whereas `Adjacency List` is space efficient and faster in adding vertices.

There is no telling that one of them is better than the other, it depends on the situation. But here in this blog we will go over **Adjacency List**.

Lines that connect one node to another node are called **edges**, and nodes in graphs are called **Vertices**.

`Dense graph` is a type of graph that each vertex is connected to other vertices,
and generally when people talk about worth cases in graphs they take in account of
dense graph.

> As we walk through in the blog, I want y'all to keep understanding it with the help of the visualizer, there is no use for me to simply
> every piece when you have the visualizer in front of you 😉.

THe plain structure of a graph would look like this:

```java:Graph.java

class GraphLinkedList {

  // Nodes in graphs are unique, there can't be 2 repeating nodes.
  // Generally you could use UID's and use same name but I don't want to put this
  // code complex

  class Node {

    public String label;

    // Each vertex will have a linked list edges for all the edges it will have

    public LinkedList<String> edges = new LinkedList<String>();

    public Node(String label) {
      this.label = label;
    }

  }

  // use a hashMap here if you want to get the look up time for the nodes in O(1)     else using
  // linked list will give you a look up time of O(n);
  // Since we didn't learn hashmaps yet, I'll be using linked list, will update it
  // to hashmaps soon

  private LinkedList<Node> nodes = new LinkedList<Node>();

  private Node findNode(String label) {}

  private Boolean contains(String label) {}

  public void addNode(String label) {}

  public void removeNode(String label) {}

  public void addEdge(String from, String to) {}

  public void removeEdge(String from, String to) {}

  public void print() {}

}

```

Before we jump into the methods, since we are using a linked list, we need to make few custom methods to find the node if it exists in the liked list or no.

```java:helperMethods.java

  /*
   * Time: O(V) -> V is the number of vertices
   * Space: O(1)
   */

  private Node findNode(String label) {

    // Iterate the linked list, if we have the label return the node

    for (Node node : nodes)
      if (node.label == label)
        return node;

    return null;
  }

  private Boolean contains(String label) {

    // Iterate the linked list, if we have the label return true

    for (Node node : nodes)
      if (node.label == label)
        return true;

    return false;
  }

```

The First method we will go through is `adding vertices`.

Before we go into it, try adding a vertex in the visualizer and see what happens.

So let's look at `addNode` method:

You can name it vertex or node what sounds better to you, but in theory people call it vertex.

```java:addNode.java

  /*
   * Time: O(v) -> where v is the number of vertices
   * Space: O(1)
   */

  public void addNode(String label) {

    // O(v) due to contains method, using hash map would get this to O(1),
    // thanks to its fast look up times

    Boolean exist = contains(label);

    if (exist) // we aren't suppose to add the vertex if it already exist
      return;

    Node node = new Node(label);
    nodes.add(node);
  }

```

Now lets look at `addEdge` method, this method makes a path from one vertex to another.
We will go thru removeNode method after this. Try this on the visualizer again 😉.

```java:addEdge.java

  /*
   * Time: O(v)
   * Space: O(1)
   */

  public void addEdge(String from, String to) {

    // We need to first check if both the nodes exist

    // O(v) since we are iterating the linked list and finding the node.
    // Again this could become O(1) with a hash map.

    Node fromNode = findNode(from);
    Node toNode = findNode(to);

    if (fromNode == null || toNode == null)
      return;

    fromNode.edges.add(to); // This mean we are point from to to.

    // If u want to make this undirected graph then add
    // toNode.vertices.add(from);
    // so we make vertex to also point vertex from
  }

```

Now suppose you want to remove a vertex, then you should also make sure to remove all the links that are connected to the vertex.

So lets look at `removeNode` now:

```java:removeNode.java

  /*
   * Time: O(V * E) worth case in dense graph O(V^2).
   * E is the number of edges.
   * Space: O(1)
   */

  public void removeNode(String label) {
    Boolean exist = contains(label);

    // no vertex to remove if it doesn't exist in the linked list

    if (!exist)
      return;

    for (int i = 0; i < nodes.size(); i++)
      if (nodes.get(i).label == label)
        nodes.remove(i);

    // We also need to iterate to all the other vertices and remove the link / edge to
    // label

    // Due to this method, removing a node becomes O(V * E)

    for (Node node : nodes)
      if (node.edges.contains(label))
        node.edges.remove(label);

  }

```

Our last method will be `removeEdge`:

```java:removeEdge.java

  /*
   * Time: O(V + E)
   * Space: O(1)
   */

  public void removeEdge(String from, String to) {

    // Checking if nodes exist

    Node fromNode = findNode(from);
    Node toNode = findNode(to);

    // we also need check if both nodes exist or not.

    if (fromNode == null || toNode == null)
      return;

    fromNode.edges.remove(to);

    // Like before we also need to remove it from to if you are doing
    // undirected graphs

  }
```

Just for the purpose of debugging I'll also show a print method:

```java:print.java
  public void print() {

    for (Node node : nodes)
      System.out.println(node.label + " is connected to " + node.edges.toString());

  }
```