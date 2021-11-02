public class Main {

  public static void main(String[] args) {
    Queue queue = new Queue();

    queue.push(10);
    System.out.println(queue.peek());
    queue.push(11);
    queue.poll();
    System.out.println(queue);
  }
}
