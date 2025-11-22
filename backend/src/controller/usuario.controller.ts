import { UsuarioService } from "../service/usuario.service";
import { Request, Response} from "express"; 


const service = new UsuarioService();

export class UsuarioController {

    async criar(req: Request, res: Response){
        const {nome, email, senha} = req.body;

        try {
            const usuario = await service.criarUsuario(nome, email, senha);
            return res.status(201).json(usuario);
        } catch (error: any){
            return res.status(500).json({msg: "Usuário não criado.", erro: error.message});
        }
    }

    async listarUsuarios(req: Request, res: Response){
        try {
            const usuario = await service.listarTodosUsuarios();
            return res.status(200).json(usuario);
        } catch (error: any){
            return res.status(500).json({msg: "Não existem usuários.", erro: error.message});
        }
    }

    async listarUsuarioId(req: Request, res: Response){
        const {id} = req.body;

        try {
            const usuario = await service.listaUsuario(id);

            //
            
            return res.status(200).json(usuario);
        } catch (error: any) {
            return res.status(500).json({msg: "Usuário não encontrado.", erro: error.message});
        }
    }
}