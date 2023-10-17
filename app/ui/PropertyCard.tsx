import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import * as Tabs from '@radix-ui/react-tabs'
import Button from './Button';
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
    lastSoldPrice: string
    openHouse: any
    foreclosure: any
    listingID: any
    // switch tab on property car dpop up



}

const PropertyCard = ({
    imageSrc,
    beds,
    baths,
    squareFeet,
    streetAddress,
    cityStateZip,
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
}: Props) => {

    const [imageIndex, setImageIndex] = useState<any>(0);
    // const [imageList, setImageList] = useState<any>([]);
    const [propertyImages, setPropertyImages] = useState<any>([])
    const [propertyDetails, setPropertyDetails] = useState<any>({})
    // For chart historic and forecast values
    const [isChartViewHistory, setIsChartViewHistory] = useState<any>(false);
    const [isChartViewForecast, setIsChartViewForecast] = useState<any>(false);

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
                console.log(propertyImages)
                // console.log(propertyID)
            } else {
                console.log('No property image list')
            }
            // setImageList(propertyImages)
        } catch (error) {
            console.error(error);
        }
    }

    // need to fix button logic, everything else is working to show all property images
    const showPreviousImage = () => {
        setImageIndex((prevIndex: any) => {
            const newIndex = prevIndex - 1;
            return newIndex >= 0 ? newIndex : prevIndex;
        });
    };

    const showNextImage = () => {
        setImageIndex((prevIndex: any) => {
            const newIndex = prevIndex + 1;
            return newIndex < propertyImages.length ? newIndex : prevIndex;
        });
    };

    // For high quality images, jpg were giving low quality
    const customLoader = () => {
        return `${imageSrc.replace('.jpg', `-w${width}_h${height}_x2.webp?w=${width}&q=75`)}`;
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
        if (num >= 1000000) {
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

    // FOr different chart views
    const handleChartViewHistory = () => {
        setIsChartViewHistory(true)
        setIsChartViewForecast(false);

    }
    
    const handleChartViewForecast = () => {
        setIsChartViewForecast(true);
        setIsChartViewHistory(false)

    }


    
    // Line chart data
    const lineChartData = {
        labels: isChartViewHistory
            ? (propertyDetails.estimates['historical_values'][0].estimates).map((estimate: any) => new Date(estimate.date).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
            })).reverse()
            : (isChartViewForecast
                ? (propertyDetails.estimates['forecast_values'][0].estimates).map((estimate: any) => new Date(estimate.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                })).reverse()
                : []
            ),
        datasets: [
            {
                label: '',
                data: isChartViewHistory
                    ? (propertyDetails.estimates['historical_values'][0].estimates).map((estimate: any) => numberFormatter(estimate.estimate)).reverse()
                    : (isChartViewForecast
                        ? (propertyDetails.estimates['forecast_values'][0].estimates).map((estimate: any) => numberFormatter(estimate.estimate)).reverse()
                        : []
                    ),
                // Point color
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                // Line color
                borderColor: 'rgb(0 144 255)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointRadius: 0,
            }
        ],
    };


    {/** Options for our line chart */ }
    const lineChartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Thenstimate history for ${streetAddress}`,
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
                backgroundColor: '#0084e6a1',
            }
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

            },
        },
        elements: {
            point: {
                radius: 1,
            },
        },
    };

    return (
        <Dialog.Root >
            <div className='flex flex-col rounded shadow-blackA9 shadow-[0_4px_7px]'>
                <div className={`h-[${height}px] w-[${width}px] transition duration-150 ease-in-out lg:hover:opacity-80 inline-flex  items-center justify-center font-medium leading-none {shadow-[0_2px_10px]} focus:outline-none`}>
                    {/* Property cover image */}
                    <div className={`h-[${height}px] w-[${width}px] relative `}>
                        {/* New listing badge */}
                        <div>
                            <div className={newListing ? 'absolute flex gap-1 rounded-full bg-blueA8 w-fit top-2 left-2 px-2 py-0.5 shadow-blackA9 shadow-[0px_4px_7px]' : 'hidden'}>
                                <Sparkles />
                                <p className='text-xs font-semibold text-white'>New listing</p>
                            </div>
                        </div>
                        <div>
                            <div className={foreclosure ? 'absolute flex gap-1 rounded-full bg-red9/80 w-fit top-2 left-2 px-2 py-0.5 shadow-blackA9 shadow-[0px_4px_7px]' : 'hidden'}>
                                <Cancel />
                                <p className='text-xs font-semibold text-white'>Foreclosure</p>
                            </div>
                        </div>
                        <Image
                            className={`h-[${height}px] w-[${width}px] object-cover rounded-t `}
                            alt='property-image'
                            loader={customLoader}
                            src={imageSrc}
                            width={width}
                            height={height}
                        />
                        {/* Price */}
                    </div>
                </div>
                {/* Property info and button div */}
                <div className='flex justify-between p-4 w-full'>
                    <div className=' w-[70%]'>
                        <div className="flex flex-col gap-2 w-full ">
                            <div className="text-sm md:text-md font-medium whitespace-nowrap">
                                {streetAddress}
                            </div>
                            <div className="text-sm md:text-md text-slate10">
                                {cityStateZip}
                            </div>

                            <div className='flex gap-1 text-lg md:text-xl font-bold text-mint11'>
                                <p>{price}</p>
                                <div className={priceReduction > 0 ? 'mb-5 flex gap-1 items-center' : 'hidden'}>
                                    <Warning />
                                    <p className='text-xs text-red9 font-light'>Price reduction</p>
                                </div>
                            </div>
                            <Separator.Root className="data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mt-[15px]" />
                            <div className="flex h-5 items-center">
                                <div className="text-sm md:text-md leading-5">{beds}</div>
                                <Separator.Root
                                    className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                    decorative
                                    orientation="vertical"
                                />
                                <div className="text-sm md:text-md leading-5">{baths}</div>
                                <Separator.Root
                                    className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                    decorative
                                    orientation="vertical"
                                />
                                <div className="text-sm md:text-md leading-5">{squareFeet}</div>

                            </div>
                        </div>
                    </div>
                    <div className=''>
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
                            <p className='text-xs'>{status}</p>
                        </div>
                    </div>

                </div>
                {/* Add to portfolio button and more info button */}
                <div className='{border border-red-500} flex items-center justify-between w-full mb-4 px-4'>
                    <div className='flex gap-5 w-[70%]'>
                        <Tooltips
                            button={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="text-mint11 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            }
                            tooltipContent={`Add to watchlist`}
                        />
                        <Tooltips
                            button={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="text-mint11 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                            }
                            tooltipContent={`Add to portfolio`}
                        />
                    </div>
                    <Dialog.Trigger className='w-[30%] ' >
                        <ActionButton
                            text={`More info`}
                            bgColor={'bg-mint11 w-full'}
                            onClick={getPropertyImages}
                        />
                    </Dialog.Trigger>
                </div>
            </div>





            {/* Popup content */}
            <Dialog.Portal>
                <Dialog.Overlay className="z-[999] bg-blackA5 backdrop-blur-md data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content id='dark-mode' className="z-[9999] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[95vh] w-[95vw] max-w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-md p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Close asChild>
                        <button
                            className="transition duration-150 ease-in-out hover:scale-125 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                            aria-label="Close"
                        >
                            <Xmark />
                        </button>
                    </Dialog.Close>
                    {/* Full container */}
                    <div className='md:flex w-full'>
                        {/* Property image */}
                        <div className='relative md:w-[50%]'>
                            <div className={newListing ? 'absolute flex gap-1 rounded-full bg-blueA8 w-fit top-2 left-2 px-2 py-0.5 shadow-blackA9 shadow-[0px_4px_7px]' : 'hidden'}>
                                <Sparkles />
                                <p className='text-xs font-semibold text-white'>New listing</p>
                            </div>
                            {/* All property images */}
                            {propertyImages.length > 0 && (

                                <Image
                                    key={propertyID}
                                    className={`h-[${height}px] w-[${width}px] object-cover`}
                                    alt={`Image ${imageIndex + 1}`}
                                    loader={customLoader}
                                    src={propertyImages[imageIndex].href}
                                    width={width}
                                    height={height}
                                />
                            )}
                            {/* Prev image and next image buttons */}
                            <div className='z-[9999] absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 flex justify-between w-full px-2'>
                                <button
                                    onClick={showPreviousImage}
                                    disabled={imageIndex === 0}
                                    className='z-[9999] rounded-full p-2 bg-blackA9 hover:bg-blackA12 hover:cursor-pointer shadow-blackA9 shadow-[0px_4px_7px]'
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    onClick={showNextImage}
                                    disabled={imageIndex === propertyImages.length - 1}
                                    className='z-[9999] rounded-full p-2 bg-blackA9 hover:bg-blackA12 hover:cursor-pointer shadow-blackA9 shadow-[0px_4px_7px]'
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                            {/* Under photo section */}
                            <div className='flex flex-col gap-5'>
                                {/* Photo count */}
                                <div className='flex text-xs justify-between'>
                                    <p>Photo count: {photoCount}</p>
                                    <p>Property ID: {propertyID}</p>
                                    <p>Listing ID: {listingID}</p>
                                </div>

                                <div className='text-sm'>
                                    {/* Details */}
                                    <ul className='flex flex-col gap-2 text-sm mb-5'>
                                        <li className={newConstruction ? 'block' : 'hidden'}>
                                            <p className='font-medium text-yellow-500'>
                                                New construction
                                            </p>
                                        </li>
                                        <li className='rounded bg-blackA2 px-2'>
                                            <p className='flex items-center gap-2'>
                                                <Bed />
                                                <span className='font-medium'>Year built:</span>
                                                <span className='font-light'>
                                                    {propertyDetails.description && (
                                                        propertyDetails.description['year_built']
                                                    )}
                                                </span>
                                            </p>
                                        </li>
                                        <li className='rounded bg-blackA2 px-2'>
                                            <p className='flex items-center gap-2'>
                                                <Calendar />
                                                <span className='font-medium'>Date listed:</span>
                                                <span className='font-light'>{listDate.toLocaleDateString("en-US", options)}</span>
                                            </p>
                                        </li>
                                        <li className='rounded bg-blackA2 px-2'>
                                            <p className='flex items-center gap-2'>
                                                <Bath />
                                                <span className='font-medium'>Full baths:</span>
                                                <span className='font-light'>{fullBaths}</span>
                                            </p>
                                        </li>
                                        <li className='rounded bg-blackA2 px-2'>
                                            <p className='flex items-center gap-2'>
                                                <Bath />
                                                <span className='font-medium'>Half baths:</span>
                                                <span className='font-light'>{halfBaths}</span>
                                            </p>
                                        </li>
                                        <li className='rounded bg-blackA2 px-2'>
                                            <p className='flex items-center gap-2'>
                                                <Calendar />
                                                <span className='font-medium'>Last sold date:</span>
                                                <span className='font-light'>
                                                    {lastSoldDate === 'No data available' ? 'No data available'
                                                        :
                                                        new Date(lastSoldDate).toLocaleString('en-US', {
                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    }
                                                </span>
                                            </p>
                                        </li>
                                        <li className='rounded bg-blackA2 px-2'>
                                            <p className='flex items-center gap-2'>
                                                <Dollar />
                                                <span className='font-medium'>Last sold price:</span>
                                                <span className='font-light'>{lastSoldPrice}</span>
                                            </p>
                                        </li>
                                    </ul>

                                    {/* Seller info */}
                                    <div>
                                        <p className='capitalize'>
                                            <span className='text-medium text-slate10'>{advertiserType}:</span> {agent === null ? 'No data available' : agent}
                                        </p>
                                        <p className=''>
                                            <span className='text-medium text-slate10'>Email:</span> {agentEmail}
                                        </p>
                                    </div>
                                </div>
                                {/* Contact button */}
                                <form onSubmit={handleContactAgent} >
                                    <button className={
                                        agentEmail === 'No data available' ?
                                            'bg-slate10 hover:cursor-not-allowed  z-50 inline-flex font-medium items-center justify-center rounded-md h-[35px] px-[15px] leading-none tracking-wide transition duration-150 ease-in-out text-white  text-sm'
                                            :
                                            `bg-mint9/80 border border-mint11 text-mint11 hover:bg-mint6/80 z-50 inline-flex font-medium items-center justify-center rounded-md h-[35px] px-[15px] leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out  text-sm`
                                    }
                                    >
                                        {agentEmail === 'No data available' ? `Unable to contact ${advertiserType}` : `Contact ${agent}`}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className='md:ml-5 md:w-[50%]'>
                            <div className="flex flex-col gap-2.5 w-full">
                                <div className="text-sm md:text-md font-medium whitespace-nowrap">
                                    {streetAddress}
                                </div>
                                <div className="text-sm md:text-md text-slate10">
                                    {cityStateZip}
                                </div>

                                <div className='flex gap-1 text-lg md:text-xl font-semibold text-mint11'>
                                    <p className='text-[36px]'>{price}</p>
                                    <div className={priceReduction > 0 ? 'mb-5 flex gap-1 items-center' : 'hidden'}>
                                        <Warning />
                                        <p className='text-xs text-red9 font-light'>- {usdFormatter.format(priceReduction)}</p>
                                    </div>
                                </div>
                                {/* Status badge */}
                                <div className='flex gap-2'>
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
                                        <p className='text-xs'>{status}</p>
                                    </div>
                                    <div className={propertyDetails['days_on_market'] === null ? `hidden` : `flex items-center gap-2 w-fit rounded-full px-2 py-0.5 bg-slate10/30`}>
                                        {propertyDetails['days_on_market']}
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xs text-mint11 capitalize'>{type}</p>
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-slate10'>{branding}</p>
                                </div>
                                <Separator.Root className="data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px " />
                                <div className="flex h-5 items-center">
                                    <div className="text-sm md:text-md leading-5">{beds}</div>
                                    <Separator.Root
                                        className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                        decorative
                                        orientation="vertical"
                                    />
                                    <div className="text-sm md:text-md leading-5">{baths}</div>
                                    <Separator.Root
                                        className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                        decorative
                                        orientation="vertical"
                                    />
                                    <div className="text-sm md:text-md leading-5">{squareFeet}</div>
                                </div>
                                {/* Price estimates */}
                                <div>
                                    {propertyDetails.estimates && status === 'For sale' && (
                                        <div className='flex items-center gap-1 text-sm'>
                                            <p className='font-medium'>
                                                Thenstimate:
                                            </p>
                                            <p className='text-blue9 font-semibold'>
                                                {usdFormatter.format(propertyDetails.estimates['current_values'][0]['estimate_low'])}
                                            </p>
                                            <span className='text-blue9'>-</span>
                                            <p className='text-blue9 font-semibold'>
                                                {usdFormatter.format(propertyDetails.estimates['current_values'][0]['estimate_high'])}
                                            </p>
                                            {/* estimate date */}
                                            <div className='flex items-center gap-1 text-[8px] mb-5'>
                                                <Calendar />
                                                <p className=''>
                                                    <span>As of </span>
                                                    {new Date(propertyDetails.estimates['current_values'][0].date).toLocaleString('en-US', {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className={openHouse === null ? 'hidden' : 'block'}>
                                    <div className='flex gap-2 text-xs'>
                                        <span className='text-xs font-medium text-green-500'>Open house:</span>
                                        {openHouse === null ? '' :
                                            openHouse.map((dates: any, i: any) => (
                                                <p key={i}>
                                                    {formatDate(dates['start_date'])} {dates['time_zone']} - {formatDate(dates['end_date'])} {dates['time_zone']}
                                                </p>
                                            ))}
                                    </div>
                                </div>

                                {/* In depth details */}
                                <div className=''>

                                    {propertyDetails.mortgage && (
                                        <Tabs.Root
                                            className="border rounded border-blackA5 max-h-[400px] shadow-blackA9 shadow-[0px_4px_7px]"
                                            defaultValue="tab1"
                                        >
                                            {/* Navbar */}
                                            <Tabs.List className="max-h-[35px] border-b items-center shrink-0 flex z-[999]" aria-label="Nav bar">
                                                <Tabs.Trigger
                                                    className="hover:cursor-pointer px-5 h-[35px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                                                    value="tab1"
                                                >
                                                    Mortgage
                                                </Tabs.Trigger>
                                                <Tabs.Trigger
                                                    className="hover:cursor-pointer px-5 h-[35px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                                                    value="tab2"
                                                >
                                                    Details
                                                </Tabs.Trigger>
                                                <Tabs.Trigger
                                                    className="hover:cursor-pointer px-5 h-[35px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                                                    value="tab3"
                                                >
                                                    Charts
                                                </Tabs.Trigger>
                                                <Tabs.Trigger
                                                    className="whitespace-nowrap hover:cursor-pointer px-5 h-[35px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                                                    value="tab4"
                                                >
                                                    Investment analysis
                                                </Tabs.Trigger>
                                            </Tabs.List>
                                            {/* Home Content */}
                                            <Tabs.Content
                                                className="flex flex-col gap-5 transition duration-150 ease-in-out max-h-[350px] overflow-y-scroll p-2"
                                                value="tab1"
                                            >
                                                <div className='flex flex-col gap-2 text-sm'>
                                                    <Seperator text={'Mortgage details'} />
                                                    <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                        <span className='font-medium'>Property tax rate:</span>{(propertyDetails.mortgage['property_tax_rate'] * 100).toFixed(2)}%
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
                                                        <span className='font-medium'>Down payment:</span>{usdFormatter.format(propertyDetails.mortgage.estimate['down_payment'])}
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
                                                            Average Mortgage rates for {propertyDetails.location.address.city}, {propertyDetails.location.address['state_code']}
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
                                            </Tabs.Content>

                                            <Tabs.Content
                                                className="text-sm transition duration-150 ease-in-out flex flex-col p-2 max-h-[350px] overflow-y-scroll"
                                                value="tab2"
                                            >
                                                {/* Descriptions */}
                                                <div className='flex flex-col gap-2'>
                                                    <Seperator text={'Home description'} />
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Bathrooms:</span>{propertyDetails.description.baths}
                                                        </p>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Heating:</span>{propertyDetails.description.heating === null ? 'No data available' : propertyDetails.description.heating}
                                                        </p>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Cooling:</span>{propertyDetails.description.cooling === null ? 'No data available' : propertyDetails.description.cooling}
                                                        </p>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Bedrooms:</span> {propertyDetails.description.beds}
                                                        </p>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Garage:</span>
                                                            {(() => {
                                                                if (propertyDetails.description.garage === null) {
                                                                    return 'No data available'
                                                                } else if (propertyDetails.description.garage === 1) {
                                                                    return `${propertyDetails.description.garage} Garage space`
                                                                } else if (propertyDetails.description.garage > 1) {
                                                                    return `${propertyDetails.description.garage} Garage spaces`
                                                                }
                                                            })()}
                                                        </p>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Pool:</span>{propertyDetails.description.pool === null ? 'No data available' : propertyDetails.description.pool}
                                                        </p>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Lot sqft:</span>{propertyDetails.description['lot_sqft'] === null ? 'No data available' : propertyDetails.description['lot_sqft'].toLocaleString()}
                                                        </p>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Stories:</span>{propertyDetails.description.stories === null ? 'No data available' : propertyDetails.description.stories}
                                                        </p>
                                                        {/* HOA */}
                                                        <div className='rounded bg-blackA2 px-2 font-light'>
                                                            <p className='flex items-center gap-2 '>
                                                                <span className='font-medium'>HOA Fee:</span>{usdFormatter.format(propertyDetails.hoa.fee)}
                                                            </p>
                                                        </div>
                                                        {/* Price per sqft */}
                                                        <div>
                                                            <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                <span className='font-medium'>Price per sqft:</span>
                                                                {usdFormatter.format(propertyDetails['price_per_sqft'])}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* Descriptive text */}
                                                    <p className='flex  gap-2 rounded bg-blackA2 px-2 font-light'>
                                                        <span className='font-medium'>Text:</span> {propertyDetails.description.text}
                                                    </p>
                                                    {/* Pet policy */}
                                                    <div className={status === 'For rent' ? 'block' : 'hidden'}>
                                                        <p className='flex items-center gap-2 rounded bg-blackA2 px-2 font-light'>
                                                            <span className='font-medium'>Pet policy:</span>{propertyDetails['pet_policy'] === null ? 'No data available' : propertyDetails['pet_policy']}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Assigned schools */}
                                                {/* <div>
                                                    <h1>School list</h1>
                                                    {propertyDetails['assigned_schools'].schools.map((school: any, k: any) => (
                                                        <div>
                                                            <h1>School:</h1>
                                                            <p>{school.district.name}</p>
                                                            <p>{school.district.id}</p>
                                                            <p>{school.district.phone === null ? 'No data available' : school.district.phone}</p>
                                                            <p>{school.district['student_count'] === null ? 'No data available' : school.district['student_count']}</p>
                                                            <p>{school.district.grades === null ? 'No data available' : school.district.grades}</p>
                                                        </div>
                                                    ))}
                                                </div> */}

                                                {/* Nearby schools */}
                                                <div className=''>
                                                    <Seperator text={'Nearby schools'} />
                                                    {propertyDetails['nearby_schools'].schools.map((school: any, l: any) => (
                                                        <div className='flex flex-col gap-2' key={l}>
                                                            <div className='flex items-center gap-2 font-light'>
                                                                {/* <span className='font-medium'>Name:</span>{school.name} */}
                                                                <AccordionDemo
                                                                    accordionTrigger={
                                                                        <div className='flex justify-between w-full'>
                                                                            <div className='flex items-center gap-2 mr-10'>
                                                                                <GraduationCap />
                                                                                <p className='whitespace-nowrap text-sm'>
                                                                                    {school.name}
                                                                                </p>
                                                                            </div>
                                                                            <div className={`whitespace-nowrap flex items-center gap-2 w-fit rounded-full px-2 py-0.5 mr-2 
                                                                            ${(() => {
                                                                                    if (school['parent_rating'] >= 4) {
                                                                                        return 'bg-green-500/10'
                                                                                    } else if (school['parent_rating'] === 3) {
                                                                                        return 'bg-yellow-500/10'
                                                                                    } else if (school['parent_rating'] === null) {
                                                                                        return 'bg-blackA5/10'
                                                                                    } else if (school['parent_rating'] < 3) {
                                                                                        return 'bg-red-500/10'
                                                                                    }
                                                                                })()}`}
                                                                            >
                                                                                <Star />
                                                                                <p className={`whitespace-nowrap text-xs 
                                                                                ${(() => {
                                                                                        if (school['parent_rating'] >= 4) {
                                                                                            return 'text-green-500'
                                                                                        } else if (school['parent_rating'] === 3) {
                                                                                            return 'text-yellow-500'
                                                                                        } else if (school['parent_rating'] === null) {
                                                                                            return 'text-blackA5'
                                                                                        } else if (school['parent_rating'] < 3) {
                                                                                            return 'text-red-500'
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
                                                                                <span className='font-medium'>Education levels: </span>
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
                                                {/* Flags */}
                                                <div>
                                                    <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                        <span className='font-medium'>Pending:</span>{propertyDetails.flags['is_pending'] === null ? 'No data available' : propertyDetails.flags['is_pending']}
                                                    </p>
                                                </div>

                                                {/* Tax history */}
                                                <div>
                                                    <div>
                                                        {propertyDetails['tax_history'].map((taxHistory: any, m: any) => (
                                                            <div key={m}>
                                                                <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                    <span className='font-medium'>Tax $ amount:</span>{taxHistory.tax}
                                                                </p>
                                                                <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                    <span className='font-medium'>Tax year:</span>{taxHistory.year}
                                                                </p>
                                                                {/* Assessment */}
                                                                <h1>Assessment:</h1>
                                                                <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                    <span className='font-medium'>Building:</span>{usdFormatter.format(taxHistory.assessment.building)}
                                                                </p>
                                                                <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                    <span className='font-medium'>Land:</span>{usdFormatter.format(taxHistory.assessment.land)}
                                                                </p>
                                                                <p className='flex items-center gap-2 font-light rounded bg-blackA2 px-2'>
                                                                    <span className='font-medium'>Total:</span>{usdFormatter.format(taxHistory.assessment.total)}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                            </Tabs.Content>

                                            <Tabs.Content
                                                className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow max-h-[350px] overflow-y-scroll p-2 rounded-b-md outline-none "
                                                value="tab3"
                                            >
                                                {/* History and Futurre prices */}
                                                <div>
                                                    <Tabs.Root
                                                        defaultValue='tabHistory'
                                                    >
                                                        <Tabs.List className='flex gap-2'>
                                                            <Tabs.Trigger
                                                                className="border border-blue9 rounded bg-slate4 hover:cursor-pointer px-5 h-[25px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                                                                value="tabHistory"
                                                                onClick={handleChartViewHistory}
                                                            >
                                                                History
                                                            </Tabs.Trigger>
                                                            <Tabs.Trigger
                                                                className="border border-blue9 rounded bg-slate4 hover:cursor-pointer px-5 h-[25px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                                                                value="tabForecast"
                                                                onClick={handleChartViewForecast}
                                                            >
                                                                Forecast
                                                            </Tabs.Trigger>
                                                        </Tabs.List>
                                                        <Tabs.Content
                                                            className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow max-h-[350px] overflow-y-scroll p-2 rounded-b-md outline-none "
                                                            value="tabHistory"
                                                        >
                                                            {
                                                                propertyDetails.estimates['historical_values'][0].estimates.length > 0 &&
                                                                (<Line data={lineChartData} options={lineChartOptions} />)
                                                            }
                                                        </Tabs.Content>
                                                        <Tabs.Content
                                                            className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow max-h-[350px] overflow-y-scroll p-2 rounded-b-md outline-none "
                                                            value="tabForecast"
                                                        >
                                                            {
                                                                propertyDetails.estimates['historical_values'][0].estimates.length > 0 &&
                                                                (<Line data={lineChartData} options={lineChartOptions} />)
                                                            }
                                                        </Tabs.Content>
                                                    </Tabs.Root>
                                                </div>

                                            </Tabs.Content>
                                            <Tabs.Content
                                                className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow max-h-[350px] overflow-y-scroll p-2 rounded-b-md outline-none "
                                                value="tab4"
                                            >

                                                tab 4 content
                                            </Tabs.Content>
                                        </Tabs.Root>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default PropertyCard;