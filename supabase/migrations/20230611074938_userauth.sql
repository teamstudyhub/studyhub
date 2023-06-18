alter table "public"."favourites" drop constraint "favourites_usersId_fkey";

alter table "public"."notes" drop constraint "notes_usersId_fkey";

alter table "public"."question_papers" drop constraint "question_papers_user_id_fkey";

alter table "public"."questions_details" drop constraint "questions_details_test_id_fkey";

alter table "public"."review" drop constraint "review_user_id_fkey";

alter table "public"."review_reply" drop constraint "review_reply_usersId_fkey";

alter table "public"."student_answers" drop constraint "student_answers_q_id_fkey";

alter table "public"."student_answers" drop constraint "student_answers_usersId_fkey";

alter table "public"."student_test_details" drop constraint "student_test_details_test_id_fkey";

alter table "public"."student_test_details" drop constraint "student_test_details_usersId_fkey";

alter table "public"."test_details" drop constraint "test_details_usersId_fkey";

alter table "public"."test_history" drop constraint "test_history_test_id_fkey";

alter table "public"."test_history" drop constraint "test_history_usersId_fkey";

alter table "public"."users" drop constraint "users_branch_name_fkey";

alter table "public"."users" drop constraint "users_college_code_fkey";

alter table "public"."users" drop constraint "users_sem_no_fkey";

alter table "public"."user_details" drop constraint "user_details_usersId_fkey";

alter table "public"."users" drop constraint "users_pkey";

alter table "public"."favourites" drop constraint "favourites_pkey";

alter table "public"."questions_details" drop constraint "questions_details_pkey";

alter table "public"."test_details" drop constraint "test_details_pkey";

drop index if exists "public"."users_mail_id_key";

drop index if exists "public"."users_pkey";

drop index if exists "public"."favourites_pkey";

drop index if exists "public"."questions_details_pkey";

drop index if exists "public"."test_details_pkey";

drop table "public"."users";

create table "public"."user" (
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


alter table "public"."favourites" drop column "fav_id";

alter table "public"."favourites" add column "id" uuid not null default gen_random_uuid();

alter table "public"."questions_details" drop column "q_id";

alter table "public"."questions_details" add column "id" uuid not null default gen_random_uuid();

alter table "public"."test_details" drop column "test_id";

alter table "public"."test_details" add column "id" uuid not null default gen_random_uuid();

alter table "public"."test_details" add column "sem_no" text;

CREATE UNIQUE INDEX user_mail_id_key ON public."user" USING btree (mail_id);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

CREATE UNIQUE INDEX favourites_pkey ON public.favourites USING btree (id);

CREATE UNIQUE INDEX questions_details_pkey ON public.questions_details USING btree (id);

CREATE UNIQUE INDEX test_details_pkey ON public.test_details USING btree (id);

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."favourites" add constraint "favourites_pkey" PRIMARY KEY using index "favourites_pkey";

alter table "public"."questions_details" add constraint "questions_details_pkey" PRIMARY KEY using index "questions_details_pkey";

alter table "public"."test_details" add constraint "test_details_pkey" PRIMARY KEY using index "test_details_pkey";

alter table "public"."test_details" add constraint "test_details_sem_no_fkey" FOREIGN KEY (sem_no) REFERENCES semesters(sem_no) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."test_details" validate constraint "test_details_sem_no_fkey";

alter table "public"."user" add constraint "user_branch_name_fkey" FOREIGN KEY (branch_name) REFERENCES branch(branch_name) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."user" validate constraint "user_branch_name_fkey";

alter table "public"."user" add constraint "user_college_code_fkey" FOREIGN KEY (college_code) REFERENCES college(college_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."user" validate constraint "user_college_code_fkey";

alter table "public"."user" add constraint "user_sem_no_fkey" FOREIGN KEY (sem_no) REFERENCES semesters(sem_no) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."user" validate constraint "user_sem_no_fkey";

alter table "public"."user_details" add constraint "user_details_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."user_details" validate constraint "user_details_usersId_fkey";


