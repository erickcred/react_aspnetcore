using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly IAtividadeService _iAtividadeService;
        public AtividadeController(IAtividadeService iAtividadeService)
        {
            this._iAtividadeService = iAtividadeService;
        }

        [HttpGet()]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Atividade> atividades = await _iAtividadeService.PegarAtividadesAsync();
                if (atividades == null) return NoContent();

                return Ok(atividades);
            }
            catch (System.Exception error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar atividades: {error.Message}");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                Atividade atividade = await _iAtividadeService.PegarAtividadePorIdAsync(id);
                if (atividade == null) return NoContent();

                return Ok(atividade);
            }
            catch (System.Exception error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar atividade: {error.Message}");
            }
        }

        [HttpPost()]
        public async Task<IActionResult> Create([FromBody] Atividade atividadeModel)
        {
            try
            {
                if (atividadeModel != null)
                {
                    await _iAtividadeService.AdicionarAtividade(atividadeModel);
                    return StatusCode(StatusCodes.Status201Created, atividadeModel);
                }
                return StatusCode(StatusCodes.Status404NotFound, "Parametro obrigatório faltante!");

            }
            catch (System.Exception error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar savar a atividade: {error.Message}");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] Atividade atividadeModel)
        {
            try
            {
                if (await _iAtividadeService.PegarAtividadePorIdAsync(id) == null) return StatusCode(StatusCodes.Status403Forbidden, $"Você está tentando atualizar uma atividade que não existe!");
                if (atividadeModel.Id != id) return StatusCode(StatusCodes.Status403Forbidden, $"Você está tentando atualizar a atividade errada!");

                await _iAtividadeService.AtualizarAtividade(atividadeModel);

                return Ok(atividadeModel);
            }
            catch (System.Exception error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar savar a atividade: {error.Message}");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                Atividade atividade = await _iAtividadeService.PegarAtividadePorIdAsync(id);
                if (atividade == null) return StatusCode(StatusCodes.Status403Forbidden, $"Você está tentando exluir uma atividade que existe!");

                await _iAtividadeService.DeletarAtividade(atividade.Id);
                return Ok(atividade);
            }
            catch (System.Exception error)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar savar a atividade: {error.Message}");
            }
        }
    }
}