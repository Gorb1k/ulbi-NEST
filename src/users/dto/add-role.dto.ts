import { ApiProperty } from "@nestjs/swagger";


export class AddRoleDto {

  @ApiProperty({example: 'USER', description: 'role value'})
  readonly value:string
  @ApiProperty({example: '3', description: 'User ID'})
  readonly userId:number
}