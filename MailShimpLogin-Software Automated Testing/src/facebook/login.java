package facebook;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class login {


		public static void main(String[] args) {

			
			WebDriver driver;
			String check;
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\Habiba\\Documents\\FacebookLogin\\Lib\\chromedriver.exe"); 
			driver = new ChromeDriver();
			driver.get("https://mailchimp.com/");
			
			driver.findElement(By.xpath("/html/body/header/ul/li[2]/a")).click();
			
			System.out.println(driver.getTitle());
			
			
			driver.findElement(By.xpath("//*[@id='username']")).clear();
			driver.findElement(By.xpath("//*[@id='username']")).sendKeys("habibahmed1997");
			driver.findElement(By.xpath("//*[@id='password']")).clear();
			driver.findElement(By.xpath("//*[@id='password']")).sendKeys("Habiba-1997");
			driver.findElement(By.xpath("//*[@id='login-form']/fieldset/div[5]/button")).click();
			
		
			try
			{
			
				String Name = driver.findElement(By.xpath("//*[@id='uniqName_2_0']/div/nav[2]/ul/li[1]/a/div[2]/span[1]")).getText();
				System.out.printlnln(Name);
				if(Name.equals("Habiba"))
				{
					check = "Passed";
				}
				else
				{
					check ="Failed";
				}
			}
			catch(Exception e)
			{
				check ="Failed due to exception " + e;
			}
			
			
			System.out.printlnln(check);
			
			
			
			//driver.quit();
		
		}

	


}
