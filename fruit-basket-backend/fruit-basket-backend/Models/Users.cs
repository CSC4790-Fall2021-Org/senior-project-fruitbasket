using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Users
{
	[Key]
	public string User_ID { get; set; }

	public string UserName { get; set; }

	public string First_Name { get; set; }

	public string Last_Name { get; set; }

	public string Bio { get; set; }

	public string Password { get; set; }

	public string Email { get; set; }

	public string Phone_Number { get; set; }

	public DateTime Date_Of_Birth { get; set; }

	public int Number_Of_Matches { get; set; }

	public string City { get; set; }
		
	public int Age { get; set; }

	public bool Interest_In_Basket { get; set; }

	[ForeignKey("Preferences")]
	public string Preference_ID { get; set; }
}
