'use client'
import React, { createContext, useContext, useState } from 'react';
import AccordionDemo from '../ui/AccordionDemo';
import Tooltips from '../ui/Tooltips';
import Watchlist from '../components/svg/Watchlist';

interface PortfolioContextProps {
    portfolioHoldings: PropertyInfo;
    watchlist: string[];
    totalValue: number[];
    addToPortfolio: (propertyInfo: PropertyInfo) => void;
    addToWatchlist: (propertyID: string) => void;
    addToTotalValue: (listingPrice: number) => void;
}

interface PropertyInfo {
    property_id: string;
    state: string;
    state_code: string;
    listing_price: number;
  }

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

const PortfolioProvider = ({ children }: any) => {
    const [portfolioHoldings, setPortfolioHoldings] = useState<PropertyInfo[]>([]);
    const [watchlist, setWatchlist] = useState<string[]>([]);
    const [totalValue, setTotalValue] = useState<number[]>([]);

    // Portfolio context
    // The function takes a PropertyInfo object as an argument, and when called, it adds that object to the array.
    const addToPortfolio = (propertyInfo: PropertyInfo) => {
        setPortfolioHoldings([...portfolioHoldings, propertyInfo]);
    };

    const addToWatchlist = (propertyID: string) => {
        setWatchlist([...watchlist, propertyID]);
    };

    const addToTotalValue = (listingPrice: number) => {
        setTotalValue([...totalValue, listingPrice])
    }

    const contextValue = {
        portfolioHoldings,
        watchlist,
        totalValue,
        addToPortfolio,
        addToWatchlist,
        addToTotalValue,
    };

    return (
        <PortfolioContext.Provider value={contextValue}>
            {children}
        </PortfolioContext.Provider>
    );
};


const usePortfolioContext = (): PortfolioContextProps => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolioContext must be used within a PortfolioContext provider');
    }
    return context;
};

export { PortfolioProvider, usePortfolioContext, PortfolioContext };
