using System.ComponentModel.DataAnnotations;
using ProAtividade.API.Enums;

namespace ProAtividade.API.Models
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

        public Atividade()
        {
        }

        public Atividade(int id, string titulo, EPrioridade prioridade, string descricao)
        {
            this.Id = id;
            this.Titulo = titulo;
            this.Prioridade = prioridade;
            this.Descricao = descricao;
        }

    }
}