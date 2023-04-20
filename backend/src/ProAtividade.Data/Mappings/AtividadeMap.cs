using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProAtividade.Domain.Enums;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Data.Mappings
{
    partial class AtividadeMap : IEntityTypeConfiguration<Atividade>
    {
        public void Configure(EntityTypeBuilder<Atividade> atividade)
        {
            atividade.ToTable("Atividade");
            atividade.HasKey(x => x.Id);
            atividade.Property(x => x.Id).ValueGeneratedOnAdd();

            atividade.Property(x => x.Titulo)
                .IsRequired()
                .HasColumnName("Titulo")
                .HasColumnType("VARCHAR(150)");

            atividade.Property(x => x.Prioridade)
                .IsRequired();

            atividade.Property(x => x.Descricao)
                .IsRequired()
                .HasColumnName("Descricao")
                .HasColumnType("TEXT");
        }
    }
}