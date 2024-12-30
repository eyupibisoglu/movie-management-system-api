import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {
    @ApiProperty({
        example: 'eyupibisoglu',
        required: true
    })
    @IsNotEmpty()
    username: String;
    
    @ApiProperty({
        example: '123456',
        required: true
    })
    @IsNotEmpty()
    password: String;
}
