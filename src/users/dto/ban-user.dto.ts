import { ApiProperty } from "@nestjs/swagger";


export class BanUserDto {

  @ApiProperty({example: 'For flood', description: 'Ban reason'})
  readonly banReason:string
  @ApiProperty({example: '3', description: 'User ID'})
  readonly userId:number
}