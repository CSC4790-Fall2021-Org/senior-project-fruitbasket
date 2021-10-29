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

		[ForeignKey]
		public string User_ID { get; set; }

		[ForeignKey]
		public bool Interest_in_Basket { get; set; }
	}
}
