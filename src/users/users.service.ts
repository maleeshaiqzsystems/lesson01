import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id" : 1,
            "name": "Maleesha",
            "email": "mal@gmail.com",
            "role": "ASE"
        },
        {
            "id" : 2,
            "name": "Thisura",
            "email": "tis@gmail.com",
            "role": "SEO"
        },
        {
            "id" : 3,
            "name": "Dilki",
            "email": "dil@gmail.com",
            "role": "Admin"
        },
        {
            "id" : 4,
            "name": "Nesandi",
            "email": "nes@gmail.com",
            "role": "Intern"
        },
        {
            "id" : 5,
            "name": "Dilmi",
            "email": "dil@gmail.com",
            "role": "Intern"
        }
    ]

    //creat the functions which are in the controller file.(eg:findOne(), findAll(), update(), delete())

    findAll(role?:'Intern'|'SEO' | 'ASE'| 'Admin'){
        if(role){
            const rolesArray = this.users.filter(users => users.role === role)
            if(rolesArray.length===0) throw new NotFoundException('User Role not found')
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)

        if(!user) throw new NotFoundException('User Not Found')
        return user
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b)=>b.id-a.id)
        const newUser = {
            id: usersByHighestId[0].id+1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser 
    }

    update(id: number, updateUserDto : UpdateUserDto){
        this.users = this.users.map(user =>{
            if(user.id ===id){
                return {...user, ...updateUserDto}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id:number){
        const removedUser = this.findOne(id)

        this.users= this.users.filter(user => user.id !== id)

        return removedUser
    }
}
