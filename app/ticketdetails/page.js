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
            <div className="header details_header">
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
                        Seat location
                    </div>

                    <div className="ticket_details_info">
                        Sec 111/13/3-5
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Coldplay:Music of the spheres world Tour 2025
                    </div>

                    <div className="ticket_details_info">
                        Mon, 8 Sep, 17:00
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Entry Info
                    </div>

                    <div className="ticket_details_info">
                        UPPER LEVEL
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Ticket Info
                    </div>

                    <div className="ticket_details_info">
                        Coldplay:Music of the spheres world Tour 2025
                        Wembley Stadium, London GB.  Mon, 8 Sep 2025, 17:00

                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Barcode Number

                    </div>

                    <div className="ticket_details_info">
                        267658050953463369c
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Wembley Stadium

                    </div>

                    <div className="ticket_details_info">
                        London, GB
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Order Number

                    </div>

                    <div className="ticket_details_info">
                        9-48377/WDD
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Ticket type

                    </div>

                    <div className="ticket_details_info">
                        Reserved Seated Tickets
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Purchase date

                    </div>


                    <div className="ticket_details_info">
                        Tue, Oct 1 2024 - 11:44PM
                    </div>
                </div>

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Ticket Price

                    </div>


                    <div className="ticket_details_info flexed">
                        <div className="ticket_details_info_flexed right">
                            Reserved Seated Tickets x3 :
                        </div>

                        <div className="ticket_details_info_flexed left">
                            £247.25
                        </div>

                    </div>

                    <div className="ticket_details_info flexed">
                        <div className="ticket_details_info_flexed right">
                            GRAND TOTAL:
                        </div>

                        <div className="ticket_details_info_flexed left">
                            £741.75
                        </div>

                    </div>

                </div>

                {/* terms */}

                <hr className="details_hr" />

                <div className="ticket-detail">
                    <div className="ticket_details_titles">
                        Terms & Conditions

                    </div>


                    <div className="ticket_details_info">

                        Take care of your ticket, as it cannot be replaced
                        if lost, stolen or destroyed, and is valid only for event
                        and seat printed on ticket. This ticket is a revocable license
                        to attend the event listed on the front of the ticket and is
                        subject
                        to the full terms found at <a className="details_link" href="www.ticketmaster.com">www.ticketmaster.com</a>. Such
                        license may be revoked without refund for noncompliance
                        with terms. Unlawful sale or attempted sale prohibited.

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ticketdetails;
