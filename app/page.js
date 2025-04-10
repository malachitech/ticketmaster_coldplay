"use client";

import { useState } from "react";

import { FaXmark } from "react-icons/fa6";
import { BsQrCodeScan } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";


const settings = {
  dots: true, // Enable dots
  infinite: false, // Infinite loop
  speed: 500, // Transition speed in ms
  slidesToShow: 1.1, // Show part of the next slide
  responsive: [
    {
      breakpoint: 768, // For smaller screens
      settings: {
        slidesToShow: 1.1, // Adjust slide visibility
      },
    },
  ],
  slidesToScroll: 1, // Scroll one slide at a time
  centerMode: true, // Center current slide
  centerPadding: '0', // Remove extra padding
  arrows: false, // Hide arrows
};

const Modal = ({ isModalOpen, handleClose, handleTransferOpen, selected, handleCheckboxClick, selectedCount }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="modal-margin">
          <h2 className="modal-title">SELECT TICKETS TO TRANSFER</h2>
          <hr />
          <p className="modal-disclaimer">
            <span className="disclaimer-icon">
              <IoIosInformationCircle />
            </span>
            <span>Only transfer tickets to people you know and trust to ensure everyone stays safe and socially distanced.</span>
          </p>
          <div className="modal-seat-details">
            <p className="modal-seat-detail">SEC 111, Row 13</p>
            <p className="modal-seat-ticket">
              <span>
                <IoTicketSharp />
              </span>
              <span>3 tickets</span>
            </p>
          </div>
          <div className="checkbox-container-margin">
            <div className="checkbox-container">
              {["SEAT 3", "SEAT 4", "SEAT 5"].map((label, index) => (
                <div
                  key={index}
                  className="checkbox-box"
                  onClick={() => handleCheckboxClick(index)}
                >
                  <div className="checkbox-header">{label}</div>
                  <div className="checkbox-input-container">
                    <input
                      type="checkbox"
                      className={`checkbox-input ${selected[index] ? "selected" : ""}`}
                      checked={selected[index]}
                      onChange={() => handleCheckboxClick(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </div>
        </div>
        <div className="footer">
          <div className="checkbox-counter">{selectedCount} Selected</div>
          <button className="open-modal-form" onClick={handleTransferOpen}>
            TRANSFER TO &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const TransferModal = ({ isTransferModalOpen, handleTransferClose, selectedCount, selectedRange }) => {
  if (!isTransferModalOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleTransferClose}>
      <div className="modal slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="modal-margin">
          <div className="modal-title">
            <h2>TRANSFER TICKETS</h2>
          </div>
          <hr />
          <div className="transfer-modal-details">
            <p>{selectedCount} Tickets Selected</p>
          </div>
          <div className="form-seat-details">
            <div className="sec">
              <h3>SEC</h3>
              <p>111</p>
            </div>

            <div className="row">
              <h3>ROW</h3>
              <p>13</p>
            </div>

            <div className="seat">
              <h3>SEATS</h3>
              <p>{selectedRange}</p>
            </div>
          </div>
          <div className="transfer-modal-form">
            <form>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="First Name"
                  required
                  style={{ border: "1px solid black" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  style={{ border: "1px solid black" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email-phone">Email or Phone</label>
                <input
                  type="text"
                  id="email-phone"
                  name="emailPhone"
                  placeholder="Email or Phone"
                  required
                  style={{ border: "1px solid black" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  style={{ border: "1px solid black" }}
                ></textarea>
              </div>
            </form>
          </div>
          {/* <div className="transfer-modal-footer">
          <button className="close-modal-btn" onClick={handleTransferClose}>
            Cancel
          </button>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div> */}
        </div>

        <div className="footer">
          <div className="form-back-btn" onClick={handleTransferClose}>&lt; BACK</div>
          <button className="close-modal-btn" onClick={handleTransferClose}>
            Transfer {selectedCount} Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [selected, setSelected] = useState([false, false, false, false]);
  const getSelectedRange = () => {
    const selectedSeats = selected
      .map((isSelected, index) => (isSelected ? index + 3 : null))
      .filter((seat) => seat !== null);

    if (selectedSeats.length === 0) return "None";
    if (selectedSeats.length === 1) return `${selectedSeats[0]}`;
    if (selectedSeats.every((seat, i, arr) => i === 0 || seat === arr[i - 1] + 1)) {
      return `${selectedSeats[0]}-${selectedSeats[selectedSeats.length - 1]}`;
    }
    return selectedSeats.join(", ");
  };
  const handleCheckboxClick = (index) => {
    const updatedSelected = [...selected];
    updatedSelected[index] = !updatedSelected[index];
    setSelected(updatedSelected);
    setSelectedCount(updatedSelected.filter(Boolean).length);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleTransferClose = () => {
    setIsTransferModalOpen(false);
  };

  const handleTransferOpen = () => {
    setIsModalOpen(false);
    setIsTransferModalOpen(true);
  };

  return (
    <div>

      {/* header */}
      <div className="header">
        <div className="x">
          <FaXmark />
        </div>

        <div className="title-one">
          <h2>My Tickets</h2>
        </div>

        <div className="help">
          <h2>Help</h2>
        </div>
      </div>

      <div className="ticket-slider">


        {/* slider */}
        <Slider {...settings} style={{ paddingBottom: '0px' }}>
          {/* Slide 1 */}



          <div className="ticket">
            <div className="slide-head">
              <p>Standard Ticket</p>
            </div>

            <div className="seat-details">
              <div className="sec">
                <h3>SEC</h3>
                <p>111</p>
              </div>

              <div className="row">
                <h3>ROW</h3>
                <p>13</p>
              </div>

              <div className="seat">
                <h3>SEAT</h3>
                <p>3</p>
              </div>
            </div>

            <div className="event-details">
              <div>
                <p className="event-title">Coldplay: Music of the spheres world tour 2025</p>
                <p>Mon &#183; 8 Sep, 2025&#183; 17:00 &#183; GB Wembley Stadium, London</p>
              </div>
            </div>

            <div className="scan-barcode-container">
              <div className="scan-barcode">
                <p className="scan">
                  <span><BsQrCodeScan /></span> <span>View Barcode</span>
                </p>
              </div>

              <div className="barcode-ticket-details">
                <Link href="/ticketdetails">
                  <span>
                    Ticket Details
                  </span>
                </Link>

              </div>

            </div>

            <div className="ticket-verified">
              <img src="/ticket-verified.jpg" />
            </div>
          </div>


          {/* slide 2 */}

          <div className="ticket">
            <div className="slide-head">
              <p>Standard Ticket</p>
            </div>

            <div className="seat-details">
              <div className="sec">
                <h3>SEC</h3>
                <p>111</p>
              </div>

              <div className="row">
                <h3>ROW</h3>
                <p>13</p>
              </div>

              <div className="seat">
                <h3>SEAT</h3>
                <p>4</p>
              </div>
            </div>

            <div className="event-details">
              <div>
                <p className="event-title">Coldplay: Music of the spheres world tour 2025</p>
                <p>Fri &#183; 22 Aug &#183; 5:00 pm &#183; London, GB Wembley Stadium </p>
              </div>
            </div>

            <div className="scan-barcode-container">
              <div className="scan-barcode">
                <p className="scan">
                  <span><BsQrCodeScan /></span> <span>View Barcode</span>
                </p>
              </div>

              <div className="barcode-ticket-details">
                <Link href="/ticketdetails">
                  <span>
                    Ticket Details
                  </span>
                </Link>

              </div>

            </div>

            <div className="ticket-verified">
              <img src="/ticket-verified.jpg" />
            </div>
          </div>



          {/* slide 3 */}

          <div className="ticket">
            <div className="slide-head">
              <p>Standard Ticket</p>
            </div>

            <div className="seat-details">
              <div className="sec">
                <h3>SEC</h3>
                <p>111</p>
              </div>

              <div className="row">
                <h3>ROW</h3>
                <p>13</p>
              </div>

              <div className="seat">
                <h3>SEAT</h3>
                <p>5</p>
              </div>
            </div>

            <div className="event-details">
              <div>
                <p className="event-title">Coldplay: Music of the spheres world tour 2025</p>
                <p>Fri &#183; 22 Aug &#183; 5:00 pm &#183; London, GB Wembley Stadium </p>
              </div>
            </div>

            <div className="scan-barcode-container">
              <div className="scan-barcode">
                <p className="scan">
                  <span><BsQrCodeScan /></span> <span>View Barcode</span>
                </p>
              </div>

              <div className="barcode-ticket-details">
                <Link href="/ticketdetails">
                  <span>
                    Ticket Details
                  </span>
                </Link>

              </div>

            </div>

            <div className="ticket-verified">
              <img src="/ticket-verified.jpg" />
            </div>
          </div>





        </Slider>





        {/* actions */}
        <div className="actions-container">
          <div className="actions">
            <div className="action" onClick={() => setIsModalOpen(true)}>
              <p>Transfer</p>
            </div>

            <div className="action">
              <p>Sell</p>
            </div>
          </div>
        </div>


        <Modal
          isModalOpen={isModalOpen}
          handleClose={handleClose}
          handleTransferOpen={handleTransferOpen}
          selected={selected}
          handleCheckboxClick={handleCheckboxClick}
          selectedCount={selectedCount}
          selectedRange={getSelectedRange()}
        />
        <TransferModal
          isTransferModalOpen={isTransferModalOpen}
          handleTransferClose={handleTransferClose}
          selectedCount={selectedCount}
          selectedRange={getSelectedRange()}
        />
      </div>
    </div>
  );
};

export default Home;
