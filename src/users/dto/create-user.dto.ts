//dto means data transfer object
// building input validation types also called DTOs


export class CreateUserDto {
    name: string;
    email: string;
    role : 'Intern'|'SEO' | 'ASE'| 'Admin'

}