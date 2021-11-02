public class Main {

  public static void main(String[] args) {
    Tree tree = new Tree(10);

    tree.addNode(10, 11);
    tree.addNode(11, 12);
    tree.addNode(12, 13);
    tree.addNode(11, 17);
    tree.print();
  }
}
