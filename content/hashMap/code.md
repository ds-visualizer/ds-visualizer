# What is a Hash Map?

> Hash map is a type of data structure which is based on key value pair. You ask for a key, you get the value of that key. And Keys in hash map are **UNIQUE**.

Its similar to an array, in an array the key is the index while the value is the value located in the index.

## What makes Hash Maps so amazing?

Hash maps have an amazing look up and removal times. The Look up and removal time of hash map is O(1). They are mostly used in algorithms to reduce the time complexities.

Before we go into hash map implementation, lets build our own hashmap.

> Keyword **HASH**, hashing is a one function, similar to encryption message but instead when you hash something you don't get the data back to original form.

```text:example.txt

We know array look up time is O(1) so lets use an array in this case

hashArr = new Array(10) // size 10

suppose you want to add alex into the array, but how do you add it such a way that when you want
to access alex, you get it in O(1)?

hash function that hashes w.r.t the size of the string

alex - 4, so lets put him in index 4. So when we want to access alex,
we can use the same hash function and get the name at index 4.

```

So we just made our own hash function that's based on string length. Suppose you want to insert matt into our array, using our hashing function the returned index would be 4. So now do we store alex or matt? This situation is called `collision`. With a good hashing function we can avoid this type of collision.

Lets took at a way to get around collisions.

```text:example.txt

hashArr = [,,,alex,,,,,,,] // size 10

now we want to add matt, but its taken by alex :(.
So instead of putting plain element in its index, we will put a list and add elements to the list.

Yes, I know what your thinking, our time won't be O(1) haha,
but heyna our hash function was very basic, but with a good hash function we can
reduce this collisions and get this code to O(1)

hashArr = [ , , , {alex, matt} , , , , , , ,]

```

Now we took care of collisions but there is another fault, what if we have a string greater than size 10 :(. We still need to figure this out.
If length is greater than 10, we could do something like `number % 10` so we reset back. 11 % 10 will get us back to 1.

So instead of plainly returning str.length, lets return str.length % 10.

And another important thing you should remember about hash maps is that you should never have same keys.

So I think I gave you a brief introduction about hash maps, for better understanding, please use the visualizer on top. And Hash maps are basically the same thing, but each key has some value bind to it.

Unlike the previous implementations, lets make use of generics in this one :).

```java:HashMap.java

import java.util.*;

public class HashMap<T, E> {

  // T , E are 2 types you give while initializing

  // Link in our examples, key will be stored inside our Entry class and value will
  // get bind to the Entry class

  class Entry {
    T key;
    E value;

    Entry(T key, E value) {
      this.key = key;
      this.value = value;
    }

  }

  private LinkedList<Entry>[] map = new LinkedList[10];

  private int hash(T key) {}

  private Entry getEntry(T key, LinkedList<Entry> entries) {}

  void put(T key, E value) {}

  void remove(T key) {}

  E get() {}

  boolean has(T key) {}

}

```

T and E might be confusing to you if this is your first time but its really simple if you understand it.
If you pay attention to initialization, you would observe yourself giving the type. Example: `LinkedList<Node> nodes = new LinkedList<>()` In this case, we just made a linked list that stores node instead of a fixed data type such as node.

So suppose we initializer our hashmap like `HashMap<String, Integer> map = new HashMap<>()`, our T will be String and our E will be an integer

Now lets look at the helper functions before we proceed.

```java:helper

  // Time: O(1), Space: O(1)

  private int hash(T key) {

    // This hashCode function returns an integer and is specifically made for
    // these purposes such as hashing, hash sets and etc.

    // Each object in java gets their own unique hashCode but we will only take the
    // integer in the one's position for our hash function in order to understand
    // collisions

    // suppose our hashCode returns 123439, our hash function only returns 9
    // It can be negative so I'll use Math.abs

    return Math.abs(key.hashCode() % 10);
  }

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(1)
   */

  private Entry getEntry(T key, LinkedList<Entry> entries) {

    for (Entry entry : entries)
      if (entry.key == key)
        return entry;

    return null;
  }

```

Now lets look at `put` method, its similar to what we discussed but instead we will have value bind to it.

```java:put

  /*
   * Time: O(n) n -> elements in the list, with good hashing function O(1)
   * Space:(n) n -> the given elements size
   */

  // T and E follows the same type as given to the class

  void put(T key, E value) {

    int hashNumber = hash(key);

    LinkedList<Entry> entries = map[hashNumber];

    // Initially there won't be a list assigned to each array,
    // So we need to add it if it doesn't exist

    if (entries == null) {
      entries = new LinkedList<Entry>();

      // This step for putting the linked list into the array
      // So it gets the reference

      map[hashNumber] = entries;
    }

    Entry entry = getEntry(key, entries);

    // We want the keys to be unique,
    // So we replace the value in the key

    if (entry != null){
      entry.value = value;
      return;
    }


    entries.add(new Entry(key, value));
  }

```

Similar to put function, `remove` function has the same logic.

```java:remove

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(N) N -> the given elements size
   */

  void remove(T key) {

    LinkedList<Entry> entries = map[hash(key)];

    // If entires is none, we have nothing to remove

    if (entries == null)
      return;

    Entry entry = getEntry(key, entries);

    // If there is no entry, we again have nothing to remove

    if (entry == null)
      return;

    entries.remove(entry);

  }

```

`get` method isn't different either

```java:get

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(N) N -> the given elements size
   */

  E get(T key) {

    LinkedList<Entry> entries = map[hash(key)];

    if (entries == null)
      return null;

    Entry entry = getEntry(key, entries);

    if (entry == null)
      return null;

    return entry.value;
  }

```

Lets look at `has` method now,

```java:has

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(N) N -> the given elements size
   */

  boolean has(T key) {
    LinkedList<Entry> entries = map[hash(key)];

    // if no entries then entry wouldn't even exit

    if (entries == null)
      return false;

    Entry entry = getEntry(key, entries);

    // If no entry then it doesn't contain

    if (entry == null)
      return false;

    return true;
  }

```
