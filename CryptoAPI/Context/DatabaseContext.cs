using CryptoAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace CryptoAPI.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> context) : base(context)
        {

        }

        public DbSet<Crypto> Cryptos { get; set; }
    }
}
