export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 11, suffix: "+", label: "Metų patirties" },
  { value: 500, suffix: "+", label: "Atliktų projektų" },
  { value: 100, suffix: "+", label: "Patenkintų klientų" },
  { value: 4, suffix: "", label: "Technikos vienetai" },
];
