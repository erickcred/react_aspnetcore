using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class GeralRepository : IGeralRepository
    {
        private Contexto _contexto;

        public GeralRepository(Contexto contexto)
        {
            this._contexto = contexto;

        }

        public void Adicionar<T>(T classModel) where T : class
        {
            _contexto.AddAsync(classModel);
        }

        public void Atualizar<T>(T classModel) where T : class
        {
            _contexto.Update(classModel);
        }

        public void Deletar<T>(T classModel) where T : class
        {
            _contexto.Remove(classModel);
        }

        public void DeletarVarias<T>(List<T> classModel) where T : class
        {
            _contexto.RemoveRange(classModel);
        }

        public async Task<bool> SalvarMudancasAsync()
        {
            return (await _contexto.SaveChangesAsync() > 0);
        }
    }
}