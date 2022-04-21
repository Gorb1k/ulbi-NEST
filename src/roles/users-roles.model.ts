import { BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import {DataTypes} from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Role } from "./roles.model";


@Table({
  tableName: 'users_roles',
  createdAt:false,
  updatedAt:false
})
export class UserRoles extends Model<UserRoles>{

  @ApiProperty({example: '1', description: 'Unique id'})
  @Column({type:DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number

  @ForeignKey(() => Role)
  @ApiProperty({example: '1', description: 'Role ID'})
  @Column({type:DataTypes.INTEGER})
  roleId:number

  @ForeignKey(() => User)
  @ApiProperty({example: '1', description: 'User ID'})
  @Column({type:DataTypes.INTEGER})
  userId:number

}