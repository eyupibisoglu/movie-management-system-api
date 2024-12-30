import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
// import { UpdateMovieDto } from './dto/update-movie.dto';
import { Roles } from 'src/users/decorators/roles.decorator';
import { Role } from 'src/users/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/common/guards/role.guard';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './interfaces/movie.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @ApiOperation({ summary: 'Add movie' })
  @ApiBody({ type: CreateMovieDto })
  @ApiResponse({ type: CreateMovieDto })
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ type: CreateMovieDto, isArray: true })
  @Get()
  findAll(): Movie[] {
    return this.moviesService.findAll();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Update movie' })
  @ApiBody({ type: UpdateMovieDto })
  @ApiResponse({ type: CreateMovieDto })
  @Roles(Role.Manager)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }
    
  @UseGuards(AuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Delete movie' })
  @Roles(Role.Manager)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
