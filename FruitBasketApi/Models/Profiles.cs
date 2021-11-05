using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Models
{
	public class Profiles
	{
		[Key]
		public string Profile_ID { get; set; }

		[ForeignKey("Pictures")]
		public string Picture_ID { get; set; }

		public DateTime Date_of_Birth { get; set; }

		public int Age { get; set; }

		[ForeignKey("Usernames")]
		public string Username { get; set; }

		[ForeignKey("Cities")]
		public string City { get; set; }

		[ForeignKey("Interests")]
		public int Interest_ID { get; set; }

		[ForeignKey("Videos")]
		public int Video_ID { get; set; }

	}
}
