public class Main {

  public static void main(String[] args) {
    var tree = new Tree();

    tree.insert(4);
    tree.insert(3);
    tree.insert(2);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    tree.insert(3);

    tree.levelOrder();
  }
}
