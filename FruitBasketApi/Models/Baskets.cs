using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Models
{
	public class Baskets
	{
		[Key]
		public string Basket_ID { get; set; }

		public string Basket_Name { get; set; }

		public int Number_of_Members { get; set; }

		public DateTime Date_of_Creation { get; set; }

		public string Reason_for_Basket { get; set; }

		public int Min_Members { get; set; }

		public int Max_Members { get; set; }

		public string Email { get; set; }

		public string Phone_Number { get; set; }
	}
}
