import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { usePortfolioContext } from '../context/PortfolioContext';
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
// import * as Tabs from '@radix-ui/react-tabs'

import Tooltips from './Tooltips';
import Xmark from '../components/svg/Xmark';
import ChevronLeft from '../components/svg/ChevronLeft';
import ChevronRight from '../components/svg/ChevronRight';
import { useForm, SubmitHandler } from "react-hook-form";
import Sparkles from '../components/svg/Sparkles';
import List from '../components/svg/List';
import Warning from '../components/svg/Warning';
import ActionButton from './ActionButton';
import Cancel from '../components/svg/Cancel';
import Seperator from './Seperator';
import TabSwitcher from './TabSwitcher';
import Calendar from '../components/svg/Calendar';
import Bed from '../components/svg/Bed';
import Dollar from '../components/svg/Dollar';
import Bath from '../components/svg/Bath';
import AccordionDemo from './AccordionDemo';
import TrendingUpArrow from '../components/svg/TrendingUpArrow';
import GraduationCap from '../components/svg/GraduationCap';
import Star from '../components/svg/Star';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,

} from 'chart.js'
import Watchlist from '../components/svg/Watchlist';
import LoaderRing from './LoaderRing';
import Checkmark from '../components/svg/Checkmark';
import Modals from '../components/ui/modals';
import Chips from '../components/ui/chips';
import NextToolTip from '../components/ui/tool-tip';
import PrimaryButton from '../components/ui/primary-button';
import Envelope from '../components/svg/Envelope';
import NextTabs from '../components/ui/next-tabs';
import { Tabs, Tab, Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import Carousels from '../components/ui/carousels';

import type { CardProps } from "@nextui-org/react";
import { Icon } from "@iconify/react";




import type { ProductViewItem } from "../components/ui/nextui-carousel";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import ProductViewInfo from "../components/ui/nextui-carousel";








ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,

);

type Props = {
    imageSrc: any
    beds: any
    baths: any
    squareFeet: any
    streetAddress: any
    cityStateZip: any
    city: any
    price: any
    key: any
    width: any
    height: any
    status: any
    branding: any
    type: any
    propertyID: any
    photoCount: any
    agent: any
    agentEmail: any
    advertiserType: any
    newListing: boolean
    listDate: any
    priceReduction: any
    newConstruction: boolean
    fullBaths: number
    halfBaths: number
    lastSoldDate: any
    lastSoldPrice: any
    openHouse: any
    foreclosure: any
    listingID: any
    agent_identification: any
    popUpWidth: any
    popUpHeight: any
    state: any
    stateCode: any
    zip: any
}

const PropertyCard = ({
    imageSrc,
    beds,
    baths,
    squareFeet,
    streetAddress,
    cityStateZip,
    city,
    state,
    stateCode,
    price,
    key,
    width,
    height,
    status,
    branding,
    type,
    propertyID,
    photoCount,
    agent,
    agentEmail,
    advertiserType,
    newListing,
    listDate,
    priceReduction,
    newConstruction,
    fullBaths,
    halfBaths,
    lastSoldDate,
    lastSoldPrice,
    openHouse,
    foreclosure,
    listingID,
    agent_identification,
    popUpWidth,
    popUpHeight,
    zip
}: Props) => {
    const [loading, setLoading] = useState<any>(false);
    const [imageIndex, setImageIndex] = useState<any>(0);
    // const [imageList, setImageList] = useState<any>([]);
    const [propertyImages, setPropertyImages] = useState<any>([])
    const [propertyDetails, setPropertyDetails] = useState<any>({})
    // For chart historic and forecast values
    const [isChartViewHistory, setIsChartViewHistory] = useState<any>(false);
    const [isChartViewForecast, setIsChartViewForecast] = useState<any>(false);
    //For agent list
    const [agentList, setAgentList] = useState<any>([]);
    const [agentID, setAgentID] = useState<any>();
    //For similar homes
    const [similarHomesArray, setSimilarHomesArray] = useState<any>([])
    //PortfolioContext
    const { addToPortfolio, addToWatchlist, addToTotalValue, portfolioHoldings } = usePortfolioContext();
    const [portfolioButtonClicked, setPortfolioButtonClicked] = useState(false);
    const [watchlistButtonClicked, setWatchlistButtonClicked] = useState(false);

    const handleAddToPortfolio = () => {
        setLoading(true);
        addToPortfolio({
            property_id: propertyID,
            address: streetAddress,
            state: state,
            state_code: stateCode,
            city: city,
            zip: zip,
            type: type,
            listing_price: price,
            image: imageSrc,
            beds: beds,
            baths: baths,
            sqft: squareFeet,
            price_reduction: priceReduction,
            last_sold_price: lastSoldPrice,
        });
        // To sum up all prices to display the total value of your portfolio
        addToTotalValue(price);
        setPortfolioButtonClicked(!portfolioButtonClicked)
        console.log(portfolioHoldings)
        setLoading(false);
    }

    const handleAddToWatchlist = () => {
        addToWatchlist({
            property_id: propertyID,
            address: streetAddress,
            city_state_zip: cityStateZip,
            state: state,
            state_code: stateCode,
            listing_price: price,
            image: imageSrc,
            beds: beds,
            baths: baths,
            sqft: squareFeet,
            price_reduction: priceReduction,
            last_sold_price: lastSoldPrice,
        });

        setWatchlistButtonClicked(!watchlistButtonClicked)

    }


    // Test for getPropertyImages api call
    let imagez: any = {
        "data": {
            "home_search": {
                "__typename": "SearchHomeResult",
                "results": [
                    {
                        "__typename": "SearchHome",
                        "property_id": "3011800592",
                        "listing_id": "2960390430",
                        "photos": [
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m23193573s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "porch",
                                        "probability": 0.9816616177558899
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m2451827029s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "living_room",
                                        "probability": 0.8160191774368286
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m2935197212s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "bedroom",
                                        "probability": 0.9994590878486633
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m563880541s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "kitchen",
                                        "probability": 0.9999990463256836
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m3511243318s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "bathroom",
                                        "probability": 0.9999939203262329
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m2161617325s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "bedroom",
                                        "probability": 0.9824330806732178
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m720758189s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "bedroom",
                                        "probability": 0.9842005372047424
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m2141557463s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "kitchen",
                                        "probability": 0.9956231713294983
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m2484862310s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "unknown",
                                        "probability": 0.9416227340698242
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m1110797416s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "unknown",
                                        "probability": 0.5906724333763123
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m2315086288s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "house_view",
                                        "probability": 0.4700235426425934
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m173266234s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "unknown",
                                        "probability": 0.9308441281318665
                                    }
                                ]
                            },
                            {
                                "__typename": "HomePhoto",
                                "href": "https://ap.rdcpix.com/7fec61b626056814d4d12a198d6224f5l-m4277145279s.jpg",
                                "tags": [
                                    {
                                        "__typename": "Tag",
                                        "label": "house_view",
                                        "probability": 0.746044397354126
                                    },
                                    {
                                        "__typename": "Tag",
                                        "label": "road_view",
                                        "probability": 0.9278570413589478
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }

    // Test for getpropertyDetails api call
    let propertyDetailz: any = {
        "data": {
            "home": {
                "__typename": "Home",
                "property_id": "6397624204",
                "last_update_date": "2023-10-11T16:27:06Z",
                "last_price_change_date": null,
                "last_price_change_amount": null,
                "listing_id": "2960444405",
                "status": "for_sale",
                "href": "https://www.realtor.com/realestateandhomes-detail/5518-Lee-Marie-Ln_Charlotte_NC_28269_M63976-24204",
                "days_on_market": null,
                "list_date": "2023-10-11T16:45:21Z",
                "create_date": "2023-10-11T16:45:21Z",
                "mortgage": {
                    "__typename": "Mortgage",
                    "property_tax_rate": 0.00531034,
                    "rates_url": "https://www.realtor.com/mortgage/rates/?from=mobile#zip=28269&property_price=348000&mlid=6397624204",
                    "insurance_rate": 0.003,
                    "estimate": {
                        "__typename": "MortgageEstimate",
                        "loan_amount": 278000,
                        "monthly_payment": 2328,
                        "total_payment": 742251,
                        "down_payment": 70000,
                        "average_rate": {
                            "__typename": "Rate",
                            "rate": 0.08113,
                            "loan_type": {
                                "__typename": "LoanType",
                                "term": 30
                            }
                        },
                        "monthly_payment_details": [
                            {
                                "__typename": "MonthlyOwnershipExpense",
                                "type": "principal_and_interest",
                                "amount": 2062,
                                "display_name": "Principal & Interest"
                            },
                            {
                                "__typename": "MonthlyOwnershipExpense",
                                "type": "home_insurance",
                                "amount": 87,
                                "display_name": "Home Insurance"
                            },
                            {
                                "__typename": "MonthlyOwnershipExpense",
                                "type": "hoa_fees",
                                "amount": 25,
                                "display_name": "HOA Fees"
                            },
                            {
                                "__typename": "MonthlyOwnershipExpense",
                                "type": "mortgage_insurance",
                                "amount": 0,
                                "display_name": "Mortgage Insurance"
                            },
                            {
                                "__typename": "MonthlyOwnershipExpense",
                                "type": "property_tax",
                                "amount": 154,
                                "display_name": "Property Tax"
                            }
                        ]
                    },
                    "average_rates": [
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "thirty_year_fix"
                            },
                            "rate": 0.08113
                        },
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "twenty_year_fix"
                            },
                            "rate": 0.07986
                        },
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "fifteen_year_fix"
                            },
                            "rate": 0.0725
                        },
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "ten_year_fix"
                            },
                            "rate": 0.07174
                        },
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "thirty_year_fha"
                            },
                            "rate": 0.07643
                        },
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "thirty_year_va"
                            },
                            "rate": 0.07604
                        },
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "five_one_arm"
                            },
                            "rate": 0.07339
                        },
                        {
                            "__typename": "Rate",
                            "loan_type": {
                                "__typename": "LoanType",
                                "loan_id": "seven_one_arm"
                            },
                            "rate": 0.07654
                        }
                    ]
                },
                "hoa": {
                    "__typename": "HomeHOA",
                    "fee": 25,
                    "historic_fee": true
                },
                "buyers": null,
                "description": {
                    "__typename": "HomeDescription",
                    "baths_consolidated": "2.5",
                    "baths": 3,
                    "baths_min": null,
                    "baths_max": null,
                    "heating": null,
                    "cooling": null,
                    "beds": 4,
                    "beds_min": null,
                    "beds_max": null,
                    "garage": 2,
                    "garage_min": null,
                    "garage_max": null,
                    "pool": null,
                    "sqft": 1704,
                    "sqft_min": null,
                    "sqft_max": null,
                    "styles": null,
                    "lot_sqft": 6534,
                    "units": null,
                    "stories": 2,
                    "type": "single_family",
                    "sub_type": null,
                    "text": "This four bedroom/two and a half bath home offers it all! Spacious floor plan with brand new carpet, LVP flooring and fresh paint throughout! The home is in excellent condition. Brand new oven and refrigerator. Large bedrooms, formal dining and lots of light. Attached two car garage. Enjoy the spacious, fully fenced backyard with patio for outdoor leisure. Quiet end of street location and just minutes to shopping and dining! Quick drive to uptown! This one is a gem!",
                    "year_built": 2016,
                    "name": null
                },
                "pet_policy": null,
                "assigned_schools": {
                    "__typename": "SchoolList",
                    "schools": [
                        {
                            "__typename": "School",
                            "district": {
                                "__typename": "SchoolDistrict",
                                "name": "Charlotte-Mecklenburg School District",
                                "id": "06195716161",
                                "phone": null,
                                "student_count": null,
                                "grades": null
                            }
                        },
                        {
                            "__typename": "School",
                            "district": {
                                "__typename": "SchoolDistrict",
                                "name": "Charlotte-Mecklenburg School District",
                                "id": "06195716161",
                                "phone": null,
                                "student_count": null,
                                "grades": null
                            }
                        },
                        {
                            "__typename": "School",
                            "district": {
                                "__typename": "SchoolDistrict",
                                "name": "Charlotte-Mecklenburg School District",
                                "id": "06195716161",
                                "phone": null,
                                "student_count": null,
                                "grades": null
                            }
                        }
                    ]
                },
                "nearby_schools": {
                    "__typename": "SchoolList",
                    "schools": [
                        {
                            "__typename": "School",
                            "assigned": true,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.336787,
                                "lon": -80.800768
                            },
                            "distance_in_miles": 1.6,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "elementary"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "K",
                                "1",
                                "2",
                                "3",
                                "4",
                                "5"
                            ],
                            "id": "0752874331",
                            "name": "David Cox Road Elementary",
                            "parent_rating": 4,
                            "rating": 2,
                            "student_count": 660
                        },
                        {
                            "__typename": "School",
                            "assigned": true,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.365073,
                                "lon": -80.769324
                            },
                            "distance_in_miles": 4.1,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "high"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0752907251",
                            "name": "Mallard Creek High",
                            "parent_rating": 4,
                            "rating": 4,
                            "student_count": 2432
                        },
                        {
                            "__typename": "School",
                            "assigned": true,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.376337,
                                "lon": -80.762046
                            },
                            "distance_in_miles": 5,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "middle"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "6",
                                "7",
                                "8"
                            ],
                            "id": "0752969051",
                            "name": "Ridge Road Middle School",
                            "parent_rating": 2,
                            "rating": 3,
                            "student_count": 1281
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.318542,
                                "lon": -80.827637
                            },
                            "distance_in_miles": 1.2,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195714261",
                                "name": null
                            },
                            "education_levels": [
                                "elementary",
                                "middle",
                                "high"
                            ],
                            "funding_type": "private",
                            "grades": [
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0753030551",
                            "name": "Charlotte Leadership Academy",
                            "parent_rating": null,
                            "rating": null,
                            "student_count": 22
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.318542,
                                "lon": -80.827637
                            },
                            "distance_in_miles": 1.2,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195714261",
                                "name": null
                            },
                            "education_levels": [
                                "elementary",
                                "middle",
                                "high"
                            ],
                            "funding_type": "private",
                            "grades": [
                                "K",
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0753032541",
                            "name": "Charlotte Leadership Academy",
                            "parent_rating": null,
                            "rating": null,
                            "student_count": 49
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.306432,
                                "lon": -80.828536
                            },
                            "distance_in_miles": 1.3,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "elementary"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "K",
                                "1",
                                "2",
                                "3",
                                "4",
                                "5"
                            ],
                            "id": "0752875831",
                            "name": "Winding Springs Elementary",
                            "parent_rating": 3,
                            "rating": 4,
                            "student_count": 775
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.295007,
                                "lon": -80.796849
                            },
                            "distance_in_miles": 1.4,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "high"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0752906141",
                            "name": "Performance Learning",
                            "parent_rating": null,
                            "rating": 4,
                            "student_count": 145
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.291752,
                                "lon": -80.795311
                            },
                            "distance_in_miles": 1.7,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195714261",
                                "name": null
                            },
                            "education_levels": [
                                "elementary",
                                "middle",
                                "high"
                            ],
                            "funding_type": "private",
                            "grades": [
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0753021311",
                            "name": "King's Academy",
                            "parent_rating": null,
                            "rating": null,
                            "student_count": 16
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.323048,
                                "lon": -80.775604
                            },
                            "distance_in_miles": 1.9,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195720331",
                                "name": "Queen City Stem School"
                            },
                            "education_levels": [
                                "elementary",
                                "middle"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "K",
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8"
                            ],
                            "id": "0753027151",
                            "name": "Queen City STEM School",
                            "parent_rating": 4,
                            "rating": 3,
                            "student_count": 509
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.300267,
                                "lon": -80.839228
                            },
                            "distance_in_miles": 2.1,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "middle"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "6",
                                "7",
                                "8"
                            ],
                            "id": "0752875501",
                            "name": "Ranson Middle",
                            "parent_rating": 3,
                            "rating": 2,
                            "student_count": 1111
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.300522,
                                "lon": -80.768743
                            },
                            "distance_in_miles": 2.3,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "high"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0752876111",
                            "name": "Julius L. Chambers High School",
                            "parent_rating": 3,
                            "rating": 2,
                            "student_count": 1973
                        }
                    ]
                },
                "schools": {
                    "__typename": "SchoolList",
                    "schools": [
                        {
                            "__typename": "School",
                            "assigned": true,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.336787,
                                "lon": -80.800768
                            },
                            "distance_in_miles": 1.6,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "elementary"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "K",
                                "1",
                                "2",
                                "3",
                                "4",
                                "5"
                            ],
                            "id": "0752874331",
                            "name": "David Cox Road Elementary",
                            "parent_rating": 4,
                            "rating": 2,
                            "student_count": 660
                        },
                        {
                            "__typename": "School",
                            "assigned": true,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.365073,
                                "lon": -80.769324
                            },
                            "distance_in_miles": 4.1,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "high"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0752907251",
                            "name": "Mallard Creek High",
                            "parent_rating": 4,
                            "rating": 4,
                            "student_count": 2432
                        },
                        {
                            "__typename": "School",
                            "assigned": true,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.376337,
                                "lon": -80.762046
                            },
                            "distance_in_miles": 5,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195716161",
                                "name": "Charlotte-Mecklenburg School District"
                            },
                            "education_levels": [
                                "middle"
                            ],
                            "funding_type": "public",
                            "grades": [
                                "6",
                                "7",
                                "8"
                            ],
                            "id": "0752969051",
                            "name": "Ridge Road Middle School",
                            "parent_rating": 2,
                            "rating": 3,
                            "student_count": 1281
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.318542,
                                "lon": -80.827637
                            },
                            "distance_in_miles": 1.2,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195714261",
                                "name": null
                            },
                            "education_levels": [
                                "elementary",
                                "middle",
                                "high"
                            ],
                            "funding_type": "private",
                            "grades": [
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0753030551",
                            "name": "Charlotte Leadership Academy",
                            "parent_rating": null,
                            "rating": null,
                            "student_count": 22
                        },
                        {
                            "__typename": "School",
                            "assigned": null,
                            "coordinate": {
                                "__typename": "Coordinate",
                                "lat": 35.318542,
                                "lon": -80.827637
                            },
                            "distance_in_miles": 1.2,
                            "district": {
                                "__typename": "SchoolDistrict",
                                "id": "06195714261",
                                "name": null
                            },
                            "education_levels": [
                                "elementary",
                                "middle",
                                "high"
                            ],
                            "funding_type": "private",
                            "grades": [
                                "K",
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11",
                                "12"
                            ],
                            "id": "0753032541",
                            "name": "Charlotte Leadership Academy",
                            "parent_rating": null,
                            "rating": null,
                            "student_count": 49
                        }
                    ]
                },
                "products": {
                    "__typename": "ProductSummary",
                    "products": [
                        "co_broke"
                    ]
                },
                "list_price": 348000,
                "list_price_min": null,
                "list_price_max": null,
                "price_per_sqft": 204,
                "community": null,
                "lead_attributes": {
                    "__typename": "LeadAttributes",
                    "opcity_lead_attributes": {
                        "__typename": "OpCityLeadAttributes",
                        "flip_the_market_enabled": false,
                        "cashback_enabled": false,
                        "phones": null,
                        "local_phone": null
                    },
                    "ready_connect_mortgage": {
                        "__typename": "ReadyConnectMortgage",
                        "show_contact_a_lender": true,
                        "show_veterans_united": true
                    },
                    "show_contact_an_agent": true,
                    "lead_type": "co_broke",
                    "show_lead_form": true,
                    "disclaimer_text": null,
                    "is_tcpa_message_enabled": null,
                    "show_text_leads": true
                },
                "flags": {
                    "__typename": "HomeFlags",
                    "is_contingent": null,
                    "is_garage_present": true,
                    "is_new_construction": null,
                    "is_pending": null,
                    "is_short_sale": null,
                    "is_foreclosure": null,
                    "is_senior_community": null,
                    "is_for_rent": null,
                    "is_deal_available": null,
                    "is_price_excludes_land": null,
                    "is_promotion_present": null,
                    "is_subdivision": null,
                    "is_plan": null,
                    "is_price_reduced": null,
                    "is_new_listing": true,
                    "is_coming_soon": null
                },
                "provider_url": null,
                "source": {
                    "__typename": "MlsSource",
                    "id": "CHNC",
                    "disclaimer": {
                        "__typename": "MlsDisclaimer",
                        "text": "©2023  Canopy MLS.",
                        "href": null
                    },
                    "listing_id": "4075113",
                    "plan_id": null,
                    "spec_id": null,
                    "community_id": null,
                    "name": "CanopyMLS",
                    "type": "mls",
                    "raw": {
                        "__typename": "MlsRawData",
                        "style": null,
                        "tax_amount": null
                    }
                },
                "details": [
                    {
                        "__typename": "HomeDetails",
                        "category": "Bedrooms",
                        "text": [
                            "Bedrooms: 4",
                            "Bedrooms On Upper Level: 4"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Other Rooms",
                        "text": [
                            "Total Rooms: 7"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Bathrooms",
                        "text": [
                            "Total Bathrooms: 3",
                            "Full Bathrooms: 2",
                            "1/2 Bathrooms: 1",
                            "Half Bathrooms On Main Level: 1",
                            "Full Bathrooms On Upper Level: 2"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Interior Features",
                        "text": [
                            "Attic Stairs Pulldown",
                            "Open Floorplan",
                            "Walk-In Closet(s)",
                            "Walk-In Pantry",
                            "Flooring: Carpet, Laminate Wood",
                            "Window Features: Insulated Window(s)"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Appliances",
                        "text": [
                            "Dishwasher",
                            "Disposal",
                            "Electric Range",
                            "Electric Water Heater",
                            "Exhaust Hood",
                            "Refrigerator",
                            "Washer/Dryer Included",
                            "Laundry Features: Laundry Closet, Main Level"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Heating and Cooling",
                        "text": [
                            "Cooling Features: Central Air, Electric",
                            "Heating Features: Electric, Forced Air"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Exterior and Lot Features",
                        "text": [
                            "Fencing: Back Yard, Fenced",
                            "Patio And Porch Features: Front Porch, Patio",
                            "Road Responsibility: Publicly Maintained Road",
                            "Road Surface Type: Paved"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Garage and Parking",
                        "text": [
                            "Driveway: Concrete",
                            "Garage Spaces: 2",
                            "Parking Features: Driveway, Garage Attached, Garage Faces Front"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Land Info",
                        "text": [
                            "Lot Size Acres: 0.15",
                            "Lot Size Square Feet: 6534"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Homeowners Association",
                        "text": [
                            "Association: Yes",
                            "Association Fee: 300",
                            "Association Fee Frequency: Annually",
                            "Calculated Total Monthly Association Fees: 25",
                            "Association Name: Property Management Inc.",
                            "Association Phone: 7048006432"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "School Information",
                        "text": [
                            "Elementary School: David Cox Road",
                            "High School: Mallard Creek"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Other Property Info",
                        "text": [
                            "Source Listing Status: Active",
                            "County: Mecklenburg",
                            "Development Status: Completed",
                            "Directions: Heading east on I-85 N, take exit 41 for Sugar Creek Rd and turn left. Turn right onto Lynn Lee Cir. Turn right onto Lee Marie Ln. Destination is on left.",
                            "Source Property Type: Residential",
                            "Source Neighborhood: Hammond Lake",
                            "Parcel Number: 043-104-60",
                            "Postal Code Plus 4: 7370",
                            "Subdivision: Hammond Lake",
                            "Zoning Description: R100",
                            "Property Subtype: Single Family",
                            "Source System Name: C2C"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Building and Construction",
                        "text": [
                            "Total Square Feet Living: 1704",
                            "Year Built: 2016",
                            "Construction Materials: Vinyl",
                            "Foundation Details: Slab",
                            "Levels: 2 Story",
                            "Property Age: 7",
                            "Structure Type: Site Built",
                            "Total Area Main: 703",
                            "Total Area Upper: 1001"
                        ]
                    },
                    {
                        "__typename": "HomeDetails",
                        "category": "Utilities",
                        "text": [
                            "Sewer: City Sewer",
                            "Cable",
                            "Electricity Connected",
                            "Phone Connected",
                            "Water Source: City Water"
                        ]
                    }
                ],
                "open_houses": null,
                "tax_history": [
                    {
                        "__typename": "TaxHistory",
                        "tax": 1848,
                        "year": 2019,
                        "assessment": {
                            "__typename": "Assessment",
                            "building": 157100,
                            "land": 25000,
                            "total": 182100
                        }
                    },
                    {
                        "__typename": "TaxHistory",
                        "tax": 1771,
                        "year": 2018,
                        "assessment": {
                            "__typename": "Assessment",
                            "building": 104200,
                            "land": 25200,
                            "total": 129400
                        }
                    },
                    {
                        "__typename": "TaxHistory",
                        "tax": 1737,
                        "year": 2017,
                        "assessment": {
                            "__typename": "Assessment",
                            "building": 104200,
                            "land": 25200,
                            "total": 129400
                        }
                    },
                    {
                        "__typename": "TaxHistory",
                        "tax": 326,
                        "year": 2016,
                        "assessment": {
                            "__typename": "Assessment",
                            "building": null,
                            "land": 25200,
                            "total": 25200
                        }
                    }
                ],
                "location": {
                    "__typename": "HomeLocation",
                    "address": {
                        "__typename": "HomeAddress",
                        "line": "5518 Lee Marie Ln",
                        "street_number": "5518",
                        "street_name": "Lee Marie",
                        "street_suffix": "Ln",
                        "unit": null,
                        "city": "Charlotte",
                        "state_code": "NC",
                        "postal_code": "28269",
                        "state": "North Carolina",
                        "coordinate": {
                            "__typename": "HomeCoordinate",
                            "lat": 35.314385,
                            "lon": -80.80673
                        }
                    },
                    "county": {
                        "__typename": "HomeCounty",
                        "fips_code": "37119"
                    },
                    "street_view_url": "",
                    "neighborhoods": [
                        {
                            "__typename": "Neighborhood",
                            "name": "University City",
                            "city": "Charlotte",
                            "level": "macro_neighborhood",
                            "geo_statistics": {
                                "__typename": "GeoStatistics",
                                "housing_market": {
                                    "__typename": "HousingMarket",
                                    "median_price_per_sqft": 203,
                                    "median_sold_price": 350551,
                                    "median_listing_price": 379000,
                                    "median_days_on_market": 28
                                }
                            }
                        },
                        {
                            "__typename": "Neighborhood",
                            "name": "Rockwell Park - Hemphill Heights",
                            "city": "Charlotte",
                            "level": "neighborhood",
                            "geo_statistics": {
                                "__typename": "GeoStatistics",
                                "housing_market": {
                                    "__typename": "HousingMarket",
                                    "median_price_per_sqft": 198,
                                    "median_sold_price": 175000,
                                    "median_listing_price": 185000,
                                    "median_days_on_market": 29
                                }
                            }
                        },
                        {
                            "__typename": "Neighborhood",
                            "name": "Lynn Lee Acres",
                            "city": "Charlotte",
                            "level": "residential_neighborhood",
                            "geo_statistics": {
                                "__typename": "GeoStatistics",
                                "housing_market": {
                                    "__typename": "HousingMarket",
                                    "median_price_per_sqft": null,
                                    "median_sold_price": null,
                                    "median_listing_price": null,
                                    "median_days_on_market": null
                                }
                            }
                        }
                    ]
                },
                "branding": [
                    {
                        "__typename": "Branding",
                        "type": "Agent",
                        "photo": null,
                        "name": "Steven Norris",
                        "phone": null,
                        "slogan": null,
                        "accent_color": null,
                        "link": null
                    },
                    {
                        "__typename": "Branding",
                        "type": "Office",
                        "photo": null,
                        "name": "EXP Realty LLC, Raleigh",
                        "phone": null,
                        "slogan": null,
                        "accent_color": null,
                        "link": null
                    }
                ],
                "consumer_advertisers": [
                    {
                        "__typename": "ConsumerAdvertiser",
                        "advertiser_id": "",
                        "office_id": null,
                        "agent_id": null,
                        "name": "Steven Norris",
                        "phone": null,
                        "type": "Agent",
                        "href": null,
                        "slogan": null,
                        "photo": {
                            "__typename": "Photo",
                            "href": null
                        },
                        "show_realtor_logo": false,
                        "hours": null
                    },
                    {
                        "__typename": "ConsumerAdvertiser",
                        "advertiser_id": "",
                        "office_id": null,
                        "agent_id": null,
                        "name": "EXP Realty LLC, Raleigh",
                        "phone": "(888) 584-9431",
                        "type": "Office",
                        "href": null,
                        "slogan": null,
                        "photo": {
                            "__typename": "Photo",
                            "href": null
                        },
                        "show_realtor_logo": false,
                        "hours": null
                    }
                ],
                "advertisers": [
                    {
                        "__typename": "HomeAdvertiser",
                        "fulfillment_id": "0",
                        "name": "Steven Norris",
                        "type": "seller",
                        "team_name": null,
                        "email": "steven.norris@exprealty.com",
                        "href": null,
                        "state_license": "",
                        "phones": [
                            {
                                "__typename": "AdvertiserPhone",
                                "number": "(919) 749-1613",
                                "type": "Mobile",
                                "ext": null
                            }
                        ],
                        "office": {
                            "__typename": "HomeAdvertiserOffice",
                            "fulfillment_id": "0",
                            "name": "EXP Realty LLC, Raleigh",
                            "href": null,
                            "photo": null,
                            "email": null,
                            "phones": [
                                {
                                    "__typename": "AdvertiserPhone",
                                    "number": "(888) 584-9431",
                                    "type": "Office",
                                    "ext": null
                                }
                            ]
                        },
                        "broker": null,
                        "photo": null
                    }
                ],
                "photo_count": 23,
                "photos": [
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1594163680s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "garage",
                                "probability": 0.8391196131706238
                            },
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.9998688697814941
                            },
                            {
                                "__typename": "Tag",
                                "label": "porch",
                                "probability": 0.9046753644943237
                            },
                            {
                                "__typename": "Tag",
                                "label": "road_view",
                                "probability": 0.9481639862060547
                            },
                            {
                                "__typename": "Tag",
                                "label": "yard",
                                "probability": 0.9680643677711487
                            },
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.8160658478736877
                            },
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.9983553290367126
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1778838277s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.9997811913490295
                            },
                            {
                                "__typename": "Tag",
                                "label": "porch",
                                "probability": 0.9841815829277039
                            },
                            {
                                "__typename": "Tag",
                                "label": "road_view",
                                "probability": 0.8727670907974243
                            },
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.9178842306137085
                            },
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.928250253200531
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3573395419s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9988800883293152
                            },
                            {
                                "__typename": "Tag",
                                "label": "porch",
                                "probability": 0.9221283197402954
                            },
                            {
                                "__typename": "Tag",
                                "label": "porch",
                                "probability": 0.9995087385177612
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m692256772s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9892459511756897
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2932124171s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9929808378219604
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m965129575s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9999690055847168
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m4077155938s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "kitchen",
                                "probability": 0.9999998807907104
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1285386207s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9507631659507751
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m703524176s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "laundry_room",
                                "probability": 0.9999040365219116
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3982633382s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9849252104759216
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1629960377s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9998239874839783
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m4167575992s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9998101592063904
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m4128606504s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.6566141843795776
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m975431724s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "bathroom",
                                "probability": 1
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3301122822s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9999995231628418
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3776180240s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "bathroom",
                                "probability": 0.9969499707221985
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1990735417s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9998206496238708
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1569297997s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9647660255432129
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3338017102s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "unknown",
                                "probability": 0.9996546506881714
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2571141830s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "bathroom",
                                "probability": 1
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2399027027s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "porch",
                                "probability": 0.6312676072120667
                            },
                            {
                                "__typename": "Tag",
                                "label": "road_view",
                                "probability": 0.909046471118927
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m265144283s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.9966721534729004
                            },
                            {
                                "__typename": "Tag",
                                "label": "yard",
                                "probability": 0.9980800151824951
                            },
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.9898674488067627
                            },
                            {
                                "__typename": "Tag",
                                "label": "house_view",
                                "probability": 0.9787098169326782
                            }
                        ]
                    },
                    {
                        "__typename": "HomePhoto",
                        "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2565460676s.jpg",
                        "type": "realtordotcom_mls_listing_image",
                        "tags": [
                            {
                                "__typename": "Tag",
                                "label": "road_view",
                                "probability": 0.6836043000221252
                            },
                            {
                                "__typename": "Tag",
                                "label": "yard",
                                "probability": 0.9019511938095093
                            }
                        ]
                    }
                ],
                "property_history": [
                    {
                        "__typename": "HomePropertyHistory",
                        "date": "2023-10-11",
                        "event_name": "Listed",
                        "price": 348000,
                        "source_name": "CanopyMLS",
                        "listing": {
                            "__typename": "HomeListing",
                            "photos": [
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1594163680s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "garage",
                                            "probability": 0.8391196131706238
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.9998688697814941
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "porch",
                                            "probability": 0.9046753644943237
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "road_view",
                                            "probability": 0.9481639862060547
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "yard",
                                            "probability": 0.9680643677711487
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.8160658478736877
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.9983553290367126
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1778838277s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.9997811913490295
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "porch",
                                            "probability": 0.9841815829277039
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "road_view",
                                            "probability": 0.8727670907974243
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.9178842306137085
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.928250253200531
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3573395419s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9988800883293152
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "porch",
                                            "probability": 0.9221283197402954
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "porch",
                                            "probability": 0.9995087385177612
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m692256772s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9892459511756897
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2932124171s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9929808378219604
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m965129575s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9999690055847168
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m4077155938s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "kitchen",
                                            "probability": 0.9999998807907104
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1285386207s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9507631659507751
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m703524176s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "laundry_room",
                                            "probability": 0.9999040365219116
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3982633382s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9849252104759216
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1629960377s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9998239874839783
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m4167575992s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9998101592063904
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m4128606504s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.6566141843795776
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m975431724s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "bathroom",
                                            "probability": 1
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3301122822s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9999995231628418
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3776180240s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "bathroom",
                                            "probability": 0.9969499707221985
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1990735417s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9998206496238708
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m1569297997s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9647660255432129
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m3338017102s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "unknown",
                                            "probability": 0.9996546506881714
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2571141830s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "bathroom",
                                            "probability": 1
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2399027027s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "porch",
                                            "probability": 0.6312676072120667
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "road_view",
                                            "probability": 0.909046471118927
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m265144283s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.9966721534729004
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "yard",
                                            "probability": 0.9980800151824951
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.9898674488067627
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "house_view",
                                            "probability": 0.9787098169326782
                                        }
                                    ]
                                },
                                {
                                    "__typename": "HomePhoto",
                                    "href": "https://ap.rdcpix.com/0618a3827c816a860ce65cd14b1901b6l-m2565460676s.jpg",
                                    "type": "realtordotcom_mls_listing_image",
                                    "tags": [
                                        {
                                            "__typename": "Tag",
                                            "label": "road_view",
                                            "probability": 0.6836043000221252
                                        },
                                        {
                                            "__typename": "Tag",
                                            "label": "yard",
                                            "probability": 0.9019511938095093
                                        }
                                    ]
                                }
                            ],
                            "description": {
                                "__typename": "HomeDescription",
                                "sqft": 1704
                            }
                        }
                    },
                    {
                        "__typename": "HomePropertyHistory",
                        "date": "2016-05-27",
                        "event_name": "Sold",
                        "price": 141000,
                        "source_name": "Public Record",
                        "listing": null
                    }
                ],
                "local": {
                    "__typename": "Local",
                    "noise": {
                        "__typename": "Noise",
                        "score": 81,
                        "noise_categories": [
                            {
                                "__typename": "NoiseCategory",
                                "type": "airport",
                                "text": "N/A"
                            },
                            {
                                "__typename": "NoiseCategory",
                                "type": "traffic",
                                "text": "Medium"
                            },
                            {
                                "__typename": "NoiseCategory",
                                "type": "local",
                                "text": "N/A"
                            },
                            {
                                "__typename": "NoiseCategory",
                                "type": "score",
                                "text": "Low"
                            }
                        ]
                    },
                    "flood": {
                        "__typename": "Flood",
                        "flood_factor_score": 1,
                        "fema_zone": [
                            "X (unshaded)"
                        ]
                    }
                },
                "last_sold_price": 141000,
                "last_sold_date": "2016-05-27",
                "estimates": {
                    "__typename": "HomeEstimates",
                    "current_values": [
                        {
                            "__typename": "LatestEstimate",
                            "source": {
                                "__typename": "EstimateSource",
                                "type": "quantarium",
                                "name": "Quantarium"
                            },
                            "estimate": 329481,
                            "estimate_high": 339365,
                            "estimate_low": 319596,
                            "date": "2023-10-04"
                        }
                    ],
                    "historical_values": [
                        {
                            "__typename": "HistoricalEstimate",
                            "source": {
                                "__typename": "EstimateSource",
                                "type": "quantarium",
                                "name": "Quantarium"
                            },
                            "estimates": [
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 329481,
                                    "date": "2023-10-04"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 329269,
                                    "date": "2023-09-27"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 332588,
                                    "date": "2023-08-30"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 336731,
                                    "date": "2023-07-26"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 332311,
                                    "date": "2023-06-28"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 318655,
                                    "date": "2023-05-31"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 308151,
                                    "date": "2023-04-26"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 309820,
                                    "date": "2023-03-29"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 311805,
                                    "date": "2023-02-22"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 319095,
                                    "date": "2023-01-25"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 316512,
                                    "date": "2022-12-28"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 323009,
                                    "date": "2022-11-30"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 322963,
                                    "date": "2022-10-26"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 329267,
                                    "date": "2022-09-28"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 335955,
                                    "date": "2022-08-31"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 338962,
                                    "date": "2022-07-27"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 322729,
                                    "date": "2022-06-29"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 315148,
                                    "date": "2022-05-25"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 306003,
                                    "date": "2022-04-27"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 299200,
                                    "date": "2022-03-30"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 294362,
                                    "date": "2022-02-23"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 292990,
                                    "date": "2022-01-26"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 288259,
                                    "date": "2021-12-29"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 278090,
                                    "date": "2021-11-10"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 281178,
                                    "date": "2021-10-20"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 280012,
                                    "date": "2021-09-29"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 277700,
                                    "date": "2021-08-25"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 262433,
                                    "date": "2021-07-28"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 251266,
                                    "date": "2021-06-30"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 249019,
                                    "date": "2021-05-26"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 242892,
                                    "date": "2021-04-28"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 237667,
                                    "date": "2021-03-03"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 237657,
                                    "date": "2021-02-24"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 226856,
                                    "date": "2021-01-27"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 221163,
                                    "date": "2020-12-30"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 218111,
                                    "date": "2020-11-25"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 218296,
                                    "date": "2020-10-28"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 215947,
                                    "date": "2020-09-30"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 214062,
                                    "date": "2020-08-26"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 213379,
                                    "date": "2020-07-29"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 207525,
                                    "date": "2020-06-24"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 207073,
                                    "date": "2020-05-27"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 199183,
                                    "date": "2020-04-29"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 192935,
                                    "date": "2020-03-04"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 192855,
                                    "date": "2020-02-26"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 193060,
                                    "date": "2020-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 192365,
                                    "date": "2019-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 191519,
                                    "date": "2019-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 190196,
                                    "date": "2019-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 189994,
                                    "date": "2019-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 189306,
                                    "date": "2019-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 188113,
                                    "date": "2019-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 185344,
                                    "date": "2019-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 181754,
                                    "date": "2019-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 181292,
                                    "date": "2019-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 181111,
                                    "date": "2019-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 179959,
                                    "date": "2019-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 179836,
                                    "date": "2019-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 179355,
                                    "date": "2018-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 178643,
                                    "date": "2018-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 177770,
                                    "date": "2018-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 176890,
                                    "date": "2018-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 175695,
                                    "date": "2018-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 174053,
                                    "date": "2018-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 171924,
                                    "date": "2018-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 170119,
                                    "date": "2018-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 169268,
                                    "date": "2018-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 168366,
                                    "date": "2018-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 168104,
                                    "date": "2018-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 167263,
                                    "date": "2018-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 166422,
                                    "date": "2017-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 165091,
                                    "date": "2017-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 163729,
                                    "date": "2017-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 162161,
                                    "date": "2017-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 159460,
                                    "date": "2017-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 158737,
                                    "date": "2017-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 156619,
                                    "date": "2017-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 155472,
                                    "date": "2017-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 154464,
                                    "date": "2017-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 153628,
                                    "date": "2017-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 152758,
                                    "date": "2017-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 150970,
                                    "date": "2017-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 150718,
                                    "date": "2016-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 149214,
                                    "date": "2016-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 148764,
                                    "date": "2016-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 147366,
                                    "date": "2016-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 145495,
                                    "date": "2016-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 144556,
                                    "date": "2016-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 142537,
                                    "date": "2016-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 140653,
                                    "date": "2016-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 139192,
                                    "date": "2016-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 138438,
                                    "date": "2016-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 138235,
                                    "date": "2016-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 138046,
                                    "date": "2016-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 137444,
                                    "date": "2015-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 136709,
                                    "date": "2015-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 136588,
                                    "date": "2015-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 136561,
                                    "date": "2015-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 135519,
                                    "date": "2015-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 134776,
                                    "date": "2015-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 134412,
                                    "date": "2015-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 133592,
                                    "date": "2015-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 133740,
                                    "date": "2015-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 132848,
                                    "date": "2015-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 132202,
                                    "date": "2015-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 130044,
                                    "date": "2015-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 129521,
                                    "date": "2014-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 128622,
                                    "date": "2014-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 127360,
                                    "date": "2014-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 126614,
                                    "date": "2014-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 126336,
                                    "date": "2014-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 125508,
                                    "date": "2014-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 125485,
                                    "date": "2014-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 124327,
                                    "date": "2014-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 124062,
                                    "date": "2014-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 123612,
                                    "date": "2014-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 123580,
                                    "date": "2014-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 123679,
                                    "date": "2014-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 122731,
                                    "date": "2013-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 122466,
                                    "date": "2013-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 121348,
                                    "date": "2013-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 120054,
                                    "date": "2013-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 119405,
                                    "date": "2013-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 119342,
                                    "date": "2013-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 118109,
                                    "date": "2013-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 116790,
                                    "date": "2013-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 115812,
                                    "date": "2013-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 114394,
                                    "date": "2013-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 112568,
                                    "date": "2013-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 112346,
                                    "date": "2013-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 112257,
                                    "date": "2012-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 112114,
                                    "date": "2012-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 111653,
                                    "date": "2012-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 111604,
                                    "date": "2012-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 110640,
                                    "date": "2012-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 109951,
                                    "date": "2012-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 109031,
                                    "date": "2012-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 109021,
                                    "date": "2012-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 107555,
                                    "date": "2012-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 108016,
                                    "date": "2012-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 107934,
                                    "date": "2012-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 108477,
                                    "date": "2012-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 108146,
                                    "date": "2011-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 108193,
                                    "date": "2011-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 109377,
                                    "date": "2011-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 110592,
                                    "date": "2011-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 111038,
                                    "date": "2011-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 110370,
                                    "date": "2011-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 111688,
                                    "date": "2011-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 112598,
                                    "date": "2011-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 113263,
                                    "date": "2011-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 113826,
                                    "date": "2011-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 116411,
                                    "date": "2011-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 118462,
                                    "date": "2011-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 119294,
                                    "date": "2010-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 119878,
                                    "date": "2010-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 119638,
                                    "date": "2010-10-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 120537,
                                    "date": "2010-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 121326,
                                    "date": "2010-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 121387,
                                    "date": "2010-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 121712,
                                    "date": "2010-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 121474,
                                    "date": "2010-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 121663,
                                    "date": "2010-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 122157,
                                    "date": "2010-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 123446,
                                    "date": "2010-02-01"
                                }
                            ]
                        }
                    ],
                    "forecast_values": [
                        {
                            "__typename": "ForecastEstimate",
                            "source": {
                                "__typename": "EstimateSource",
                                "type": "quantarium",
                                "name": "Quantarium"
                            },
                            "estimates": [
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 328682,
                                    "date": "2023-11-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 328892,
                                    "date": "2023-12-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 329486,
                                    "date": "2024-01-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 330040,
                                    "date": "2024-02-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 330832,
                                    "date": "2024-03-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 331662,
                                    "date": "2024-04-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 332724,
                                    "date": "2024-05-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 333847,
                                    "date": "2024-06-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 334561,
                                    "date": "2024-07-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 335159,
                                    "date": "2024-08-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 335864,
                                    "date": "2024-09-01"
                                },
                                {
                                    "__typename": "EstimateRecord",
                                    "estimate": 336601,
                                    "date": "2024-10-01"
                                }
                            ]
                        }
                    ]
                },
                "virtual_tours": null,
                "videos": null,
                "matterport": null,
                "terms": null,
                "monthly_fees": null,
                "one_time_fees": null,
                "units": null
            }
        }
    }

    //Test for getAgentsList api call
    const agentsList: any = {
        "matching_rows": 1120,
        "agents": [
            {
                "address": {
                    "line": "8604 CLIFF CAMERON DR STE 190",
                    "line2": "",
                    "city": "CHARLOTTE",
                    "postal_code": "28269",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 3984025,
                "agent_rating": 5,
                "broker": {
                    "fulfillment_id": 4559359,
                    "designations": [],
                    "name": "ERA Live Moore - Broker",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "My passion is to educate my clients about real estate and provide exceptional client experience throughout the whole process.",
                "designations": [],
                "first_month": 1,
                "first_year": 2020,
                "has_photo": true,
                "href": "https://www.era.com/agent/lanshirley.liao@era.com",
                "id": "5e432ba5546cab001140d0c4",
                "is_realtor": true,
                "languages": [],
                "last_updated": "Fri, 13 Oct 2023 05:41:32 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Harrisburg",
                        "state_code": "NC",
                        "city_state": "Harrisburg_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Paw Creek",
                        "state_code": "NC",
                        "city_state": "Paw Creek_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "type": "A",
                        "member": {
                            "id": "78170"
                        },
                        "primary": true
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nrds_id": "554043253",
                "office": {
                    "name": "Wilkinson Era Real Estate",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "type": "O",
                            "member": {
                                "id": "335803"
                            },
                            "primary": true
                        }
                    ],
                    "phones": [
                        {
                            "type": "Mobile",
                            "number": "(980) 241-2721",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Mobile",
                            "number": "9802412721",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "https://ap.rdcpix.com/3470041a8abca5190bb0be2649d302eao-c2092088110o.jpg",
                        "is_zoomed": null
                    },
                    "slogan": null,
                    "website": "HTTPS://WWW.WILKINSONERA.COM/",
                    "video": null,
                    "fulfillment_id": 4464019,
                    "address": {
                        "line": "8604 CLIFF CAMERON DR STE 190",
                        "line2": "",
                        "city": "CHARLOTTE",
                        "postal_code": "28269",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "wendy@keyhouserealtygroup.com",
                    "nrds_id": null
                },
                "party_id": 503263570,
                "person_name": "Shirley Liao",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(347) 784-3856",
                        "ext": ""
                    },
                    {
                        "ext": "",
                        "number": "(704) 815-9315",
                        "type": "Office"
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/24aa75438c60bb4f3b753b04cc1383c0a-c2010921213s.jpg",
                    "is_zoomed": true
                },
                "recommendations_count": 2,
                "review_count": 7,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NA"
                    },
                    {
                        "name": "Salisbury",
                        "state_code": "NA"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": false,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "Love what you do!",
                "specializations": [],
                "title": "Agent",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Shirley-Liao_CHARLOTTE_NC_3984025_647659544",
                "zips": [
                    "28215",
                    "28207",
                    "28214",
                    "28269"
                ],
                "email": "shirlsclt@gmail.com",
                "name": "Shirley Liao, Agent",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "for_sale_price": {
                    "count": 1,
                    "last_listing_date": "2023-10-17T21:27:50Z",
                    "max": 550000,
                    "min": 550000
                },
                "recently_sold": {
                    "count": 15,
                    "min": 118000,
                    "max": 520000,
                    "last_sold_date": "2023-10-05"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "2010 South Tryon Street, Suite D",
                    "line2": "",
                    "city": "Charlotte",
                    "postal_code": "28203",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 1155997,
                "agent_rating": 0,
                "background_photo": {
                    "href": "https://d260ckbc6brolt.cloudfront.net/prosoft-ui/releases/latest/img/photo-cover.jpg"
                },
                "broker": {
                    "fulfillment_id": 1998311,
                    "designations": [],
                    "name": "Costello Real Estate & Investments",
                    "accent_color": "#0f9cec",
                    "photo": {
                        "href": "https://ap.rdcpix.com/e80cd01b2e8bea6c7d2fcdcd66dd6f70k-c1238567931s.jpg",
                        "is_zoomed": true
                    },
                    "video": "https://youtu.be/Ivild_JmmUA"
                },
                "description": "I help buyers and sellers in Charlotte and surrounding areas including Fort Mill, SC.  I am licensed in NC & SC.",
                "designations": [],
                "first_month": 0,
                "first_name": "Laura",
                "first_year": 0,
                "has_photo": true,
                "href": "http://www.laurasautter.kwrealty.com",
                "id": "56ccb56a89a68901006f6673",
                "is_realtor": true,
                "languages": [],
                "last_name": "Sautter",
                "last_updated": "Fri, 13 Oct 2023 06:45:00 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC",
                        "city_state": "Harrisburg_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Indian Land",
                        "state_code": "SC",
                        "city_state": "Indian Land_SC"
                    },
                    {
                        "name": "Fort Mill",
                        "state_code": "SC",
                        "city_state": "Fort Mill_SC"
                    },
                    {
                        "name": "Riverview",
                        "state_code": "SC",
                        "city_state": "Riverview_SC"
                    },
                    {
                        "name": "Tega Cay",
                        "state_code": "SC",
                        "city_state": "Tega Cay_SC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "84523"
                        }
                    }
                ],
                "mls_history": [],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554027462",
                "office": {
                    "name": "Costello Real Estate & Investments (CLT)",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "id": 124,
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "9993"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(980) 938-8920",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "9809388920",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "https://ap.rdcpix.com/83eb5277a10e1e7af695fea53c3e99cdo-c745013434o.jpg",
                        "is_zoomed": null
                    },
                    "slogan": "",
                    "website": "http://costellorei.com/",
                    "video": "https://youtu.be/Ivild_JmmUA",
                    "fulfillment_id": 1998448,
                    "address": {
                        "line": "2010 South Tryon Street, Suite D",
                        "line2": "",
                        "city": "Charlotte",
                        "postal_code": "28203",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "info@costellorei.com",
                    "nrds_id": "554030505"
                },
                "party_id": 3440581,
                "person_name": "Laura Sautter",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 322-5900",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "http://p.rdcpix.com/v01/a9da31100-c0o.jpg"
                },
                "recommendations_count": 0,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Fort Mill",
                        "state_code": "SC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "Top Realtor for Customer Satisfaction"
                    }
                ],
                "title": "",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Laura-Sautter_Charlotte_NC_1155997_735279544",
                "zips": [
                    "28202",
                    "28215",
                    "28226",
                    "28269",
                    "28270",
                    "28277",
                    "29707",
                    "29708",
                    "29715"
                ],
                "email": "laurasautter@kwrealty.com",
                "full_name": "Laura Sautter",
                "name": "Laura Sautter, ",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "social_media": {
                    "facebook": {
                        "type": "facebook",
                        "href": "http://www.facebook.com/pages/Charlotte-NC/Laura-Sautter-Your-KW-Real-Estate-Agent/313441433245"
                    }
                },
                "for_sale_price": {
                    "count": 2,
                    "min": 474900,
                    "max": 1799000,
                    "last_listing_date": "2023-10-17T21:14:35Z"
                },
                "recently_sold": {
                    "count": 17,
                    "min": 302379,
                    "max": 1675000,
                    "last_sold_date": "2023-08-10"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "No Address Line1 Specified",
                    "line2": "",
                    "city": "CORNELIUS",
                    "postal_code": "28031",
                    "state_code": "NC",
                    "state": "",
                    "country": "USA"
                },
                "advertiser_id": 1959362,
                "agent_rating": 0,
                "background_photo": {
                    "href": "http://p.rdcpix.com/v01/gc2e51d00-c0od-w1200_q50.jpg"
                },
                "broker": {
                    "fulfillment_id": 4585265,
                    "designations": [],
                    "name": "Choquette Properties",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "Pat is a lifelong native of NC.  Her business experience started over 40 years ago in the furniture business and from there to the insurance and real estate business.  Before moving to the Lake Norman area, she worked 38 years for one of the larger insurance and real estate firms in the Piedmont Triad and while there served as Operations Manager, Corporate Secretary-Treasurer and was also on the Board of Directors. Pat is currently a licensed NC Real Estate Broker/Realtor® and a member of the Charlotte Regional Realtor® Association.  Pat's hobbies include beading, boating, and reading.  She is never happy just sitting still, so rest assured, she will go to all lengths to help you find the home of your dream or to market and sell your current home so you can move on to that new dream home or the next phase of your life.",
                "designations": [],
                "first_month": 0,
                "first_name": "Patricia",
                "first_year": 2013,
                "has_photo": true,
                "href": "http://www.choquetteproperties.com",
                "id": "56d4c06fb5cc660100bba39e",
                "is_realtor": true,
                "languages": [],
                "last_name": "Smith",
                "last_updated": "Fri, 13 Oct 2023 06:59:40 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC",
                        "city_state": "Denver_NC"
                    },
                    {
                        "name": "Westport",
                        "state_code": "NC",
                        "city_state": "Westport_NC"
                    },
                    {
                        "name": "Lowesville",
                        "state_code": "NC",
                        "city_state": "Lowesville_NC"
                    },
                    {
                        "name": "Lake Norman of Catawba",
                        "state_code": "NC",
                        "city_state": "Lake Norman of Catawba_NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC",
                        "city_state": "Indian Trail_NC"
                    },
                    {
                        "name": "Monroe",
                        "state_code": "NC",
                        "city_state": "Monroe_NC"
                    },
                    {
                        "name": "Lake Park",
                        "state_code": "NC",
                        "city_state": "Lake Park_NC"
                    },
                    {
                        "name": "Hemby Bridge",
                        "state_code": "NC",
                        "city_state": "Hemby Bridge_NC"
                    },
                    {
                        "name": "Stallings",
                        "state_code": "NC",
                        "city_state": "Stallings_NC"
                    },
                    {
                        "name": "Fairview",
                        "state_code": "NC",
                        "city_state": "Fairview_NC"
                    },
                    {
                        "name": "Wesley Chapel",
                        "state_code": "NC",
                        "city_state": "Wesley Chapel_NC"
                    },
                    {
                        "name": "Iron Station",
                        "state_code": "NC",
                        "city_state": "Iron Station_NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC",
                        "city_state": "Mooresville_NC"
                    },
                    {
                        "name": "Mount Mourne",
                        "state_code": "NC",
                        "city_state": "Mount Mourne_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "30401"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "30401"
                        },
                        "inactivation_date": "2022-03-27T01:23:13.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "Pat",
                "nrds_id": "554030223",
                "office": {
                    "name": "Choquette Properties Inc",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "type": "O",
                            "member": {
                                "id": "6422"
                            },
                            "primary": true
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 765-1839",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "7047651839",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": null
                    },
                    "slogan": null,
                    "website": null,
                    "video": null,
                    "fulfillment_id": 4455351,
                    "address": {
                        "line": "No Address Line1 Specified",
                        "line2": "",
                        "city": "CORNELIUS",
                        "postal_code": "28031",
                        "state_code": "NC",
                        "state": "",
                        "country": "USA"
                    },
                    "email": "wendy@americanlandcorporation.com",
                    "nrds_id": null
                },
                "party_id": 114338952,
                "person_name": "Pat Smith",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(336) 302-4483",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/549591620/1ecf22b3c45a7d1cb33d5e411a4d9c74a-c0s.jpg"
                },
                "recommendations_count": 0,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC"
                    },
                    {
                        "name": "Iron Station",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": false,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "Buyers Agent"
                    },
                    {
                        "name": "Listing Agent"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Pat-Smith_CORNELIUS_NC_1959362_677969544",
                "zips": [
                    "28031",
                    "28037",
                    "28079",
                    "28080",
                    "28117",
                    "28269"
                ],
                "email": "Patricia@choquetteproperties.com",
                "full_name": "Patricia Smith",
                "name": "Pat Smith, Broker",
                "for_sale_price": {
                    "count": 2,
                    "min": 499900,
                    "max": 699900,
                    "last_listing_date": "2023-10-17T19:45:19Z"
                },
                "recently_sold": {
                    "count": 3,
                    "min": 205000,
                    "max": 770000,
                    "last_sold_date": "2023-09-22"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "",
                    "line2": "",
                    "city": "",
                    "postal_code": "",
                    "state_code": "NC",
                    "state": "",
                    "country": ""
                },
                "advertiser_id": 1831833,
                "agent_rating": 0,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/1512807628/3d1704dab7abb3ce47e506f5c8d6f76dg-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 3672505,
                    "designations": [],
                    "name": "Exp Realty ",
                    "accent_color": "Transparent",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "As a resident of the Lake Norman community and previously on Long Island NY, I am extremely passionate about my hometown and all its beautiful neighborhoods. I truly appreciates the area’s diverse mix of people and the variety of local properties; from luxury waterfront homes in communities such as “The Point” and “The Peninsula” to the more traditional home's that line the Main Streets of downtown Davidson, Cornelius, Mooresville and all their surrounding neighborhoods. As an experienced agent having sold real estate all over North Carolina and previously on Long Island NY; I have a thorough understanding of the marketplace; a factor I believe is paramount to my success in real estate. I believe that my achievements are reflected in my many satisfied clients and the numerous awards of excellence I’ve received. I pride myself on providing my clients with a full service experience which includes communicating with attorneys, home inspectors, mortgage companies, pest control companies and even appraisers if needed. Always thinking “outside the box” is what has helped me close even some of the most difficult transactions. As an exceptional negotiator, my strengths not only include my ability to listen but also to understand and communicate effectively with my clients. This combined with my integrity and attention to detail, mean every client’s experience is a positive one. Professional, reliable and honest, I am only satisfied when I achieve the best possible price for my clients and deliver the highest level of excellence that past clients have come to expect from me. Please call today to schedule a free home marketing evaluation or just to discuss what’s going on in your neighborhood.",
                "designations": [
                    {
                        "name": "SFR"
                    }
                ],
                "first_month": 0,
                "first_name": "A Thomas",
                "first_year": 2006,
                "has_photo": true,
                "href": "http://www.CheckOutLakeNorman.com",
                "id": "56b0a7f5bb954c01006aa81a",
                "is_realtor": true,
                "languages": [],
                "last_name": "Hocker",
                "last_updated": "Fri, 13 Oct 2023 07:34:55 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Mount Ulla",
                        "state_code": "NC",
                        "city_state": "Mount Ulla_NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC",
                        "city_state": "Mooresville_NC"
                    },
                    {
                        "name": "Troutman",
                        "state_code": "NC",
                        "city_state": "Troutman_NC"
                    },
                    {
                        "name": "Mount Mourne",
                        "state_code": "NC",
                        "city_state": "Mount Mourne_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "30790"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "30790"
                        },
                        "inactivation_date": "2022-03-25T05:11:14.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "Tom Hocker",
                "nrds_id": "641612382",
                "office": {
                    "name": "eXp Realty",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "372902"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(888) 584-9431",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "8885849431",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "",
                        "is_zoomed": null
                    },
                    "slogan": null,
                    "website": "https://exprealty.com/",
                    "video": null,
                    "fulfillment_id": 3907615,
                    "address": {
                        "line": "",
                        "line2": "",
                        "city": "",
                        "postal_code": "",
                        "state_code": "NC",
                        "state": "",
                        "country": ""
                    },
                    "email": "nc.broker@exprealty.com",
                    "nrds_id": null
                },
                "party_id": 106271867,
                "person_name": "A Thomas Hocker",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(631) 766-2019",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/1288939796/475d2fbbab8ea484e5145ec093443f83a-e0s.jpg"
                },
                "recommendations_count": 55,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Troutman",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": false,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "Serving Lake Norman",
                "specializations": [
                    {
                        "name": "Mooresville"
                    },
                    {
                        "name": "Luxury Specialist"
                    },
                    {
                        "name": "Long Island To Lake Norman Moves"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/A-Thomas-Hocker__NC_1831833_716783853",
                "zips": [
                    "28031",
                    "28036",
                    "28078",
                    "28115",
                    "28117",
                    "28166",
                    "28216",
                    "28269"
                ],
                "email": "thocker10@gmail.com",
                "full_name": "A Thomas Hocker",
                "name": "A Thomas Hocker, Broker",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "for_sale_price": {
                    "count": 2,
                    "min": 615000,
                    "max": 625000,
                    "last_listing_date": "2023-10-17T18:39:38Z"
                },
                "recently_sold": {
                    "count": 15,
                    "min": 130000,
                    "max": 1500000,
                    "last_sold_date": "2023-07-14"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": " 3440 TORINGDON WAY STE 205\t      ",
                    "line2": "",
                    "city": "CHARLOTTE",
                    "postal_code": "28277",
                    "state_code": "NC",
                    "state": "",
                    "country": "USA"
                },
                "advertiser_id": 3635351,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/b23acc7d2e913cfcad6e0b29fa2f7b39g-c79390205s.jpg"
                },
                "broker": {
                    "fulfillment_id": 2990723,
                    "designations": [],
                    "name": "Exp Realty Llc - Broker",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "",
                "designations": [
                    {
                        "name": "GRI"
                    },
                    {
                        "name": "EPRO"
                    },
                    {
                        "name": "PSA"
                    }
                ],
                "first_month": 4,
                "first_year": 2017,
                "has_photo": true,
                "href": "http://myhomeclt.net/",
                "id": "5bcdea18632dca0011f3ad96",
                "is_realtor": true,
                "languages": [],
                "last_updated": "Fri, 13 Oct 2023 09:20:43 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Mint Hill",
                        "state_code": "NC",
                        "city_state": "Mint Hill_NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC",
                        "city_state": "Indian Trail_NC"
                    },
                    {
                        "name": "Monroe",
                        "state_code": "NC",
                        "city_state": "Monroe_NC"
                    },
                    {
                        "name": "Lake Park",
                        "state_code": "NC",
                        "city_state": "Lake Park_NC"
                    },
                    {
                        "name": "Hemby Bridge",
                        "state_code": "NC",
                        "city_state": "Hemby Bridge_NC"
                    },
                    {
                        "name": "Stallings",
                        "state_code": "NC",
                        "city_state": "Stallings_NC"
                    },
                    {
                        "name": "Fairview",
                        "state_code": "NC",
                        "city_state": "Fairview_NC"
                    },
                    {
                        "name": "Wesley Chapel",
                        "state_code": "NC",
                        "city_state": "Wesley Chapel_NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC",
                        "city_state": "Harrisburg_NC"
                    },
                    {
                        "name": "Newell",
                        "state_code": "NC",
                        "city_state": "Newell_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Paw Creek",
                        "state_code": "NC",
                        "city_state": "Paw Creek_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Mount Pleasant",
                        "state_code": "NC",
                        "city_state": "Mount Pleasant_NC"
                    },
                    {
                        "name": "Midland",
                        "state_code": "NC",
                        "city_state": "Midland_NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Landis",
                        "state_code": "NC",
                        "city_state": "Landis_NC"
                    },
                    {
                        "name": "Weddington",
                        "state_code": "NC",
                        "city_state": "Weddington_NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC",
                        "city_state": "Matthews_NC"
                    },
                    {
                        "name": "Mount Holly",
                        "state_code": "NC",
                        "city_state": "Mount Holly_NC"
                    },
                    {
                        "name": "Belmont",
                        "state_code": "NC",
                        "city_state": "Belmont_NC"
                    },
                    {
                        "name": "Cramerton",
                        "state_code": "NC",
                        "city_state": "Cramerton_NC"
                    },
                    {
                        "name": "Stanley",
                        "state_code": "NC",
                        "city_state": "Stanley_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Mount Ulla",
                        "state_code": "NC",
                        "city_state": "Mount Ulla_NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC",
                        "city_state": "Mooresville_NC"
                    },
                    {
                        "name": "Troutman",
                        "state_code": "NC",
                        "city_state": "Troutman_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "57081"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "57081"
                        },
                        "inactivation_date": "2022-03-27T14:52:09.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "Matt",
                "nrds_id": "554035574",
                "office": {
                    "name": "EXP Realty LLC",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "372906"
                            }
                        },
                        {
                            "abbreviation": "YMNC",
                            "primary": false,
                            "type": "O",
                            "member": {
                                "id": "161"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(888) 584-9831",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "8885849831",
                            "ext": ""
                        }
                    },
                    "licenses": null,
                    "feed_licenses": null,
                    "photo": {
                        "href": null
                    },
                    "slogan": null,
                    "website": null,
                    "video": null,
                    "fulfillment_id": 4164362,
                    "address": {
                        "line": " 3440 TORINGDON WAY STE 205\t      ",
                        "line2": "",
                        "city": "CHARLOTTE",
                        "postal_code": "28277",
                        "state_code": "NC",
                        "state": "",
                        "country": "USA"
                    },
                    "email": "lucas.lockerbie@exprealty.net",
                    "nrds_id": null
                },
                "party_id": 396167763,
                "person_name": "Matt Kalnen",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(910) 617-8172",
                        "ext": "",
                        "key": "phone_1"
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/3d298fb5782324e31d9bfa9cdf32ff23a-e376571001s.jpg",
                    "is_zoomed": true
                },
                "recommendations_count": 4,
                "review_count": 20,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC"
                    },
                    {
                        "name": "Belmont",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mount Holly",
                        "state_code": "NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte Metro",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": false,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "cfb_wizard_step": "account_integration",
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "Your one person for everything at Home",
                "specializations": [
                    {
                        "name": "Investment Properties"
                    },
                    {
                        "name": "Property Management"
                    },
                    {
                        "name": "1031 Exchange"
                    },
                    {
                        "name": "Portfolio Managmeent"
                    },
                    {
                        "name": "First Time Buyers"
                    },
                    {
                        "name": "Sellers"
                    },
                    {
                        "name": "Buyers"
                    }
                ],
                "title": "Agent",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Matt-Kalnen_CHARLOTTE_NC_3635351_524469544",
                "zips": [
                    "28262",
                    "28227",
                    "28079",
                    "28213",
                    "28202",
                    "28203",
                    "28204",
                    "28205",
                    "28206",
                    "28207",
                    "28208",
                    "28209",
                    "28210",
                    "28211",
                    "28212",
                    "28214",
                    "28215",
                    "28216",
                    "28217",
                    "28269",
                    "28025",
                    "28078",
                    "28027",
                    "28075",
                    "28083",
                    "28104",
                    "28105",
                    "28106",
                    "28012",
                    "28120",
                    "28134",
                    "28035",
                    "28036",
                    "28031",
                    "28115"
                ],
                "email": "matt@myhomeclt.net",
                "name": "Matt Kalnen, Agent",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "for_sale_price": {
                    "count": 2,
                    "min": 55000,
                    "max": 500000,
                    "last_listing_date": "2023-10-17T18:00:24Z"
                },
                "recently_sold": {
                    "count": 42,
                    "min": 75000,
                    "max": 800000,
                    "last_sold_date": "2023-09-13"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "10130 Perimeter Parkway ",
                    "line2": "",
                    "city": "Charlotte",
                    "postal_code": "28216",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 1163368,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/831257628/18516ddceb2fc4e62897f92ea388671dg-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 3672505,
                    "designations": [],
                    "name": "Exp Realty ",
                    "accent_color": "Transparent",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "Aubie is a life long resident of Cabarrus County.   She was educated in the Cabarrus county school system, graduated from Queens College, Charlotte NC.  She raised 3 girls- Amanda, Elizabeth and Laura -  now  ages 25, 28, and 29 in Cabarrus County.   She comes to the real estate profession with a wide range of professional experience from teaching Pre- school, computer training and hotel management and sales.   She has been actively involved with the Cabarrus Chamber of  Commerce, Cabarrus Convention & Visitors Bureau and the West Cabarrus YMCA.",
                "designations": [],
                "first_month": 0,
                "first_name": "Aubie",
                "first_year": 2002,
                "has_photo": true,
                "href": "http://aubiecook.cnc.exprealty.com/",
                "id": "56ccd6a7bb954c01006da00c",
                "is_realtor": true,
                "languages": [],
                "last_name": "Cook",
                "last_updated": "Tue, 17 Oct 2023 18:48:04 GMT",
                "marketing_area_cities": [
                    {
                        "city_state": "Pineville_NC",
                        "name": "Pineville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Charlotte_NC",
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Harrisburg_NC",
                        "name": "Harrisburg",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Concord_NC",
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Mount Pleasant_NC",
                        "name": "Mount Pleasant",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Midland_NC",
                        "name": "Midland",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Kannapolis_NC",
                        "name": "Kannapolis",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Landis_NC",
                        "name": "Landis",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Enochville_NC",
                        "name": "Enochville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Huntersville_NC",
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Cornelius_NC",
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Newell_NC",
                        "name": "Newell",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Davidson_NC",
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Locust_NC",
                        "name": "Locust",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Mount Ulla_NC",
                        "name": "Mount Ulla",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Mooresville_NC",
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Troutman_NC",
                        "name": "Troutman",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Mount Mourne_NC",
                        "name": "Mount Mourne",
                        "state_code": "NC"
                    }
                ],
                "mls": [
                    {
                        "member": {
                            "id": "92670"
                        },
                        "abbreviation": "CHNC",
                        "type": "A",
                        "primary": true
                    }
                ],
                "mls_history": [],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "552500911",
                "office": {
                    "name": "Exp Realty Llc",
                    "mls": [
                        {
                            "member": {
                                "id": "3729"
                            },
                            "abbreviation": "CHNC",
                            "type": "O",
                            "primary": true,
                            "license_number": ""
                        }
                    ],
                    "phones": [
                        {
                            "ext": "",
                            "number": "(888) 584-9831",
                            "type": "Office"
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "8885849831",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "",
                        "is_zoomed": null
                    },
                    "slogan": "",
                    "website": "https://exprealty.com/",
                    "video": null,
                    "fulfillment_id": 2989462,
                    "address": {
                        "line": "10130 Perimeter Parkway ",
                        "line2": "",
                        "city": "Charlotte",
                        "postal_code": "28216",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "nc.broker@exprealty.com",
                    "nrds_id": "558502938"
                },
                "party_id": 3243741,
                "person_name": "Aubie Cook",
                "phones": [
                    {
                        "ext": "",
                        "number": "(704) 467-6680",
                        "type": "Mobile"
                    }
                ],
                "photo": {
                    "href": "http://p.rdcpix.com/v02/a68c01100-c0o.jpg"
                },
                "recommendations_count": 8,
                "review_count": 1,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mount Pleasant",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mount Mourne",
                        "state_code": "NC"
                    },
                    {
                        "name": "North Charlotte",
                        "state_code": "NA"
                    },
                    {
                        "name": "",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "reviews_opt_out": {
                        "rs": true,
                        "rdc": true
                    },
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": false,
                    "display_ratings": false,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "First Time Buyers"
                    },
                    {
                        "name": "Relocation"
                    },
                    {
                        "name": "Foreclosures"
                    },
                    {
                        "name": "New Construction"
                    },
                    {
                        "name": "Single Family Homes"
                    },
                    {
                        "name": "Townhomes"
                    },
                    {
                        "name": "Condos"
                    },
                    {
                        "name": "Multi-Family Properties"
                    },
                    {
                        "name": "Investors"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Aubie-Cook_Charlotte_NC_1163368_880994744",
                "zips": [
                    "28226",
                    "28025",
                    "28027",
                    "28081",
                    "28083",
                    "28269",
                    "28078",
                    "28075",
                    "28213",
                    "28031",
                    "28035",
                    "28036",
                    "28124",
                    "28115",
                    "28117",
                    "28123"
                ],
                "email": "aubiecook@gmail.com",
                "full_name": "Aubie Cook",
                "name": "Aubie Cook, Broker",
                "agent_type": [
                    "seller",
                    "buyer"
                ],
                "feed_licenses": [],
                "for_sale_price": {
                    "count": 4,
                    "min": 230000,
                    "max": 850000,
                    "last_listing_date": "2023-10-17T16:10:24Z"
                },
                "recently_sold": {
                    "count": 45,
                    "min": 118000,
                    "max": 670000,
                    "last_sold_date": "2023-10-06"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "1515 Mockingbird Lane, Suite 900",
                    "line2": "",
                    "city": "Charlotte",
                    "postal_code": "28209",
                    "state_code": "NC",
                    "state": "North Carolina",
                    "country": "US"
                },
                "advertiser_id": 1165553,
                "agent_rating": 5,
                "background_photo": {
                    "href": "http://p.rdcpix.com/v02/gf1c81100-c0od-w1200_q50.jpg"
                },
                "broker": {
                    "fulfillment_id": 1733256,
                    "designations": [],
                    "name": "Ivester Jackson Distinctive Properties",
                    "accent_color": "Transparent (no color)",
                    "photo": {
                        "href": "https://ap.rdcpix.com/1448052165/4099e0e4d353a8a659084dc77626d90bk-c0o.jpg"
                    },
                    "video": ""
                },
                "description": "My professional services are centered on a high energy approach to present homes that meet or exceed buyer expectations.  For Sellers, I apply this same energy in negotiating the best price in the shortest possible time.With the changing economy, it is important to stay up to date with current market and financial trends.  I pride myself in obtaining pertinent information regarding the purchase or sale of real estate, and I am committed to providing the most accurate information.As a full time Real Estate professional, I work with clients to understand their individual needs and provide meaningful and financially sound advice.  As your Real Estate Professional, it is my goal to provide you with the very best customer care and ensure all transactions are handled smoothly.I value the importance of friends and family, and strive to help all my clients discover the joy that comes with truly being “Home”.  I look forward to creating a memorable experience for you.",
                "designations": [],
                "first_month": 0,
                "first_name": "Betsy",
                "first_year": 2000,
                "has_photo": true,
                "href": "http://www.marketsells.com",
                "id": "56cce31e89a68901006f7019",
                "is_realtor": true,
                "languages": [],
                "last_name": "Stec Market",
                "last_updated": "Fri, 13 Oct 2023 07:21:38 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "84948"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "84948"
                        },
                        "inactivation_date": "2022-03-26T15:04:18.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554027512",
                "office": {
                    "name": "Ivester Jackson | Christie's International Real Estate",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "1935"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 817-9826",
                            "ext": ""
                        },
                        {
                            "type": "Toll Free",
                            "number": "(188) 837-85232",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "7048179826",
                            "ext": ""
                        },
                        "phone_2": {
                            "type": "Toll Free",
                            "number": "18883785232",
                            "ext": ""
                        }
                    },
                    "licenses": null,
                    "feed_licenses": null,
                    "photo": {
                        "href": "https://ap.rdcpix.com/1448052165/0ffe0caa933c08e5eb2f13abe3821b43o-c0o.jpg"
                    },
                    "slogan": "Local Expertise. Tailored Service. Christie's Credibility.",
                    "website": "http://www.ivesterjackson.com/",
                    "video": null,
                    "fulfillment_id": 2029735,
                    "address": {
                        "line": "1515 Mockingbird Lane, Suite 900",
                        "line2": "",
                        "city": "Charlotte",
                        "postal_code": "28209",
                        "state_code": "NC",
                        "state": "North Carolina",
                        "country": "US"
                    },
                    "email": "info@IvesterJackson.com",
                    "nrds_id": "554031572"
                },
                "party_id": 3739650,
                "person_name": "Betsy Stec Market",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 619-8603",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "http://p.rdcpix.com/v03/gf1c81100-c0md-r1.jpg"
                },
                "recommendations_count": 0,
                "review_count": 3,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "The Charlotte and surrounding areas within North Carolina and South Carolina",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "Working with buyers and Sellers for both residenti"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Betsy-Stec-Market_Charlotte_NC_1165553_784279544",
                "zips": [
                    "28206",
                    "28209",
                    "28210",
                    "28211",
                    "28269",
                    "28270",
                    "28273",
                    "28277"
                ],
                "email": "betsy@marketsells.com",
                "full_name": "Betsy Stec Market",
                "name": "Betsy Stec Market, Broker",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "for_sale_price": {
                    "count": 2,
                    "min": 109000,
                    "max": 1775000,
                    "last_listing_date": "2023-10-17T15:46:01Z"
                },
                "recently_sold": {
                    "count": 19,
                    "min": 155000,
                    "max": 1300000,
                    "last_sold_date": "2023-09-15"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "19721 Bethel Church Rd",
                    "line2": "",
                    "city": "Cornelius",
                    "postal_code": "28031",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 1155894,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/a75395cef015fa217be332d8c18129dbg-c2748423160s.jpg"
                },
                "broker": {
                    "fulfillment_id": 1134617,
                    "designations": [],
                    "name": "KELLER WILLIAMS- CORNELIUS",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "Real Estate is Our Family Business-\n\nReal Estate is the only career we've ever had. Our children understand our love for real estate and if you ask our daughter what she wants to be when she grows up, her first answer is “REALTOR”. We are a Real Estate Family.\n\nOur Clients Become Part of Our Real Estate Family-\n\nWe value the relationships we have made with our clients over the last 18 years. We earned our clients’ trust by doing the right thing during the process so our relationships continue long after closing. We see our clients at events and we meet their expanding families. We welcome them into our Real Estate Family.\n\nOur Family of Services-\n\nWe are expanding our family of real estate services. In addition to residential real estate, in 2020 our business will include commercial real estate services. Our mission is to be the trusted real estate advisers for all phases of life- buying the next home, growing a real estate portfolio or finding the right location for a new business. Our Real Estate Family of Services is expanding.\n\nContact Us Today- The Fishers Real Estate Family is Here to Help Yours!",
                "designations": [
                    {
                        "name": "EPRO"
                    },
                    {
                        "name": "SFR"
                    }
                ],
                "first_month": 5,
                "first_name": "Kay",
                "first_year": 2009,
                "has_photo": true,
                "href": "http://www.thefishersrealestate.com",
                "id": "56ccb33dbb954c01006d98a8",
                "is_realtor": true,
                "languages": [],
                "last_name": "Fisher",
                "last_updated": "Fri, 13 Oct 2023 07:03:48 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC",
                        "city_state": "Denver_NC"
                    },
                    {
                        "name": "Westport",
                        "state_code": "NC",
                        "city_state": "Westport_NC"
                    },
                    {
                        "name": "Lowesville",
                        "state_code": "NC",
                        "city_state": "Lowesville_NC"
                    },
                    {
                        "name": "Lake Norman of Catawba",
                        "state_code": "NC",
                        "city_state": "Lake Norman of Catawba_NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC",
                        "city_state": "Mooresville_NC"
                    },
                    {
                        "name": "Mount Mourne",
                        "state_code": "NC",
                        "city_state": "Mount Mourne_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Mount Ulla",
                        "state_code": "NC",
                        "city_state": "Mount Ulla_NC"
                    },
                    {
                        "name": "Troutman",
                        "state_code": "NC",
                        "city_state": "Troutman_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "type": "A",
                        "member": {
                            "id": "74528"
                        }
                    }
                ],
                "mls_history": [],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554025800",
                "office": {
                    "name": "Keller Williams Lake Norman",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "481201"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 892-5518",
                            "ext": ""
                        },
                        {
                            "type": "Fax",
                            "number": "(704) 439-5277",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "7048925518",
                            "ext": ""
                        },
                        "phone_2": {
                            "type": "Fax",
                            "number": "7044395277",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "http://p.rdcpix.com/v02/o5abf0b00-c0l.gif"
                    },
                    "slogan": "",
                    "website": "MC724.YOURKWOFFICE.COM",
                    "video": null,
                    "fulfillment_id": 769882,
                    "address": {
                        "line": "19721 Bethel Church Rd",
                        "line2": "",
                        "city": "Cornelius",
                        "postal_code": "28031",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "robpetit@kw.com",
                    "nrds_id": "554017345"
                },
                "party_id": 3438946,
                "person_name": "Kay Fisher",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 363-5120",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/d5aeb739200b73c8c8d51a8e9329a1f2a-e808522081s.jpg",
                    "is_zoomed": false
                },
                "recommendations_count": 31,
                "review_count": 32,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Lake Norman",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    },
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": true,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "Real Estate . Family",
                "specializations": [
                    {
                        "name": "New Construction"
                    },
                    {
                        "name": "Green Living"
                    },
                    {
                        "name": "Sustainability"
                    },
                    {
                        "name": "Walkable Communities"
                    },
                    {
                        "name": "New Urbanism"
                    },
                    {
                        "name": "Lands Conservancy"
                    },
                    {
                        "name": "Buyers"
                    },
                    {
                        "name": "Sellers"
                    },
                    {
                        "name": "Listings"
                    }
                ],
                "title": "Broker/Owner",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Kay-Fisher_Cornelius_NC_1155894_991479544",
                "zips": [
                    "28031",
                    "28036",
                    "28037",
                    "28078",
                    "28117",
                    "28269",
                    "28115"
                ],
                "email": "kay@thefishersrealestate.com",
                "full_name": "Kay Fisher",
                "name": "Kay Fisher, Broker/Owner",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "social_media": {
                    "facebook": {
                        "type": "facebook",
                        "href": "https://www.facebook.com/kayfisherandassociates"
                    },
                    "twitter": {
                        "type": "twitter",
                        "href": "http://twitter.com/KFisherHome"
                    }
                },
                "for_sale_price": {
                    "count": 2,
                    "min": 99900,
                    "max": 260000,
                    "last_listing_date": "2023-10-04T19:52:51Z"
                },
                "recently_sold": {
                    "count": 26,
                    "min": 25000,
                    "max": 1746000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": true,
                    "team_advertiser_id": 2146815
                }
            },
            {
                "address": {
                    "line": "19721 Bethel Church Rd",
                    "line2": "",
                    "city": "Cornelius",
                    "postal_code": "28031",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 1081331,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/1246978818/caca5c0d35c26e0dbcd49441a9edbb0fg-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 1134617,
                    "designations": [],
                    "name": "KELLER WILLIAMS- CORNELIUS",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "Vernon Realty Group is a team of dedicated Broker /REALTORS® who strive to provide their clients with top-notch service. With a combined 20+ years of real estate experience and knowledge, the agents of Vernon Realty Group have a reputation for being hard working, loyal, easy-going, and honest, which is why their clients enjoy working with them or referring their friends and family to them for all of their real estate needs. There isn’t a real estate transaction the team hasn’t handled before. They love working with buyers, sellers, investors, fine homes and new construction. As agents who are experts in the Charlotte Metro Area, they bring a wealth of knowledge and expertise about buying and selling real estate here. It is not the same everywhere, so you need someone you can trust for the most up-to-date information. \n \nAs a successful team, they have been honored both locally and within the Region with awards such as the Eagle Award, Top Team Award each year since 2008 and have been recognized as Top Listing Agents each of the last ten years. Kristi serves on her office's Agent Leadership Committee, which is only open to the top 10% of agents. She is also a trainer within her local offices always striving to give back to agents beginning their real estate career or looking to boost themselves to the next level. She has earned her Strategic Pricing Specialist (SPS) Designation, Accredited Buyer Designation and is licensed in both North and South Carolina. The team also attributes their involvement within the community as a part of their success, donating to or volunteering their time with Crisis Assistance Ministry, the local Emergency Winter Shelter, American Cancer Society, A Child’s Place, Habitat for Humanity, Make-A-Wish Foundation, and the Second Harvest Bank of Metrolina food drive. \n\nWhile their team has embraced the conveniences of technology, they have not lost the personal touch. The resources, however convenient, will never replace the up close and personal time they spend with their clients, serving as their personal guide and trusted advisor through the process. Vernon Realty Group is sure to leave no stone unturned when it comes to real estate; contact them today and discover the advantages of having a successful team of REALTORS® on your side! \n\nOn a personal note...\n\nKristi was born in Jackson, Mississippi and moved to Charlotte in 1996. Shortly after moving to the area, she knew this was “home” because of all the area has to offer. After attending The University of North Carolina at Charlotte she decided to follow in her mothers’ footsteps and join her already successful real estate team. Real estate is not only her career, but her passion since starting in 2004. She married her best friend, Zach, in 2008 and they have two beautiful daughters and a handsome son.\n\nNahleena was born in Montreal, Quebec and moved with her family to North Carolina in 1996. In spending most of her life here, she considers Charlotte to be her home. Nahleena attended Western Carolina University with a major in criminal justice and shortly after graduating went into the multi-family/ property management industry. This is where she obtained several prestigious designations, including CAM and CAPS, and holds the title as a graduate to the GCAA Leadership Lyceum Program. Real Estate has always been a passion of Nahleena’s so after 13 years in the multi-family industry, she proudly obtained her license and joined the Vernon Realty Group with Keller Williams Realty. Currently, Nahleena resides in Cornelius, with her husband Will, gorgeous daughter, their two chocolate labs and their Bengal kitty.",
                "designations": [
                    {
                        "name": "SFR"
                    }
                ],
                "first_month": 2,
                "first_name": "Kristi",
                "first_year": 2005,
                "has_photo": true,
                "href": "http://www.VernonRealtyGroup.com",
                "id": "56cb7a617e54f70100237f3d",
                "is_realtor": true,
                "languages": [],
                "last_name": "Vernon",
                "last_updated": "Sun, 15 Oct 2023 18:39:57 GMT",
                "marketing_area_cities": [
                    {
                        "city_state": "Huntersville_NC",
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Cornelius_NC",
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Stanley_NC",
                        "name": "Stanley",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Lowesville_NC",
                        "name": "Lowesville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Davidson_NC",
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Kannapolis_NC",
                        "name": "Kannapolis",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Concord_NC",
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Landis_NC",
                        "name": "Landis",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Enochville_NC",
                        "name": "Enochville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Harrisburg_NC",
                        "name": "Harrisburg",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Mount Pleasant_NC",
                        "name": "Mount Pleasant",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Midland_NC",
                        "name": "Midland",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Charlotte_NC",
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Newell_NC",
                        "name": "Newell",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Pineville_NC",
                        "name": "Pineville",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Stallings_NC",
                        "name": "Stallings",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Mint Hill_NC",
                        "name": "Mint Hill",
                        "state_code": "NC"
                    },
                    {
                        "city_state": "Matthews_NC",
                        "name": "Matthews",
                        "state_code": "NC"
                    }
                ],
                "mls": [
                    {
                        "member": {
                            "id": "38910"
                        },
                        "abbreviation": "CHNC",
                        "type": "A",
                        "primary": true,
                        "license_number": ""
                    }
                ],
                "mls_history": [
                    {
                        "member": {
                            "id": "38910"
                        },
                        "inactivation_date": "2022-03-25T14:40:15.000Z",
                        "abbreviation": "CNNC",
                        "type": "A",
                        "primary": false,
                        "license_number": ""
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554018372",
                "office": {
                    "name": "Keller Williams Lake Norman",
                    "mls": [
                        {
                            "member": {
                                "id": "481201"
                            },
                            "abbreviation": "CHNC",
                            "type": "O",
                            "primary": true
                        }
                    ],
                    "phones": [
                        {
                            "ext": "",
                            "number": "(704) 892-5518",
                            "type": "Office"
                        },
                        {
                            "ext": "",
                            "number": "(704) 439-5277",
                            "type": "Fax"
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "7048925518",
                            "ext": ""
                        },
                        "phone_2": {
                            "type": "Fax",
                            "number": "7044395277",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "http://p.rdcpix.com/v02/o5abf0b00-c0l.gif"
                    },
                    "slogan": "",
                    "website": "MC724.YOURKWOFFICE.COM",
                    "video": null,
                    "fulfillment_id": 769882,
                    "address": {
                        "line": "19721 Bethel Church Rd",
                        "line2": "",
                        "city": "Cornelius",
                        "postal_code": "28031",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "robpetit@kw.com",
                    "nrds_id": "554017345"
                },
                "party_id": 3464759,
                "person_name": "Kristi Vernon, Broker",
                "phones": [
                    {
                        "ext": "",
                        "number": "(704) 641-0062",
                        "type": "Mobile",
                        "key": "phone_1"
                    },
                    {
                        "ext": "",
                        "number": "(980) 272-8894",
                        "type": "Office",
                        "key": "phone_2"
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/1995583254/5ec82ed7fc0d7d95403fd8721bfba123a-e0s.jpg"
                },
                "recommendations_count": 11,
                "review_count": 28,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Stanley",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "cfb_wizard_step": "account_integration",
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "Because Life is Better When You Love Where You Live...",
                "specializations": [],
                "title": "Broker/Owner",
                "types": "agent",
                "user_languages": [],
                "video": "",
                "web_url": "https://www.realtor.com/realestateagents/Kristi-Vernon,-Broker_Cornelius_NC_1081331_726189544",
                "zips": [
                    "28078",
                    "28031",
                    "28164",
                    "28036",
                    "28083",
                    "28027",
                    "28081",
                    "28025",
                    "28075",
                    "28216",
                    "28269",
                    "28262",
                    "28213",
                    "28215",
                    "28208",
                    "28209",
                    "28210",
                    "28211",
                    "28105",
                    "28277",
                    "28273",
                    "28217",
                    "28278",
                    "28206",
                    "28202",
                    "28205",
                    "28207",
                    "28203"
                ],
                "email": "kristi@vernonrealtygroup.com",
                "full_name": "Kristi Vernon, Broker",
                "name": "Kristi Vernon, Broker, Broker/Owner",
                "agent_type": [
                    "seller",
                    "buyer"
                ],
                "feed_licenses": [],
                "for_sale_price": {
                    "count": 3,
                    "min": 310000,
                    "max": 500000,
                    "last_listing_date": "2023-10-14T16:48:09Z"
                },
                "recently_sold": {
                    "count": 34,
                    "min": 160000,
                    "max": 815000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": true,
                    "team_advertiser_id": 3629266
                }
            },
            {
                "address": {
                    "line": "6801 Morrison Blvd Suite 101",
                    "line2": "",
                    "city": "CHARLOTTE",
                    "postal_code": "28211-3521",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 2562426,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/983848c81e902722dd76f71b042be54ag-c3466280611s.jpg"
                },
                "broker": {
                    "fulfillment_id": 1081277,
                    "designations": [],
                    "name": "",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "Having moved at least ten times with the airlines I worked for, I was ready to settle down roots in one place. My husband and I had just spent two long, cold years in Minneapolis, MN, and I knew I needed a more inviting climate. We made a list of several cities that met our requirements, and Charlotte, NC topped the list. The draw to Charlotte for me was more than just great climate, it was also a great city with so much to offer! After moving to the Lake Norman area, we discovered all the wonderful things that Charlotte had to offer. The amazing Greenway system for hiking and biking, the museums, civic arenas' and sports for every type of fan, and amazing scenic lake views! Over the past twenty years, I have seen Charlotte blossom into a bigger city with more infrastructure to support all the local growth, all while maintaining the small town feel that drew me here. The people are the best in the country, kind and welcoming, and that is why I am proud to call Charlotte my home.\n\nBecause I have moved so many times in my career, I know how hard it can be. Finding just the right location to meet all your families needs. I look forward to helping you find the perfect home for your family, and if you are finding yourself called to leave Charlotte, I can help maximize your profit with the sale of your house. Moving isn't easy, but with the right help it can be, Let me be the one to help you! Named as one of the Top 1% of agents nationwide, I take my job as priority number one and put my clients needs first.\n\nAs part of the Berkshire Hathaway HomeServices Carolinas Realty team, I am dedicated to providing all of your real estate needs. A full-service company, Berkshire Hathaway HomeServices Carolinas Realty provides home buying and selling, mortgage lending, an apartment locator service, home warranties and title insurance services all under one roof for your convenience. As one of the most respected real estate companies in America, Berkshire Hathaway HomeServices Carolinas Realty is committed to providing its clients with comprehensive marketing and technology services, including thousands of property listings, searchable open houses, virtual tours, email updates, financial calculators, selling tips and much, much more. If you are looking for your dream home, considering selling your current residence, or even if you just have a real estate related question, please contact me. It would be a pleasure to serve you.",
                "designations": [
                    {
                        "name": "ABR"
                    }
                ],
                "first_month": 0,
                "first_name": "Melissa",
                "first_year": 0,
                "has_photo": true,
                "href": "http://melissazimmermanrealtor.com",
                "id": "576dd7e4002eaf0100471c96",
                "is_realtor": true,
                "languages": [],
                "last_name": "Zimmerman",
                "last_updated": "Fri, 13 Oct 2023 10:20:39 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC",
                        "city_state": "Harrisburg_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Mount Pleasant",
                        "state_code": "NC",
                        "city_state": "Mount Pleasant_NC"
                    },
                    {
                        "name": "Midland",
                        "state_code": "NC",
                        "city_state": "Midland_NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Stallings",
                        "state_code": "NC",
                        "city_state": "Stallings_NC"
                    },
                    {
                        "name": "Mint Hill",
                        "state_code": "NC",
                        "city_state": "Mint Hill_NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC",
                        "city_state": "Matthews_NC"
                    },
                    {
                        "name": "Mount Ulla",
                        "state_code": "NC",
                        "city_state": "Mount Ulla_NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC",
                        "city_state": "Mooresville_NC"
                    },
                    {
                        "name": "Troutman",
                        "state_code": "NC",
                        "city_state": "Troutman_NC"
                    },
                    {
                        "name": "Mount Mourne",
                        "state_code": "NC",
                        "city_state": "Mount Mourne_NC"
                    },
                    {
                        "name": "China Grove",
                        "state_code": "NC",
                        "city_state": "China Grove_NC"
                    },
                    {
                        "name": "Landis",
                        "state_code": "NC",
                        "city_state": "Landis_NC"
                    },
                    {
                        "name": "Enochville",
                        "state_code": "NC",
                        "city_state": "Enochville_NC"
                    },
                    {
                        "name": "Newell",
                        "state_code": "NC",
                        "city_state": "Newell_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Paw Creek",
                        "state_code": "NC",
                        "city_state": "Paw Creek_NC"
                    },
                    {
                        "name": "Wesley Chapel",
                        "state_code": "NC",
                        "city_state": "Wesley Chapel_NC"
                    },
                    {
                        "name": "Mineral Springs",
                        "state_code": "NC",
                        "city_state": "Mineral Springs_NC"
                    },
                    {
                        "name": "Weddington",
                        "state_code": "NC",
                        "city_state": "Weddington_NC"
                    },
                    {
                        "name": "Marvin",
                        "state_code": "NC",
                        "city_state": "Marvin_NC"
                    },
                    {
                        "name": "JAARS",
                        "state_code": "NC",
                        "city_state": "JAARS_NC"
                    },
                    {
                        "name": "Waxhaw",
                        "state_code": "NC",
                        "city_state": "Waxhaw_NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC",
                        "city_state": "Indian Trail_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "32280"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "32280"
                        },
                        "inactivation_date": "2022-03-25T14:30:29.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554030933",
                "office": {
                    "name": "Berkshire Hathaway Homeservices Carolinas Realty",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "885007"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 364-1580",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "(704) 364-1580",
                            "ext": ""
                        }
                    },
                    "licenses": null,
                    "feed_licenses": null,
                    "photo": {
                        "href": null
                    },
                    "slogan": "",
                    "website": "",
                    "video": null,
                    "fulfillment_id": 31062,
                    "address": {
                        "line": "6801 Morrison Blvd Suite 101",
                        "line2": "",
                        "city": "CHARLOTTE",
                        "postal_code": "28211-3521",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "mmckelvey@cbunited.com",
                    "nrds_id": "554085003"
                },
                "party_id": 149859467,
                "person_name": "Melissa Zimmerman",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(440) 503-3580",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/b3cee49d74821e3600846ff05c7ca17ea-e541542748s.jpg",
                    "is_zoomed": false
                },
                "recommendations_count": 12,
                "review_count": 16,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "China Grove",
                        "state_code": "NC"
                    },
                    {
                        "name": "Waxhaw",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte Huntersville Cornelius Davidson Mooresville Waxhaw Weddington",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    },
                    "share_contacts": false,
                    "full_access": false,
                    "recommendations": {
                        "tt": {
                            "user": "D2208D73-A8B9-4154-921F-09EE7A47F782",
                            "linked": "TRUE",
                            "updated": "1581697847"
                        }
                    },
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": false,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "North Carolina and South Carolina licensed Real Estate Agent"
                    },
                    {
                        "name": "Certified Military Residential Specialist"
                    },
                    {
                        "name": "Pre-exisiting home sales"
                    },
                    {
                        "name": "New Construction home sales"
                    },
                    {
                        "name": "Sellers Agent"
                    },
                    {
                        "name": "Buyers Agent"
                    },
                    {
                        "name": "Relocation Expert"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "video": "https://www.youtube.com/embed/IjuskyhL3_w?modestbranding=1&rel=0",
                "web_url": "https://www.realtor.com/realestateagents/Melissa-Zimmerman_CHARLOTTE_NC_2562426_660969544",
                "zips": [
                    "28269",
                    "28215",
                    "28027",
                    "28025",
                    "28031",
                    "28078",
                    "28036",
                    "28105",
                    "28201",
                    "28209",
                    "28115",
                    "28117",
                    "28023",
                    "28208",
                    "28205",
                    "28213",
                    "28202",
                    "28203",
                    "28207",
                    "28210",
                    "28211",
                    "28212",
                    "28214",
                    "28216",
                    "28226",
                    "28227",
                    "28246",
                    "28254",
                    "28262",
                    "28270",
                    "28273",
                    "28278",
                    "28280",
                    "28284",
                    "28173",
                    "28104",
                    "28204"
                ],
                "email": "Melissa.Zimmerman@bhhscarolinas.com",
                "full_name": "Melissa Zimmerman",
                "name": "Melissa Zimmerman, Broker",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "for_sale_price": {
                    "count": 3,
                    "min": 375000,
                    "max": 450000,
                    "last_listing_date": "2023-10-14T18:51:21Z"
                },
                "recently_sold": {
                    "count": 64,
                    "min": 275000,
                    "max": 2150000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "10935 Winds Crossing Dr Ste 200",
                    "line2": "",
                    "city": "Charlotte",
                    "postal_code": "28273",
                    "state_code": "NC",
                    "state": "",
                    "country": ""
                },
                "advertiser_id": 1353763,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/1462223160/b94d9fe13ec303e1f87246b01ca7bfceg-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 0,
                    "designations": [],
                    "name": "Patton Real Estate Professionals, LLC",
                    "accent_color": "#ce0000",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "In this transplant city, Alicia is a rarity - she’s a NC native! During the 2007 recession, she developed her real estate business with a deep focus on truly understanding her clientele. Time and intention are her differentiators - understanding the unique nature of her clients’ needs and making certain they understand the process is paramount. She comes with extra superpowers as well! Alicia has leveraged previous banking experience to enrich the buying/selling experience of her clients. She is able to support and guide those with special financing needs, credit restoration, down payment assistance, and the daunting first-time home purchase! When she’s not putting in work at Patton Real Estate Professionals, you might find her on her way to a new destination via motorcycle. If she’s not exploring a new place, she enjoys dancing and playing hostess at fun family gatherings!",
                "designations": [
                    {
                        "name": "ABR"
                    },
                    {
                        "name": "AHWD"
                    },
                    {
                        "name": "SFR"
                    }
                ],
                "first_month": 3,
                "first_name": "Alicia",
                "first_year": 2007,
                "has_photo": true,
                "href": "http://www.pattonrealestateprofessionals.com",
                "id": "56d0654f761f0a01007d5db6",
                "is_realtor": true,
                "languages": [],
                "last_name": "Patton",
                "last_updated": "Fri, 13 Oct 2023 07:06:44 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Paw Creek",
                        "state_code": "NC",
                        "city_state": "Paw Creek_NC"
                    },
                    {
                        "name": "Mint Hill",
                        "state_code": "NC",
                        "city_state": "Mint Hill_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "type": "A",
                        "member": {
                            "id": "65821"
                        }
                    }
                ],
                "mls_history": [],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554023923",
                "office": {
                    "name": "Patton Real Estate Professionals LLC",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": "true",
                            "type": "O",
                            "member": {
                                "id": "12548"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 251-9065",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "number": "(704) 251-9065"
                        },
                        "phone_2": {
                            "type": "Fax",
                            "number": "7046020500",
                            "ext": ""
                        },
                        "phone_3": {
                            "type": "Toll Free",
                            "number": "8005860320",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": ""
                    },
                    "slogan": "",
                    "website": "www.PattonRealEstateProfessionals.com",
                    "video": "",
                    "fulfillment_id": 0,
                    "address": {
                        "line": "10935 Winds Crossing Dr Ste 200",
                        "line2": "",
                        "city": "Charlotte",
                        "postal_code": "28273",
                        "state_code": "NC",
                        "state": "",
                        "country": ""
                    },
                    "email": ""
                },
                "party_id": 2808629,
                "person_name": "Alicia Patton",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 840-6983",
                        "ext": "",
                        "key": "phone_1"
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/e457e952ca0ae110138aad02113b68e3a-e3641826696s.jpg",
                    "is_zoomed": false
                },
                "recommendations_count": 2,
                "review_count": 7,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "North Carolina",
                        "state_code": "NA"
                    },
                    {
                        "name": "South Carolina",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": false,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "Your Realtor For Life!",
                "specializations": [
                    {
                        "name": "First Time Buyers"
                    },
                    {
                        "name": "Marketing & Selling Homes"
                    },
                    {
                        "name": "New Construction Homes"
                    },
                    {
                        "name": "Veterans Loans"
                    },
                    {
                        "name": "property management"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Alicia-Patton_Charlotte_NC_1353763_670679544",
                "zips": [
                    "28214",
                    "28216",
                    "28217",
                    "28227",
                    "28262",
                    "28269",
                    "28273",
                    "28277",
                    "28278"
                ],
                "email": "alicia@pattonrealestateprofessionals.com",
                "full_name": "Alicia Patton",
                "name": "Alicia Patton, Broker",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "social_media": {
                    "twitter": {
                        "type": "twitter",
                        "href": "http://twitter.com/PattonREPros"
                    }
                },
                "for_sale_price": {
                    "count": 2,
                    "min": 275000,
                    "max": 350000,
                    "last_listing_date": "2023-10-11T14:44:48Z"
                },
                "recently_sold": {
                    "count": 29,
                    "min": 65000,
                    "max": 598760,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "1339 Concord Parkway North",
                    "line2": "",
                    "city": "Concord",
                    "postal_code": "28025",
                    "state_code": "NC",
                    "state": "North Carolina",
                    "country": "US"
                },
                "advertiser_id": 1872618,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/2d278f2dc8efb0f518d0e9a19747fe44g-c3756550685s.jpg"
                },
                "broker": {
                    "fulfillment_id": 1963689,
                    "designations": [],
                    "name": "Allen Tate",
                    "accent_color": "#7a1b1b",
                    "photo": {
                        "href": "https://ap.rdcpix.com/0cbab478f30efdc7152ec5a2d344020ck-c1463365301s.jpg"
                    },
                    "video": ""
                },
                "description": "Welcome to \"The Noelle Donovan Team\" Realtor.com page.  We are a great group of energetic, creative, REALTORS always thinking outside the box!  Buying or selling?  Please contact us for all of your real estate needs!'\r\nNoelle Donovan 980-254-5512\r\nAlisa McCulloch 704-787-5418\r\nNancy Kapp 301-332-2759\r\nJonathan Golby 980-248-0445",
                "designations": [
                    {
                        "name": "SFR"
                    }
                ],
                "first_month": 4,
                "first_name": "Noelle",
                "first_year": 2007,
                "has_photo": true,
                "href": "https://noelledonovan.allentate.com",
                "id": "56d5f3a0b5cc660100bcaefc",
                "is_realtor": true,
                "languages": [],
                "last_name": "Donovan",
                "last_updated": "Fri, 13 Oct 2023 07:27:37 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Harrisburg",
                        "state_code": "NC",
                        "city_state": "Harrisburg_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Mount Pleasant",
                        "state_code": "NC",
                        "city_state": "Mount Pleasant_NC"
                    },
                    {
                        "name": "Midland",
                        "state_code": "NC",
                        "city_state": "Midland_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Landis",
                        "state_code": "NC",
                        "city_state": "Landis_NC"
                    },
                    {
                        "name": "Enochville",
                        "state_code": "NC",
                        "city_state": "Enochville_NC"
                    },
                    {
                        "name": "Locust",
                        "state_code": "NC",
                        "city_state": "Locust_NC"
                    },
                    {
                        "name": "Fairview",
                        "state_code": "NC",
                        "city_state": "Fairview_NC"
                    },
                    {
                        "name": "Stanfield",
                        "state_code": "NC",
                        "city_state": "Stanfield_NC"
                    },
                    {
                        "name": "Newell",
                        "state_code": "NC",
                        "city_state": "Newell_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "type": "A",
                        "member": {
                            "id": "68032"
                        }
                    }
                ],
                "mls_history": [],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "552501166",
                "office": {
                    "name": "Allen Tate Realtors-Concord",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "810015"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 786-6350",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "7047866350",
                            "ext": ""
                        }
                    },
                    "licenses": [
                        {
                            "state_code": "NC",
                            "country": "USA"
                        }
                    ],
                    "feed_licenses": null,
                    "photo": {
                        "href": "https://ap.rdcpix.com/569826821/06fa19acf2f47170ca75a347468039abg-c0s.jpg",
                        "is_zoomed": null
                    },
                    "slogan": "",
                    "website": "https://www.allentate.com/offices/concord",
                    "video": null,
                    "fulfillment_id": 1487974,
                    "address": {
                        "line": "1339 Concord Parkway North",
                        "line2": "",
                        "city": "Concord",
                        "postal_code": "28025",
                        "state_code": "NC",
                        "state": "North Carolina",
                        "country": "US"
                    },
                    "email": "mike.ransom@allentate.com",
                    "nrds_id": "552500139"
                },
                "party_id": 2809063,
                "person_name": "Noelle Donovan",
                "phones": [
                    {
                        "type": "Direct",
                        "number": "(980) 254-5512",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/5057de7cdc119a30799a434be3b2921fa-e699883373s.jpg",
                    "is_zoomed": false
                },
                "recommendations_count": 31,
                "review_count": 5,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC"
                    },
                    {
                        "name": "Midland",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mount Pleasant",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "recommendations": {
                        "tt": {
                            "user": "BA3EE587-D554-48CC-9D6D-2129C5B7B05E",
                            "linked": "TRUE",
                            "updated": "1610424813"
                        }
                    },
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": false,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": true,
                        "rdc": true
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "Listing and Buying Homes"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Noelle-Donovan_Concord_NC_1872618_338894744",
                "zips": [
                    "28025",
                    "28027",
                    "28075",
                    "28081",
                    "28107",
                    "28124",
                    "28213",
                    "28215",
                    "28262",
                    "28269"
                ],
                "email": "Noelle.Donovan@allentate.com",
                "full_name": "Noelle Donovan",
                "name": "Noelle Donovan, Broker",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "social_media": {
                    "facebook": {
                        "type": "facebook",
                        "href": "https://www.facebook.com/thenoelledonovanteam"
                    }
                },
                "for_sale_price": {
                    "count": 6,
                    "min": 245414,
                    "max": 448900,
                    "last_listing_date": "2023-10-11T13:27:06Z"
                },
                "recently_sold": {
                    "count": 65,
                    "min": 85000,
                    "max": 920000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": true,
                    "team_advertiser_id": 2702059
                }
            },
            {
                "address": {
                    "line": "8600 SAM FURR RD STE 110",
                    "line2": "",
                    "city": "HUNTERSVILLE",
                    "postal_code": "28078-4105",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 37234,
                "agent_rating": 5,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/163381785/2ceed4f5b18b5dbe23747e24cd26b807g-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 1081277,
                    "designations": [],
                    "name": "",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "As a devoted real estate professional I will make every effort to ensure your experience is as smooth and enjoyable as possible. So, whether you are seriously interested in getting into the real estate market, or simply just looking, I can help you find the answers to your questions about homeownership or selling your home. My goal is to assist you in finding that perfect home. Whether you want a big backyard or a 3-car garage, I will find you that special property.\n\nI grew up in Elken, North Carolina and moved to Charlotte in 1978. I earned my North Carolina broker license and began my real estate career in 1990. I am dedicated to providing outstanding customer service to my clients and will use my expertise in the Charlotte market to help you find the best value in a home. I will also use my negotiation skills to manage the complex issues involved in transactions while maintaining close contact with you.\n\nAs part of the Berkshire Hathaway HomeServices Carolinas Realty team, I am dedicated to providing all of your real estate needs. A full-service company, Berkshire Hathaway HomeServices Carolinas Realty provides home buying and selling, mortgage lending, an apartment locator service, home warranties and title insurance services - all under one roof for your convenience. As one of the most respected real estate companies in America, Berkshire Hathaway HomeServices Carolinas Realty is committed to providing its clients with comprehensive marketing and technology services, including thousands of property listings, searchable open houses, virtual tours, email updates, financial calculators, selling tips and much, much more.\n\nFeel free to contact me if you have any questions about buying or selling your home. I am here to help you through the process; whether it is just answering general market questions or finding the right financial options for you.",
                "designations": [
                    {
                        "name": "CRS"
                    }
                ],
                "first_month": 1,
                "first_name": "Tracy",
                "first_year": 1990,
                "has_photo": true,
                "href": "http://www.tracygentry.bhhscarolinas.com",
                "id": "5673907a7e54f701001de9d5",
                "is_realtor": true,
                "languages": [],
                "last_name": "Gentry",
                "last_updated": "Fri, 13 Oct 2023 10:32:54 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Harrisburg",
                        "state_code": "NC",
                        "city_state": "Harrisburg_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Mount Pleasant",
                        "state_code": "NC",
                        "city_state": "Mount Pleasant_NC"
                    },
                    {
                        "name": "Midland",
                        "state_code": "NC",
                        "city_state": "Midland_NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Newell",
                        "state_code": "NC",
                        "city_state": "Newell_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "12989"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "12989"
                        },
                        "inactivation_date": "2022-03-27T22:11:04.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554012989",
                "office": {
                    "name": "Berkshire Hathaway Homeservices Carolinas Realty",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "license_number": "",
                            "type": "O",
                            "member": {
                                "id": "885011"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 892-1424",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "(704) 892-1424",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": null
                    },
                    "slogan": "",
                    "website": "PRUCAROLINAS.COM/REAL-ESTATE-OFFICE-LAKE-NORMAN",
                    "video": null,
                    "fulfillment_id": 31058,
                    "address": {
                        "line": "8600 SAM FURR RD STE 110",
                        "line2": "",
                        "city": "HUNTERSVILLE",
                        "postal_code": "28078-4105",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "marty.briggs@bhhscarolinas.com",
                    "nrds_id": "554085011"
                },
                "party_id": 4178019,
                "person_name": "Tracy Gentry",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 458-4600",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/1367147590/cf286c003736282817d1ed05d10de6c9a-e0s.jpg"
                },
                "recommendations_count": 6,
                "review_count": 1,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "recommendations": {
                        "tt": {
                            "user": "547300A1-8C86-4E57-92FD-3421AC76B817",
                            "linked": "TRUE",
                            "updated": "1587579293"
                        }
                    },
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": false,
                    "loaded_from_sb": false,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": true,
                        "rdc": true
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "Assisting Buyers & Sellers  with Relocations"
                    },
                    {
                        "name": "Land & Lake living."
                    },
                    {
                        "name": "New construction"
                    },
                    {
                        "name": "Resale"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Tracy-Gentry_HUNTERSVILLE_NC_37234_010789544",
                "zips": [
                    "28025",
                    "28031",
                    "28036",
                    "28075",
                    "28078",
                    "28206",
                    "28213",
                    "28215",
                    "28216",
                    "28226",
                    "28262",
                    "28269",
                    "28277"
                ],
                "email": "tracygentry@yahoo.com",
                "full_name": "Tracy Gentry",
                "name": "Tracy Gentry, Broker",
                "for_sale_price": {
                    "count": 0,
                    "last_listing_date": null,
                    "max": 0,
                    "min": 0
                },
                "recently_sold": {
                    "count": 23,
                    "min": 350000,
                    "max": 2730000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "415 Beatties Ford Road",
                    "line2": "",
                    "city": "Charlotte",
                    "postal_code": "28216",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 2050547,
                "agent_rating": 5,
                "background_photo": {
                    "href": "http://p.rdcpix.com/v01/gf3491f00-c0od-w1200_q50.jpg"
                },
                "broker": {
                    "fulfillment_id": 1558234,
                    "designations": [],
                    "name": "5 Points Realty - Broker",
                    "accent_color": "#e72a86",
                    "photo": {
                        "href": "https://ap.rdcpix.com/a1333a76d25c3469ae8882669ee8e99bk-c3949167351s.jpg",
                        "is_zoomed": true
                    },
                    "video": ""
                },
                "description": "Beverly made Charlotte her home in 1999 after moving from Chattanooga, TN. She arrived just in time to watch the Charlotte real estate market blossom, boom and finally bust. This has helped give her the perspective that enables her to walk clients through calculated decisions about their home investments. An expert in customer relations and process management, Beverly has developed market knowledge and a skill set that makes her an asset to buyers and sellers in real estate. \n\nAs a project manager for a local builder, she organized and managed new construction and renovation projects in the urban and central corridor from the ground up. This gave her an inside look at the nuts and bolts of home construction. That strength is valuable to any seller preparing a home for sale or a buyer considering a home purchase. \n\nIn a natural progression from construction to real estate, she honed her organization and process management skills as a closing coordinator for some of Charlotte's top brokers and then went on to manage leasing for multiple local apartment complexes in the urban market. Today she combines this powerful blend of experience, skills and market knowledge to represent and advocate for her real estate clients like no other broker does. \n\nBeverly has still found time to give back to the community. Since 2006 she has been an active volunteer with the Charlotte Youth Rowing organization as the Assistant Coach. She has been a valuable asset to Charlotte teens and their families. \n\nWith Beverly's knowledge, skill set and dedication to client service; you will be in excellent hands whether you are buying, selling or looking to invest.",
                "designations": [],
                "first_month": 0,
                "first_name": "",
                "first_year": 0,
                "has_photo": true,
                "href": "http://beverlynewell.com/",
                "id": "56d5953ade071e010062b099",
                "is_realtor": true,
                "languages": [],
                "last_name": "",
                "last_updated": "Fri, 13 Oct 2023 08:29:31 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Mount Holly",
                        "state_code": "NC",
                        "city_state": "Mount Holly_NC"
                    },
                    {
                        "name": "Belmont",
                        "state_code": "NC",
                        "city_state": "Belmont_NC"
                    },
                    {
                        "name": "Cramerton",
                        "state_code": "NC",
                        "city_state": "Cramerton_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Paw Creek",
                        "state_code": "NC",
                        "city_state": "Paw Creek_NC"
                    },
                    {
                        "name": "Mint Hill",
                        "state_code": "NC",
                        "city_state": "Mint Hill_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "24014"
                        }
                    }
                ],
                "mls_history": [],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554029643",
                "office": {
                    "name": "5 Points Realty",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "4334"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 332-3320",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "7043323320",
                            "ext": ""
                        },
                        "phone_2": {
                            "type": "Fax",
                            "number": "7043323327",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "https://ap.rdcpix.com/f86d802080444e215255c4dce09b2ad2o-c1713482915o.jpg",
                        "is_zoomed": null
                    },
                    "slogan": "Friendly Professionals.Fresh Solutions.Creative Real Estate",
                    "website": "http://www.5pointsrealtync.com/",
                    "video": null,
                    "fulfillment_id": 1557675,
                    "address": {
                        "line": "415 Beatties Ford Road",
                        "line2": "",
                        "city": "Charlotte",
                        "postal_code": "28216",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "5pointsoffice@gmail.com",
                    "nrds_id": "554025480"
                },
                "party_id": 62990811,
                "person_name": "Beverly Newell",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 497-0133",
                        "ext": "",
                        "key": "phone_1"
                    }
                ],
                "photo": {
                    "href": "http://p.rdcpix.com/v03/af3491f00-c0l.jpg"
                },
                "recommendations_count": 5,
                "review_count": 1,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Belmont",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": false,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "Broker",
                "specializations": [],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Beverly-Newell_Charlotte_NC_2050547_653079544",
                "zips": [
                    "28012",
                    "28202",
                    "28203",
                    "28204",
                    "28205",
                    "28206",
                    "28207",
                    "28209",
                    "28210",
                    "28214",
                    "28216",
                    "28227",
                    "28269"
                ],
                "email": "bnewell@5pointsrealtync.com",
                "name": "Beverly Newell, Broker",
                "social_media": {
                    "facebook": {
                        "type": "facebook",
                        "href": "http://www.facebook.com/1091282879"
                    }
                },
                "for_sale_price": {
                    "count": 1,
                    "min": 739000,
                    "max": 739000,
                    "last_listing_date": "2023-09-20T10:00:24Z"
                },
                "recently_sold": {
                    "count": 37,
                    "min": 68000,
                    "max": 915000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "",
                    "line2": "",
                    "city": "CHARLOTTE",
                    "postal_code": "28277",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 1466665,
                "agent_rating": 0,
                "background_photo": {
                    "href": "http://p.rdcpix.com/v02/g29611600-c0od-w1200_q50.jpg"
                },
                "broker": {
                    "fulfillment_id": 4459498,
                    "designations": [],
                    "name": "Xclusive Realty -  Broker",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "Brenda is a native of the Island of Bermuda. She obtained her Business Degree in Business Administration specializing in Legal Terminology in 1986 and was employed as a Trust/Probate Administrator for 11 years for a Queen’s Counsel, attorney appointed by the Queen of England.\n\nAfter meeting her husband in 1996 while he was working in Bermuda, she moved to Las Vegas in 1997. She was a licensed Broker in the State of Nevada for seven years.   Moved to North Carolina in 2010 where she holds a Broker-in-Charge license and opened Xclusive Realty in 2012.  She is also licensed in South Carolina.\n\nBrenda is also a member of the Institute for Luxury Home Marketing.\n\nWith her business background, real estate knowledge and great customer service, she is a great asset to buyers.\n\n“I work very hard for my buyers! I understand that buying a home is a huge-lifelong commitment and I do not take my clients’ home-buying experience lightly.   I stand by my clients every step of the process whether it’s picking out design options, inspections, appraisals, meeting blind installers, etc. My buyers receive the best professional service and support when buying their new home!”\n\nWhether you are buying now or later – let Brenda be your Real Estate Consultant today!\n\nA Real Agent Xclusively For You!",
                "designations": [
                    {
                        "name": "AHWD"
                    },
                    {
                        "name": "MRP"
                    }
                ],
                "first_month": 0,
                "first_name": "Brenda",
                "first_year": 2000,
                "has_photo": true,
                "href": "http://www.Xclusive-Realty.com",
                "id": "5673d6f5bb954c010067f26e",
                "is_realtor": true,
                "languages": [],
                "last_name": "Gober",
                "last_updated": "Fri, 13 Oct 2023 05:23:12 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC",
                        "city_state": "Denver_NC"
                    },
                    {
                        "name": "Westport",
                        "state_code": "NC",
                        "city_state": "Westport_NC"
                    },
                    {
                        "name": "Lowesville",
                        "state_code": "NC",
                        "city_state": "Lowesville_NC"
                    },
                    {
                        "name": "Lake Norman of Catawba",
                        "state_code": "NC",
                        "city_state": "Lake Norman of Catawba_NC"
                    },
                    {
                        "name": "Iron Station",
                        "state_code": "NC",
                        "city_state": "Iron Station_NC"
                    },
                    {
                        "name": "Landis",
                        "state_code": "NC",
                        "city_state": "Landis_NC"
                    },
                    {
                        "name": "Enochville",
                        "state_code": "NC",
                        "city_state": "Enochville_NC"
                    },
                    {
                        "name": "Stanley",
                        "state_code": "NC",
                        "city_state": "Stanley_NC"
                    },
                    {
                        "name": "Mount Holly",
                        "state_code": "NC",
                        "city_state": "Mount Holly_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Paw Creek",
                        "state_code": "NC",
                        "city_state": "Paw Creek_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "88609"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "88609"
                        },
                        "inactivation_date": "2022-03-28T19:11:32.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "629023279",
                "office": {
                    "name": "Xclusive Realty",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "8723"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Mobile",
                            "number": "(704) 231-3521",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Mobile",
                            "number": "7042313521",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "http://p.rdcpix.com/v01/o4f371e00-c0l.gif"
                    },
                    "slogan": "Dreams Begin with Visions!",
                    "website": "WWW.XCLUSIVE-REALTY.COM",
                    "video": null,
                    "fulfillment_id": 1980239,
                    "address": {
                        "line": "",
                        "line2": "",
                        "city": "CHARLOTTE",
                        "postal_code": "28277",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "brenda@xclusive-realty.com",
                    "nrds_id": "554029189"
                },
                "party_id": 21704272,
                "person_name": "Brenda L Gober",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 231-3521",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "http://p.rdcpix.com/v04/a29611600-c0l.jpg"
                },
                "recommendations_count": 9,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Concord",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Iron Station",
                        "state_code": "NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mount Holly",
                        "state_code": "NC"
                    },
                    {
                        "name": "Stanley",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": false,
                        "rdc": false
                    }
                },
                "slogan": "Dreams begin with Visions",
                "specializations": [
                    {
                        "name": "Huntersville"
                    },
                    {
                        "name": "Charlotte and surrounding area"
                    },
                    {
                        "name": "Member of Institute for Luxury Home Marketing"
                    }
                ],
                "title": "Broker/Owner",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Brenda-L-Gober_CHARLOTTE_NC_1466665_027679073",
                "zips": [
                    "28027",
                    "28031",
                    "28036",
                    "28037",
                    "28078",
                    "28080",
                    "28081",
                    "28120",
                    "28164",
                    "28210",
                    "28214",
                    "28216",
                    "28226",
                    "28262",
                    "28269",
                    "28277"
                ],
                "email": "brenda@xclusive-realty.com",
                "full_name": "Brenda Gober",
                "name": "Brenda L Gober, Broker/Owner",
                "agent_type": [
                    "buyer"
                ],
                "social_media": {
                    "facebook": {
                        "type": "facebook",
                        "href": "https://www.facebook.com/pages/Xclusive-Realty/467413876679212"
                    },
                    "twitter": {
                        "type": "twitter",
                        "href": "http://twitter.com/xclusive_realty"
                    }
                },
                "for_sale_price": {
                    "count": 0,
                    "last_listing_date": null,
                    "max": 0,
                    "min": 0
                },
                "recently_sold": {
                    "count": 11,
                    "min": 217587,
                    "max": 616420,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "",
                    "line2": "",
                    "city": "",
                    "postal_code": "",
                    "state_code": "",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 1284444,
                "agent_rating": 0,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/1750059977/36b493b42253852334fb11e0560e9549g-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 4595543,
                    "designations": [],
                    "name": "Renaissance Realty & Estate Sales",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "I am a native of Lincoln County.  After graduation from West Lincoln in 1990, I followed pursuit of a business degree at Gaston College.  In 2003, I chose to pursue auctioneering and successfully completed Mendenall's School of Auctioneering course.  \n\nIn 2010 I attended JY Monk Schools of Real Estate and became a licensed Broker. Shortly after this, I decided to establish my own real estate firm, and Renaissance Realty & Estate Sales, LLC was created In November 2015. \n\nI am here to assist in the purchase or sell of your home....my personal motto is....Buy or Sell Thy Castle without THE HASSLE\"\n\nCall me and let's get the journey started.... ",
                "designations": [
                    {
                        "name": "GRI"
                    }
                ],
                "first_month": 0,
                "first_name": "Caroline",
                "first_year": 2010,
                "has_photo": true,
                "href": "rresgroup.com",
                "id": "56cf265189a68901006fe4b1",
                "is_realtor": true,
                "languages": [],
                "last_name": "Brown",
                "last_updated": "Fri, 13 Oct 2023 05:36:33 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Mount Holly",
                        "state_code": "NC",
                        "city_state": "Mount Holly_NC"
                    },
                    {
                        "name": "Belmont",
                        "state_code": "NC",
                        "city_state": "Belmont_NC"
                    },
                    {
                        "name": "Cramerton",
                        "state_code": "NC",
                        "city_state": "Cramerton_NC"
                    },
                    {
                        "name": "Cherryville",
                        "state_code": "NC",
                        "city_state": "Cherryville_NC"
                    },
                    {
                        "name": "Dellview",
                        "state_code": "NC",
                        "city_state": "Dellview_NC"
                    },
                    {
                        "name": "Waco",
                        "state_code": "NC",
                        "city_state": "Waco_NC"
                    },
                    {
                        "name": "Crouse",
                        "state_code": "NC",
                        "city_state": "Crouse_NC"
                    },
                    {
                        "name": "Bessemer City",
                        "state_code": "NC",
                        "city_state": "Bessemer City_NC"
                    },
                    {
                        "name": "Gastonia",
                        "state_code": "NC",
                        "city_state": "Gastonia_NC"
                    },
                    {
                        "name": "Ranlo",
                        "state_code": "NC",
                        "city_state": "Ranlo_NC"
                    },
                    {
                        "name": "Lowell",
                        "state_code": "NC",
                        "city_state": "Lowell_NC"
                    },
                    {
                        "name": "McAdenville",
                        "state_code": "NC",
                        "city_state": "McAdenville_NC"
                    },
                    {
                        "name": "Spencer Mountain",
                        "state_code": "NC",
                        "city_state": "Spencer Mountain_NC"
                    },
                    {
                        "name": "Iron Station",
                        "state_code": "NC",
                        "city_state": "Iron Station_NC"
                    },
                    {
                        "name": "High Shoals",
                        "state_code": "NC",
                        "city_state": "High Shoals_NC"
                    },
                    {
                        "name": "Boger City",
                        "state_code": "NC",
                        "city_state": "Boger City_NC"
                    },
                    {
                        "name": "Lincolnton",
                        "state_code": "NC",
                        "city_state": "Lincolnton_NC"
                    },
                    {
                        "name": "Stanley",
                        "state_code": "NC",
                        "city_state": "Stanley_NC"
                    },
                    {
                        "name": "Earl",
                        "state_code": "NC",
                        "city_state": "Earl_NC"
                    },
                    {
                        "name": "Boiling Springs",
                        "state_code": "NC",
                        "city_state": "Boiling Springs_NC"
                    },
                    {
                        "name": "Mooresboro",
                        "state_code": "NC",
                        "city_state": "Mooresboro_NC"
                    },
                    {
                        "name": "Light Oak",
                        "state_code": "NC",
                        "city_state": "Light Oak_NC"
                    },
                    {
                        "name": "Patterson Springs",
                        "state_code": "NC",
                        "city_state": "Patterson Springs_NC"
                    },
                    {
                        "name": "Shelby",
                        "state_code": "NC",
                        "city_state": "Shelby_NC"
                    },
                    {
                        "name": "Lowesville",
                        "state_code": "NC",
                        "city_state": "Lowesville_NC"
                    },
                    {
                        "name": "Vale",
                        "state_code": "NC",
                        "city_state": "Vale_NC"
                    },
                    {
                        "name": "Belwood",
                        "state_code": "NC",
                        "city_state": "Belwood_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Paw Creek",
                        "state_code": "NC",
                        "city_state": "Paw Creek_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "88496"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "88496"
                        },
                        "inactivation_date": "2022-03-26T15:14:44.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "566000486",
                "office": {
                    "name": "Renaissance Realty & Estate Sales",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "1841"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Mobile",
                            "number": "(980) 241-0901",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Mobile",
                            "number": "9802410901",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": ""
                    },
                    "slogan": "",
                    "website": null,
                    "video": null,
                    "fulfillment_id": 2038927,
                    "address": {
                        "line": "",
                        "line2": "",
                        "city": "",
                        "postal_code": "",
                        "state_code": "",
                        "state": "",
                        "country": "US"
                    },
                    "email": "",
                    "nrds_id": "566000498"
                },
                "party_id": 11397143,
                "person_name": "Caroline Proctor Brown",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(980) 241-0901",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/2e874721c1ca1b349e44ca92762257f5a-e3968933211s.jpg",
                    "is_zoomed": false
                },
                "recommendations_count": 0,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Belmont",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cherryville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Crouse",
                        "state_code": "NC"
                    },
                    {
                        "name": "Gastonia",
                        "state_code": "NC"
                    },
                    {
                        "name": "Iron Station",
                        "state_code": "NC"
                    },
                    {
                        "name": "Lincolnton",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mount Holly",
                        "state_code": "NC"
                    },
                    {
                        "name": "Shelby",
                        "state_code": "NC"
                    },
                    {
                        "name": "Stanley",
                        "state_code": "NC"
                    },
                    {
                        "name": "Vale",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Bessemer City",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": true,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "cfb_wizard_step": "account_integration",
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "Buy or Sell Thy Castle without The Hassle ",
                "specializations": [
                    {
                        "name": "Buying"
                    },
                    {
                        "name": "Foreclosures"
                    },
                    {
                        "name": "Listing"
                    },
                    {
                        "name": "NC"
                    },
                    {
                        "name": "Property"
                    },
                    {
                        "name": "Real Estate"
                    },
                    {
                        "name": "Selling"
                    },
                    {
                        "name": "Short Sale"
                    }
                ],
                "title": "Broker/Owner",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Caroline-Proctor-Brown___1284444_315999334",
                "zips": [
                    "28012",
                    "28021",
                    "28033",
                    "28052",
                    "28054",
                    "28056",
                    "28080",
                    "28092",
                    "28120",
                    "28152",
                    "28164",
                    "28168",
                    "28208",
                    "28214",
                    "28216",
                    "28217",
                    "28269",
                    "28273",
                    "28278",
                    "28016"
                ],
                "email": "renaissance1realty@gmail.com",
                "full_name": "Caroline Brown",
                "name": "Caroline Proctor Brown, Broker/Owner",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "social_media": {
                    "facebook": {
                        "type": "facebook",
                        "href": "http://www.facebook.com/people/Caroline-Proctor-Brown/100000364449173"
                    }
                },
                "for_sale_price": {
                    "count": 4,
                    "min": 180000,
                    "max": 239900,
                    "last_listing_date": "2023-10-05T03:48:19Z"
                },
                "recently_sold": {
                    "count": 62,
                    "min": 23000,
                    "max": 696000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "13903 S Old Statesville Road",
                    "line2": "",
                    "city": "Huntersville",
                    "postal_code": "28078",
                    "state_code": "NC",
                    "state": "North Carolina",
                    "country": "US"
                },
                "advertiser_id": 3316354,
                "agent_rating": 0,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/241114036/9f1b8c3a1355c0b27a0946ef7f6da77cg-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 99916878,
                    "designations": [],
                    "name": "NorthGroup Real Estate",
                    "accent_color": "#9abb91",
                    "photo": {
                        "href": "https://ap.rdcpix.com/5c1fc147bbb14c94f5565c5482815e4bk-c3449971878s.jpg",
                        "is_zoomed": true
                    },
                    "video": ""
                },
                "description": "Licensed as a real estate agent since 2018, I have been in the Charlotte area for over 30 years and I love helping people with real estate! My career prior to real estate was in accounting/banking/construction.  \n\nMy broad experience is instrumental in handling the many moving parts that happen in common real estate transactions. My accounting experience helps in analyzing data, estimates of value and proceeds even while factoring in additional budgetary items such as; repairs, staging, cost of vacancy, etc. I have a strong understanding of construction terminology, scheduling, and practical applications.  \n\nContinuing education is a requirement of all agents in North Carolina, but I strive to stay ahead of the curve. I hold additional specialty designations, and have completed my Broker’s License Course Studies for North Carolina and South Carolina.  I believe in being a strong resource for my clients through education and as a referral partner.",
                "designations": [
                    {
                        "name": "SRES"
                    },
                    {
                        "name": "MRP"
                    }
                ],
                "first_month": 1,
                "first_year": 2018,
                "has_photo": true,
                "href": "http://www.emarcrealty.com",
                "id": "5a74abd719d44b00112814ad",
                "is_realtor": true,
                "languages": [],
                "last_updated": "Fri, 13 Oct 2023 08:49:39 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Stallings",
                        "state_code": "NC",
                        "city_state": "Stallings_NC"
                    },
                    {
                        "name": "Mint Hill",
                        "state_code": "NC",
                        "city_state": "Mint Hill_NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC",
                        "city_state": "Matthews_NC"
                    },
                    {
                        "name": "Wesley Chapel",
                        "state_code": "NC",
                        "city_state": "Wesley Chapel_NC"
                    },
                    {
                        "name": "Weddington",
                        "state_code": "NC",
                        "city_state": "Weddington_NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC",
                        "city_state": "Indian Trail_NC"
                    },
                    {
                        "name": "Unionville",
                        "state_code": "NC",
                        "city_state": "Unionville_NC"
                    },
                    {
                        "name": "Fairview",
                        "state_code": "NC",
                        "city_state": "Fairview_NC"
                    },
                    {
                        "name": "Monroe",
                        "state_code": "NC",
                        "city_state": "Monroe_NC"
                    },
                    {
                        "name": "Mineral Springs",
                        "state_code": "NC",
                        "city_state": "Mineral Springs_NC"
                    },
                    {
                        "name": "Marvin",
                        "state_code": "NC",
                        "city_state": "Marvin_NC"
                    },
                    {
                        "name": "JAARS",
                        "state_code": "NC",
                        "city_state": "JAARS_NC"
                    },
                    {
                        "name": "Waxhaw",
                        "state_code": "NC",
                        "city_state": "Waxhaw_NC"
                    },
                    {
                        "name": "Indian Land",
                        "state_code": "SC",
                        "city_state": "Indian Land_SC"
                    },
                    {
                        "name": "Fort Mill",
                        "state_code": "SC",
                        "city_state": "Fort Mill_SC"
                    },
                    {
                        "name": "Riverview",
                        "state_code": "SC",
                        "city_state": "Riverview_SC"
                    },
                    {
                        "name": "Tega Cay",
                        "state_code": "SC",
                        "city_state": "Tega Cay_SC"
                    },
                    {
                        "name": "Lake Wylie",
                        "state_code": "SC",
                        "city_state": "Lake Wylie_SC"
                    },
                    {
                        "name": "River Hills",
                        "state_code": "SC",
                        "city_state": "River Hills_SC"
                    },
                    {
                        "name": "Clover",
                        "state_code": "SC",
                        "city_state": "Clover_SC"
                    },
                    {
                        "name": "Bowling Green",
                        "state_code": "SC",
                        "city_state": "Bowling Green_SC"
                    },
                    {
                        "name": "Lesslie",
                        "state_code": "SC",
                        "city_state": "Lesslie_SC"
                    },
                    {
                        "name": "Rock Hill",
                        "state_code": "SC",
                        "city_state": "Rock Hill_SC"
                    },
                    {
                        "name": "Catawba",
                        "state_code": "SC",
                        "city_state": "Catawba_SC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "type": "A",
                        "member": {
                            "id": "63495"
                        }
                    }
                ],
                "mls_history": [],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554037098",
                "office": {
                    "name": "NorthGroup Real Estate LLC",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "13080"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(704) 412-2804",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "7044122804",
                            "ext": ""
                        },
                        "phone_2": {
                            "type": "Fax",
                            "number": "7045437382",
                            "ext": ""
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": "https://ap.rdcpix.com/451dd71007f6e6470e3fd7d8bcf6bafbo-c2222908310o.jpg",
                        "is_zoomed": null
                    },
                    "slogan": null,
                    "website": "http://www.northgroupre.com",
                    "video": null,
                    "fulfillment_id": 4349504,
                    "address": {
                        "line": "13903 S Old Statesville Road",
                        "line2": "",
                        "city": "Huntersville",
                        "postal_code": "28078",
                        "state_code": "NC",
                        "state": "North Carolina",
                        "country": "US"
                    },
                    "email": "jim@northgroupre.com",
                    "nrds_id": null
                },
                "party_id": 432668131,
                "person_name": "Ellen Marcum",
                "phones": [
                    {
                        "type": "Office",
                        "number": "(704) 226-5498",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "http://ap.rdcpix.com/74c45e153cca67b874fd4b1c27fedf69a-w3700396313s.jpg"
                },
                "recommendations_count": 0,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC"
                    },
                    {
                        "name": "Monroe",
                        "state_code": "NC"
                    },
                    {
                        "name": "Waxhaw",
                        "state_code": "NC"
                    },
                    {
                        "name": "Fort Mill",
                        "state_code": "SC"
                    },
                    {
                        "name": "Clover",
                        "state_code": "SC"
                    },
                    {
                        "name": "Rock Hill",
                        "state_code": "SC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": false,
                    "loaded_from_sb": false,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "I work for you.",
                "specializations": [
                    {
                        "name": "SRES"
                    },
                    {
                        "name": "MRP"
                    }
                ],
                "title": "Broker",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Ellen-Marcum_Huntersville_NC_3316354_109269544",
                "zips": [
                    "28226",
                    "28210",
                    "28277",
                    "28269",
                    "28134",
                    "28105",
                    "28104",
                    "28110",
                    "28173",
                    "28202",
                    "28203",
                    "28205",
                    "28209",
                    "28211",
                    "28212",
                    "28227",
                    "28270",
                    "28273",
                    "28278",
                    "29707",
                    "29708",
                    "29710",
                    "29715",
                    "29730"
                ],
                "email": "ellen@emarcrealty.com",
                "name": "Ellen Marcum, Broker",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "for_sale_price": {
                    "count": 0,
                    "last_listing_date": null,
                    "max": 0,
                    "min": 0
                },
                "recently_sold": {
                    "count": 19,
                    "min": 170000,
                    "max": 791406,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "207 Eden Circle",
                    "line2": "",
                    "city": "PINEVILLE",
                    "postal_code": "28134",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 6623,
                "agent_rating": 0,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/1951351185/2ad481f44ddf466be0e42ffd101b7886g-c0s.jpg"
                },
                "broker": {
                    "fulfillment_id": 0,
                    "designations": [],
                    "name": "",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "My philosophy is that clients come first. I aim to maintain constant communication with my customers, keeping them well-informed throughout the buying or selling process. I also keep in contact with past customers to understand how changes in the market could influence their buying or selling decisions.",
                "designations": [],
                "first_month": 3,
                "first_name": "Judy",
                "first_year": 1994,
                "has_photo": true,
                "href": "http://www.PinevilleHomes.com",
                "id": "567354c6bb954c010067778e",
                "is_realtor": true,
                "languages": [],
                "last_name": "Osborne",
                "last_updated": "Fri, 13 Oct 2023 10:33:07 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC",
                        "city_state": "Indian Trail_NC"
                    },
                    {
                        "name": "Monroe",
                        "state_code": "NC",
                        "city_state": "Monroe_NC"
                    },
                    {
                        "name": "Lake Park",
                        "state_code": "NC",
                        "city_state": "Lake Park_NC"
                    },
                    {
                        "name": "Hemby Bridge",
                        "state_code": "NC",
                        "city_state": "Hemby Bridge_NC"
                    },
                    {
                        "name": "Stallings",
                        "state_code": "NC",
                        "city_state": "Stallings_NC"
                    },
                    {
                        "name": "Fairview",
                        "state_code": "NC",
                        "city_state": "Fairview_NC"
                    },
                    {
                        "name": "Wesley Chapel",
                        "state_code": "NC",
                        "city_state": "Wesley Chapel_NC"
                    },
                    {
                        "name": "Mint Hill",
                        "state_code": "NC",
                        "city_state": "Mint Hill_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC",
                        "city_state": "Matthews_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Mount Ulla",
                        "state_code": "NC",
                        "city_state": "Mount Ulla_NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC",
                        "city_state": "Mooresville_NC"
                    },
                    {
                        "name": "Troutman",
                        "state_code": "NC",
                        "city_state": "Troutman_NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC",
                        "city_state": "Pineville_NC"
                    },
                    {
                        "name": "Mineral Springs",
                        "state_code": "NC",
                        "city_state": "Mineral Springs_NC"
                    },
                    {
                        "name": "Weddington",
                        "state_code": "NC",
                        "city_state": "Weddington_NC"
                    },
                    {
                        "name": "Marvin",
                        "state_code": "NC",
                        "city_state": "Marvin_NC"
                    },
                    {
                        "name": "JAARS",
                        "state_code": "NC",
                        "city_state": "JAARS_NC"
                    },
                    {
                        "name": "Waxhaw",
                        "state_code": "NC",
                        "city_state": "Waxhaw_NC"
                    },
                    {
                        "name": "Harrisburg",
                        "state_code": "NC",
                        "city_state": "Harrisburg_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Lake Wylie",
                        "state_code": "SC",
                        "city_state": "Lake Wylie_SC"
                    },
                    {
                        "name": "River Hills",
                        "state_code": "SC",
                        "city_state": "River Hills_SC"
                    },
                    {
                        "name": "Clover",
                        "state_code": "SC",
                        "city_state": "Clover_SC"
                    },
                    {
                        "name": "Bowling Green",
                        "state_code": "SC",
                        "city_state": "Bowling Green_SC"
                    },
                    {
                        "name": "Fort Mill",
                        "state_code": "SC",
                        "city_state": "Fort Mill_SC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "14598"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "14598"
                        },
                        "inactivation_date": "2022-03-25T22:54:40.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554014598",
                "office": {
                    "name": "Osborne Realty, Inc.",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": "true",
                            "type": "O",
                            "member": {
                                "id": "1459"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Mobile",
                            "number": "(704) 889-7653",
                            "ext": null
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Mobile",
                            "number": "7048897653"
                        }
                    },
                    "licenses": [],
                    "feed_licenses": [],
                    "photo": {
                        "href": ""
                    },
                    "slogan": "",
                    "website": "",
                    "video": "",
                    "fulfillment_id": 0,
                    "address": {
                        "line": "207 Eden Circle",
                        "line2": "",
                        "city": "PINEVILLE",
                        "postal_code": "28134",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "judyosborne@pinevilledsl.net"
                },
                "party_id": 4171497,
                "person_name": "JUDY OSBORNE",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 763-4486",
                        "ext": "",
                        "key": "phone_1"
                    }
                ],
                "photo": {
                    "href": "http://ap.rdcpix.com/244313787/80f4431bf838249179aa507f0bdd2cf3a-c0md-r1.jpg",
                    "is_zoomed": true
                },
                "recommendations_count": 0,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Indian Trail",
                        "state_code": "NC"
                    },
                    {
                        "name": "Matthews",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Pineville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Waxhaw",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Clover",
                        "state_code": "SC"
                    },
                    {
                        "name": "Fort Mill",
                        "state_code": "SC"
                    },
                    {
                        "name": "",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "recommendations": {
                        "realsatisfied": {
                            "user": "Judy-Osborne",
                            "id": "2fe7OgB",
                            "linked": "TRUE",
                            "updated": "1617801787"
                        }
                    },
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": false,
                    "loaded_from_sb": false,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    },
                    "reviews_opt_out": {
                        "rs": true,
                        "rdc": true
                    }
                },
                "slogan": "Helping People Day To Day",
                "specializations": [
                    {
                        "name": "Selling a house"
                    },
                    {
                        "name": "Buyers/Sellers Agent"
                    },
                    {
                        "name": "Buying a home"
                    },
                    {
                        "name": "New Construction"
                    },
                    {
                        "name": "Relocation"
                    }
                ],
                "title": "Broker/Owner",
                "types": "agent",
                "user_languages": [],
                "video": "https://www.youtube.com/embed/srsBAlwZ9pg?modestbranding=1&rel=0",
                "web_url": "https://www.realtor.com/realestateagents/JUDY-OSBORNE_PINEVILLE_NC_6623_104589544",
                "zips": [
                    "28070",
                    "28078",
                    "28079",
                    "28105",
                    "28106",
                    "28115",
                    "28134",
                    "28173",
                    "28202",
                    "28207",
                    "28209",
                    "28210",
                    "28211",
                    "28215",
                    "28223",
                    "28226",
                    "28227",
                    "28262",
                    "28269",
                    "28273",
                    "28277",
                    "28278",
                    "29710",
                    "29715"
                ],
                "email": "JudyOsborneNC@gmail.com",
                "full_name": "Judy Osborne",
                "name": "JUDY OSBORNE, Broker/Owner",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "social_media": {
                    "facebook": {
                        "type": "facebook",
                        "href": "http://www.facebook.com/OsborneRealty"
                    },
                    "twitter": {
                        "type": "twitter",
                        "href": "http://www.twitter.com/JudyOsborne"
                    }
                },
                "for_sale_price": {
                    "count": 1,
                    "min": 320000,
                    "max": 320000,
                    "last_listing_date": "2023-10-09T01:45:21Z"
                },
                "recently_sold": {
                    "count": 9,
                    "min": 55000,
                    "max": 465000,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "11121 Carmel Commons Blvd. Suite 450",
                    "line2": "",
                    "city": "Charlotte",
                    "postal_code": "28226",
                    "state_code": "NC",
                    "state": "",
                    "country": "US"
                },
                "advertiser_id": 425193,
                "agent_rating": 0,
                "background_photo": {
                    "href": ""
                },
                "broker": {
                    "fulfillment_id": 1270857,
                    "designations": [],
                    "name": "Pulte Homes - Charlotte Division",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "",
                "designations": [
                    {
                        "name": "EPRO"
                    }
                ],
                "first_month": 0,
                "first_name": "Mary",
                "first_year": 0,
                "has_photo": true,
                "href": "http://HomesNearCharlotte.com",
                "id": "56baaf330fa41701007537f7",
                "is_realtor": true,
                "languages": [],
                "last_name": "Dumke",
                "last_updated": "Fri, 13 Oct 2023 04:44:47 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "93709"
                        }
                    }
                ],
                "mls_history": [
                    {
                        "abbreviation": "CNNC",
                        "primary": false,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "93709"
                        },
                        "inactivation_date": "2022-03-28T11:46:23.000Z"
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nick_name": "",
                "nrds_id": "554001654",
                "office": {
                    "name": "Pulte Home Corporation",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "primary": true,
                            "type": "O",
                            "member": {
                                "id": "5002"
                            }
                        }
                    ],
                    "phones": [
                        {
                            "type": "Other",
                            "number": "(704) 817-2317",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Other",
                            "number": "(704) 817-2317",
                            "ext": ""
                        }
                    },
                    "licenses": null,
                    "feed_licenses": null,
                    "photo": {
                        "href": "http://p.rdcpix.com/v06/o76621300-c0l.gif"
                    },
                    "slogan": "",
                    "website": "http://www.Pulte.com/charlotte",
                    "video": null,
                    "fulfillment_id": 1270390,
                    "address": {
                        "line": "11121 Carmel Commons Blvd. Suite 450",
                        "line2": "",
                        "city": "Charlotte",
                        "postal_code": "28226",
                        "state_code": "NC",
                        "state": "",
                        "country": "US"
                    },
                    "email": "Joseph.Viotto@PulteGroup.com",
                    "nrds_id": null
                },
                "party_id": 4361367,
                "person_name": "Mary Ann Dumke",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(704) 516-6285",
                        "ext": ""
                    },
                    {
                        "type": "Fax",
                        "number": "(704) 439-1527",
                        "ext": ""
                    }
                ],
                "photo": {
                    "href": "http://p.rdcpix.com/v01/ae97c0600-c0o.jpg"
                },
                "recommendations_count": 0,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": true,
                    "terms_of_use": true,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": true,
                    "display_ratings": true,
                    "loaded_from_sb": true,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "slogan": "",
                "specializations": [
                    {
                        "name": "New Construction Specialist"
                    }
                ],
                "title": "",
                "types": "agent",
                "user_languages": [],
                "web_url": "https://www.realtor.com/realestateagents/Mary-Ann-Dumke_Charlotte_NC_425193_543899544",
                "zips": [
                    "28031",
                    "28035",
                    "28036",
                    "28078",
                    "28262",
                    "28269",
                    "28277"
                ],
                "email": "maryanndumke@kw.com",
                "full_name": "Mary Dumke",
                "name": "Mary Ann Dumke, ",
                "for_sale_price": {
                    "count": 9,
                    "min": 715290,
                    "max": 1343095,
                    "last_listing_date": "2023-09-29T21:19:42Z"
                },
                "recently_sold": {
                    "count": 82,
                    "min": 489795,
                    "max": 1378393,
                    "last_sold_date": "2023-10-17"
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            },
            {
                "address": {
                    "line": "19701 Bethel Church Road",
                    "line2": "Suite 103-182",
                    "city": "Cornelius",
                    "postal_code": "28031",
                    "state_code": "NC",
                    "state": "",
                    "country": ""
                },
                "advertiser_id": 100272287,
                "agent_rating": 0,
                "background_photo": {
                    "href": "https://ap.rdcpix.com/6f85da1dbafda50778e3a3e5ef1510c3g-c3604874928s.jpg"
                },
                "broker": {
                    "fulfillment_id": 4300224,
                    "designations": [],
                    "name": "Fathom Realty NC, LLC - Broker",
                    "accent_color": "",
                    "photo": {
                        "href": ""
                    },
                    "video": ""
                },
                "description": "A Washington state born and bred girl who now calls the beautiful state of North Carolina home!  Serving the North Charlotte and Lake Norman, NC areas,  where you can enjoy waterfront living without being too far from all the amenities Charlotte has to offer.  I love the excitement of real estate and being part of this amazing journey with my clients,  it truly is a special experience.  Message me and we can make your dream a reality!",
                "designations": [],
                "first_month": 6,
                "first_year": 2021,
                "has_photo": true,
                "href": "http://shelliebradshaw.fathomrealty.com",
                "id": "64d59f642a2b04411d8c9273",
                "is_realtor": true,
                "languages": [],
                "last_updated": "Fri, 13 Oct 2023 04:39:33 GMT",
                "marketing_area_cities": [
                    {
                        "name": "Huntersville",
                        "state_code": "NC",
                        "city_state": "Huntersville_NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC",
                        "city_state": "Cornelius_NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC",
                        "city_state": "Denver_NC"
                    },
                    {
                        "name": "Westport",
                        "state_code": "NC",
                        "city_state": "Westport_NC"
                    },
                    {
                        "name": "Lowesville",
                        "state_code": "NC",
                        "city_state": "Lowesville_NC"
                    },
                    {
                        "name": "Lake Norman of Catawba",
                        "state_code": "NC",
                        "city_state": "Lake Norman of Catawba_NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC",
                        "city_state": "Davidson_NC"
                    },
                    {
                        "name": "Kannapolis",
                        "state_code": "NC",
                        "city_state": "Kannapolis_NC"
                    },
                    {
                        "name": "Mount Ulla",
                        "state_code": "NC",
                        "city_state": "Mount Ulla_NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC",
                        "city_state": "Mooresville_NC"
                    },
                    {
                        "name": "Troutman",
                        "state_code": "NC",
                        "city_state": "Troutman_NC"
                    },
                    {
                        "name": "Mount Mourne",
                        "state_code": "NC",
                        "city_state": "Mount Mourne_NC"
                    },
                    {
                        "name": "Concord",
                        "state_code": "NC",
                        "city_state": "Concord_NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC",
                        "city_state": "Charlotte_NC"
                    }
                ],
                "mls": [
                    {
                        "abbreviation": "CHNC",
                        "primary": true,
                        "license_number": "",
                        "type": "A",
                        "member": {
                            "id": "R24902"
                        }
                    }
                ],
                "mls_monetization": false,
                "nar_only": 1,
                "nrds_id": "554050728",
                "office": {
                    "name": "Fathom Realty NC, LLC",
                    "mls": [
                        {
                            "abbreviation": "CHNC",
                            "type": "O",
                            "member": {
                                "id": "881004"
                            },
                            "primary": true
                        }
                    ],
                    "phones": [
                        {
                            "type": "Office",
                            "number": "(888) 455-6040",
                            "ext": ""
                        }
                    ],
                    "phone_list": {
                        "phone_1": {
                            "type": "Office",
                            "number": "8884556040",
                            "ext": ""
                        }
                    },
                    "licenses": [
                        {
                            "country": "US",
                            "state_code": "NC",
                            "license_number": "C23310"
                        }
                    ],
                    "feed_licenses": [],
                    "photo": {
                        "href": "https://ap.rdcpix.com/c7be71a1acacd873448edc2e25bef21fo-c3419890193o.jpg",
                        "is_zoomed": null
                    },
                    "slogan": "\"Whoever wants to be great must become a servant.\"",
                    "website": "https://www.fathomrealty.com/agents",
                    "video": null,
                    "fulfillment_id": 4298238,
                    "address": {
                        "line": "19701 Bethel Church Road",
                        "line2": "Suite 103-182",
                        "city": "Cornelius",
                        "postal_code": "28031",
                        "state_code": "NC",
                        "state": "",
                        "country": ""
                    },
                    "email": "cdaugherty@fathomrealty.com",
                    "nrds_id": null
                },
                "party_id": 534007973,
                "person_name": "Shellie Bradshaw",
                "phones": [
                    {
                        "type": "Mobile",
                        "number": "(509) 860-0418",
                        "ext": "",
                        "key": "phone_1"
                    }
                ],
                "photo": {
                    "href": "https://ap.rdcpix.com/3f4e9ff040f1fdf3c65472e948174670a-c3655837648s.jpg",
                    "is_zoomed": true
                },
                "recommendations_count": 0,
                "review_count": 0,
                "role": "agent",
                "served_areas": [
                    {
                        "name": "Huntersville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Cornelius",
                        "state_code": "NC"
                    },
                    {
                        "name": "Denver",
                        "state_code": "NC"
                    },
                    {
                        "name": "Davidson",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mooresville",
                        "state_code": "NC"
                    },
                    {
                        "name": "Charlotte",
                        "state_code": "NC"
                    },
                    {
                        "name": "Mount Mourne",
                        "state_code": "NC"
                    },
                    {
                        "name": "North Charlotte and Lake Norman",
                        "state_code": "NA"
                    },
                    {
                        "name": "NC",
                        "state_code": "NA"
                    }
                ],
                "settings": {
                    "share_contacts": false,
                    "full_access": false,
                    "display_listings": true,
                    "far_override": false,
                    "show_stream": false,
                    "terms_of_use": false,
                    "has_dotrealtor": false,
                    "display_sold_listings": true,
                    "display_price_range": false,
                    "display_ratings": false,
                    "loaded_from_sb": false,
                    "broker_data_feed_opt_out": false,
                    "unsubscribe": {
                        "autorecs": false,
                        "recapprove": false,
                        "account_notify": false
                    },
                    "new_feature_popup_closed": {
                        "agent_left_nav_avatar_to_profile": false
                    },
                    "profile_wizard": {
                        "realsatisfied_opt_out": false,
                        "tt_opt_out": false
                    }
                },
                "specializations": [
                    {
                        "name": "First Time Homebuyers"
                    },
                    {
                        "name": "Divorce"
                    },
                    {
                        "name": "Relocation"
                    }
                ],
                "title": "Agent",
                "types": "agent",
                "user_languages": [
                    "English"
                ],
                "web_url": "https://www.realtor.com/realestateagents/Shellie-Bradshaw_Cornelius_NC_100272287_172949544",
                "zips": [
                    "28078",
                    "28031",
                    "28037",
                    "28035",
                    "28036",
                    "28115",
                    "28117",
                    "28269",
                    "28123"
                ],
                "email": "shelliebradshaw@fathomrealty.com",
                "name": "Shellie Bradshaw, Agent",
                "agent_type": [
                    "buyer",
                    "seller"
                ],
                "for_sale_price": {
                    "count": 0,
                    "last_listing_date": null,
                    "max": 0,
                    "min": 0
                },
                "recently_sold": {
                    "count": 1,
                    "last_sold_date": "2023-10-17",
                    "max": 378000,
                    "min": 378000
                },
                "agent_team_details": {
                    "is_team_member": false
                }
            }
        ]
    }

    //Test for getSimilarHomes api call
    const similarHomes: any = {
        "data": {
            "home": {
                "__typename": "Home",
                "related_homes": {
                    "__typename": "SearchHomeResult",
                    "results": [
                        {
                            "__typename": "SearchHome",
                            "property_id": "6984693735",
                            "listing_id": "2960959008",
                            "plan_id": null,
                            "status": "for_sale",
                            "list_price": 599000,
                            "last_sold_price": null,
                            "last_sold_date": null,
                            "primary_photo": {
                                "__typename": "Photo",
                                "href": "https://ap.rdcpix.com/139c3328cd10b6af176445e5489bc97el-m6264234xd-w300_h300_q80.jpg"
                            },
                            "location": {
                                "__typename": "SearchHomeLocation",
                                "address": {
                                    "__typename": "SearchHomeAddress",
                                    "unit": null,
                                    "line": "9928 Colvard Cir",
                                    "street_number": null,
                                    "street_name": "",
                                    "city": "Charlotte",
                                    "state": "North Carolina",
                                    "state_code": "NC",
                                    "postal_code": "28269",
                                    "street_suffix": null,
                                    "country": null,
                                    "coordinate": {
                                        "__typename": "Coordinate",
                                        "lat": 35.337781,
                                        "lon": -80.77715
                                    }
                                },
                                "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=9928%20Colvard%20Cir%2C%20Charlotte%2C%20NC%2028269&size=640x480&source=outdoor&signature=sFgmYrfsoIDFZxOUSzBEuvLSkQ8="
                            },
                            "description": {
                                "__typename": "SearchHomeDescription",
                                "beds": 4,
                                "baths_full_calc": 2,
                                "baths_partial_calc": 1,
                                "baths": 3,
                                "sqft": 2859,
                                "beds_min": null,
                                "beds_max": null,
                                "baths_min": null,
                                "baths_max": null,
                                "baths_full": 2,
                                "baths_half": 1,
                                "sqft_min": null,
                                "sqft_max": null,
                                "lot_sqft": null,
                                "type": null,
                                "sub_type": null,
                                "year_built": null,
                                "sold_price": null,
                                "text": null
                            },
                            "comparable_data": {
                                "__typename": "HomeComparableData",
                                "price": {
                                    "__typename": "ComparableDataValue",
                                    "percent": -4,
                                    "absolute": -26000
                                },
                                "comparable_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": -8,
                                    "absolute": -248
                                },
                                "comparable_lot_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": null,
                                    "absolute": null
                                },
                                "year_built": {
                                    "__typename": "ComparableDataAbsoluteValue",
                                    "absolute": null
                                }
                            },
                            "list_price_min": null,
                            "list_price_max": null,
                            "href": "https://www.realtor.com/realestateandhomes-detail/9928-Colvard-Cir_Charlotte_NC_28269_M69846-93735",
                            "permalink": "9928-Colvard-Cir_Charlotte_NC_28269_M69846-93735",
                            "list_date": null,
                            "last_update_date": "2023-11-03T02:12:22Z",
                            "flags": {
                                "__typename": "HomeFlags",
                                "is_contingent": null,
                                "is_pending": null,
                                "is_price_reduced": null,
                                "is_new_listing": null,
                                "is_foreclosure": null
                            },
                            "photos": null,
                            "estimate": {
                                "__typename": "LatestEstimate",
                                "estimate": 539900
                            }
                        },
                        {
                            "__typename": "SearchHome",
                            "property_id": "5060783998",
                            "listing_id": "2960892480",
                            "plan_id": null,
                            "status": "for_sale",
                            "list_price": 525000,
                            "last_sold_price": null,
                            "last_sold_date": null,
                            "primary_photo": {
                                "__typename": "Photo",
                                "href": "https://ap.rdcpix.com/0ec5b19363b3361bd1e8f44e9a819aeal-m185937939xd-w300_h300_q80.jpg"
                            },
                            "location": {
                                "__typename": "SearchHomeLocation",
                                "address": {
                                    "__typename": "SearchHomeAddress",
                                    "unit": null,
                                    "line": "6128 Swanston Dr",
                                    "street_number": null,
                                    "street_name": "",
                                    "city": "Charlotte",
                                    "state": "North Carolina",
                                    "state_code": "NC",
                                    "postal_code": "28269",
                                    "street_suffix": null,
                                    "country": null,
                                    "coordinate": {
                                        "__typename": "Coordinate",
                                        "lat": 35.375154,
                                        "lon": -80.753638
                                    }
                                },
                                "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=6128%20Swanston%20Dr%2C%20Charlotte%2C%20NC%2028269&size=640x480&source=outdoor&signature=5_3K4v_Og_f-_fuCTjngr-ykSkg="
                            },
                            "description": {
                                "__typename": "SearchHomeDescription",
                                "beds": 5,
                                "baths_full_calc": 2,
                                "baths_partial_calc": 1,
                                "baths": 3,
                                "sqft": 2726,
                                "beds_min": null,
                                "beds_max": null,
                                "baths_min": null,
                                "baths_max": null,
                                "baths_full": 2,
                                "baths_half": 1,
                                "sqft_min": null,
                                "sqft_max": null,
                                "lot_sqft": null,
                                "type": null,
                                "sub_type": null,
                                "year_built": null,
                                "sold_price": null,
                                "text": null
                            },
                            "comparable_data": {
                                "__typename": "HomeComparableData",
                                "price": {
                                    "__typename": "ComparableDataValue",
                                    "percent": -16,
                                    "absolute": -100000
                                },
                                "comparable_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": -12,
                                    "absolute": -381
                                },
                                "comparable_lot_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": null,
                                    "absolute": null
                                },
                                "year_built": {
                                    "__typename": "ComparableDataAbsoluteValue",
                                    "absolute": null
                                }
                            },
                            "list_price_min": null,
                            "list_price_max": null,
                            "href": "https://www.realtor.com/realestateandhomes-detail/6128-Swanston-Dr_Charlotte_NC_28269_M50607-83998",
                            "permalink": "6128-Swanston-Dr_Charlotte_NC_28269_M50607-83998",
                            "list_date": null,
                            "last_update_date": "2023-11-03T12:09:47Z",
                            "flags": {
                                "__typename": "HomeFlags",
                                "is_contingent": null,
                                "is_pending": null,
                                "is_price_reduced": true,
                                "is_new_listing": null,
                                "is_foreclosure": null
                            },
                            "photos": null,
                            "estimate": {
                                "__typename": "LatestEstimate",
                                "estimate": 479300
                            }
                        },
                        {
                            "__typename": "SearchHome",
                            "property_id": "5384852303",
                            "listing_id": "2959781004",
                            "plan_id": null,
                            "status": "for_sale",
                            "list_price": 700000,
                            "last_sold_price": null,
                            "last_sold_date": null,
                            "primary_photo": {
                                "__typename": "Photo",
                                "href": "https://ap.rdcpix.com/b04ca5e53356de95c323bc9594e955b6l-m770534258xd-w300_h300_q80.jpg"
                            },
                            "location": {
                                "__typename": "SearchHomeLocation",
                                "address": {
                                    "__typename": "SearchHomeAddress",
                                    "unit": null,
                                    "line": "3500 French Woods Rd",
                                    "street_number": null,
                                    "street_name": "",
                                    "city": "Charlotte",
                                    "state": "North Carolina",
                                    "state_code": "NC",
                                    "postal_code": "28269",
                                    "street_suffix": null,
                                    "country": null,
                                    "coordinate": {
                                        "__typename": "Coordinate",
                                        "lat": 35.338143,
                                        "lon": -80.783937
                                    }
                                },
                                "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=3500%20French%20Woods%20Rd%2C%20Charlotte%2C%20NC%2028269&size=640x480&source=outdoor&signature=jo9EC7EaPtmKJUxa9xx4U_WRtek="
                            },
                            "description": {
                                "__typename": "SearchHomeDescription",
                                "beds": 4,
                                "baths_full_calc": 2,
                                "baths_partial_calc": 1,
                                "baths": 3,
                                "sqft": 3508,
                                "beds_min": null,
                                "beds_max": null,
                                "baths_min": null,
                                "baths_max": null,
                                "baths_full": 2,
                                "baths_half": 1,
                                "sqft_min": null,
                                "sqft_max": null,
                                "lot_sqft": null,
                                "type": null,
                                "sub_type": null,
                                "year_built": null,
                                "sold_price": null,
                                "text": null
                            },
                            "comparable_data": {
                                "__typename": "HomeComparableData",
                                "price": {
                                    "__typename": "ComparableDataValue",
                                    "percent": 12,
                                    "absolute": 75000
                                },
                                "comparable_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": 13,
                                    "absolute": 401
                                },
                                "comparable_lot_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": null,
                                    "absolute": null
                                },
                                "year_built": {
                                    "__typename": "ComparableDataAbsoluteValue",
                                    "absolute": null
                                }
                            },
                            "list_price_min": null,
                            "list_price_max": null,
                            "href": "https://www.realtor.com/realestateandhomes-detail/3500-French-Woods-Rd_Charlotte_NC_28269_M53848-52303",
                            "permalink": "3500-French-Woods-Rd_Charlotte_NC_28269_M53848-52303",
                            "list_date": null,
                            "last_update_date": "2023-11-09T10:28:06Z",
                            "flags": {
                                "__typename": "HomeFlags",
                                "is_contingent": null,
                                "is_pending": null,
                                "is_price_reduced": null,
                                "is_new_listing": null,
                                "is_foreclosure": null
                            },
                            "photos": null,
                            "estimate": {
                                "__typename": "LatestEstimate",
                                "estimate": 604000
                            }
                        },
                        {
                            "__typename": "SearchHome",
                            "property_id": "5124173183",
                            "listing_id": "2960303084",
                            "plan_id": null,
                            "status": "for_sale",
                            "list_price": 559000,
                            "last_sold_price": null,
                            "last_sold_date": null,
                            "primary_photo": {
                                "__typename": "Photo",
                                "href": "https://ap.rdcpix.com/614c9b16a4e0d6159a36d760e92159b6l-m73794620xd-w300_h300_q80.jpg"
                            },
                            "location": {
                                "__typename": "SearchHomeLocation",
                                "address": {
                                    "__typename": "SearchHomeAddress",
                                    "unit": null,
                                    "line": "10195 Claybrooke Dr",
                                    "street_number": null,
                                    "street_name": "",
                                    "city": "Charlotte",
                                    "state": "North Carolina",
                                    "state_code": "NC",
                                    "postal_code": "28262",
                                    "street_suffix": null,
                                    "country": null,
                                    "coordinate": {
                                        "__typename": "Coordinate",
                                        "lat": 35.339219,
                                        "lon": -80.749732
                                    }
                                },
                                "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=10195%20Claybrooke%20Dr%2C%20Charlotte%2C%20NC%2028262&size=640x480&source=outdoor&signature=oOK26dgOT4QgYX4iaOnKuCNlQyc="
                            },
                            "description": {
                                "__typename": "SearchHomeDescription",
                                "beds": 5,
                                "baths_full_calc": 3,
                                "baths_partial_calc": 1,
                                "baths": 4,
                                "sqft": 2961,
                                "beds_min": null,
                                "beds_max": null,
                                "baths_min": null,
                                "baths_max": null,
                                "baths_full": 3,
                                "baths_half": 1,
                                "sqft_min": null,
                                "sqft_max": null,
                                "lot_sqft": null,
                                "type": null,
                                "sub_type": null,
                                "year_built": null,
                                "sold_price": null,
                                "text": null
                            },
                            "comparable_data": {
                                "__typename": "HomeComparableData",
                                "price": {
                                    "__typename": "ComparableDataValue",
                                    "percent": -11,
                                    "absolute": -66000
                                },
                                "comparable_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": -5,
                                    "absolute": -146
                                },
                                "comparable_lot_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": null,
                                    "absolute": null
                                },
                                "year_built": {
                                    "__typename": "ComparableDataAbsoluteValue",
                                    "absolute": null
                                }
                            },
                            "list_price_min": null,
                            "list_price_max": null,
                            "href": "https://www.realtor.com/realestateandhomes-detail/10195-Claybrooke-Dr_Charlotte_NC_28262_M51241-73183",
                            "permalink": "10195-Claybrooke-Dr_Charlotte_NC_28262_M51241-73183",
                            "list_date": null,
                            "last_update_date": "2023-10-24T16:54:09Z",
                            "flags": {
                                "__typename": "HomeFlags",
                                "is_contingent": null,
                                "is_pending": null,
                                "is_price_reduced": true,
                                "is_new_listing": null,
                                "is_foreclosure": null
                            },
                            "photos": null,
                            "estimate": {
                                "__typename": "LatestEstimate",
                                "estimate": 500000
                            }
                        },
                        {
                            "__typename": "SearchHome",
                            "property_id": "5977291369",
                            "listing_id": "2960749419",
                            "plan_id": null,
                            "status": "for_sale",
                            "list_price": 685000,
                            "last_sold_price": null,
                            "last_sold_date": null,
                            "primary_photo": {
                                "__typename": "Photo",
                                "href": "https://ap.rdcpix.com/ff2926b9ba880c21ba27b41be40d2c7dl-m3164244181xd-w300_h300_q80.jpg"
                            },
                            "location": {
                                "__typename": "SearchHomeLocation",
                                "address": {
                                    "__typename": "SearchHomeAddress",
                                    "unit": null,
                                    "line": "15054 Northgreen Dr",
                                    "street_number": null,
                                    "street_name": "",
                                    "city": "Huntersville",
                                    "state": "North Carolina",
                                    "state_code": "NC",
                                    "postal_code": "28078",
                                    "street_suffix": null,
                                    "country": null,
                                    "coordinate": {
                                        "__typename": "Coordinate",
                                        "lat": 35.410755,
                                        "lon": -80.759639
                                    }
                                },
                                "street_view_url": "https://maps.googleapis.com/maps/api/streetview?channel=rdc-streetview&client=gme-movesalesinc&location=15054%20Northgreen%20Dr%2C%20Huntersville%2C%20NC%2028078&size=640x480&source=outdoor&signature=nxKqVwXgCoWhUQ8pKUpA6mk2rGY="
                            },
                            "description": {
                                "__typename": "SearchHomeDescription",
                                "beds": 4,
                                "baths_full_calc": 2,
                                "baths_partial_calc": 1,
                                "baths": 3,
                                "sqft": 3540,
                                "beds_min": null,
                                "beds_max": null,
                                "baths_min": null,
                                "baths_max": null,
                                "baths_full": 2,
                                "baths_half": 1,
                                "sqft_min": null,
                                "sqft_max": null,
                                "lot_sqft": null,
                                "type": null,
                                "sub_type": null,
                                "year_built": null,
                                "sold_price": null,
                                "text": null
                            },
                            "comparable_data": {
                                "__typename": "HomeComparableData",
                                "price": {
                                    "__typename": "ComparableDataValue",
                                    "percent": 10,
                                    "absolute": 60000
                                },
                                "comparable_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": 14,
                                    "absolute": 433
                                },
                                "comparable_lot_sqft": {
                                    "__typename": "ComparableDataValue",
                                    "percent": null,
                                    "absolute": null
                                },
                                "year_built": {
                                    "__typename": "ComparableDataAbsoluteValue",
                                    "absolute": null
                                }
                            },
                            "list_price_min": null,
                            "list_price_max": null,
                            "href": "https://www.realtor.com/realestateandhomes-detail/15054-Northgreen-Dr_Huntersville_NC_28078_M59772-91369",
                            "permalink": "15054-Northgreen-Dr_Huntersville_NC_28078_M59772-91369",
                            "list_date": null,
                            "last_update_date": "2023-11-08T20:37:17Z",
                            "flags": {
                                "__typename": "HomeFlags",
                                "is_contingent": null,
                                "is_pending": null,
                                "is_price_reduced": true,
                                "is_new_listing": null,
                                "is_foreclosure": null
                            },
                            "photos": null,
                            "estimate": {
                                "__typename": "LatestEstimate",
                                "estimate": 689000
                            }
                        }
                    ]
                }
            }
        }
    }

    const apiKey = process.env.NEXT_PUBLIC_REAL_ESTATE_API_KEY as string

    useEffect(() => {
        const getpropertyDetails = () => {
            const url = `https://realty-in-us.p.rapidapi.com/properties/v3/detail?property_id=${propertyID}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'bfe3b112a2mshd066685ec635a3dp135ceejsnaecff3296ecb',
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                }
            };

            try {
                // const response = await fetch(url, options);
                // const result = await response.json();
                setPropertyDetails(propertyDetailz.data.home)
                console.log(propertyDetails)
                // console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        getpropertyDetails();
    }, [])

    // Get property images 
    const getPropertyImages = async () => {
        const url = `https://realty-in-us.p.rapidapi.com/properties/v3/get-photos?property_id=${propertyID}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            // const response = await fetch(url, options);
            // const result = await response.json();
            // console.log(result);
            // console.log(result.data['home_search'].results[0].photos)
            // This sets propertyImges to an array with all the photo's href

            //change back to results instead of imagez after testing
            if (imagez.data['home_search'].results[0].photos.length > 0) {
                setPropertyImages(imagez.data['home_search'].results[0].photos)
                console.log('property images:', propertyImages)
                // console.log(propertyID)
            } else {
                console.log('No property image list')
            }
            // setImageList(propertyImages)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getAgentList = async () => {
            const url = 'https://realty-in-us.p.rapidapi.com/agents/list?postal_code=28269&offset=0&limit=20&sort=recent_activity_high&types=agent';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'bfe3b112a2mshd066685ec635a3dp135ceejsnaecff3296ecb',
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                }
            };

            try {
                // const response = await fetch(url, options);
                // const result = await response.text();
                setAgentList(agentsList.agents)
                agentList.map((agent: any) => {
                    setAgentID(agent['advertiser_id'])
                })
                console.log('agentID:', agentID)
                console.log('agentList:', agentList);
            } catch (error) {
                console.error(error);
            }
        }
        getAgentList();
    }, [])

    // getSimilarHomes api call
    useEffect(() => {
        const getSimilarHomes = async () => {
            const url = `https://realty-in-us.p.rapidapi.com/properties/v3/list-similar-homes?property_id=${propertyID}&limit=3&status=for_sale`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'bfe3b112a2mshd066685ec635a3dp135ceejsnaecff3296ecb',
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                }
            };

            try {
                // const response = await fetch(url, options);
                // const result = await response.text();
                // console.log(result);
                setSimilarHomesArray(similarHomes.data.home['related_homes'].results)
            } catch (error) {
                console.error(error);
            }
        }
        getSimilarHomes();
    }, [])

    // need to fix button logic, everything else is working to show all property images
    const showPreviousImage = () => {
        setLoading(true)
        setImageIndex((prevIndex: any) => {
            const newIndex = prevIndex - 1;
            return newIndex >= 0 ? newIndex : prevIndex;
        });
        setLoading(false)
    };

    const showNextImage = () => {
        setLoading(true)
        setImageIndex((prevIndex: any) => {
            const newIndex = prevIndex + 1;
            return newIndex < propertyImages.length ? newIndex : prevIndex;
        });
        setLoading(false)
    };

    // For high quality images, jpg were giving low quality
    const primaryPhotoCustomLoader = () => {
        return imageSrc?.replace('.jpg', `-w${width}_h${height}_x2.webp?w=${width}&q=75`);
    };
    const popUpPhotosCustomLoader = () => {
        return propertyImages[imageIndex]?.href.replace('.jpg', `-w${popUpWidth}_h${popUpHeight}_x2.webp?w=${popUpWidth}&q=75`);
    };

    // For contact agent button on property card modal
    const handleContactAgent = (e: any) => {
        if (agentEmail !== 'No data available') {
            e.preventDefault();
            const subject = encodeURIComponent('I am interested in your listing on ThenEstate')
            window.location.href = `mailto:${agentEmail}?subject=${subject}`;
        } else {
            e.preventDefault();
            return null;
        }
    };

    // Date formatter
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    // USD formatter
    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    // Date formnatter
    function formatDate(dateString: any) {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });
    }

    // To format to 100K, 20M, 3B etc.
    const numberFormatter = (num: number) => {
        if (num >= 1000) {
            if (num >= 1000000000) {
                return (num / 1000000000).toFixed(1) + 'B';
            } else if (num >= 10000000) {
                return (num / 1000000).toFixed(0) + 'M';
            } else {
                return (num / 1000).toFixed(0) + 'K';
            }
        }
        return num;
    };

    const verticalLinePlugin = {
        afterDraw: (chart, args, options) => {
            const { ctx, scales } = chart;
            // For vertical line on X-axis
            const { xScale } = scales.x;

            // To customize the line color and width
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;

            // To et the X-axis value where I want the line
            const xValue = new Date('2023-10-16');

            // To convert the X-axis value to a pixel position
            const xPosition = xScale.getPixelForValue(xValue);

            ctx.beginPath();
            ctx.moveTo(xPosition, 0);
            ctx.lineTo(xPosition, chart.height);
            ctx.stroke();
        }
    };



    // FOr different chart views
    const handleChartViewHistory = () => {
        setIsChartViewHistory(true)
        setIsChartViewForecast(false);

    }

    const handleChartViewForecast = () => {
        setIsChartViewForecast(true);
        setIsChartViewHistory(false)

    }

    // Tax assessment chart data
    const taxLineChartData: any = {
        labels: propertyDetails['tax_history'] &&
            // Every tax history year
            propertyDetails['tax_history'].map((taxHistory: any, m: any) => taxHistory.year).reverse(),
        datasets: [
            {
                label: 'Building',
                // If API returns null for building year it will result to 0
                data: propertyDetails['tax_history'] &&
                    propertyDetails['tax_history'].map((taxHistory: any) => {
                        const { assessment, year } = taxHistory;
                        if (assessment.building === null) {
                            return (
                                0
                            );
                        } else {
                            return taxHistory.assessment.building
                        }
                    }).reverse(),
                backgroundColor: 'rgb(229 72 77)',
                // Line color
                borderColor: 'rgb(229 72 77)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointRadius: 0,
            },
            {
                label: 'Land',
                // If API returns null for land year it will result to 0
                data: propertyDetails['tax_history'] &&
                    propertyDetails['tax_history'].map((taxHistory: any) => {
                        const { assessment, year } = taxHistory;
                        if (assessment.land === null) {
                            return (
                                0
                            );
                        } else {
                            return taxHistory.assessment.land
                        }
                    }).reverse(),
                backgroundColor: 'rgb(14 165 233)',
                // Line color
                borderColor: 'rgb(14 165 233)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointRadius: 0,
            },

        ],
    };

    const taxLineChartOptions: any = {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any, data: any) {
                        // Access the value of the data point
                        const value = tooltipItem.parsed.y;

                        // Custom tooltip text
                        if (value === 0) {
                            return `No data for ${tooltipItem.label}`
                        } else {
                            return `${usdFormatter.format(value)} in ${tooltipItem.label}`
                        };
                    },
                    title: function (tooltipItem: any) {
                        return 'Assessment value'
                    },
                },
                enabled: true,
                backgroundColor: 'rgb(0, 0, 0, 0.5)',
            },
            legend: {
                display: true
            },
            customLine: verticalLinePlugin,
        },
        scales: {
            x: {
                display: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0)', // Transparent color to hide grid lines
                    borderDash: [5, 5], // Dashed line pattern to further hide grid lines
                },

            },
            y: {
                display: true,
                ticks: {
                    // color: 'rgb(2, 120, 100)',
                    fontWeight: 'bold',
                    callback: function (value: any, index, ticks) {
                        return '$' + value.toLocaleString();
                    }
                },

            },

        },
        elements: {
            point: {
                radius: 1,
            },
        },

        interaction: {
            mode: 'index',
            axis: 'xy', // Display tooltips on both X and Y axes
            intersect: false,
        },
    };


    // Line chart data
    const lineChartData: any = {
        // X-axis
        labels: isChartViewHistory
            ? (propertyDetails.estimates['historical_values'][0].estimates).map((estimate: any) => new Date(estimate.date).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
            })).reverse()
            : (isChartViewForecast
                ? (propertyDetails.estimates['forecast_values'][0].estimates).map((estimate: any) => new Date(estimate.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                }))
                : []
            ),
        datasets: [
            {
                // Y-axis
                label: 'transparent',
                data: isChartViewHistory
                    ? (propertyDetails.estimates['historical_values'][0].estimates).map((estimate: any) => estimate.estimate).reverse()
                    : (isChartViewForecast
                        ? (propertyDetails.estimates['forecast_values'][0].estimates).map((estimate: any) => estimate.estimate)
                        : []
                    ),
                // Point color
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                // Line color
                borderColor: 'rgb(2 120 100)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointRadius: 0,
            }
        ],
    };


    {/** Options for our line chart */ }
    const lineChartOptions: any = {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any, data: any) {
                        // Access the value of the data point
                        const value = tooltipItem.parsed.y;

                        // Custom tooltip text
                        return `${usdFormatter.format(value)} on ${tooltipItem.label}`;
                    },
                    title: function (tooltipItem: any) {
                        return 'Property value'
                    },
                },
                enabled: true,
                backgroundColor: 'rgb(2, 120, 100, 0.8)',
            },
            legend: {
                display: false
            },
            customLine: verticalLinePlugin,
        },
        scales: {
            x: {
                display: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0)', // Transparent color to hide grid lines
                    borderDash: [5, 5], // Dashed line pattern to further hide grid lines
                },

            },
            y: {
                display: true,
                ticks: {
                    // color: 'rgb(2, 120, 100)',
                    fontWeight: 'bold',
                    callback: function (value: any, index, ticks) {
                        return '$' + value.toLocaleString();
                    }
                },

            },

        },
        elements: {
            point: {
                radius: 1,
            },
        },

        interaction: {
            mode: 'index',
            axis: 'xy', // Display tooltips on both X and Y axes
            intersect: false,
        },
    };



    // Propertycard popup new ui

    const item: ProductViewItem = {
        id: "942837-003",
        name: "Nike Air Max 270",
        description:
            "The Nike Air Max 270 delivers an even more adaptive fit than before. Stretch material in the upper moves with your foot, while the tri-star outsole pattern adjusts to your every step for a ride that delivers support and flexibility where you need it.",
        // images: [
        //     propertyImages ? propertyImages.map((item, i) => item.href) : []
        // ],
        price: 80.97,
        rating: 4.8,
        ratingCount: 669,
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "48", "50"],
        isPopular: true,
        availableColors: [
            { name: "Gray", hex: "#808080" },
            { name: "White", hex: "#ffffff" },
            { name: "Black", hex: "#222222" },
        ],
        details: [
            {
                title: "Size & Fit",
                items: [
                    "Fits small; we recommend ordering a half size up",
                    "Mid-weight, non-stretchy fabric",
                    "Designed for a mini length",
                ],
            },
            {
                title: "Shipping & Returns",
                items: [
                    "Free shipping & returns",
                    "Free, no-hassle returns",
                    "Complimentary gift packaging",
                    "Ships within 24 hours!",
                ],
            },
            {
                title: "Designer Notes",
                items: [
                    "Fits small; we recommend ordering a half size up",
                    "Mid-weight, non-stretchy fabric",
                    "Designed for a mini length",
                ],
            },
        ],
    };

    console.log(item.images)

    return (
        <div>

            <Card className="w-full h-full max-w-[520px]">

                <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap w-full">
                    {/* Property cover image */}
                    <Image
                        className={`object-cover aspect-square rounded-t`}
                        alt='property-image'
                        loader={primaryPhotoCustomLoader}
                        src={imageSrc}
                        // fill={true}
                        width={width}
                        height={height}

                    />
                    <div className="w-full px-4 py-3">
                        <div className='flex justify-between items-center w- full'>
                            <Chips
                                text={
                                    newListing ?
                                        (
                                            <div className='flex items-center gap-1'>
                                                <Sparkles />
                                                <p className='text-xs font-semibold '>New listing</p>
                                            </div>
                                        ) :
                                        foreclosure ?
                                            (
                                                <div className='flex items-center gap-1'>
                                                    <Cancel />
                                                    <p className='text-xs font-semibold '>Foreclosure</p>
                                                </div>
                                            ) :
                                            ''
                                }
                                size={'sm'}
                            />

                            {/* Status badge */}
                            <div className='flex items-center gap-2 w-fit rounded-full px-2 py-0.5 bg-slate10/30'>
                                <div className={
                                    (() => {
                                        switch (status) {
                                            case 'For sale':
                                                return 'rounded-full bg-green-500 w-2 h-2';
                                            case 'Ready to build':
                                                return 'rounded-full bg-yellow-500 w-2 h-2';
                                            case 'For rent':
                                                return 'rounded-full bg-purple-500 w-2 h-2';
                                            case 'Sold':
                                                return 'rounded-full bg-red-500 w-2 h-2';
                                            case 'Off market':
                                                return 'rounded-full bg-gray-500 w-2 h-2';
                                            case 'N/A':
                                                return 'rounded-full bg-black w-2 h-2';
                                            case 'New community':
                                                return 'rounded-full bg-sky-500 w-2 h-2';
                                            default:
                                                return '';
                                        }
                                    })()
                                }
                                />
                                <p className='text-xs text-default-500'>{status}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-large font-medium tracking-tighter">
                            <div>
                                <h3 className="text-sm md:text-md font-medium whitespace-nowrap text-default-500">
                                    {streetAddress}
                                </h3>
                                <h3 className="text-sm md:text-md text-default-500">
                                    {cityStateZip}
                                </h3>
                            </div>
                            <div className='flex flex-col text-lg md:text-xl font-bold'>
                                <p className='text-primary'>{usdFormatter.format(price)}</p>
                                <div className={priceReduction > 0 ? 'flex gap-1 items-center' : 'hidden'}>
                                    <Warning />
                                    <p className='text-xs text-red9 font-light'>Price reduction</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-xs text-default-400">
                            {/* <Separator.Root className="data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mt-[15px]" /> */}
                            <div className="flex h-5 items-center">
                                <div className=" leading-5">{beds}</div>
                                <Separator.Root
                                    className="bg-blue9 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                    decorative
                                    orientation="vertical"
                                />
                                <div className=" leading-5">{baths}</div>
                                <Separator.Root
                                    className="bg-blue9 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                    decorative
                                    orientation="vertical"
                                />
                                <div className=" leading-5">{squareFeet}</div>

                            </div>
                            {/* Add to portfolio button and more info button */}
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex gap-2 mt-2'>
                                    <NextToolTip
                                        isDisabled={portfolioButtonClicked ? true : false}
                                        className={portfolioButtonClicked ? "bg-transparent text-foreground border-default-200 cursor-not-allowed" : ""}
                                        radius={'sm'}
                                        tooltipContent={portfolioButtonClicked
                                            ? <span className='text-black'>In your portfolio</span>
                                            : <span className='text-white'>Add to portfolio</span>}
                                        buttonSize={'sm'}
                                        variant={portfolioButtonClicked ? "bordered" : "solid"}
                                        buttontext={
                                            portfolioButtonClicked ?
                                                <Checkmark />
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="text-white w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                                </svg>
                                        }
                                        tooltipColor={portfolioButtonClicked ? 'default' : 'primary'}
                                        buttonColor={'primary'}
                                        onClick={handleAddToPortfolio}
                                    />
                                    <NextToolTip
                                        isDisabled={watchlistButtonClicked ? true : false}
                                        className={watchlistButtonClicked ? "bg-transparent text-foreground border-default-200 cursor-not-allowed" : ""}
                                        radius={'sm'}
                                        tooltipContent={watchlistButtonClicked
                                            ? <span className='text-black'>In your watchlist</span>
                                            : <span className='text-white'>Add to watchlist</span>}
                                        buttonSize={'sm'}
                                        variant={watchlistButtonClicked ? "bordered" : "solid"}
                                        buttontext={
                                            watchlistButtonClicked ?
                                                <Checkmark />
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="text-white w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                        }
                                        tooltipColor={watchlistButtonClicked ? 'default' : 'secondary'}
                                        buttonColor={'secondary'}
                                        onClick={handleAddToWatchlist}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="justify-between  overflow-hidden py-1 absolute right-0 bottom-1 w-[calc(100%_-_200px)] ml-1 z-10">
                    <p className="text-tiny text-white/80 w-full">text</p>
                    <div className="text-tiny text-white bg-black/20 rounded-full">
                        <Modals
                            buttontext={'More info'}
                            onClickButton={getPropertyImages}
                            modalTitle={
                                <div className="max-w-8xl h-full w-full px-2 lg:px-24">
                                    <ProductViewInfo
                                        {...item}
                                        images={
                                            propertyImages ? propertyImages.map((item, i) => item.href) : []
                                        }
                                        loader={popUpPhotosCustomLoader}
                                    />
                                </div>
                            }

                            modalBody={
                                <>
                                    {/* Full container */}
                                    <div className="flex w-full flex-col">
                                        {propertyDetails.mortgage && (
                                            <Tabs color="primary" aria-label="Options">
                                                <Tab className="text-white" key="mortgage" title="Mortgage">
                                                    <Card>
                                                        <CardBody className="text-black">
                                                            <div className='flex flex-col gap-2 text-sm'>
                                                                <Seperator text={'30 yr. mortgage details'} />
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium text-blue9'>Property tax rate:</span>{(propertyDetails.mortgage['property_tax_rate'] * 100).toFixed(2)}%
                                                                </p>
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium'>Insurance rate:</span>{(propertyDetails.mortgage['insurance_rate'] * 100).toFixed(2)}%
                                                                </p>
                                                                {/* Mortgage payment  */}
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium'>Loan amount:</span>{usdFormatter.format(propertyDetails.mortgage.estimate['loan_amount'])}
                                                                </p>
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium'>Monthly payment:</span>{usdFormatter.format(propertyDetails.mortgage.estimate['monthly_payment'])}
                                                                </p>
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium'>Total cost of mortgage:</span>{usdFormatter.format(propertyDetails.mortgage.estimate['total_payment'])}
                                                                </p>
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium'>Down payment (25%):</span>{usdFormatter.format(propertyDetails.mortgage.estimate['down_payment'])}
                                                                </p>
                                                                {/* Rates for estimate  */}
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium'>Average rate:</span>{(propertyDetails.mortgage.estimate['average_rate'].rate * 100).toFixed(2)}%
                                                                </p>
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                                    <span className='font-medium'>Loan term:</span>{propertyDetails.mortgage.estimate['average_rate']['loan_type'].term} years
                                                                </p>
                                                                {/* Monthly payment details  */}
                                                            </div>

                                                            {/* Monthly ownership expense */}
                                                            <div className='flex flex-col gap-2 text-sm'>
                                                                <Seperator text={'Monthly ownership expenses'} />
                                                                {propertyDetails.mortgage.estimate['monthly_payment_details'].map((details: any, i: any) => (
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light' key={i}>
                                                                        <span className='font-medium'>{details['display_name']}:</span>
                                                                        {usdFormatter.format(details.amount)}
                                                                    </p>
                                                                ))}
                                                                <p className='flex items-center gap-2 rounded bg-blackA2 px-2'>
                                                                    <span className='text-blue9'>Total:</span>{usdFormatter.format(propertyDetails.mortgage.estimate['monthly_payment'])}
                                                                </p>
                                                            </div>

                                                            {/* Average rates for different mortgage products in general */}
                                                            <div className='flex flex-col gap-2 text-sm'>
                                                                <Seperator text={
                                                                    <div>
                                                                        Avg. rates for {propertyDetails.location.address.city}, {propertyDetails.location.address['state_code']}
                                                                    </div>
                                                                }
                                                                />
                                                                {propertyDetails.mortgage['average_rates'].map((rates: any, j: any) => (
                                                                    <div className='flex rounded gap-2 bg-blackA2 px-2' key={j}>
                                                                        <p className='font-medium'>
                                                                            {(() => {
                                                                                if (rates['loan_type']['loan_id'] === 'thirty_year_fix') {
                                                                                    return '30yr. fixed:';
                                                                                } else if (rates['loan_type']['loan_id'] === 'twenty_year_fix') {
                                                                                    return '20yr. fixed:'
                                                                                } else if (rates['loan_type']['loan_id'] === 'fifteen_year_fix') {
                                                                                    return '15yr. fixed:'
                                                                                } else if (rates['loan_type']['loan_id'] === 'ten_year_fix') {
                                                                                    return '10yr. fixed:'
                                                                                } else if (rates['loan_type']['loan_id'] === 'thirty_year_fha') {
                                                                                    return '30yr. FHA:'
                                                                                } else if (rates['loan_type']['loan_id'] === 'thirty_year_va') {
                                                                                    return '30yr. VA:'
                                                                                } else if (rates['loan_type']['loan_id'] === 'five_one_arm') {
                                                                                    return '5/1 ARM:'
                                                                                } else if (rates['loan_type']['loan_id'] === 'seven_one_arm') {
                                                                                    return '7/1 ARM:'
                                                                                }

                                                                            })()}
                                                                        </p>
                                                                        <p className='font-light'>{(rates.rate * 100).toFixed(2)}%</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Tab>
                                                <Tab className="text-white" key="details" title="Details">
                                                    <Card>
                                                        <CardBody>
                                                            {/* Descriptions */}
                                                            <div className='flex flex-col gap-2'>
                                                                <Seperator text={'Home description'} />
                                                                <div className='grid grid-cols-2 gap-2 whitespace-nowrap text-black'>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Bathrooms:</span>{propertyDetails.description.baths}
                                                                    </p>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Heating:</span>{propertyDetails.description.heating === null ? 'N/A' : propertyDetails.description.heating}
                                                                    </p>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Cooling:</span>{propertyDetails.description.cooling === null ? 'N/A' : propertyDetails.description.cooling}
                                                                    </p>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Bedrooms:</span> {propertyDetails.description.beds}
                                                                    </p>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Garage:</span>
                                                                        {(() => {
                                                                            if (propertyDetails.description.garage === null) {
                                                                                return 'No data available'
                                                                            } else if (propertyDetails.description.garage === 1) {
                                                                                return `${propertyDetails.description.garage} space`
                                                                            } else if (propertyDetails.description.garage > 1) {
                                                                                return `${propertyDetails.description.garage} spaces`
                                                                            }
                                                                        })()}
                                                                    </p>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Pool:</span>{propertyDetails.description.pool === null ? 'N/A' : propertyDetails.description.pool}
                                                                    </p>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Lot sqft:</span>{propertyDetails.description['lot_sqft'] === null ? 'N/A' : propertyDetails.description['lot_sqft'].toLocaleString()}
                                                                    </p>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Stories:</span>{propertyDetails.description.stories === null ? 'N/A' : propertyDetails.description.stories}
                                                                    </p>
                                                                    {/* HOA */}
                                                                    <div className='rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <p className='flex items-center gap-2 '>
                                                                            <span className='font-medium'>HOA Fee:</span>{usdFormatter.format(propertyDetails.hoa.fee)}
                                                                        </p>
                                                                    </div>
                                                                    {/* Price per sqft */}
                                                                    <div>
                                                                        <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2 text-black'>
                                                                            <span className='font-medium'>Price per sqft:</span>
                                                                            {usdFormatter.format(propertyDetails['price_per_sqft'])}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {/* Descriptive text */}
                                                                <p className='md:flex gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                    <span className='font-medium'>Description:</span> {propertyDetails.description.text}
                                                                </p>
                                                                {/* Pet policy */}
                                                                <div className={status === 'For rent' ? 'block' : 'hidden'}>
                                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light text-black'>
                                                                        <span className='font-medium'>Pet policy:</span>{propertyDetails['pet_policy'] === null ? 'N/A' : propertyDetails['pet_policy']}
                                                                    </p>
                                                                </div>
                                                                {/* Flood an noise level section */}
                                                                <div className='text-black'>
                                                                    {propertyDetails.local && (
                                                                        <div>
                                                                            <div className='mb-2'>
                                                                                <Seperator
                                                                                    text={`Noise levels`}
                                                                                />
                                                                            </div>
                                                                            <ul className='flex flex-col gap-2 text-sm mb-5'>
                                                                                <li className='rounded bg-blackA2 px-2'>
                                                                                    <p className='flex items-center gap-2'>
                                                                                        <span className='font-medium'>Overall score:</span>
                                                                                        <span className='font-light'>{propertyDetails.local.noise.score}</span>
                                                                                    </p>
                                                                                </li>
                                                                                {propertyDetails.local.noise['noise_categories'].map((category: any, i: any) => (
                                                                                    <ul key={i}>
                                                                                        <li className='rounded bg-blackA2 px-2'>
                                                                                            <p className='flex items-center gap-2'>
                                                                                                <span className='capitalize font-medium'>{category.type}:</span>
                                                                                                {/* Noise level ratings are color labeled */}
                                                                                                <span className={
                                                                                                    `${category.text === 'Low' ? 'text-green-500' :
                                                                                                        category.text === 'Medium' ? 'text-yellow-500' :
                                                                                                            category.text === 'High' ? 'text-red-500' :
                                                                                                                ''} font-light`
                                                                                                }>
                                                                                                    {category.text}
                                                                                                </span>


                                                                                            </p>
                                                                                        </li>
                                                                                    </ul>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                {/* Nearby schools */}
                                                                <div className='text-black'>
                                                                    <Seperator text={'Nearby schools'} />
                                                                    {propertyDetails['nearby_schools'].schools.map((school: any, l: any) => (
                                                                        <div className='flex flex-col gap-2' key={l}>
                                                                            <div className='flex items-center gap-2 font-light'>
                                                                                {/* <span className='font-medium'>Name:</span>{school.name} */}
                                                                                <AccordionDemo
                                                                                    accordionTrigger={
                                                                                        <div className='flex justify-between w-full'>
                                                                                            <div className='flex items-center gap-2 md:mr-10 md:w-full'>
                                                                                                <GraduationCap />
                                                                                                <p className='whitespace-nowrap text-sm'>
                                                                                                    {school.name}
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className={`whitespace-nowrap flex items-center gap-2 md:w-fit rounded-lg px-2 py-0.5 mr-2
                                                                                    ${(() => {
                                                                                                    if (school['parent_rating'] >= 4) {
                                                                                                        return 'bg-success'
                                                                                                    } else if (school['parent_rating'] === 3) {
                                                                                                        return 'bg-warning'
                                                                                                    } else if (school['parent_rating'] === null) {
                                                                                                        return 'bg-blackA5/50'
                                                                                                    } else if (school['parent_rating'] < 3) {
                                                                                                        return 'bg-red-500'
                                                                                                    }
                                                                                                })()}`}
                                                                                            >
                                                                                                <Star />
                                                                                                <p className={`whitespace-nowrap text-xs
                                                                                        ${(() => {
                                                                                                        if (school['parent_rating'] >= 4) {
                                                                                                            return 'text-white'
                                                                                                        } else if (school['parent_rating'] === 3) {
                                                                                                            return 'text-white'
                                                                                                        } else if (school['parent_rating'] === null) {
                                                                                                            return 'text-white'
                                                                                                        } else if (school['parent_rating'] < 3) {
                                                                                                            return 'text-white'
                                                                                                        }
                                                                                                    })()}`}
                                                                                                >
                                                                                                    {school['parent_rating'] === null ? 'N/A' : `${school['parent_rating']}/5`}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    accordionContent={
                                                                                        <div className='flex flex-col gap-2'>
                                                                                            <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                                                <span className='font-medium'>Distance:</span>{school['distance_in_miles']} mi.
                                                                                            </p>
                                                                                            <p className='capitalize flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                                                <span className='font-medium'>Funding type:</span>{school['funding_type']}
                                                                                            </p>
                                                                                            <p className=' capitalize flex gap-2 rounded bg-blackA2 px-2'>
                                                                                                <span className='font-medium'>Levels: </span>
                                                                                                {school['education_levels'].map((level: any, l: any) => (
                                                                                                    <div className='font-light' key={l}>
                                                                                                        {level}
                                                                                                    </div>
                                                                                                ))}
                                                                                            </p>
                                                                                            <div className='rounded bg-blackA2 px-2'>
                                                                                                <span className='font-medium'>Grades:</span> {school.grades[0]} - {school.grades[(school.grades).length - 1]}
                                                                                            </div>
                                                                                            <p className='capitalize flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                                                <span className='font-medium'>Student count:</span>{(school['student_count']).toLocaleString()}
                                                                                            </p>
                                                                                        </div>
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ))}

                                                                </div>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Tab>
                                                <Tab className="text-white" key="values" title="Values" onClick={() => setIsChartViewHistory(true)}>
                                                    <Card>
                                                        <CardBody>
                                                            <div className='mb-5 w-[50%] md:w-[70%]'>
                                                                <h2 className='font-semibold text-xl md:text-3xl text-primary '>
                                                                    {isChartViewHistory ? 'History' : isChartViewForecast ? 'Forecast' : ''}
                                                                </h2>
                                                                <p className='text-xs text-slate10 font-medium'>For {streetAddress}</p>
                                                            </div>
                                                            <NextTabs
                                                                tabOneTitle={'Historic'}
                                                                tabOneClick={handleChartViewHistory}
                                                                tabOneContent=
                                                                {
                                                                    propertyDetails.estimates['historical_values'][0].estimates.length > 0 &&
                                                                    (<Line
                                                                        className=' w-full'
                                                                        height={undefined}
                                                                        data={lineChartData}
                                                                        options={lineChartOptions}
                                                                    />
                                                                    )
                                                                }
                                                                tabTwoTitle={'Forecasts'}
                                                                tabTwoClick={handleChartViewForecast}
                                                                tabTwoContent={
                                                                    propertyDetails.estimates['historical_values'][0].estimates.length > 0 &&
                                                                    (<Line
                                                                        className=' w-full'
                                                                        height={undefined}
                                                                        data={lineChartData}
                                                                        options={lineChartOptions}
                                                                    />
                                                                    )
                                                                }
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Tab>
                                                <Tab className="text-white" key="assessments" title="Assessments">
                                                    <Card>
                                                        <CardBody>
                                                            <div className='flex items-center justify-between w-full p-2 mb-5'>
                                                                <div className=''>
                                                                    <h2 className='font-semibold text-xl md:text-3xl text-blue9'>
                                                                        Tax assessments
                                                                    </h2>
                                                                    <p className='text-xs text-slate10 font-medium'>For {streetAddress}</p>
                                                                </div>
                                                                <div className=''>
                                                                    {propertyDetails['tax_history'].map((taxHistory: any, index: any) => {
                                                                        const { assessment, year } = taxHistory;
                                                                        if (assessment.building === null) {
                                                                            return (
                                                                                <div className='flex items-center gap-1 w-fit rounded-lg px-2 py-0.5 bg-red9/80 text-white text-[10px]' key={index}>
                                                                                    <Cancel />
                                                                                    <span className='font-medium whitespace-nowrap'>{`No data for ${year}`}</span>
                                                                                </div>
                                                                            );
                                                                        } else if (assessment.land === null) {
                                                                            return (
                                                                                <div className='flex items-center gap-1 w-fit rounded-lg px-2 py-0.5 bg-blue9/80 text-white text-[10px]' key={index}>
                                                                                    <Cancel />
                                                                                    <span className='font-medium'>{`No data for ${year}`}</span>
                                                                                </div>
                                                                            );
                                                                        }
                                                                    })}
                                                                </div>
                                                            </div>
                                                            <div className='w-full'>
                                                                {
                                                                    propertyDetails['tax_history'].length > 0 && (
                                                                        <Line
                                                                            className=' w-full'
                                                                            height={undefined}
                                                                            data={taxLineChartData}
                                                                            options={taxLineChartOptions}
                                                                        />
                                                                    )
                                                                }
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Tab>
                                            </Tabs>
                                        )}
                                    </div>

                                    {/* Similar homes section */}
                                    <div>
                                        <div className='mb-2'>
                                            <Seperator
                                                text={`Similar homes for sale`}
                                            />
                                        </div>
                                        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 w-full mt-5'>
                                            {similarHomesArray.length > 1 &&
                                                (similarHomesArray.map((home, i) => (
                                                    <div
                                                        className='text-[12px] rounded shadow-blackA9 shadow-[0px_4px_7px] hover:cursor-pointer hover:opacity-80'
                                                        key={i}
                                                    >
                                                        <Image
                                                            className='w-full h-[150px] rounded-tl rounded-tr object-cover'
                                                            src={home['primary_photo'].href}
                                                            alt={''}
                                                            width={300}
                                                            height={300}
                                                        />
                                                        <div className='flex flex-col gap-2 p-2'>
                                                            <caption className='w-full font-medium'>
                                                                {`${home.location.address.line}`}
                                                            </caption>
                                                            <div className='flex justify-between gap-2'>
                                                                <p className='font-semibold text-blue9'>
                                                                    {usdFormatter.format(home['list_price'])}
                                                                </p>
                                                                <div className='flex gap-2'>
                                                                    <p className=''>
                                                                        {home.description.beds} beds
                                                                    </p>
                                                                    <div className='h-full w-[1px] bg-blue9' />
                                                                    <p className=''>
                                                                        {home.description.baths} baths
                                                                    </p>
                                                                    <div className='h-full w-[1px] bg-blue9' />
                                                                    <p className=''>
                                                                        {(home.description.sqft).toLocaleString()} sqft.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )))}
                                        </div>
                                    </div>
                                </>
                            }
                        />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default PropertyCard;