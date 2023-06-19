export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      Account: {
        Row: {
          access_token: string | null
          expires_at: number | null
          id: string
          id_token: string | null
          provider: string
          providerAccountId: string
          refresh_token: string | null
          scope: string | null
          session_state: string | null
          token_type: string | null
          type: string
          userId: string
        }
        Insert: {
          access_token?: string | null
          expires_at?: number | null
          id?: string
          id_token?: string | null
          provider: string
          providerAccountId: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type: string
          userId: string
        }
        Update: {
          access_token?: string | null
          expires_at?: number | null
          id?: string
          id_token?: string | null
          provider?: string
          providerAccountId?: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type?: string
          userId?: string
        }
      }
      answers: {
        Row: {
          answer: string
          id: string
          marks: number
          questionsId: string | null
          userId: string | null
        }
        Insert: {
          answer: string
          id?: string
          marks: number
          questionsId?: string | null
          userId?: string | null
        }
        Update: {
          answer?: string
          id?: string
          marks?: number
          questionsId?: string | null
          userId?: string | null
        }
      }
      branch: {
        Row: {
          branch_name: string
        }
        Insert: {
          branch_name: string
        }
        Update: {
          branch_name?: string
        }
      }
      college: {
        Row: {
          address: string
          college_code: string
          college_mail: string
          college_name: string
          college_website: string
        }
        Insert: {
          address: string
          college_code: string
          college_mail: string
          college_name: string
          college_website: string
        }
        Update: {
          address?: string
          college_code?: string
          college_mail?: string
          college_name?: string
          college_website?: string
        }
      }
      marks: {
        Row: {
          id: string
          marks: number
          testsId: string | null
          userId: string | null
        }
        Insert: {
          id?: string
          marks: number
          testsId?: string | null
          userId?: string | null
        }
        Update: {
          id?: string
          marks?: number
          testsId?: string | null
          userId?: string | null
        }
      }
      notes: {
        Row: {
          branch_name: string
          dislikes: number
          file_url: string | null
          id: string
          likes: number
          limit_visibility: boolean | null
          sem_no: string
          sub_code: string
          title: string
          unit_name: string
          unit_no: string
          uploaded_date: string | null
          usersId: string
        }
        Insert: {
          branch_name: string
          dislikes: number
          file_url?: string | null
          id?: string
          likes: number
          limit_visibility?: boolean | null
          sem_no: string
          sub_code: string
          title: string
          unit_name: string
          unit_no: string
          uploaded_date?: string | null
          usersId: string
        }
        Update: {
          branch_name?: string
          dislikes?: number
          file_url?: string | null
          id?: string
          likes?: number
          limit_visibility?: boolean | null
          sem_no?: string
          sub_code?: string
          title?: string
          unit_name?: string
          unit_no?: string
          uploaded_date?: string | null
          usersId?: string
        }
      }
      questions: {
        Row: {
          answer: string
          choices: string[] | null
          id: string
          question: string
          testsId: string | null
        }
        Insert: {
          answer: string
          choices?: string[] | null
          id?: string
          question: string
          testsId?: string | null
        }
        Update: {
          answer?: string
          choices?: string[] | null
          id?: string
          question?: string
          testsId?: string | null
        }
      }
      semesters: {
        Row: {
          sem_no: string
        }
        Insert: {
          sem_no: string
        }
        Update: {
          sem_no?: string
        }
      }
      Session: {
        Row: {
          expires: string
          id: string
          sessionToken: string
          userId: string
        }
        Insert: {
          expires: string
          id?: string
          sessionToken: string
          userId: string
        }
        Update: {
          expires?: string
          id?: string
          sessionToken?: string
          userId?: string
        }
      }
      subjects: {
        Row: {
          sem_no: string
          sub_code: string
          sub_name: string
        }
        Insert: {
          sem_no: string
          sub_code: string
          sub_name: string
        }
        Update: {
          sem_no?: string
          sub_code?: string
          sub_name?: string
        }
      }
      tests: {
        Row: {
          id: string
          subjectsSub_code: string | null
          test_title: string
          userId: string | null
        }
        Insert: {
          id?: string
          subjectsSub_code?: string | null
          test_title: string
          userId?: string | null
        }
        Update: {
          id?: string
          subjectsSub_code?: string | null
          test_title?: string
          userId?: string | null
        }
      }
      User: {
        Row: {
          address: string
          branch_name: string
          college_code: string
          first_name: string
          id: string
          last_name: string
          mail_id: string
          password: string | null
          prof_image: string
          role: Database["public"]["Enums"]["Roles"]
          sem_no: string
        }
        Insert: {
          address: string
          branch_name: string
          college_code: string
          first_name: string
          id?: string
          last_name: string
          mail_id: string
          password?: string | null
          prof_image: string
          role: Database["public"]["Enums"]["Roles"]
          sem_no: string
        }
        Update: {
          address?: string
          branch_name?: string
          college_code?: string
          first_name?: string
          id?: string
          last_name?: string
          mail_id?: string
          password?: string | null
          prof_image?: string
          role?: Database["public"]["Enums"]["Roles"]
          sem_no?: string
        }
      }
      user_details: {
        Row: {
          bio: string | null
          id: string
          qualification: string | null
          reg_no: string | null
          usersId: string | null
        }
        Insert: {
          bio?: string | null
          id?: string
          qualification?: string | null
          reg_no?: string | null
          usersId?: string | null
        }
        Update: {
          bio?: string | null
          id?: string
          qualification?: string | null
          reg_no?: string | null
          usersId?: string | null
        }
      }
      VerificationToken: {
        Row: {
          expires: string
          identifier: string
          token: string
        }
        Insert: {
          expires: string
          identifier: string
          token: string
        }
        Update: {
          expires?: string
          identifier?: string
          token?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Roles: "STAFF" | "STUDENT"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

