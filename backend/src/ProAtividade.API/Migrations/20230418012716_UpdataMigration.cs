using Microsoft.EntityFrameworkCore.Migrations;

namespace ProAtividade.API.Migrations
{
    public partial class UpdataMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Prioridade",
                table: "Atividade",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "ENUM")
                .OldAnnotation("MySql:CharSet", "UTF8");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Prioridade",
                table: "Atividade",
                type: "ENUM",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "UTF8");
        }
    }
}
