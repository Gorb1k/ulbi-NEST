import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";
import {DataTypes} from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/users-roles.model";

interface UserCreationAttrs {
    email: string
    password:string
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: '1', description: 'Unique id'})
    @Column({type:DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number

    @ApiProperty({example: 'test@gmail.com', description: 'Email'})
    @Column({type:DataTypes.STRING, unique: true, allowNull: false})
    email:string

    @ApiProperty({example: 'pass12345', description: 'password'})
    @Column({type:DataTypes.STRING, allowNull: false,})
    password:string

    @ApiProperty({example: 'true', description: 'Is user banned or not'})
    @Column({type:DataTypes.BOOLEAN, defaultValue: false})
    banned:boolean

    @ApiProperty({example: 'For flood', description: 'Ban reason'})
    @Column({type:DataTypes.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

}
