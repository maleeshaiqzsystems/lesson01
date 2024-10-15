import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { strict } from 'assert';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') //decorators
export class UsersController {

    // add instance of userServivce (injecting)
    constructor(private readonly userService : UsersService) { }
    //creating routes

    // @Get() //GET /users or /users?role=value    (role=value   this is the query parameter)
    // findAll(){
    //     return []
    // }

    @Get() //GET /users or /users?role=value    (role=value   this is the query parameter)
    findAll(@Query('role') role?: 'Intern'|'SEO' | 'ASE'| 'Admin'){
        return this.userService.findAll(role)
    }

    @Get('interns') //GET /users/interns
    findAllInters(){
        return this.userService.findAll('Intern')
    }

    //this route read anything afer users/ as a id
    @Get(':id') //GET /users/:id 
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.userService.findOne(id); // add + and convert string to the number
        // ParseIntPipe convert string to number
    }

    @Post() //POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    } 

    @Patch(':id') //PATCH /users/:id 
    update(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) updateUserDto:UpdateUserDto){
        return this.userService.update(id,updateUserDto)
    }

    @Delete(':id') //GET /users/:id 
    delete(@Param('id', ParseIntPipe) id:number){
        return this.userService.delete(id)
    }

}
