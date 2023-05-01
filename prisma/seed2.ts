/*import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const getUser_details = (usersId: string): Prisma.user_detailsCreateManyInput[] => [
    {
        usersId: usersId,
        reg_no: "465CS20022",
        bio: "programming is life",

    },
];

const getSubjects = (sem_no: string): Prisma.subjectsCreateManyInput[] => [
    {
        sub_code: "20CS21P",
        sem_no: sem_no,
        sub_name: "Operating systems"
    },
    {
        sub_code: "20CS22P",
        sem_no: sem_no,
        sub_name: "Operating systems"
    },
    {
        sub_code: "20CS23P",
        sem_no: sem_no,
        sub_name: "Sowtware engineering"
    },
    {
        sub_code: "20CS24P",
        sem_no: sem_no,
        sub_name: "Hardware"
    }
]
const getNotes = (branch_name:string, sem_no: string, usersId: string, sub_code:string): Prisma.notesCreateManyInput[] => [
    {
        branch_name:branch_name,
        dislikes: 12,
        likes: 100,
        sem_no:sem_no,
        sub_code:sub_code,
        title: "Operating systems week 1",
        unit_name:"introduction to os",
        unit_no:"1",
        usersId:usersId

    },
    {
        branch_name:branch_name,
        dislikes: 12,
        likes: 100,
        sem_no:sem_no,
        sub_code:sub_code,
        title: "Operating system week 2",
        unit_name:"types of os",
        unit_no:"2",
        usersId:usersId

    },
    {
        branch_name:branch_name,
        dislikes: 12,
        likes: 100,
        sem_no:sem_no,
        sub_code:sub_code,
        title: "Operating system week 3",
        unit_name:"virtualization",
        unit_no:"3",
        usersId:usersId

    }
]


const getfavourites = (notes_id: string, usersId: string, sub_code:string): Prisma.favouritesCreateManyInput[] =>[
    {
        usersId,
        notes_id,
    }
] 

const student = await client.users.findFirst({
    where: {
        role:"STUDENT",
    }
});
const staff = await client.users.findFirst({
    where: {
        role:"STAFF",
    }
});
const semesters2= await client.semesters.findUnique({
    where:{
        sem_no:"4"
    }
});
const branch2= await client.branch.findUnique({
    where:{
        branch_name:"CSE"
    }
});

const notes= await client.notes.findFirst();

await client.user_details.createMany({
    data: getUser_details(student?.id!),
});
await client.subjects.createMany({
    data: getSubjects(semesters2?.sem_no!,),
});
const subject= await client.subjects.findUnique({
    where:{
        sub_code:"20CS21P"
    }
});

await client.notes.createMany({
    data: getNotes(branch2?.branch_name!,
        staff?.id!,
        semesters2?.sem_no!,
        subject?.sub_code!
    ),
});

main()
    .then(() => {
        console.log("Successfully Seeded");
    })
    .catch((e) => {
        console.log(e);
    });
*/


