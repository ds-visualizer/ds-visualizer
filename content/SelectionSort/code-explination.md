# Selection Sort Code

> Selection Sort is a algorithm which is used to sort numbers in an ascending order

Selection Sort starts off by a simple for loop, starting from the first element til the end of the array. But theres a catch, this time we are going to cut off the loop 1 early and I'll explain why thats the case.

```java:SelectionSort.java
    class SelectionSort{
        public static void sort(int[] arr){
            for(int i=0; i<arr.length-1; i++){
                //this is where we will do all the sorting
            }
        }

        //print method to make our life easier
        public static String printArr(int[] arr){
            String temp = "";
            for(int i=0; i<arr.length; i++){
                temp+=""+arr[i];
            }
            return temp;
        }

        public static void main(String args[]){
            int[] arr1 = [5,4,3,2,1];
            System.out.println("Before sorting ");
            System.out.println(printArr(arr1));
        }
    }
```
