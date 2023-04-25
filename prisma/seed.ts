import {Prisma, PrismaClient} from "@prisma/client";

const client = new PrismaClient();

const getStudents = ():Prisma.studentCreateInput[] =>[
  {
    reg_no:"12345test",
    first_name:"test1",
    last_name:"_test1",
    mail_id:"test1@gmail.com"
  },
  {
    reg_no:"12345test2",
    first_name:"test2",
    last_name:"_test2",
    mail_id:"test2@gmail.com"
  },
]

const main = ()=>{
    return Promise.all(getStudents().map(student=>client.student.create({
        data:student
    })));
}

main();