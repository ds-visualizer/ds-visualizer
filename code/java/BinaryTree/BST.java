
public class BST {

    public class Node {
        private Node leftChild;
        private Node rightChild;
        private int value;

        public Node(int value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return "Value = " + value;
        }
    }

    private Node root;

    public void insert(int value) {
        var node = new Node(value);

        if (root == null) {
            root = node;
            return;
        }

        var current = root;
        while (true) {
            if (value < current.value) {
                if (current.leftChild == null) {
                    current.leftChild = node;
                    break;
                }
                current = current.leftChild;
            } else {
                if (current.rightChild == null) {
                    current.rightChild = node;
                    break;
                }
                current = current.rightChild;
            }
        }
    }

    public boolean find(int value) {
        var current = root;
        while (current != null) {
            if (value > current.value)
                current = current.rightChild;
            else if (value < current.value)
                current = current.leftChild;
            else
                return true;
        }
        return false;
    }

    public int height() {
        return height(root);
    }

    private int height(Node root) {
        // return root.leftChild ==null && root.rightChild ==null ? 0 :
        // 1 + Math.max(height(root.leftChild),height(root.rightChild));
        if (root == null)
            return 0;
        return 1 + Math.max(height(root.leftChild), height(root.rightChild));
    }
}

/*
 * Extras if(root.lc==null || root.rc==null) return 0; return 1 +
 * Math.max(height(root.lc),height(root.rc));
 */
