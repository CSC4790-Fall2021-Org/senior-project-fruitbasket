using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Models
{
    public class Users
    {
		[Key]

		public string Users_ID { get; set; }

		public string UserName { get; set; }

		public string First_Name { get; set; }

		public string Last_Name { get; set; }

		public string Bio { get; set; }

		public string User_Password { get; set; }

		public string User_Email { get; set; }

		public string Phone_Number { get; set; }

		public DateTime Date_Of_Birth { get; set; }

		public int Number_Of_Matches { get; set; }

		public int Number_Of_Baskets { get; set; }

		public string City { get; set; }

		public int Age { get; set; }


		//[ForeignKey("Preferences")]
		public string Preference_ID { get; set; }
	}

	public class UserDTO
	{
		[Key]
		public string Users_ID { get; set; }

		public string UserName { get; set; }

		public string First_Name { get; set; }

		public string Last_Name { get; set; }

		public string Bio { get; set; }

		public string User_Password { get; set; }

		public string User_Email { get; set; }

		public string Phone_Number { get; set; }

		public DateTime Date_Of_Birth { get; set; }

		public int Number_Of_Matches { get; set; }

		public int Number_Of_Baskets { get; set; }

		public string City { get; set; }

		public int Age { get; set; }


		//[ForeignKey("Preferences")]
		public string Preference_ID { get; set; }

	}
}
