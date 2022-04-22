import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include:{all:true}})
        return users
    }

    async getUserByEmail(email:string) {
        const user = await this.userRepository.findOne({
            where:{email},
            include:{all:true}
        })
        return user
    }
    async addRole(roleDto: AddRoleDto) {
        const user = await this.userRepository.findByPk(roleDto.userId)
        const role = await this.roleService.getRoleByValue(roleDto.value)
        if (user && role) {
            await user.$add('roles', role.id)
            return roleDto
        }
        throw new HttpException('Role or user doesn\'t exist', HttpStatus.NOT_FOUND)
    }
    async ban(banDto: BanUserDto) {
        const user = await this.userRepository.findByPk(banDto.userId)
        if (user) {
            user.banned = true
            user.banReason = banDto.banReason
            await user.save()
            return user
        }
        throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
    }
}
