import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { strict } from 'assert';
import { UsersService } from './users.service';

@Controller('users') //decorators
export class UsersController {

    // add instance of userServivce (injecting)
    constructor(private readonly userService : UsersService) {
        
    }
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
    findOne(@Param('id') id:number){
        return this.userService.findOne(id);
    }

    @Post() //POST /users
    create(@Body() user: {}){
        return user
    } 

    @Patch(':id') //PATCH /users/:id 
    update(@Param('id') id:string, @Body() userUpdate:{}){
        return {id,...userUpdate }
    }

    @Delete(':id') //GET /users/:id 
    delete(@Param('id') id:string){
        return {id}
    }

}
