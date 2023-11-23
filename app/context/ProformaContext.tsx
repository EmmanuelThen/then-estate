'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProformaContextProps {
    monthlyRentInput: number | string
    salePriceInput: number | string
    propTaxInput: number | string
    propInsuranceInput: number | string
    propUtilitiesInput: number | string
    propManagementInput: number | string
    propVacancyInput: number | string
    propMaintenanceInput: number | string
    grossRentOutput: number | string
    propManagementOutput: number | string
    propTaxOutput: number | string
    propVacancyOutput: number | string
    propMaintenanceOutput: number | string
    propInsuranceOutput: number | string
    propUtilitiesOutput: number | string
    totalOpexOutput: number | string
    monthlyNoiOutput: number | string
    annualNoiOutput: number | string
    capRateOutput: number | string
}

const ProformaContext = createContext<ProformaContextProps | undefined>(undefined);


const ProformaProvider = ({ children }: any) => {
    // Pro forma inputs
    const [monthlyRentInput, setMonthlyRentInput] = useState('');
    const [salePriceInput, setSalePriceInput] = useState('');
    const [propTaxInput, setPropTaxInput] = useState('');
    const [propInsuranceInput, setPropInsuranceInput] = useState('');
    const [propUtilitiesInput, setPropUtilitiesInput] = useState('');
    const [propManagementInput, setPropManagementInput] = useState('');
    const [propVacancyInput, setPropVacancyInput] = useState('');
    const [propMaintenanceInput, setPropMaintenanceInput] = useState('');
    // Pro forma outputs
    const [grossRentOutput, setGrossRentOutput] = useState('');
    const [propManagementOutput, setPropManagementOutput] = useState('');
    const [propTaxOutput, setPropTaxOutput] = useState('');
    const [propVacancyOutput, setPropVacancyOutput] = useState('');
    const [propMaintenanceOutput, setPropMaintenanceOutput] = useState('');
    const [propInsuranceOutput, setPropInsuranceOutput] = useState('');
    const [propUtilitiesOutput, setPropUtilitiesOutput] = useState('');
    const [totalOpexOutput, setTotalOpexOutput] = useState('');
    const [monthlyNoiOutput, setMonthlyNoiOutput] = useState('');
    const [annualNoiOutput, setAnnualNoiOutput] = useState('');
    const [capRateOutput, setCapRateOutputv] = useState('');

    // Pro forma caluclation
    const calculateProforma = () => {
        const monthlyRent = parseFloat(monthlyRentInput.valueOf);
        const monthlyRentValue = isNaN(monthlyRent) ? 0 : monthlyRent;

        const propManagement = parseFloat(propManagementInput.valueOf);
        const propManagementValue = isNaN(propManagement) ? 0 : propManagement;

        const propTax = parseFloat(propTaxInput.valueOf);
        const propTaxValue = isNaN(propTax) ? 0 : propTax;

        const propVacancy = parseFloat(propVacancyInput.valueOf);
        const propVacancyValue = isNaN(propVacancy) ? 0 : propVacancy;

        const propMaintenance = parseFloat(propMaintenanceInput.valueOf);
        const propMaintenanceValue = isNaN(propMaintenance) ? 0 : propMaintenance;

        const salePrice = parseFloat(salePriceInput.valueOf);

        const propInsurance = parseFloat(propInsuranceInput.valueOf);
        const propInsuranceValue = isNaN(propInsurance) ? 0 : propInsurance;

        const propUtilities = parseFloat(propUtilitiesInput.valueOf);
        const propUtilitiesValue = isNaN(propUtilities) ? 0 : propUtilities;


        //Calculate outputs
        const grossRents = monthlyRentValue;
        const propManagementCalc = (propManagementValue / 100) * grossRents;
        const propTaxCalc = propTaxValue / 12;
        const propVacancyCalc = (propVacancyValue / 100) * grossRents;
        const propMaintenanceCalc = (propMaintenanceValue / 100) * grossRents;
        const propInsuranceCalc = propInsuranceValue;
        const propUtilitiesCalc = propUtilitiesValue;
        const totalOpexCalc = propManagementCalc + propTaxCalc + propInsuranceCalc + propUtilitiesCalc + propVacancyCalc + propMaintenanceCalc;
        const monthlyNoiCalc = grossRents - totalOpexCalc;
        const annualNoiCalc = monthlyNoiCalc * 12;
        const capRateCalc = (annualNoiCalc / salePrice) * 100;

        return capRateCalc;
    }

    // const handleInputChange = (e) => {
    //     // Remove non-numeric characters from the input value
    //     const numericValue = e.target.value.replace(/[^0-9]/g, '');
    //     setMonthlyRentInput(numericValue);
    // };

    const contextValue = {
        monthlyRentInput,
        salePriceInput,
        propTaxInput,
        propInsuranceInput,
        propUtilitiesInput,
        propManagementInput,
        propVacancyInput,
        propMaintenanceInput,
        grossRentOutput,
        propManagementOutput,
        propTaxOutput,
        propVacancyOutput,
        propMaintenanceOutput,
        propInsuranceOutput,
        propUtilitiesOutput,
        totalOpexOutput,
        monthlyNoiOutput,
        annualNoiOutput,
        capRateOutput,
    }

    return (
        <ProformaContext.Provider value={contextValue}>
            {children}
        </ProformaContext.Provider>
    )
}

const useProformaContext = (): ProformaContextProps => {
    const context = useContext(ProformaContext);
    if (!context) {
        throw new Error('usePortfolioContext must be used within a PortfolioContext provider');
    }
    return context;
};

export { ProformaProvider, useProformaContext, ProformaContext };