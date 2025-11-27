import { Workout, Benefit } from './types';

export const WORKOUTS: Workout[] = [
  {
    id: '1',
    title: 'Hot Yoga',
    duration: '30 Min',
    calories: '200-400',
    image: 'https://images.unsplash.com/photo-1544367563-12123d895951?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Isometric'
  },
  {
    id: '2',
    title: 'Hot Pilates',
    duration: '30 Min',
    calories: '250-450',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Isometric'
  },
  {
    id: '3',
    title: 'Hot Cycle',
    duration: '15 Min',
    calories: '300-500',
    image: 'https://images.unsplash.com/photo-1534891856194-20b171c7b8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'HIIT'
  },
  {
    id: '4',
    title: 'Hot Blast',
    duration: '15 Min',
    calories: '300-500',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'HIIT'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Muscle Recovery',
    description: 'Infrared heat penetrates tissue to accelerate recovery and reduce soreness.',
    icon: 'Zap'
  },
  {
    id: 'b2',
    title: 'Detoxification',
    description: 'Sweat out toxins at a cellular level through intense infrared energy.',
    icon: 'Droplets'
  },
  {
    id: 'b3',
    title: 'Calorie Burn',
    description: 'Burn more calories in less time by combining heat + exercise.',
    icon: 'Flame'
  }
];
