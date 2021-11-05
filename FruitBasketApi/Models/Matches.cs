using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Models
{
	public class Matches
	{
		[Key]
		public string Match_ID { get; set; }

		[ForeignKey("Users")]
		public string User_ID { get; set; }

		[ForeignKey("Interest_In_Baskets")]
		public bool Interest_in_Basket { get; set; }
	}
}
