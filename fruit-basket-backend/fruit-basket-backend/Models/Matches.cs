using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Pictures
{
	[Key]
	public string Match_ID { get; set; }

	[ForeignKey("Users")]
	public string User_ID { get; set; }

	[ForeignKey("Interests")]
	public bool Interest_in_Basket { get; set; }
}
