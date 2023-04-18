using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private Contexto _contexto;

        public AtividadeController([FromServices] Contexto contexto) => _contexto = contexto;

        [HttpGet()]
        public async Task<IActionResult> Get()
        {
            List<Atividade> atividades = await _contexto.Atividades
                                                .AsNoTracking()
                                                .ToListAsync();
            return Ok(atividades);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            Atividade atividade = await _contexto.Atividades
                                        .AsNoTracking()
                                        .FirstOrDefaultAsync(a => a.Id == id);
            return Ok(atividade);
        }

        [HttpPost()]
        public async Task<IActionResult> Create([FromBody] Atividade atividadeModel)
        {
            if (atividadeModel != null)
            {
                await _contexto.Atividades.AddAsync(atividadeModel);
                await _contexto.SaveChangesAsync();
                return Ok();
            }
            throw new Exception("Parametro obrigatório faltante!");
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] Atividade atividadeModel)
        {
            if (!existe(id)) return NotFound("Atividade não encontrada!");
            if (atividadeModel.Id != id) throw new ArgumentException("Você está tentando atualizar a atividade errada!");

            // Atividade atividade = await _contexto.Atividades
            //                             .FirstOrDefaultAsync(a => a.Id == id);

            // atividade.Titulo = atividadeModel.Titulo;
            // atividade.Prioridade = atividadeModel.Prioridade;
            // atividade.Descricao = atividadeModel.Descricao;

            _contexto.Atividades.Update(atividadeModel);
            await _contexto.SaveChangesAsync();

            return Ok(atividadeModel);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id, [FromBody] Atividade atividadeModel)
        {
            if (atividadeModel.Id != id) throw new ArgumentException("Você está tentando Deletar diferente da informada como paremetro!");
            if (!existe(id)) return NotFound("Você está tentando Deletar uma atividade que não existe!");

            Atividade atividade = await _contexto.Atividades
                                        .FirstOrDefaultAsync(a => a.Id == id);

            _contexto.Atividades.Remove(atividade);
            await _contexto.SaveChangesAsync();
            return Ok(atividade);
        }

        private bool existe(int id)
        {
            if (_contexto.Atividades.Any(a => a.Id == id)) return true;

            return false;
        }
    }
}