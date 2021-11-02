class Main {

  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    list.addFirst(10);
    list.addLast(20);
    list.insertAt(1, 15);
    list.remove(2);
    System.out.println(list.get(1));
    System.out.println(list.size());
    System.out.println(list);
  }
}