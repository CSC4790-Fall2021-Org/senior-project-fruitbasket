using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Profiles
{
	[Key]
	public string Profile_ID { get; set; }

	[ForeignKey("FruitPictures")]
	public string Picture_ID { get; set; }

	public DateTime Date_of_Birth { get; set; }

	public int Age { get; set; }

	[ForeignKey("Users")]
	public string Username { get; set; }

	[ForeignKey("Users")]
	public string City { get; set; }

	[ForeignKey("Interests")]
	public int Interest_ID { get; set; }

	[ForeignKey("Videos")]
	public int Video_ID { get; set; }

}
