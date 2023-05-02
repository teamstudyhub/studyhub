create type "public"."Roles" as enum ('STAFF', 'STUDENT');

create table "public"."branch" (
    "branch_name" text not null
);


create table "public"."college" (
    "college_code" text not null,
    "college_name" text not null,
    "address" text not null,
    "college_mail" text not null,
    "college_website" text not null
);


create table "public"."favourites" (
    "notes_id" uuid not null,
    "usersId" uuid not null,
    "fav_id" uuid not null default gen_random_uuid()
);


create table "public"."notes" (
    "id" uuid not null default gen_random_uuid(),
    "title" text not null,
    "unit_no" text not null,
    "unit_name" text not null,
    "sem_no" text not null,
    "sub_code" text not null,
    "uploaded_date" timestamp(3) without time zone default CURRENT_TIMESTAMP,
    "likes" integer not null,
    "dislikes" integer not null,
    "limit_visibility" boolean default false,
    "usersId" uuid not null,
    "branch_name" text not null,
    "file_url" text
);


create table "public"."questions_details" (
    "q_id" uuid not null default gen_random_uuid(),
    "options" text[],
    "answer" text not null,
    "test_id" uuid not null,
    "question" text not null
);


create table "public"."review" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "review_content" text not null,
    "notes_id" uuid not null
);


create table "public"."review_reply" (
    "id" uuid not null default gen_random_uuid(),
    "usersId" uuid not null,
    "reviewId" uuid not null,
    "review_reply_id" uuid,
    "content" text not null
);


create table "public"."semesters" (
    "sem_no" text not null
);


create table "public"."session_details" (
    "session_id" uuid not null default gen_random_uuid(),
    "login_time" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "logout_time" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "usersId" uuid not null
);


create table "public"."student_answers" (
    "id" uuid not null default gen_random_uuid(),
    "answer" text not null,
    "q_id" uuid not null,
    "usersId" uuid not null
);


create table "public"."student_test_details" (
    "id" uuid not null default gen_random_uuid(),
    "test_id" uuid not null,
    "total_marks" integer not null,
    "duration" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "submitted_date" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "usersId" uuid not null
);


create table "public"."subjects" (
    "sub_code" text not null,
    "sub_name" text not null,
    "sem_no" text not null
);


create table "public"."test_details" (
    "test_id" uuid not null default gen_random_uuid(),
    "test_title" text not null,
    "sub_code" text not null,
    "timelimit" timestamp(3) without time zone default CURRENT_TIMESTAMP,
    "conduction_date" timestamp(3) without time zone default CURRENT_TIMESTAMP,
    "lifetime" boolean default false,
    "end_date" timestamp(3) without time zone default CURRENT_TIMESTAMP,
    "usersId" uuid not null
);


create table "public"."test_history" (
    "id" uuid not null default gen_random_uuid(),
    "conduction_date" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "test_id" uuid not null,
    "submitted_date" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "marks_allocated" integer not null,
    "usersId" uuid not null
);


create table "public"."user_details" (
    "id" uuid not null default gen_random_uuid(),
    "reg_no" text,
    "bio" text,
    "qualification" text,
    "usersId" uuid
);


create table "public"."users" (
    "id" uuid not null default gen_random_uuid(),
    "first_name" text not null,
    "last_name" text not null,
    "mail_id" text not null,
    "address" text not null,
    "sem_no" text not null,
    "role" "Roles" not null,
    "college_code" text not null,
    "branch_name" text not null,
    "password" text
);


CREATE UNIQUE INDEX branch_branch_name_key ON public.branch USING btree (branch_name);

CREATE UNIQUE INDEX branch_pkey ON public.branch USING btree (branch_name);

CREATE UNIQUE INDEX college_college_code_key ON public.college USING btree (college_code);

CREATE UNIQUE INDEX college_pkey ON public.college USING btree (college_code);

CREATE UNIQUE INDEX favourites_pkey ON public.favourites USING btree (fav_id);

CREATE UNIQUE INDEX notes_pkey ON public.notes USING btree (id);

CREATE UNIQUE INDEX questions_details_pkey ON public.questions_details USING btree (q_id);

CREATE UNIQUE INDEX review_pkey ON public.review USING btree (id);

CREATE UNIQUE INDEX review_reply_pkey ON public.review_reply USING btree (id);

CREATE UNIQUE INDEX review_reply_review_reply_id_key ON public.review_reply USING btree (review_reply_id);

CREATE UNIQUE INDEX semesters_pkey ON public.semesters USING btree (sem_no);

CREATE UNIQUE INDEX semesters_sem_no_key ON public.semesters USING btree (sem_no);

CREATE UNIQUE INDEX session_details_pkey ON public.session_details USING btree (session_id);

CREATE UNIQUE INDEX student_answers_pkey ON public.student_answers USING btree (id);

CREATE UNIQUE INDEX student_test_details_pkey ON public.student_test_details USING btree (id);

CREATE UNIQUE INDEX subjects_pkey ON public.subjects USING btree (sub_code);

CREATE UNIQUE INDEX test_details_pkey ON public.test_details USING btree (test_id);

CREATE UNIQUE INDEX test_history_pkey ON public.test_history USING btree (id);

CREATE UNIQUE INDEX user_details_pkey ON public.user_details USING btree (id);

CREATE UNIQUE INDEX user_details_reg_no_key ON public.user_details USING btree (reg_no);

CREATE UNIQUE INDEX users_mail_id_key ON public.users USING btree (mail_id);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."branch" add constraint "branch_pkey" PRIMARY KEY using index "branch_pkey";

alter table "public"."college" add constraint "college_pkey" PRIMARY KEY using index "college_pkey";

alter table "public"."favourites" add constraint "favourites_pkey" PRIMARY KEY using index "favourites_pkey";

alter table "public"."notes" add constraint "notes_pkey" PRIMARY KEY using index "notes_pkey";

alter table "public"."questions_details" add constraint "questions_details_pkey" PRIMARY KEY using index "questions_details_pkey";

alter table "public"."review" add constraint "review_pkey" PRIMARY KEY using index "review_pkey";

alter table "public"."review_reply" add constraint "review_reply_pkey" PRIMARY KEY using index "review_reply_pkey";

alter table "public"."semesters" add constraint "semesters_pkey" PRIMARY KEY using index "semesters_pkey";

alter table "public"."session_details" add constraint "session_details_pkey" PRIMARY KEY using index "session_details_pkey";

alter table "public"."student_answers" add constraint "student_answers_pkey" PRIMARY KEY using index "student_answers_pkey";

alter table "public"."student_test_details" add constraint "student_test_details_pkey" PRIMARY KEY using index "student_test_details_pkey";

alter table "public"."subjects" add constraint "subjects_pkey" PRIMARY KEY using index "subjects_pkey";

alter table "public"."test_details" add constraint "test_details_pkey" PRIMARY KEY using index "test_details_pkey";

alter table "public"."test_history" add constraint "test_history_pkey" PRIMARY KEY using index "test_history_pkey";

alter table "public"."user_details" add constraint "user_details_pkey" PRIMARY KEY using index "user_details_pkey";

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."favourites" add constraint "favourites_notes_id_fkey" FOREIGN KEY (notes_id) REFERENCES notes(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."favourites" validate constraint "favourites_notes_id_fkey";

alter table "public"."favourites" add constraint "favourites_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."favourites" validate constraint "favourites_usersId_fkey";

alter table "public"."notes" add constraint "notes_branch_name_fkey" FOREIGN KEY (branch_name) REFERENCES branch(branch_name) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_branch_name_fkey";

alter table "public"."notes" add constraint "notes_sem_no_fkey" FOREIGN KEY (sem_no) REFERENCES semesters(sem_no) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_sem_no_fkey";

alter table "public"."notes" add constraint "notes_sub_code_fkey" FOREIGN KEY (sub_code) REFERENCES subjects(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_sub_code_fkey";

alter table "public"."notes" add constraint "notes_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_usersId_fkey";

alter table "public"."questions_details" add constraint "questions_details_test_id_fkey" FOREIGN KEY (test_id) REFERENCES test_details(test_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."questions_details" validate constraint "questions_details_test_id_fkey";

alter table "public"."review" add constraint "review_notes_id_fkey" FOREIGN KEY (notes_id) REFERENCES notes(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review" validate constraint "review_notes_id_fkey";

alter table "public"."review" add constraint "review_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review" validate constraint "review_user_id_fkey";

alter table "public"."review_reply" add constraint "review_reply_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES review(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review_reply" validate constraint "review_reply_reviewId_fkey";

alter table "public"."review_reply" add constraint "review_reply_review_reply_id_fkey" FOREIGN KEY (review_reply_id) REFERENCES review_reply(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."review_reply" validate constraint "review_reply_review_reply_id_fkey";

alter table "public"."review_reply" add constraint "review_reply_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review_reply" validate constraint "review_reply_usersId_fkey";

alter table "public"."session_details" add constraint "session_details_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."session_details" validate constraint "session_details_usersId_fkey";

alter table "public"."student_answers" add constraint "student_answers_q_id_fkey" FOREIGN KEY (q_id) REFERENCES questions_details(q_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student_answers" validate constraint "student_answers_q_id_fkey";

alter table "public"."student_answers" add constraint "student_answers_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student_answers" validate constraint "student_answers_usersId_fkey";

alter table "public"."student_test_details" add constraint "student_test_details_test_id_fkey" FOREIGN KEY (test_id) REFERENCES test_details(test_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student_test_details" validate constraint "student_test_details_test_id_fkey";

alter table "public"."student_test_details" add constraint "student_test_details_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."student_test_details" validate constraint "student_test_details_usersId_fkey";

alter table "public"."subjects" add constraint "subjects_sem_no_fkey" FOREIGN KEY (sem_no) REFERENCES semesters(sem_no) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."subjects" validate constraint "subjects_sem_no_fkey";

alter table "public"."test_details" add constraint "test_details_sub_code_fkey" FOREIGN KEY (sub_code) REFERENCES subjects(sub_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."test_details" validate constraint "test_details_sub_code_fkey";

alter table "public"."test_details" add constraint "test_details_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."test_details" validate constraint "test_details_usersId_fkey";

alter table "public"."test_history" add constraint "test_history_test_id_fkey" FOREIGN KEY (test_id) REFERENCES test_details(test_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."test_history" validate constraint "test_history_test_id_fkey";

alter table "public"."test_history" add constraint "test_history_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."test_history" validate constraint "test_history_usersId_fkey";

alter table "public"."user_details" add constraint "user_details_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."user_details" validate constraint "user_details_usersId_fkey";

alter table "public"."users" add constraint "users_branch_name_fkey" FOREIGN KEY (branch_name) REFERENCES branch(branch_name) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."users" validate constraint "users_branch_name_fkey";

alter table "public"."users" add constraint "users_college_code_fkey" FOREIGN KEY (college_code) REFERENCES college(college_code) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."users" validate constraint "users_college_code_fkey";

alter table "public"."users" add constraint "users_sem_no_fkey" FOREIGN KEY (sem_no) REFERENCES semesters(sem_no) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."users" validate constraint "users_sem_no_fkey";


