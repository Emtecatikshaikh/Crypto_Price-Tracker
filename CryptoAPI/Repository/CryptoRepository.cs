using CryptoAPI.Context;
using CryptoAPI.Entities;
using CryptoAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CryptoAPI.Repository
{
    public class CryptoRepository : ICryptoRepository
    {
        private readonly DatabaseContext _context;

        public CryptoRepository(DatabaseContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Crypto>> GetAllData()
        {
            var cryptos = await _context.Cryptos.ToListAsync();
            return cryptos;
        }

        public async Task<IEnumerable<CryptoDTO>> GetAllIds()
        {
            var data = await _context.Cryptos.
                             Select(x => new CryptoDTO{
                                 Id = x.Id,
                                 Name = x.Name,
                             }).ToListAsync();
            return data;
        }

        public async Task<Crypto> GetCryptoById(string id)
        {
            var crypto = await _context.Cryptos.
                                FirstOrDefaultAsync(x => x.Id == id);
            return crypto;
        }
    }
}
