import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    @ApiProperty({
        example: 'Batman',
        required: true
    })
    @IsNotEmpty()
    name: String;

    @ApiProperty({
        example: '18',
        required: true
    })
    @IsNotEmpty()
    ageRestriction: Number;
}
