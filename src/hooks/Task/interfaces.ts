export interface Task {
  id?: string;
  title: string;
  category: string;
  description?: string;
  check: boolean;
  email?: string;
  created_at?: string;
  updated_at?: string;
}
