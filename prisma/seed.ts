import { Prisma, PrismaClient, Roles } from "@prisma/client";

const client = new PrismaClient();

const getSemesters = (): Prisma.semestersCreateInput[] => [
    {
        sem_no: "1",
    },
    {
        sem_no: "2",
    },
    {
        sem_no: "3",
    },
    {
        sem_no: "4",
    },
    {
        sem_no: "5",
    },
    {
        sem_no: "6",
    }
];
const getBranch = (): Prisma.branchCreateInput[] => [
    {
        branch_name: "CSE",
    },
    {
        branch_name: "EC",
    },
    {
        branch_name: "ME",
    },
    {
        branch_name: "CE",
    },
    {
        branch_name: "AE",
    },
];
const getCollege = (): Prisma.collegeCreateInput[] => [
    {
        college_code: "465",
        college_name: "ksp",
        address: "banglore",
        college_mail: "ksit@gmail.com",
        college_website: "ksit.com",
    },
];

const getUsers = (
    branch_name: string,
    college_code: string,
    sem_no: string
): Prisma.usersCreateManyInput[] => [
        {
            first_name: "Rajath ",
            last_name: "R",
            address: "banglore",
            password:"12345678",
        
            mail_id: "rajath@gmail.com",
            branch_name: branch_name,
            college_code: college_code,
            role: "STUDENT",
            sem_no: sem_no,
        },
        {
            first_name: "Raksha",
            last_name: "R",
            address: "banglore",
            password:"12345678",
            mail_id: "raksha@gmail.com",
            branch_name: branch_name,
            college_code: college_code,
            role: "STUDENT",
            sem_no: sem_no,
        },
        {
            first_name: "mangala",
            last_name: "R",
            address: "banglore",
            password:"12345678",
            mail_id: "mangala@gmail.com",
            branch_name: branch_name,
            college_code: college_code,
            role: "STAFF",
            sem_no: sem_no,
        },
        {
            first_name: "Abu ",
            last_name: "Talha",
            address: "banglore",
            password:"12345678",
            mail_id: "abu@gmail.com",
            branch_name: branch_name,
            college_code: college_code,
            role: "STUDENT",
            sem_no: sem_no,
        }, {
            first_name: "Ningappa ",
            last_name: "tango",
            address: "banglore",
            password:"12345678",
            mail_id: "tango@gmail.com",
            branch_name: branch_name,
            college_code: college_code,
            role: "STUDENT",
            sem_no: sem_no,
        },
    ];
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
            id:"c3a74524-4d80-4f4f-bab0-c0416e4ced3e",
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
    ]
    const getfavourites = (notes_id: string, usersId: string, ): Prisma.favouritesCreateManyInput[] =>[
        {
            usersId,
            notes_id,
        }
    ] 
    


const main = async () => {
    



    await client.college.createMany({
        data: getCollege(),
    });
    await client.semesters.createMany({
        data: getSemesters(),
    });

    await client.branch.createMany({
        data: getBranch(),
    });
    const semesters = await client.semesters.findUnique({
        where: {
            sem_no:"6",
        }
    });
    const branch = await client.branch.findUnique({
        where: {
            branch_name: "CSE",
        }
    });
    const college = await client.college.findFirst();
    await client.users.createMany({
        data: getUsers(branch?.branch_name!,
            college?.college_code!,
            semesters!.sem_no!


        ),
    });
    
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
    data: getNotes(
        branch?.branch_name!,
        semesters?.sem_no!,
        staff?.id!,
        subject?.sub_code!
    ),
});


const notes= await client.notes.findFirst();
await client.favourites.createMany({
    data: getfavourites(notes?.id!,
        student?.id!,
        
    ),
});


};
main()
    .then(() => {
        console.log("Successfully Seeded");
    })
    .catch((e) => {
        console.log(e);
    });
