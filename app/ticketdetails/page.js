"use client";

import { useState } from "react";

import { FaXmark } from "react-icons/fa6";
import { BsQrCodeScan } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ticketdetails = () => {


    return (
        <div>

            {/* header */}
            <div className="header">
                <div className="x">
                    <FaXmark />
                </div>

                <div className="title-one">
                    <h2>Ticket Details</h2>
                </div>

                <div className="help">
                    <h2>Help</h2>
                </div>
            </div>

            <div className="ticket-details">

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Seat details
                    </div>

                    <div className="ticket_details_info">
                        Sec 111/13/3-5
                    </div>
                </div>

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Coldplay:Music of the spheres world Tour 2025
                    </div>

                    <div className="ticket_details_info">
                        Mon, 8 Sep, 17:00
                    </div>
                </div>

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Entry Info
                    </div>

                    <div className="ticket_details_info">
                        UPPER LEVEL
                    </div>
                </div>

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Ticket Info
                    </div>

                    <div className="ticket_details_info">
                        Coldplay:Music of the spheres world Tour 2025
                        Wembley Stadium, London.  Mon, 8 Sep 2025, 17:00

                    </div>
                </div>

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Barcode Number

                    </div>

                    <div className="ticket_details_info">
                        267658050953463369c
                    </div>
                </div>

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Order Number

                    </div>

                    <div className="ticket_details_info">
                        9-48377/WDD
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ticketdetails;
