using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace FruitBasketApi.Models
{
    public class FruitBasketContext : DbContext
    {
        public FruitBasketContext(DbContextOptions<FruitBasketContext> options)
            : base(options)
        {
        }

        public DbSet<Users> Users { get; set; }

    }
}
