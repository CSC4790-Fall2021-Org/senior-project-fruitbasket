using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Models
{
	public class Interests
	{
		[Key]
		public string Interest_ID { get; set; }

		public string Interest_Name { get; set; }

		public string Interest_Description { get; set; }
	}
}
