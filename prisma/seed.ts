import { Prisma, PrismaClient, Roles } from "@prisma/client";
import { faker } from "@faker-js/faker";


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
    {
        college_code: "365",
        college_name: "svp",
        address: "banglore",
        college_mail: "svp@gmail.com",
        college_website: "svp.com",
    },
    {
        college_code: "265",
        college_name: "dsit",
        address: "banglore",
        college_mail: "dsit@gmail.com",
        college_website: "dsit.com",
    },
];

const getUsers = (
    branch_name: string,
    college_code: string,
    sem_no: string
): Prisma.usersCreateManyInput[] => [
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STAFF",
            
            prof_image: faker.internet.avatar(),
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STAFF",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STAFF",
            prof_image: faker.internet.avatar(),
            
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STAFF",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STAFF",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STUDENT",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STUDENT",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STUDENT",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STUDENT",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },
        {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            address: faker.address.streetAddress(),
            role: "STUDENT",
            prof_image: faker.internet.avatar(),
            
            branch_name,
            college_code,
            sem_no,
            mail_id: faker.internet.email(),
            password: faker.internet.password(),


        },


    ];
/*const getUser_details_student = (usersId: string): Prisma.user_detailsCreateManyInput[] => [
    {
        usersId: usersId,
        reg_no: "465CS20022",
        bio: "programming is life",

    },
];
const getUser_details_staff = (usersId: string): Prisma.user_detailsCreateManyInput[] => [
    {
        usersId: usersId,
        qualification: "OS and python",


    },
]*/

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
const getNotes = (branch_name: string, sem_no: string, usersId: string, sub_code: string): Prisma.notesCreateManyInput[] => [


    {
        branch_name: branch_name,
        dislikes: faker.datatype.number(3),
        likes: faker.datatype.number(3),
        sem_no: sem_no,
        sub_code: sub_code,
        title: faker.lorem.sentence(5),
        unit_name: faker.lorem.text(),
        unit_no: faker.random.numeric(),
        usersId: usersId

    },
]
const getfavourites = (notes_id: string, usersId: string,): Prisma.favouritesCreateManyInput[] => [
    {
        usersId,
        notes_id,
    }
]
/*const getReviews = (notes_id: string, user_id: string,): Prisma.reviewCreateManyInput[] => [
    {
        user_id,
        notes_id,
        review_content: "very clear and easy to understand"
    }
]*/
const getReview_reply = (reviewId: string, usersId: string, review_reply_id: string): Prisma.review_replyCreateManyInput[] => [
    {
        usersId,
        reviewId,
        content: faker.lorem.sentences(3),
        review_reply_id

    },
    {
        usersId,
        reviewId,
        content: faker.lorem.sentences(3),
        review_reply_id

    },

]
const getTestdetails = (sub_code: string, usersId: string,): Prisma.test_detailsCreateManyInput[] => [
    {
        sub_code,
        usersId,
        test_title: "os week 1 unit test",

    },
    {
        sub_code,
        usersId,
        test_title: "os week 2 unit test",

    },
    {
        sub_code,
        usersId,
        test_title: "os week 3 unit test",

    },
    {
        sub_code,
        usersId,
        test_title: "os week 4 unit test",

    },
    {
        sub_code,
        usersId,
        test_title: "os week 5 unit test",

    },
]
const getQuestions_details = (test_id: string): Prisma.questions_detailsCreateManyInput[] => [
    {
        test_id,
        question: " what is os?",
        answer: "Os means operating system",
        options: ["Os means operating system", "os is an external factor in computing", "os stores data", "os means outsource"]
    },
    {
        test_id,
        question: " which part of an os enables virtualization?",
        answer: "the hypervisor",
        options: ["kernel", "mode bits", "the whole os", "the hypervisor"]
    },
    {
        test_id,
        question: "is it possible to have multiple os in a system/",
        answer: "yes",
        options: ["yes", "no"]
    },
    {
        test_id,
        question: "what does BIOS stand for",
        answer: "Basic input output system",
        options: ["basic input output system", "binary input output system", "binary in out systems", "basic in out system"]
    },
    {
        test_id,
        question: "is setting environment variables mandatory",
        answer: "yes",
        options: ["yes", "no"]
    }
]
const getstudent_test_details = (test_id: string, usersId: string): Prisma.student_test_detailsCreateManyInput[] => [
    {
        usersId,
        test_id,

        total_marks: 5
    }
]
const getStudent_answers = (q_id: string, usersId: string): Prisma.student_answersCreateManyInput[] => [
    {
        q_id,
        answer: "os means operating system",
        usersId
    },
    {
        q_id,
        answer: "the hypervisor",
        usersId
    },
    {
        q_id,
        answer: "yes",
        usersId
    },
    {
        q_id,
        answer: "Basic input output system",
        usersId
    },
    {
        q_id,
        answer: "yes",
        usersId
    }
]

const getTestHistory = (test_id: string, usersId: string): Prisma.test_historyCreateManyInput[] => [
    {
        marks_allocated: 5,
        usersId,
        test_id
    }
]




const main = async () => {
    await client.student_answers.deleteMany();
    await client.session_details.deleteMany();
    await client.test_history.deleteMany();
    await client.student_test_details.deleteMany();
    await client.questions_details.deleteMany();
    await client.test_details.deleteMany();
    await client.review_reply.deleteMany();
    await client.review.deleteMany();
    await client.favourites.deleteMany();
    await client.notes.deleteMany();
    await client.user_details.deleteMany();
    await client.users.deleteMany();
    await client.subjects.deleteMany();
    await client.semesters.deleteMany();
    await client.branch.deleteMany();
    await client.college.deleteMany();

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
            sem_no: "6",
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
            semesters!.sem_no
        )
    });

    const student = await client.users.findMany({
        where: {
            role: "STUDENT",
        }
    });
    const staff = await client.users.findMany({
        where: {
            role: "STAFF",
        }
    });
    const student2 = await client.users.findFirst({
        where: {
            role: "STUDENT",
        }
    });
    const staff2 = await client.users.findFirst({
        where: {
            role: "STAFF",
        }
    });
    const semesters2 = await client.semesters.findUnique({
        where: {
            sem_no: "4"
        }
    });
    const branch2 = await client.branch.findUnique({
        where: {
            branch_name: "CSE"
        }
    });

    await Promise.all(
        staff.map(async (users) => {
            await client.user_details.createMany({
                data: [
                    {
                        usersId: users?.id!,
                        qualification: faker.lorem.word(2)


                    },]
            })
        })

    )
    await Promise.all(
        student.map(async (users) => {
            await client.user_details.createMany({
                data: [
                    {
                        usersId: users?.id!,
                        reg_no: faker.random.alphaNumeric(10),
                        bio: faker.lorem.sentences(3)


                    },]
            })
        })

    )

    /*await client.user_details.createMany({
        data: getUser_details_student(student?.id!),
    });
    await client.user_details.createMany({
        data: getUser_details_staff(staff?.id!),
    });*/

    await client.subjects.createMany({
        data: getSubjects(semesters2?.sem_no!,),
    });
    const subject = await client.subjects.findUnique({
        where: {
            sub_code: "20CS21P"
        }
    });

    for (let i = 0; i < 10; i++) {

        await client.notes.createMany({
            data: getNotes(
                branch2?.branch_name!,
                semesters2?.sem_no!,

                staff2?.id!,
                subject?.sub_code!
            ),
        });
    }


    const notes_list = await client.notes.findMany();
    await Promise.all(
        notes_list.map(async (notes) => {
            await client.favourites.createMany({
                data: getfavourites(notes?.id!,
                    student2?.id!,

                ),
            })
        }))

    const users_list = await client.users.findMany();
    const note = await client.notes.findFirst();

    
        await Promise.all(
            users_list.map(async (users) => {
                await client.review.createMany(
                    {
                        data: [
                            {
                                user_id: users?.id,
                                notes_id:note?.id,
                                review_content: faker.lorem.sentences(2)
                            },
                        ]
                    }
                )
            }))
    

const reviews = await client.review.findMany();
const reply = await client.review_reply.findFirst()

 
await Promise.all(reviews.map(async (review)=>{
    await client.review_reply.createMany(
    {
        data: getReview_reply(review.id!, student2?.id!, reply?.id!)
    }
)}))
    


await client.test_details.createMany(
    {
        data: getTestdetails(subject?.sub_code!, staff2?.id!)
    }
)
const test = await client.test_details.findFirst()
await client.questions_details.createMany(
    {
        data: getQuestions_details(test?.test_id!)
    }
)
await client.student_test_details.createMany(
    {
        data: getstudent_test_details(test?.test_id!, student2?.id!)
    }
)
const question = await client.questions_details.findMany();
await Promise.all(question.map(async (questions_details, index) => {

    await client.student_answers.create(
        {
            data: getStudent_answers(questions_details?.q_id!, student2?.id!)[index]
        })
}))



await client.test_history.createMany(
    {
        data: getTestHistory(test?.test_id!, student2?.id!)
    }
)
};

main()
    .then(() => {
        console.log("Successfully Seeded");
    })
    .catch((e) => {
        console.log(e);
    });
