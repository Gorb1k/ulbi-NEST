import { BelongsTo, BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { DataTypes } from "sequelize";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/users-roles.model";
import { User } from "../users/users.model";

interface PostCreationAttrs {
  title: string
  content:string
  userId: number
  image: string
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs>{

  @ApiProperty({example: '1', description: 'Unique id'})
  @Column({type:DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number

  @ApiProperty({example: 'POST TITLE lorem', description: 'post title'})
  @Column({type:DataTypes.STRING, unique: true, allowNull: false})
  title:string

  @ApiProperty({example: 'Lorem lorlema asd fasd', description: 'content'})
  @Column({type:DataTypes.STRING, allowNull: false})
  content:string

  @ApiProperty({example: 'Some image', description: 'image'})
  @Column({type:DataTypes.STRING})
  image:string

  @ForeignKey(() => User)
  @Column({type:DataTypes.INTEGER})
  userId:number

  @BelongsTo(() => User)
  author: User

}