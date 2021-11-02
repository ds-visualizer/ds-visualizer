public class Main {

  public static void main(String[] args) {
    BST tree = new BST();
    tree.insert(10);
    tree.insert(11);
    tree.insert(9);
    System.out.println(tree.find(9));
    System.out.println(tree.height());
  }
}
