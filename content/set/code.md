# What is a Hash Set?

Hash set is a type of data structure that is built with the same logic as hash table (hash map).
So if you have missed the blog on hash maps, click the link <a href="/hashmap">here</a> to view hash maps.

In this blog, I'll be assuming that you already have knowledge of hash tables, so I won't go into specifics for each function.

Hash set is similar hash map, the only difference is that keys don't correspond to any value. Accessing, adding, and removing keys are O(1) in time and space.

```java:HashSet.java

import java.util.*;

class HashSet{

  class Entry {
    Integer key;

    Entry(Integer key) {
      this.key = key;
    }

  }

  private LinkedList<Entry>[] set = new LinkedList[10];

  private int hash(Integer key) {}

  private Entry getEntry(Integer key, LinkedList<Entry> entries) {}

  void add(Integer key) {}

  void remove(Integer key) {}

  boolean has(Integer key) {}

}

```

The methods we will look at are:

- `hash` method is used to get the hash of the key.
- `getEntry` method is used to the get the entry in the linked list in the index
- `add` method is used to add a key into our set
- `remove` method is used to remove a key in our set
- `has` method is used to check if the key exist in our set

Like always, before starting with our main functions, lets look at the helper functions.

```java:HashSet.java

  // Time: O(1), Space: O(1)

  private int hash(Integer key) {

    // I didn't use hashCode here method cuz we already
    // know the user will be inserting an integer

    return key % set.length;
  }

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(1)
   */

  private Entry getEntry(Integer key, LinkedList<Entry> entries) {

    for (Entry entry : entries) {
      if (entry.key.equals(key))
        return entry;
    }

    return null;
  }

```

Now lets look at main methods:

```java:add

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(1)
   */

  void add(Integer key) {
    int hash = hash(key);
    LinkedList<Entry> entries = set[hash];

    if (entries == null) {

      entries = new LinkedList<Entry>();
      set[hash] = entries;

    }

    Entry entry = getEntry(key, entries);

    // we don't get null if the entry exist

    if (entry != null)
      return;

    entries.add(new Entry(key));
  }

```

```java:remove

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(1)
   */

  void remove(Integer key) {
    int hash = hash(key);
    LinkedList<Entry> entries = set[hash];

    if (entries == null)
      return;

    Entry entry = getEntry(key, entries);

    if (entry == null)
      return;

    entries.remove(entry);
  }

```

```java:has

  /*
   * Time: O(n) n-> elements in the list, with good hashing function O(1)
   * Space:(1)
   */

  boolean has(Integer key) {
    int hash = hash(key);
    LinkedList<Entry> entries = set[hash];

    if (entries == null)
      return false;

    Entry entry = getEntry(key, entries);

    if (entry == null)
      return false;

    return true;
  }

```
