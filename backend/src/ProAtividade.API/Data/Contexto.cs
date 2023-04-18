using Microsoft.EntityFrameworkCore;
using ProAtividade.API.Models;
using ProAtividade.API.Data.Mappings;

namespace ProAtividade.API.Data
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options) { }

        public DbSet<Atividade> Atividades { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new AtividadeMap());
        }
    }
}