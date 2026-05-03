import React, { createContext, useContext, useState, ReactNode } from 'react';

type CityContextType = {
  selectedGlobalCity: string | null;
  setSelectedGlobalCity: (city: string | null) => void;
  availableCities: string[];
};

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedGlobalCity, setSelectedGlobalCity] = useState<string | null>('Rosario');
  const availableCities = ['Rosario', 'CABA', 'Córdoba', 'San Francisco'];

  return (
    <CityContext.Provider value={{ selectedGlobalCity, setSelectedGlobalCity, availableCities }}>
      {children}
    </CityContext.Provider>
  );
}

export function useGlobalCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useGlobalCity must be used within a CityProvider');
  }
  return context;
}
