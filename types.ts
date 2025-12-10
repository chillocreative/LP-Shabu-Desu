import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  price: string;
  image: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}