//dto means data transfer object
// building input validation types also called DTOs
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['Intern','SEO' , 'ASE', 'Admin'], { message: "Valid role required"})
    role : 'Intern'|'SEO' | 'ASE'| 'Admin'

}