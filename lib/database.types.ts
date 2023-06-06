export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      todos: {
        Row: {
          created_at: string
          id: string
          is_complete: boolean
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_complete?: boolean
          title: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_complete?: boolean
          title?: string
          user_id?: string
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
