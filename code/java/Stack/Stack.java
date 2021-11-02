import java.util.Arrays;
import java.util.NoSuchElementException;

public class Stack {

  // Make a constructor
  int[] items;
  public int count;
  private int capacity;

  public Stack(int capacity) {
    items = new int[capacity];
    this.capacity = capacity;
  }

  public void push(int value) {
    if (count == capacity) {
      throw new StackOverflowError();
    }
    items[count++] = value;
  }

  public int pop() {
    if (count == 0)
      throw new NoSuchElementException();
    return items[--count];
  }

  @Override
  public String toString() {
    var content = Arrays.copyOfRange(items, 0, count);
    return Arrays.toString(content);

  }

  public boolean isEmpty() {
    return items.length == 0;
  }

  public int peek() {
    return items[count - 1];
  }
}
