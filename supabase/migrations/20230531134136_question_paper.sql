alter table "public"."session_details" drop constraint "session_details_usersId_fkey";

alter table "public"."session_details" drop constraint "session_details_pkey";

drop index if exists "public"."session_details_pkey";

drop table "public"."session_details";

create table "public"."question_papers" (
    "id" uuid not null default gen_random_uuid(),
    "sub_code" text not null,
    "branch_name" text not null,
    "file_url" text,
    "title" text not null,
    "uploaded_date" timestamp(3) without time zone,
    "user_id" uuid not null,
    "year" text not null
);


CREATE UNIQUE INDEX question_papers_pkey ON public.question_papers USING btree (id);

alter table "public"."question_papers" add constraint "question_papers_pkey" PRIMARY KEY using index "question_papers_pkey";

alter table "public"."question_papers" add constraint "question_papers_branch_name_fkey" FOREIGN KEY (branch_name) REFERENCES branch(branch_name) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."question_papers" validate constraint "question_papers_branch_name_fkey";

alter table "public"."question_papers" add constraint "question_papers_sub_code_fkey" FOREIGN KEY (sub_code) REFERENCES subjects(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."question_papers" validate constraint "question_papers_sub_code_fkey";

alter table "public"."question_papers" add constraint "question_papers_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."question_papers" validate constraint "question_papers_user_id_fkey";


