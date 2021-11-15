# Selection Sort Code

> Selection Sort is a algorithm which is used to sort numbers in an ascending order, it goes through each element and swaps it with the next lowest element it can find until all the elements are sorted

Heres our boilerplate code

```java:SelectionSort.java
    class SelectionSort{
        public static void sort(int[] arr){
            //this is where we will do all the sorting
        }

        public static void main(String args[]){
            int[] arr1 = new int[5];
            int n = 5;
            for(int i=0; i<5; i++){
              arr1[i] = n;
              n--;
            }

            System.out.println("Before sorting ");
            System.out.println(Arrays.toString(arr1))
            sort(arr1);
            System.out.println(Arrays.toString(arr1))
        }
    }
```

Selection Sort starts off by a simple for loop, starting from the first element til the end of the array. But theres a catch, this time we are going to cut off the loop 1 early and I'll explain why thats the case.

So lets add that to our method!

```java:SelectionSort.java
    class SelectionSort{
        public static void sort(int[] arr){
            //this is where we will do all the sorting
            for(int i=0; i<arr.length - 1; i++){

            }
        }

        //P.S I have removed the main method because it gets a little repetitive but its there at the end when we finish the code :)
    }
```

Now we will need another inner loop that starts are i+1 so it can compare all the values in the array and this is why we needed to cut of the i loop by 1 so we don't get out of bounds errors. This inner loop doesn't have to end 1 early

```java:SelectionSort.java
    class SelectionSort{
        public static void sort(int[] arr){
            //this is where we will do all the sorting
            for(int i=0; i<arr.length - 1; i++){
                for(int j=i+1; j<arr.length; j++){

                }
            }
        }
    }
```

In order to find the minimum value we need a way to keep track of each value and update it with each value it loops through. In this case, I will just use the position of the minimum value to make things simple. I called my variable minPos for easy reference :)

```java:SelectionSort.java
    class SelectionSort{
        public static void sort(int[] arr){
            int minPos = 0;
            //this is where we will do all the sorting
            for(int i=0; i<arr.length - 1; i++){
                //set the minPos to each i index
                minPos = i;
                for(int j=i+1; j<arr.length; j++){

                }
            }
        }
    }
```

Now in the inner j loop we need to check if the current value at j index is less then the current value at minPos index so we can update our new minPos to the new smallest minimum value index so it finds the next smallest value depending on you i index.

```java:SelectionSort.java
    class SelectionSort{
        public static void sort(int[] arr){
            int minPos = 0;
            //this is where we will do all the sorting
            for(int i=0; i<arr.length - 1; i++){
                //set the minPos to each i index
                minPos = i;
                for(int j=i+1; j<arr.length; j++){
                    if(arr[j] < arr[minPos]){
                        minPos = j;
                    }
                }
            }
        }
    }
```

Now we are getting to the fun part of the algorithim which is swapping the elements! This will be a simple swap where the current minPos index value swaps with the i index value. This code will be added inside the i loop

```java:SelectionSort.java
    class SelectionSort{
        public static void sort(int[] arr){
            int minPos = 0;
            //this is where we will do all the sorting
            for(int i=0; i<arr.length - 1; i++){
                //set the minPos to each i index
                minPos = i;
                for(int j=i+1; j<arr.length; j++){
                    if(arr[j] < arr[minPos]){
                        minPos = j;
                    }
                }

                int temp = arr[minPos];
                arr[minPos] = arr[i];
                arr[i] = temp;
            }
        }

        public static void main(String args[]){
            int[] arr1 = new int[5];
            int n = 5;
            for(int i=0; i<5; i++){
              arr1[i] = n;
              n--;
            }

            System.out.println("Before sorting ");
            System.out.println(Arrays.toString(arr1))
            sort(arr1);
            System.out.println(Arrays.toString(arr1))
        }
    }
```

Thats it! we did it! now test it out to see the magic happening!
