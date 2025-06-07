export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      levels: {
        Row: {
          clues: Json
          created_at: string
          difficulty: string
          grid_size: number
          id: string
          level_number: number
          published_at: string
        }
        Insert: {
          clues: Json
          created_at?: string
          difficulty: string
          grid_size: number
          id?: string
          level_number: number
          published_at: string
        }
        Update: {
          clues?: Json
          created_at?: string
          difficulty?: string
          grid_size?: number
          id?: string
          level_number?: number
          published_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          access_status: string | null
          avatar_url: string | null
          completedChapters: number[]
          created_at: string | null
          email: string
          full_name: string | null
          grace_period_end: string | null
          id: string
          phone: string | null
          stripe_customer_id: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          access_status?: string | null
          avatar_url?: string | null
          completedChapters?: number[]
          created_at?: string | null
          email: string
          full_name?: string | null
          grace_period_end?: string | null
          id: string
          phone?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          access_status?: string | null
          avatar_url?: string | null
          completedChapters?: number[]
          created_at?: string | null
          email?: string
          full_name?: string | null
          grace_period_end?: string | null
          id?: string
          phone?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      shares: {
        Row: {
          total_share: number
        }
        Insert: {
          total_share?: number
        }
        Update: {
          total_share?: number
        }
        Relationships: []
      }
      user_levels: {
        Row: {
          back_count: number
          completed_at: string
          completed_path: Json | null
          id: string
          is_valid: boolean | null
          level_id: string
          time_taken: number
          user_id: string
        }
        Insert: {
          back_count?: number
          completed_at?: string
          completed_path?: Json | null
          id?: string
          is_valid?: boolean | null
          level_id: string
          time_taken: number
          user_id: string
        }
        Update: {
          back_count?: number
          completed_at?: string
          completed_path?: Json | null
          id?: string
          is_valid?: boolean | null
          level_id?: string
          time_taken?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_levels_level_id_fkey"
            columns: ["level_id"]
            isOneToOne: false
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_levels_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_progress: {
        Row: {
          back_count: number
          elapsed_seconds: number
          invalid_order: boolean | null
          last_history: Json | null
          last_path: Json
          last_updated_at: string
          level_id: string
          started_at: string
          user_id: string
        }
        Insert: {
          back_count?: number
          elapsed_seconds?: number
          invalid_order?: boolean | null
          last_history?: Json | null
          last_path?: Json
          last_updated_at?: string
          level_id: string
          started_at?: string
          user_id: string
        }
        Update: {
          back_count?: number
          elapsed_seconds?: number
          invalid_order?: boolean | null
          last_history?: Json | null
          last_path?: Json
          last_updated_at?: string
          level_id?: string
          started_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_level_id_fkey"
            columns: ["level_id"]
            isOneToOne: false
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_completed_level: {
        Args:
          | { uid: string; lvl_id: string }
          | { uid: string; lvl_number: number }
        Returns: {
          level_id: string
          time_taken: number
          completed_path: Json
          completed_at: string
          back_count: number
        }[]
      }
      get_completed_levels: {
        Args: { uid: string }
        Returns: {
          level_id: string
          level_number: number
          difficulty: string
          time_taken: number
          back_count: number
          completed_path: Json
          completed_at: string
        }[]
      }
      get_leaderboard_by_level_number_with_rank: {
        Args: { level_number_input: number }
        Returns: {
          user_id: string
          player: string
          time_taken: number
          back_count: number
          rank: number
        }[]
      }
      get_leaderboard_with_rank: {
        Args: Record<PropertyKey, never>
        Returns: {
          user_id: string
          player: string
          levels: number
          total_time: number
          total_back_count: number
          rank: number
        }[]
      }
      get_next_levels: {
        Args: { user_uuid: string; limit_count?: number; offset_count?: number }
        Returns: {
          id: string
          level_number: number
          difficulty: string
          published_at: string
        }[]
      }
      get_total_players: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_total_players_by_level_number: {
        Args: { level_number_input: number }
        Returns: number
      }
      increment_total_share: {
        Args: Record<PropertyKey, never>
        Returns: undefined
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
