using CryptoAPI.Context;
using CryptoAPI.Entities;
using CryptoAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CryptoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CryptoController : ControllerBase
    {
        private readonly ICryptoRepository _cryptoRepo;

        public CryptoController(ICryptoRepository cryptoRepository)
        {
            _cryptoRepo = cryptoRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllData()
        {
            try
            {
                var data = await _cryptoRepo.GetAllData();
                if (data == null)
                    return NotFound();

                return Ok(data);
            }catch(Exception err)
            {
                return StatusCode(500, err.Message);
            }
        }

        [HttpGet("Ids")]
        public async Task<IActionResult> GetAllIds()
        {
            try
            {
                var ids = await _cryptoRepo.GetAllIds();
                if (ids == null)
                    return NotFound();

                return Ok(ids);
            }
            catch (Exception err)
            {
                return StatusCode(500, err.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCryptoById(string id)
        {
            //if (id == "bitcoin")
            {
                //throw new InvalidCryptoException("Invalid Crypto");

            }
            
            try
            {
                var crypto = await _cryptoRepo.GetCryptoById(id);
                if (crypto == null)
                    return NotFound();

                return Ok(crypto);
            }
            catch (Exception err)
            {
                return StatusCode(500, err.Message);
            }
        }
    }
}
