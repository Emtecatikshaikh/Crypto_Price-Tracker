using CryptoAPI.Entities;

namespace CryptoAPI.Interfaces
{
    public interface ICryptoRepository
    {
        public Task<IEnumerable<Crypto>> GetAllData();

        public Task<IEnumerable<CryptoDTO>> GetAllIds();

        public Task<Crypto> GetCryptoById(string id);
    }
}
