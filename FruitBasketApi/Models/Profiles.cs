using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Models
{
	public class Profiles
	{
		[Key]
		public string Profile_ID { get; set; }

		[ForeignKey]
		public string Picture_ID { get; set; }

		public DateTime Date_of_Birth { get; set; }

		public int Age { get; set; }

		[ForeignKey]
		public string Username { get; set; }

		[ForeignKey]
		public string City { get; set; }

		[ForeignKey]
		public int Interest_ID { get; set; }

		[ForeignKey]
		public int Video_ID { get; set; }

	}
}
