import { prisma } from "../prisma";

export class UsuarioService {
    
    async criarUsuario(nome: string, email: string, senha: string){
        const usuario = await prisma.usuario.create({
            data: {nome, email, senha}
        });

        return usuario;
    };

    async listarTodosUsuarios(){
        return prisma.usuario.findMany();
    };

    async listaUsuario(id: number){
        return prisma.usuario.findUnique({
            where: {id}
        });
    };

    async listarUsuarioEmail(email: string){
        return prisma.usuario.findUnique({
            where: {email}
        });
    };

    async atualizarUsuario(id: number, nome: string, email: string, senha: string){
        return prisma.usuario.update({
            where: {id}, 
            data: {nome, email, senha}
        });
    };

    async deletarUsuario(id: number){
        return prisma.usuario.delete({
            where: {id}
        });
    };
}