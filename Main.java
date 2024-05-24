public class Main {
    public static void main(String[] args) {      
      int num = myfunc(23);
      int num2 = myfunc(23, 234);
      System.out.println(num);
      System.out.println(num2);
    }

    public static int myfunc(int num){
      System.out.println("Hi there, how are you?");
      return num + 5;
    }

    public static int myfunc(int num, int num2){
      System.out.println("Hi there, how are you?");
      return num + num2;
    }
  }