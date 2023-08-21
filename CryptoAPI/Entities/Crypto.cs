namespace CryptoAPI.Entities
{
    public class Crypto
    {
        public string Symbol {  get; set; }
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? image { get; set; }
        public float? ath { get; set; }
        public float? atl { get; set; }
        public int? market_cap_rank { get; set; }
    }
}
