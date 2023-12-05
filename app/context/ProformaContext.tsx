'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProformaContextProps {
    monthlyRentInput: any
    salePriceInput: any
    propTaxInput: any
    propInsuranceInput: any
    propUtilitiesInput: any
    propManagementInput: any
    propVacancyInput: any
    propMaintenanceInput: any
    grossRentOutput: any
    propManagementOutput: any
    propTaxOutput: any
    propVacancyOutput: any
    propMaintenanceOutput: any
    propInsuranceOutput: any
    propUtilitiesOutput: any
    totalOpexOutput: any
    monthlyNoiOutput: any
    annualNoiOutput: any
    capRateOutput: any
    setMonthlyRentInput: any
    setSalePriceInput: any
    setPropTaxInput: any
    setPropInsuranceInput: any
    setPropUtilitiesInput: any
    setPropManagementInput: any
    setPropVacancyInput: any
    setPropMaintenanceInput: any
    setGrossRentOutput: any
    setPropManagementOutput: any
    setPropTaxOutput: any
    setPropVacancyOutput: any
    setPropMaintenanceOutput: any
    setPropInsuranceOutput: any
    setPropUtilitiesOutput: any
    setTotalOpexOutput: any
    setMonthlyNoiOutput: any
    setAnnualNoiOutput: any
    setCapRateOutput: any
}

const ProformaContext = createContext<ProformaContextProps | undefined>(undefined);


const ProformaProvider = ({ children }: any) => {
    // Pro forma inputs
    const [monthlyRentInput, setMonthlyRentInput] = useState(0);
    const [salePriceInput, setSalePriceInput] = useState(0);
    const [propTaxInput, setPropTaxInput] = useState(0);
    const [propInsuranceInput, setPropInsuranceInput] = useState(0);
    const [propUtilitiesInput, setPropUtilitiesInput] = useState(0);
    const [propManagementInput, setPropManagementInput] = useState(0);
    const [propVacancyInput, setPropVacancyInput] = useState(0);
    const [propMaintenanceInput, setPropMaintenanceInput] = useState(0);
    // Pro forma outputs
    // const [grossRentOutput, setGrossRentOutput] = useState('');
    // const [propManagementOutput, setPropManagementOutput] = useState('');
    // const [propTaxOutput, setPropTaxOutput] = useState('');
    // const [propVacancyOutput, setPropVacancyOutput] = useState('');
    // const [propMaintenanceOutput, setPropMaintenanceOutput] = useState('');
    // const [propInsuranceOutput, setPropInsuranceOutput] = useState('');
    // const [propUtilitiesOutput, setPropUtilitiesOutput] = useState('');
    const [totalOpexOutput, setTotalOpexOutput] = useState(0);
    const [monthlyNoiOutput, setMonthlyNoiOutput] = useState(0);
    const [annualNoiOutput, setAnnualNoiOutput] = useState(0);
    const [capRateOutput, setCapRateOutput] = useState(0);

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

        setTotalOpexOutput(totalOpexCalc);
        setMonthlyNoiOutput(monthlyNoiCalc);
        setAnnualNoiOutput(annualNoiCalc);
        setCapRateOutput(capRateCalc);
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
        // grossRentOutput,
        // propManagementOutput,
        // propTaxOutput,
        // propVacancyOutput,
        // propMaintenanceOutput,
        // propInsuranceOutput,
        // propUtilitiesOutput,
        totalOpexOutput,
        monthlyNoiOutput,
        annualNoiOutput,
        capRateOutput,
        setMonthlyRentInput,
        setSalePriceInput,
        setPropTaxInput,
        setPropInsuranceInput,
        setPropUtilitiesInput,
        setPropManagementInput,
        setPropVacancyInput,
        setPropMaintenanceInput,
        // setGrossRentOutput,
        // setPropManagementOutput,
        // setPropTaxOutput,
        // setPropVacancyOutput,
        // setPropMaintenanceOutput,
        // setPropInsuranceOutput,
        // setPropUtilitiesOutput,
        setTotalOpexOutput,
        setMonthlyNoiOutput,
        setAnnualNoiOutput,
        setCapRateOutput,
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