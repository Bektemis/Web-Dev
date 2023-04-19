export interface Company {
    id: number;
    name: string;
    description: string;
    city: string;
  }
  
  export interface Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: Company;
  }
  
