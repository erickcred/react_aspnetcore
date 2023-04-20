using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Services
{
    public interface IAtividadeService
    {
        Task<Atividade> AdicionarAtividade(Atividade atividadeModel);
        Task<Atividade> AtualizarAtividade(Atividade atividadeModel);
        Task<List<Atividade>> PegarAtividadesAsync();
        Task<Atividade> PegarAtividadePorIdAsync(int id);
        Task<bool> DeletarAtividade(int id);
        Task<bool> ConcluirAtividade(Atividade atividadeModel);
    }
}