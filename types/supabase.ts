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
      favourites: {
        Row: {
          fav_id: string
          notes_id: string
          usersId: string
        }
        Insert: {
          fav_id?: string
          notes_id: string
          usersId: string
        }
        Update: {
          fav_id?: string
          notes_id?: string
          usersId?: string
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
      question_papers: {
        Row: {
          branch_name: string
          file_url: string | null
          id: string
          sub_code: string
          title: string
          uploaded_date: string | null
          user_id: string
          year: string
        }
        Insert: {
          branch_name: string
          file_url?: string | null
          id?: string
          sub_code: string
          title: string
          uploaded_date?: string | null
          user_id: string
          year: string
        }
        Update: {
          branch_name?: string
          file_url?: string | null
          id?: string
          sub_code?: string
          title?: string
          uploaded_date?: string | null
          user_id?: string
          year?: string
        }
      }
      questions_details: {
        Row: {
          answer: string
          options: string[] | null
          q_id: string
          question: string
          test_id: string
        }
        Insert: {
          answer: string
          options?: string[] | null
          q_id?: string
          question: string
          test_id: string
        }
        Update: {
          answer?: string
          options?: string[] | null
          q_id?: string
          question?: string
          test_id?: string
        }
      }
      review: {
        Row: {
          id: string
          notes_id: string
          review_content: string
          uploaded_date: string | null
          user_id: string
        }
        Insert: {
          id?: string
          notes_id: string
          review_content: string
          uploaded_date?: string | null
          user_id: string
        }
        Update: {
          id?: string
          notes_id?: string
          review_content?: string
          uploaded_date?: string | null
          user_id?: string
        }
      }
      review_reply: {
        Row: {
          content: string
          id: string
          review_reply_id: string | null
          reviewId: string
          usersId: string
        }
        Insert: {
          content: string
          id?: string
          review_reply_id?: string | null
          reviewId: string
          usersId: string
        }
        Update: {
          content?: string
          id?: string
          review_reply_id?: string | null
          reviewId?: string
          usersId?: string
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
      student_answers: {
        Row: {
          answer: string
          id: string
          q_id: string
          usersId: string
        }
        Insert: {
          answer: string
          id?: string
          q_id: string
          usersId: string
        }
        Update: {
          answer?: string
          id?: string
          q_id?: string
          usersId?: string
        }
      }
      student_test_details: {
        Row: {
          duration: string
          id: string
          submitted_date: string
          test_id: string
          total_marks: number
          usersId: string
        }
        Insert: {
          duration?: string
          id?: string
          submitted_date?: string
          test_id: string
          total_marks: number
          usersId: string
        }
        Update: {
          duration?: string
          id?: string
          submitted_date?: string
          test_id?: string
          total_marks?: number
          usersId?: string
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
      test_details: {
        Row: {
          conduction_date: string | null
          end_date: string | null
          lifetime: boolean | null
          sem_no: string | null
          sub_code: string
          test_id: string
          test_title: string
          timelimit: string | null
          usersId: string
        }
        Insert: {
          conduction_date?: string | null
          end_date?: string | null
          lifetime?: boolean | null
          sem_no?: string | null
          sub_code: string
          test_id?: string
          test_title: string
          timelimit?: string | null
          usersId: string
        }
        Update: {
          conduction_date?: string | null
          end_date?: string | null
          lifetime?: boolean | null
          sem_no?: string | null
          sub_code?: string
          test_id?: string
          test_title?: string
          timelimit?: string | null
          usersId?: string
        }
      }
      test_history: {
        Row: {
          conduction_date: string
          id: string
          marks_allocated: number
          submitted_date: string
          test_id: string
          usersId: string
        }
        Insert: {
          conduction_date?: string
          id?: string
          marks_allocated: number
          submitted_date?: string
          test_id: string
          usersId: string
        }
        Update: {
          conduction_date?: string
          id?: string
          marks_allocated?: number
          submitted_date?: string
          test_id?: string
          usersId?: string
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
      users: {
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

