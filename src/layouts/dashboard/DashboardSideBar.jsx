import React from 'react'
import avatar from "../../assets/Avatar.png";
import barChart from "../../assets/bar-chart.svg";
import companyIcon from "../../assets/company_icon.svg";
import creditCardRefresh from "../../assets/credit-card-refresh.svg";
import fileCheck from "../../assets/file-check.svg";
import homeLine from "../../assets/home-line.svg";
import lifeBuoy from "../../assets/life-buoy-01.svg";
import logOutIcon from "../../assets/logout.svg";
import presentationIcon from "../../assets/presentation-chart.svg";
import tagIcon from "../../assets/tag.svg";

const DashboardSideBar = () => {
    return (
        <>
            <div class="h-screen flex bg-white">
                <aside class="flex flex-col items-center bg-gray-100 text-gray-700 shadow h-full">
                    <div class="h-10 flex items-center w-full mt-3 mb-6 mx-8">
                        <a class="mx-auto " href="#">
                            <img src={companyIcon}  />
                        </a>
                    </div>

                    <ul>
                        <li class="hover:bg-gray-200 rounded">
                            <a
                                href="."
                                class="mx-auto"
                            >
                                <img src={homeLine} className='p-3' />
                            </a>
                        </li>

                        <li class="hover:bg-gray-200 rounded">
                            <a
                                href="."
                                class="mx-auto"
                            >
                                <img src={barChart} className='p-3' />
                            </a>
                        </li>

                        <li class="hover:bg-gray-200 rounded">
                            <a
                                href="."
                                class="mx-auto"
                            >
                                <img src={presentationIcon} className='p-3' />
                            </a>
                        </li>

                        <li class="hover:bg-gray-200 rounded">
                            <a
                                href="."
                                class="mx-auto"
                            >
                                <img src={creditCardRefresh} className='p-3' />
                            </a>
                        </li>

                        <li class="hover:bg-gray-200 rounded">
                            <a
                                href="."
                                class="mx-auto"
                            >
                                <img src={fileCheck} className='p-3' />
                            </a>
                        </li>

                        <li class="hover:bg-gray-200 rounded">
                            <a
                                href="."
                                class="mx-auto"
                            >
                                <img src={tagIcon} className='p-3' />
                            </a>
                        </li>
                    </ul>

                    <div class="mt-auto h-16 flex justify-center items-center w-full">
                        <button
                            class="h-1mx-auto rounded hover:bg-gray-200 focus:outline-none"
                        >
                            <img src={logOutIcon} className='p-3' />
                        </button>
                    </div>
                </aside>
            </div></>
    )
}

export default DashboardSideBar