using System;

public class Pictures
{
	[Key]
	public string Match_ID { get; set; }

	[ForeignKey]
	public string User_ID { get; set; }

	[ForeignKey]
	public bool Interest_in_Basket { get; set; }
}
