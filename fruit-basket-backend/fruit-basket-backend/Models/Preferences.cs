using System;

public class Preferences
{
	[Key]
	public string Preference_ID { get; set; }

	public int Distance_Min { get; set; }

	public int Distance_Max { get; set; }

	public string Relationship_Type { get; set; }

	public int Age_Min { get; set; }

	public int Age_Max { get; set; }

}
