import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { UsuarioEntity } from "../entities/usuario.entity";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";


@Injectable()
export class    UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
    private bcrypt: Bcrypt
  ) {}

  async findAll(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find();
  }

   async findByUsuario(usuario: string): Promise<UsuarioEntity | null> {
        return await this.usuarioRepository.findOne({
            where: {
                usuario: usuario
            }
        })
    }

  async findById(id: number): Promise<UsuarioEntity> {
    const buscaUsuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });
    if (!buscaUsuario) {
      throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
    }
    return buscaUsuario;
  }

  async findByName(nome: string): Promise<UsuarioEntity[]> {
    const buscaUsuarioPorNome = await this.usuarioRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
    if (buscaUsuarioPorNome.length === 0) {
      throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
    }
    return buscaUsuarioPorNome;
  }

   async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        
        const buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (buscaUsuario)
            throw new HttpException("O Usuario já existe!", HttpStatus.BAD_REQUEST);

        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);

    }

  async update(usuario: UsuarioEntity): Promise<UsuarioEntity> {

        await this.findById(usuario.id);

        const buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (buscaUsuario && buscaUsuario.id !== usuario.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);

    }

  async delete(id: number): Promise<DeleteResult> {
    this.findById(id);
    return this.usuarioRepository.delete(id);
  }
}