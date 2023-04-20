using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IGeralRepository
    {
        void Adicionar<T>(T classModel) where T : class;
        void Atualizar<T>(T classModel) where T : class;
        void Deletar<T>(T classModel) where T : class;
        void DeletarVarias<T>(List<T> classModel) where T : class;
        Task<bool> SalvarMudancasAsync();
    }
}