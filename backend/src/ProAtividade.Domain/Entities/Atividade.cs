using System;
using System.ComponentModel.DataAnnotations;
using ProAtividade.Domain.Enums;

namespace ProAtividade.Domain.Entities
{
    public class Atividade
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo Título é obrigatório!")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "Campo Prioridade é obrigatório!")]
        public EPrioridade Prioridade { get; set; }

        [Required(ErrorMessage = "Campo Descricao é obrigatório!")]
        public string Descricao { get; set; }

        public DateTime DataCriacao { get; set; }
        public DateTime DataConclusao { get; set; }

        public Atividade() => DataCriacao = DateTime.Now;

        public Atividade(int id, string titulo, string descricao) : this()
        {
            this.Id = id;
            this.Titulo = titulo;
            this.Descricao = descricao;
        }

        public void Concluir()
        {
            if (this.DataConclusao != null)
                DataConclusao = DateTime.Now;
            else
                throw new Exception($"Atividade já Concluída em : {DataConclusao.ToString("dd/MM/yyyy hh:mm")}");
        }

    }
}