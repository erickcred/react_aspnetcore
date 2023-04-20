using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces;

namespace ProAtividade.Data.Repositories
{
    public class AtividadeRepository : GeralRepository, IAtividadeRepository
    {
        private Contexto _contexto;
        public AtividadeRepository(Contexto contexto) : base(contexto)
        {
            this._contexto = contexto;
        }

        public async Task<Atividade> PegaPorIdAsync(int id)
        {
            IQueryable<Atividade> query = _contexto.Atividades;

            query = query.AsNoTracking()
                        .OrderBy(order => order.Id)
                        .Where(atividade => atividade.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Atividade> PegaPorTituloAsync(string titulo)
        {
            IQueryable<Atividade> query = _contexto.Atividades;

            query = query.AsNoTracking()
                        .OrderBy(order => order.Titulo);

            return await query.FirstOrDefaultAsync(atividade => atividade.Titulo == titulo);
        }

        public async Task<List<Atividade>> PegaTodasAsync()
        {
            IQueryable<Atividade> query = _contexto.Atividades;

            query = query.AsNoTracking()
                        .OrderBy(order => order.Id);

            return await query.ToListAsync();
        }
    }
}