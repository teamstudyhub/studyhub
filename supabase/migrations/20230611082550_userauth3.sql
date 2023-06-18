alter table "public"."favourites" drop constraint "favourites_usersId_fkey";

alter table "public"."notes" drop constraint "notes_usersId_fkey";

alter table "public"."question_papers" drop constraint "question_papers_user_id_fkey";

alter table "public"."review" drop constraint "review_user_id_fkey";

alter table "public"."review_reply" drop constraint "review_reply_usersId_fkey";

alter table "public"."user" drop constraint "user_branch_name_fkey";

alter table "public"."user" drop constraint "user_college_code_fkey";

alter table "public"."user" drop constraint "user_sem_no_fkey";

alter table "public"."user_details" drop constraint "user_details_usersId_fkey";

alter table "public"."Account" drop constraint "Account_userId_fkey";

alter table "public"."Session" drop constraint "Session_userId_fkey";

alter table "public"."user" drop constraint "user_pkey";

drop index if exists "public"."user_mail_id_key";

drop index if exists "public"."user_pkey";

drop table "public"."user";

create table "public"."User" (
    "id" uuid not null default gen_random_uuid(),
    "first_name" text not null,
    "last_name" text not null,
    "mail_id" text not null,
    "password" text,
    "address" text not null,
    "prof_image" text not null,
    "sem_no" text not null,
    "role" "Roles" not null,
    "college_code" text not null,
    "branch_name" text not null
);


create table "public"."VerificationToken" (
    "identifier" text not null,
    "token" text not null,
    "expires" timestamp(3) without time zone not null
);


CREATE INDEX "User_id_idx" ON public."User" USING btree (id);

CREATE UNIQUE INDEX "User_mail_id_key" ON public."User" USING btree (mail_id);

CREATE UNIQUE INDEX "User_pkey" ON public."User" USING btree (id);

CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON public."VerificationToken" USING btree (identifier, token);

CREATE UNIQUE INDEX "VerificationToken_token_key" ON public."VerificationToken" USING btree (token);

alter table "public"."User" add constraint "User_pkey" PRIMARY KEY using index "User_pkey";

alter table "public"."User" add constraint "User_branch_name_fkey" FOREIGN KEY (branch_name) REFERENCES branch(branch_name) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."User" validate constraint "User_branch_name_fkey";

alter table "public"."User" add constraint "User_college_code_fkey" FOREIGN KEY (college_code) REFERENCES college(college_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."User" validate constraint "User_college_code_fkey";

alter table "public"."User" add constraint "User_sem_no_fkey" FOREIGN KEY (sem_no) REFERENCES semesters(sem_no) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."User" validate constraint "User_sem_no_fkey";

alter table "public"."questions_details" add constraint "questions_details_test_id_fkey" FOREIGN KEY (test_id) REFERENCES test_details(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."questions_details" validate constraint "questions_details_test_id_fkey";

alter table "public"."student_answers" add constraint "student_answers_q_id_fkey" FOREIGN KEY (q_id) REFERENCES questions_details(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student_answers" validate constraint "student_answers_q_id_fkey";

alter table "public"."student_test_details" add constraint "student_test_details_test_id_fkey" FOREIGN KEY (test_id) REFERENCES test_details(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student_test_details" validate constraint "student_test_details_test_id_fkey";

alter table "public"."test_history" add constraint "test_history_test_id_fkey" FOREIGN KEY (test_id) REFERENCES test_details(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."test_history" validate constraint "test_history_test_id_fkey";

alter table "public"."Account" add constraint "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."Account" validate constraint "Account_userId_fkey";

alter table "public"."Session" add constraint "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."Session" validate constraint "Session_userId_fkey";


