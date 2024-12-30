import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: 'eyupibisoglu',
        required: true
    })
    @IsNotEmpty()
    username: string;
    
    @ApiProperty({
        example: '123456',
        required: true
    })
    @IsNotEmpty()
    password: string;
    
    @ApiProperty({
        example: 26,
        required: true
    })
    age: number;

    @ApiProperty({
        example: 'Manager',
        required: true
    })
    @IsNotEmpty()
    role: string;
}
