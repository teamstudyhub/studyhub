create table "public"."Account" (
    "id" uuid not null default gen_random_uuid(),
    "userId" uuid not null,
    "type" text not null,
    "provider" text not null,
    "providerAccountId" text not null,
    "refresh_token" text,
    "access_token" text,
    "expires_at" integer,
    "token_type" text,
    "scope" text,
    "id_token" text,
    "session_state" text
);


create table "public"."Session" (
    "id" uuid not null default gen_random_uuid(),
    "sessionToken" text not null,
    "userId" uuid not null,
    "expires" timestamp(3) without time zone not null
);


CREATE UNIQUE INDEX "Account_pkey" ON public."Account" USING btree (id);

CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON public."Account" USING btree (provider, "providerAccountId");

CREATE UNIQUE INDEX "Session_pkey" ON public."Session" USING btree (id);

CREATE UNIQUE INDEX "Session_sessionToken_key" ON public."Session" USING btree ("sessionToken");

alter table "public"."Account" add constraint "Account_pkey" PRIMARY KEY using index "Account_pkey";

alter table "public"."Session" add constraint "Session_pkey" PRIMARY KEY using index "Session_pkey";

alter table "public"."Account" add constraint "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."Account" validate constraint "Account_userId_fkey";

alter table "public"."Session" add constraint "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."Session" validate constraint "Session_userId_fkey";

alter table "public"."favourites" add constraint "favourites_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."favourites" validate constraint "favourites_usersId_fkey";

alter table "public"."notes" add constraint "notes_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."notes" validate constraint "notes_usersId_fkey";

alter table "public"."question_papers" add constraint "question_papers_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."question_papers" validate constraint "question_papers_user_id_fkey";

alter table "public"."review" add constraint "review_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review" validate constraint "review_user_id_fkey";

alter table "public"."review_reply" add constraint "review_reply_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review_reply" validate constraint "review_reply_usersId_fkey";


