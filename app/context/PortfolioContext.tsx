'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';


interface PortfolioContextProps {
    portfolioHoldings: PropertyInfo;
    watchlist: PropertyInfo;
    totalValue: number[];
    setPortfolioHoldings: PropertyInfo[];
    setWatchlist: PropertyInfo[];
    setTotalValue: PropertyInfo[];
    addToPortfolio: (propertyInfo: PropertyInfo) => void;
    addToWatchlist: (propertyID: string) => void;
    addToTotalValue: (listingPrice: number) => void;
}

interface PropertyInfo {
    property_id: string;
    address: string;
    state: string;
    state_code: string;
    zip: string;
    type: string;
    city: string
    listing_price: number;
    image: string;
    beds: string;
    baths: string;
    sqft: number;
    price_reduction: number;
    last_sold_price: number;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

const PortfolioProvider = ({ children }: any) => {
    // Checks local storage to see if anything is there and gets it, if not returns an empty array since nothing is there
    const [portfolioHoldings, setPortfolioHoldings] = useState<PropertyInfo[]>(() => {
        const portfolioHoldings = localStorage.getItem('portfolioHoldings');
        return portfolioHoldings ? JSON.parse(portfolioHoldings) : [];
    });
    const [watchlist, setWatchlist] = useState<PropertyInfo[]>(() => {
        const watchlist = localStorage.getItem('watchlist');
        return watchlist ? JSON.parse(watchlist) : [];
    });
    const [totalValue, setTotalValue] = useState<number[]>(() => {
        const storedValue = localStorage.getItem('totalValue');
        return storedValue ? JSON.parse(storedValue) : [];
    });

    // To save to local storage whenever any of the portfolio values change changes
    useEffect(() => {
        localStorage.setItem('portfolioHoldings', JSON.stringify(portfolioHoldings))
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
        localStorage.setItem('totalValue', JSON.stringify(totalValue));
    }, [portfolioHoldings, watchlist, totalValue]);

    // Portfolio context
    const addToPortfolio = (propertyInfo: PropertyInfo) => {
        setPortfolioHoldings([...portfolioHoldings, propertyInfo]);
    };

    const addToWatchlist = (propertyInfo: PropertyInfo) => {
        setWatchlist([...watchlist, propertyInfo]);
    };

    const addToTotalValue = (listingPrice: number) => {
        setTotalValue([...totalValue, listingPrice])
    }

    const contextValue = {
        portfolioHoldings,
        watchlist,
        totalValue,
        setPortfolioHoldings,
        setWatchlist,
        setTotalValue,
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
