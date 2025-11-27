export interface Workout {
  id: string;
  title: string;
  duration: string;
  calories: string;
  image: string;
  type: 'Isometric' | 'HIIT';
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
