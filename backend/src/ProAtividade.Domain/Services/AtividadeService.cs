using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.Domain.Services
{
    public class AtividadeService : IAtividadeService
    {
        private IAtividadeRepository _atividadeRepository;
        public AtividadeService(IAtividadeRepository atividadeRepository)
        {
            this._atividadeRepository = atividadeRepository;

        }

        public async Task<Atividade> AdicionarAtividade(Atividade atividadeModel)
        {
            if (await _atividadeRepository.PegaPorTituloAsync(atividadeModel.Titulo) != null)
                throw new Exception("Já existe uma atividade com esse Título!");

            if (await _atividadeRepository.PegaPorIdAsync(atividadeModel.Id) == null)
            {
                _atividadeRepository.Adicionar<Atividade>(atividadeModel);
                if (await _atividadeRepository.SalvarMudancasAsync())
                    return atividadeModel;
            }

            return null;
        }

        public async Task<Atividade> AtualizarAtividade(Atividade atividadeModel)
        {
            if (atividadeModel.DataConclusao != null && atividadeModel.DataConclusao.ToString() != "01/01/0001 00:00:00")
                throw new Exception($"Não se pode alterar atividade já concluida! {atividadeModel.DataConclusao.ToString()}");

            if (await _atividadeRepository.PegaPorIdAsync(atividadeModel.Id) != null)
            {
                _atividadeRepository.Atualizar<Atividade>(atividadeModel);
                if (await _atividadeRepository.SalvarMudancasAsync())
                    return atividadeModel;
            }

            return null;
        }

        public async Task<bool> ConcluirAtividade(Atividade atividadeModel)
        {
            if (atividadeModel != null)
            {
                atividadeModel.Concluir();
                _atividadeRepository.Atualizar<Atividade>(atividadeModel);
                return await _atividadeRepository.SalvarMudancasAsync();
            }

            return false;
        }

        public async Task<bool> DeletarAtividade(int id)
        {
            Atividade atividade = await _atividadeRepository.PegaPorIdAsync(id);
            if (atividade == null) throw new Exception("A Atividade que tentou deletar não existe!");

            _atividadeRepository.Deletar<Atividade>(atividade);
            return await _atividadeRepository.SalvarMudancasAsync();
        }

        public async Task<Atividade> PegarAtividadePorIdAsync(int id)
        {
            try
            {
                Atividade atividade = await _atividadeRepository.PegaPorIdAsync(id);
                if (atividade == null) return null;

                return atividade;
            }
            catch (System.Exception error)
            {
                throw new Exception(error.Message);
            }
        }

        public async Task<List<Atividade>> PegarAtividadesAsync()
        {
            try
            {
                List<Atividade> atividades = await _atividadeRepository.PegaTodasAsync();
                if (atividades == null) return null;

                return atividades;
            }
            catch (System.Exception error)
            {
                throw new Exception(error.Message);
            }
        }
    }
}