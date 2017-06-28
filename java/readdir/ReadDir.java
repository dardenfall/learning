import java.io.*;

public class ReadDir{

  public static void main(String[] args) {
    File folder = new File(".");

    File [] files = folder.listFiles();

    for(int i = 0; i < files.length; i++){
      File f = files[i];

      if(f.isFile()){
        System.out.println(f);
      }
      else{
        System.out.println("f is a dir");
      }
    }
  }

}
