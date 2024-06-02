import java.util.Scanner;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {      
      Scanner sc = new Scanner(System.in);
      String str = sc.nextLine();
      System.out.println(str);
      sc.close();

      LocalDateTime dt = LocalDateTime.now();
      System.out.println(dt);

      ArrayList<String> cars = new ArrayList<String>();
      cars.add("BMW");
      cars.add("Honda");
      cars.set(0, "Mazda");
      System.out.println(cars.get(0));
    }
  }