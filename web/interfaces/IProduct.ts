interface IProduct {
  [key: string]: any;
  id?: number;
  created_at?: Date;
  status: boolean;
  number: string;
  images: string[] | { name: string, file: File }[];
  orders: any; // Предполагается, что у вас есть определение интерфейса Order
  age: number;
  weight: number;
  height: number;
  has_twins: string;
  menstrual_cycle: string;
  email: string;
  name: string;
  name_en?: string;
  nationality: string;
  nationality_en?: string;
  eye_color: string;
  eye_color_en?: string;
  hair_color: string;
  hair_color_en?: string;
  habits: string;
  habits_en?: string;
  country: string;
  country_en?: string;
  city: string;
  city_en?: string;
  religion: string;
  religion_en?: string;
  profession: string;
  profession_en?: string;
  allergies: string;
  allergies_en?: string;
  chronic_diseases: string;
  chronic_diseases_en?: string;
  reproductive_history: string;
  reproductive_history_en?: string;
  pregnancy_outcome: string;
  pregnancy_outcome_en?: string;
  contraceptive_use: string;
  contraceptive_use_en?: string;
  health_problems: string;
  health_problems_en?: string;
  family_medical_history: string;
  family_medical_history_en?: string;
  additional_info: string;
  additional_info_en?: string;
  meet_child_in_future: string;
  meet_child_in_future_en?: string;
  genetic_history: string;
  genetic_history_en?: string;
}
