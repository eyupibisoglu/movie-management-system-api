import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
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
