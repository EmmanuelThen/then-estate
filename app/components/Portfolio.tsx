import React, { useState } from 'react'
import TrendingUpArrow from './svg/TrendingUpArrow'
import * as Accordion from '@radix-ui/react-accordion';
import AccordionDemo from '../ui/AccordionDemo';
import Watchlist from './svg/Watchlist';
import { usePortfolioContext } from '../context/PortfolioContext';


type Props = {}

const states = [
    { name: "Alabama", abbreviation: "AL" },
    { name: "Alaska", abbreviation: "AK" },
    { name: "Arizona", abbreviation: "AZ" },
    { name: "Arkansas", abbreviation: "AR" },
    { name: "California", abbreviation: "CA" },
    { name: "Colorado", abbreviation: "CO" },
    { name: "Connecticut", abbreviation: "CT" },
    { name: "Delaware", abbreviation: "DE" },
    { name: "Florida", abbreviation: "FL" },
    { name: "Georgia", abbreviation: "GA" },
    { name: "Hawaii", abbreviation: "HI" },
    { name: "Idaho", abbreviation: "ID" },
    { name: "Illinois", abbreviation: "IL" },
    { name: "Indiana", abbreviation: "IN" },
    { name: "Iowa", abbreviation: "IA" },
    { name: "Kansas", abbreviation: "KS" },
    { name: "Kentucky", abbreviation: "KY" },
    { name: "Louisiana", abbreviation: "LA" },
    { name: "Maine", abbreviation: "ME" },
    { name: "Maryland", abbreviation: "MD" },
    { name: "Massachusetts", abbreviation: "MA" },
    { name: "Michigan", abbreviation: "MI" },
    { name: "Minnesota", abbreviation: "MN" },
    { name: "Mississippi", abbreviation: "MS" },
    { name: "Missouri", abbreviation: "MO" },
    { name: "Montana", abbreviation: "MT" },
    { name: "Nebraska", abbreviation: "NE" },
    { name: "Nevada", abbreviation: "NV" },
    { name: "New Hampshire", abbreviation: "NH" },
    { name: "New Jersey", abbreviation: "NJ" },
    { name: "New Mexico", abbreviation: "NM" },
    { name: "New York", abbreviation: "NY" },
    { name: "North Carolina", abbreviation: "NC" },
    { name: "North Dakota", abbreviation: "ND" },
    { name: "Ohio", abbreviation: "OH" },
    { name: "Oklahoma", abbreviation: "OK" },
    { name: "Oregon", abbreviation: "OR" },
    { name: "Pennsylvania", abbreviation: "PA" },
    { name: "Rhode Island", abbreviation: "RI" },
    { name: "South Carolina", abbreviation: "SC" },
    { name: "South Dakota", abbreviation: "SD" },
    { name: "Tennessee", abbreviation: "TN" },
    { name: "Texas", abbreviation: "TX" },
    { name: "Utah", abbreviation: "UT" },
    { name: "Vermont", abbreviation: "VT" },
    { name: "Virginia", abbreviation: "VA" },
    { name: "Washington", abbreviation: "WA" },
    { name: "West Virginia", abbreviation: "WV" },
    { name: "Wisconsin", abbreviation: "WI" },
    { name: "Wyoming", abbreviation: "WY" }
];

const Portfolio = (props: Props) => {
    const [propertyHoldingsArray, setPropertyHoldingsArray] = useState([]);
    const { addToPortfolio, addToWatchlist, addToTotalValue, totalValue, portfolioHoldings, watchlist } = usePortfolioContext();


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

    return (
        <div className='flex justify-between w-full'>
            {/* Heading */}
            <div className='flex flex-col gap-2 w-full mt-20'>
                <h1 className='flex justify-start font-medium tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                    Holdings
                </h1>
                {/* Dollar amount of holdings */}
                <div className='flex flex-col'>
                    <h2 className='text-[45px]'>
                        {totalValue.length > 0 ?
                            (
                                <span>
                                    {totalValue.reduce((acc, value) => acc + value)}
                                </span>
                            )
                            :
                            (
                                <div>
                                    no value
                                </div>
                            )
                        }
                    </h2>
                    {/* Percentage change and dollar amount change */}
                    <div className='flex items-center gap-2'>
                        <TrendingUpArrow
                            stroke={'rgb(34 197 94)'}
                        />
                        <p className='font-light text-sm text-green-500'>
                            $21.06
                        </p>
                        <p className='font-light text-sm text-green-500'>
                            (0.35%)
                        </p>
                        <p className='text-xs'>
                            Today
                        </p>
                        {/* to clear localstorage if needed */}
                        <button
                            className='bg-red-500 text-white rounded p-2'
                            onClick={() => localStorage.clear()}
                        >
                            Clear local storage
                        </button>
                    </div>
                    <div className='flex gap-5 w-full'>
                        <div className='w-[70%]'>
                            {portfolioHoldings.length > 0 ? (
                                portfolioHoldings.map((holding, i) => (
                                    <AccordionDemo
                                        key={i}
                                        accordionTrigger={`${holding.state}, ${holding['state_code']}`}
                                        accordionContent={holding.address}
                                    />
                                ))
                            ) : (
                                <div>
                                    no holdings
                                </div>
                            )}
                        </div>
                        {/* Watchlist */}
                        <aside className='border-l-[0.8px] border-slate6 w-[30%]'>
                            <div className='flex items-center w-full justify-between'>
                                <h1 className='flex justify-start font-medium tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11 px-3'>
                                    Watchlist
                                </h1>
                                <div>
                                    <Watchlist />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Portfolio