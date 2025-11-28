import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum BetState {
  IDLE = 'IDLE',
  BETTING = 'BETTING',
  SIMULATING = 'SIMULATING',
  WON = 'WON',
  LOST = 'LOST'
}